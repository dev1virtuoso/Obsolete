"""
AI Mental detection/classification UI using Vertex AI (Gemini Model)
------------------------
Require install vertexai
!pip install vertexai
------------------------
Require install google-cloud-aiplatform
!pip install -U google-cloud-aiplatform "shapely<2" # workaround for the issue
------------------------
Require install streamlit for UI 
!pip install streamlit


"""

import streamlit as st  # import stremlit
import os
from dotenv import load_dotenv # load environment variable
import base64
# import vertexai
# from vertexai.generative_models import GenerativeModel, Part
# import vertexai.preview.generative_models as generative_models
import google.generativeai as genai
from PIL import Image
# import google.auth 
# google.auth.default()  # get google default credentials , when gcloud init completed


load_dotenv() # load environment variable


GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

def list_models():
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(m.name)

list_models()
# Gemini Model config , Setting 
generation_config = {
  "temperature": 0.55,
  "top_p": 1,
  "top_k": 1,
  "max_output_tokens": 2048,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]


# googleProjectID="gdg-vertex-ai-workshop-curl"
# location="us-central1"
# # vertex ai 
# vertexai.init(project=googleProjectID, location=location)

# gen ai 
geminiModel = "gemini-pro-vision"
# geminiVisionModel = "gemini-vision-1.0-pro-002"

model = genai.GenerativeModel(model_name=geminiModel,
                              generation_config=generation_config,
                              safety_settings=safety_settings)

def getGeminiResponse(input, image):
    if input !="":
        response = model.generate_content([image, input])
    else:
        response = model.generate_content(image)
    return response.text

## Initalizser out streamlit app
st.title("AI Mental Health Detection/Classification")
st.header("Gemini AI Vision Application")

input1 = st.text_input("Input Your Prompt: ", key="input1")

uploadFile = st.file_uploader("Upload Image", type=["jpg", "png", "jpeg"])
# print(uploadFile)
image= ""
if uploadFile is not None:
    image = Image.open(uploadFile)
    st.image(image, caption="Uploaded Image", use_column_width=True)

submit = st.button("Tell me about the image")
    

if submit:
    # imagePart = Part.from_image(uploadFile)
    # imagePart= Part.from_data(image, mime_type="image/png")
    # imagePart=  Part.from_image(image)
    response = getGeminiResponse(input1, image=image)
    st.subheader("AI Mental Bot response is")
    st.write(response)

