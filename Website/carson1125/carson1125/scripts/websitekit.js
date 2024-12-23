// By Dan Rovito(@danrovito)'s Gist: https://gist.github.com/danrovito/977bcb97c9c2dfd3398a
// By Andy Jarrett(@andyj)'s Gist: https://gist.github.com/andyj/7108917
// country codes(ISO 3166) and Dial codes.
// By Apple Account: https://appleid.apple.com/account
const countryList = [
    { countryCode2: "AF", countryCode: "AFG", dialCode: "93", label: "Afghanistan", name: "Afghanistan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AX", countryCode: "ALA", dialCode: "358", label: "Åland Islands", name: "Åland Islands", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AL", countryCode: "ALB", dialCode: "355", label: "Albania", name: "Albania", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "DZ", countryCode: "DZA", dialCode: "213", label: "Algeria", name: "Algeria", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 19 },
    { countryCode2: "AS", countryCode: "ASM", dialCode: "1", label: "American Samoa", name: "American Samoa", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AND", countryCode: "AD", dialCode: "376", label: "Andorra", name: "Andorra", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AO", countryCode: "AGO", dialCode: "214", label: "Angola", name: "Angola", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AIA", countryCode: "AI", dialCode: "1", label: "Anguilla", name: "Anguilla", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AQ", countryCode: "ATA", dialCode: "672", label: "Antarctica", name: "Antarctica", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AG", countryCode: "ATG", dialCode: "1", label: "Antigua And Barbuda", name: "Antigua And Barbuda", continent: "Antarctica", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AR", countryCode: "ARG", dialCode: "54", label: "Argentina", name: "Argentina", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AM", countryCode: "ARM", dialCode: "374", label: "Armenia", name: "Armenia", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AW", countryCode: "ABW", dialCode: "297", label: "Aruba", name: "Aruba", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AU", countryCode: "AUS", dialCode: "61", label: "Australia", name: "Australia", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AT", countryCode: "AUT", dialCode: "43", label: "Austria", name: "Austria", continent: "Europe", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18 },
    { countryCode2: "AZ", countryCode: "AZE", dialCode: "994", label: "Azerbaijan", name: "Azerbaijan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BS", countryCode: "BHS", dialCode: "1", label: "Bahamas", name: "Bahamas", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BH", countryCode: "BHR", dialCode: "973", label: "Bahrain", name: "Bahrain", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "BD", countryCode: "BDG", dialCode: "880", label: "Bangladesh", name: "Bangladesh", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BB", countryCode: "BRB", dialCode: "1", label: "Barbados", name: "Barbados", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BY", countryCode: "BLR", dialCode: "375", label: "Belarus", name: "Belarus", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BE", countryCode: "BEL", dialCode: "32", label: "Belgium", name: "Belgium", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BZ", countryCode: "BLZ", dialCode: "501", label: "Belize", name: "Belize", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BJ", countryCode: "BEN", dialCode: "229", label: "Benin", name: "Benin", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BM", countryCode: "BMU", dialCode: "1", label: "Bermuda", name: "Bermuda", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BT", countryCode: "BTN", dialCode: "975", label: "Bhutan", name: "Bhutan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 16 },
    { countryCode2: "BO", countryCode: "BOL", dialCode: "591", label: "Bolivia", name: "Bolivia", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BA", countryCode: "BIH", dialCode: "387", label: "Bosnia and Herzegovina", name: "Bosnia and Herzegovina", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BW", countryCode: "BWA", dialCode: "267", label: "Botswana", name: "Botswana", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BV", countryCode: "BVT", dialCode: "47", label: "Bouvet Island", name: "Bouvet Island", continent: "Antarctica", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BR", countryCode: "BRA", dialCode: "55", label: "Brazil", name: "Brazil", continent: "South America", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "VG", countryCode: "VGB", dialCode: "1", label: "", name: "British Virgin Islands", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "BN", countryCode: "BRN", dialCode: "673", label: "Brunei Darussalam", name: "Brunei Darussalam", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BG", countryCode: "BGR", dialCode: "359", label: "Bulgaria", name: "Bulgaria", continent: "Europe", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18 },
    { countryCode2: "BF", countryCode: "BFA", dialCode: "226", label: "Burkina Faso", name: "Burkina Faso", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 20 },
    { countryCode2: "BI", countryCode: "BDI", dialCode: "257", label: "Burundi", name: "Burundi", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KH", countryCode: "KHM", dialCode: "855", label: "Cambodia", name: "Cambodia", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CM", countryCode: "CMR", dialCode: "237", label: "Cameroon", name: "Cameroon", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CA", countryCode: "CAN", dialCode: "1", label: "Canada", name: "Canada", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 19, states: [{ code: "AB", name: "Alberta" }, { code: "BC", name: "British Columbia" }, { code: "MB", name: "Manitoba" }, { code: "NB", name: "New Brunswick" }, { code: "NF", name: "Newfoundland & Labrador" }, { code: "NS", name: "Nova Scotia" }, { code: "NT", name: "Northwest Territories" }, { code: "NU", name: "Nunavut" }, { code: "ON", name: "Ontario" }, { code: "PE", name: "Prince Edward Island" }, { code: "QC", name: "Quebec" }, { code: "SK", name: "Saskatchewan" }, { code: "YT", name: "Yukon" },], phoneNumberFormat: { format: "(xxx) xxx-xxxx", formatDigitRegions: [1, 4, 6, 9, 10, 14], minDigitLength: 10, maxDigitLength: 10 } },
    { countryCode2: "CV", countryCode: "CPV", dialCode: "238", label: "Cape Verde", name: "Cape Verde", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BQ", countryCode: "BES", dialCode: "599", label: "Caribbean Netherlands", name: "Caribbean Netherlands", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KY", countryCode: "CYM", dialCode: "1", label: "Cayman Islands", name: "Cayman Islands", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [1, 4, 6, 9, 10, 14], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "CF", countryCode: "CAF", dialCode: "236", label: "Central African Republic", name: "Central African Republic", continent: "", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TD", countryCode: "TCD", dialCode: "235", label: "Chad", name: "Chad", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "IO", countryCode: "IOT", dialCode: "246", label: "Chagos Archipelago", name: "Chagos Archipelago", continent: "Asia/Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CL", countryCode: "CHL", dialCode: "56", label: "Chile", name: "Chile", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CN", countryCode: "CHN", dialCode: "86", label: "China", name: "China", continent: "Asia", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18, states: [{ code: "110", name: "Anhui" }, { code: "10", name: "Beijing" }, { code: "11", name: "Chongqing" }, { code: "150", name: "Fujian" }, { code: "260", name: "Gansu" }, { code: "190", name: "Guangdong" }, { code: "210", name: "Guangxi" }, { code: "220", name: "Guizhou" }, { code: "200", name: "Hainan" }, { code: "60", name: "Hebei" }, { code: "90", name: "Heilongjiang" }, { code: "180", name: "Henan" }, { code: "170", name: "Hubei" }, { code: "160", name: "Hunan" }, { code: "100", name: "Jiangsu" }, { code: "140", name: "Jiangxi" }, { code: "80", name: "Jilin" }, { code: "70", name: "Liaoning" }, { code: "40", name: "Neimenggu" }, { code: "270", name: "Ningxia" }, { code: "280", name: "Qinghai" }, { code: "250", name: "Shaanxi" }, { code: "120", name: "Shandong" }, { code: "20", name: "Shanghai" }, { code: "50", name: "Shanxi" }, { code: "230", name: "Sichuan" }, { code: "30", name: "Tianjin" }, { code: "290", name: "Xinjiang" }, { code: "300", name: "Xizang" }, { code: "240", name: "Yunnan" }, { code: "130", name: "Zhejiang" }], phoneNumberFormat: { format: "xxxxxxxxxxx", formatDigitRegions: [0, 3, 4, 8, 9, 13], minDigitLength: 1, maxDigitLength: 11 } },
    { countryCode2: "CX", countryCode: "CXR", dialCode: "61", label: "Christmas Island", name: "Christmas Island", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CC", countryCode: "CCK", dialCode: "61", label: "Cocos (Keeling) Islands", name: "Cocos (Keeling) Islands", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CO", countryCode: "COL", dialCode: "57", label: "Colombia", name: "Colombia", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KM", countryCode: "COM", dialCode: "269", label: "Comoros", name: "Comoros", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CK", countryCode: "COK", dialCode: "682", label: "Cook Islands", name: "Cook Islands", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CR", countryCode: "CRI", dialCode: "506", label: "Costa Rica", name: "Costa Rica", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CI", countryCode: "CIV", dialCode: "225", label: "Côte d'Ivoire", name: "Côte d'Ivoire", continent: "Africa", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "HR", countryCode: "HRV", dialCode: "385", label: "Croatia", name: "Croatia", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CW", countryCode: "CUW", dialCode: "385", label: "Curaçao", name: "Curaçao", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CY", countryCode: "CYP", dialCode: "357", label: "Cyprus", name: "Cyprus", continent: "Europe", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18 },
    { countryCode2: "CZ", countryCode: "CZE", dialCode: "420", label: "Czechia", name: "Czechia", continent: "Europe", embargoed: false, underAgeLimit: 15, minorAgeLimit: 18, phoneNumberFormat: { format: "xxxxxxxxxxx", formatDigitRegions: [0, 3, 4, 7, 8, 11], minDigitLength: 9, maxDigitLength: 9 } },
    { countryCode2: "CD", countryCode: "COD", dialCode: "243", label: "Democratic Republic of the Congo", name: "Democratic Republic of the Congo", continent: "", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "DNK", countryCode: "DK", dialCode: "45", label: "Denmark", name: "Denmark", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "DJ", countryCode: "DJI", dialCode: "253", label: "Djibouti", name: "Djibouti", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "DM", countryCode: "DMA", dialCode: "1", label: "Dominica", name: "Dominica", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "DO", countryCode: "DOM", dialCode: "1", label: "Dominican Republic", name: "Dominican Republic", continent: "", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "EC", countryCode: "ECU", dialCode: "593", label: "Ecuador", name: "Ecuador", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "EG", countryCode: "EGY", dialCode: "20", label: "Egypt", name: "Egypt", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "SV", countryCode: "SLV", dialCode: "503", label: "El Salvador", name: "El Salvador", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GQ", countryCode: "GNQ", dialCode: "240", label: "Equatorial Guinea", name: "Equatorial Guinea", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ER", countryCode: "ERI", dialCode: "291", label: "Eritrea", name: "Eritrea", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "EE", countryCode: "EST", dialCode: "372", label: "Estonia", name: "Estonia", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SZ", countryCode: "SWZ", dialCode: "268", label: "Eswatini", name: "Eswatini", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ET", countryCode: "ETH", dialCode: "251", label: "Ethiopia", name: "Ethiopia", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "FK", countryCode: "FLK", dialCode: "500", label: "Falkland Islands", name: "Falkland Islands", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "FJ", countryCode: "FJI", dialCode: "679", label: "Fiji", name: "Fiji", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "FI", countryCode: "FIN", dialCode: "358", label: "Finland", name: "Finland", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "FR", countryCode: "FRA", dialCode: "33", label: "France", name: "France", continent: "Europe", embargoed: false, underAgeLimit: 15, minorAgeLimit: 18, phoneNumberFormat: { format: "xxxx xx xxxx", formatDigitRegions: [0, 2, 3, 5, 6, 8, 9, 11, 12, 14], minDigitLength: 1, maxDigitLength: 10 } },
    { countryCode2: "GF", countryCode: "GUF", dialCode: "594", label: "French Guiana", name: "French Guiana", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PF", countryCode: "PYF", dialCode: "689", label: "French Polynesia", name: "French Polynesia", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TF", countryCode: "ATF", dialCode: "262", label: "French Southern Territories", name: "French Southern Territories", continent: "Antarctica", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GA", countryCode: "GAB", dialCode: "241", label: "Gabon", name: "Gabon", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GM", countryCode: "GMB", dialCode: "220", label: "Gambia", name: "Gambia", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GE", countryCode: "GEO", dialCode: "995", label: "Georgia", name: "Georgia", continent: "Asia/Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "DE", countryCode: "DEU", dialCode: "49", label: "Germany", name: "Germany", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "GH", countryCode: "GHA", dialCode: "233", label: "Ghana", name: "Ghana", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GI", countryCode: "GIB", dialCode: "350", label: "Gibraltar", name: "Gibraltar", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GR", countryCode: "GRC", dialCode: "30", label: "Greece", name: "Greece", continent: "Europe", embargoed: false, underAgeLimit: 15, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx xxx xxxx", formatDigitRegions: [0, 3, 4, 7, 8, 12], minDigitLength: 10, maxDigitLength: 10 } },
    { countryCode2: "GL", countryCode: "GRL", dialCode: "299", label: "Greenland", name: "Greenland", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GD", countryCode: "GRD", dialCode: "1", label: "Grenada", name: "Grenada", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "GP", countryCode: "GLP", dialCode: "590", label: "Guadeloupe", name: "Guadeloupe", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GU", countryCode: "GUM", dialCode: "1", label: "Guam", name: "Guam", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GT", countryCode: "GTM", dialCode: "502", label: "Guatemala", name: "Guatemala", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GG", countryCode: "GGY", dialCode: "44", label: "Guernsey", name: "Guernsey", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GN", countryCode: "GIN", dialCode: "224", label: "Guinea", name: "Guinea", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GW", countryCode: "GNB", dialCode: "245", label: "Guinea-Bissau", name: "Guinea-Bissau", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "GY", countryCode: "GUY", dialCode: "592", label: "Guyana", name: "Guyana", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "HT", countryCode: "HIT", dialCode: "509", label: "Haiti", name: "Haiti", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "HM", countryCode: "HMD", dialCode: "61", label: "Heard And Mc Donald Islands", name: "Heard And Mc Donald Islands", continent: "Antarctica", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "HN", countryCode: "HND", dialCode: "504", label: "Honduras", name: "Honduras", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "HK", countryCode: "HKG", dialCode: "852", label: "Hong Kong", name: "Hong Kong", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "HU", countryCode: "HUN", dialCode: "36", label: "Hungary", name: "Hungary", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "IS", countryCode: "ISL", dialCode: "354", label: "Iceland", name: "Iceland", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "IN", countryCode: "IND", dialCode: "91", label: "India", name: "India", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx xxx xxxx", formatDigitRegions: [0, 3, 4, 7, 8, 12], minDigitLength: 10, maxDigitLength: 10 } },
    { countryCode2: "ID", countryCode: "IDN", dialCode: "62", label: "Indonesia", name: "Indonesia", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "IQ", countryCode: "IRQ", dialCode: "964", label: "Iraq", name: "Iraq", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "IE", countryCode: "IRL", dialCode: "353", label: "Ireland", name: "Ireland", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "IM", countryCode: "IMN", dialCode: "44", label: "Isle of Man", name: "Isle of Man", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "IL", countryCode: "ISR", dialCode: "972", label: "Israel", name: "Israel", continent: "Asia", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18 },
    { countryCode2: "IT", countryCode: "ITA", dialCode: "39", label: "Italy", name: "Italy", continent: "Europe", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18 },
    { countryCode2: "JM", countryCode: "JAM", dialCode: "1", label: "Jamaica", name: "Jamaica", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "JP", countryCode: "JPN", dialCode: "81", label: "Japan", name: "Japan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, states: [{ code: "1", name: "Hokkaido" }, { code: "2", name: "Aomori" }, { code: "3", name: "Iwate" }, { code: "4", name: "Miyagi" }, { code: "5", name: "Akita" }, { code: "6", name: "Yamagata" }, { code: "7", name: "Fukushima" }, { code: "48", name: "Ibaraki" }, { code: "9", name: "Tochigi" }, { code: "10", name: "Gunma" }, { code: "11", name: "Saitama" }, { code: "12", name: "Chiba" }, { code: "13", name: "Tokyo" }, { code: "14", name: "Kanagawa" }, { code: "15", name: "Niigata" }, { code: "16", name: "Toyama" }, { code: "17", name: "Ishikawa" }, { code: "18", name: "Fukui" }, { code: "19", name: "Yamanashi" }, { code: "50", name: "Nagano" }, { code: "21", name: "Gifu" }, { code: "22", name: "Shizuoka" }, { code: "23", name: "Aichi" }, { code: "24", name: "Mie" }, { code: "25", name: "Shiga" }, { code: "26", name: "Kyoto" }, { code: "27", name: "Osaka" }, { code: "28", name: "Hyogo" }, { code: "29", name: "Nara" }, { code: "30", name: "Wakayama" }, { code: "31", name: "Tottori" }, { code: "32", name: "Shimane" }, { code: "33", name: "Okayama" }, { code: "34", name: "Hiroshima" }, { code: "35", name: "Yamaguchi" }, { code: "36", name: "Tokushima" }, { code: "37", name: "Kagawa" }, { code: "38", name: "Ehime" }, { code: "39", name: "Kochi" }, { code: "40", name: "Fukuoka" }, { code: "41", name: "Saga" }, { code: "42", name: "Nagasaki" }, { code: "43", name: "Kumamoto" }, { code: "44", name: "Oita" }, { code: "45", name: "Miyazaki" }, { code: "46", name: "Kagoshima" }, { code: "47", name: "Okinawa" }] },
    { countryCode2: "JE", countryCode: "JEY", dialCode: "44", label: "Jersey", name: "Jersey", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "JO", countryCode: "JOR", dialCode: "962", label: "Jordan", name: "Jordan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KZ", countryCode: "KAZ", dialCode: "7", label: "Kazakhstan", name: "Kazakhstan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KE", countryCode: "KEN", dialCode: "254", label: "Kenya", name: "Kenya", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KI", countryCode: "KIR", dialCode: "686", label: "Kiribati", name: "Kiribati", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "XK", countryCode: "XKS", dialCode: "383", label: "Kosovo", name: "Kosovo", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "KW", countryCode: "KWT", dialCode: "965", label: "Kuwait", name: "Kuwait", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "KG", countryCode: "KGZ", dialCode: "996", label: "Kyrgyzstan", name: "Kyrgyzstan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LA", countryCode: "LAO", dialCode: "856", label: "Laos", name: "Laos", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LV", countryCode: "LVA", dialCode: "371", label: "Latvia", name: "Latvia", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LB", countryCode: "LBN", dialCode: "961", label: "Lebanon", name: "Lebanon", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LS", countryCode: "LSO", dialCode: "266", label: "Lesotho", name: "Lesotho", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LR", countryCode: "LBR", dialCode: "231", label: "Liberia", name: "Liberia", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LY", countryCode: "LBY", dialCode: "218", label: "Libya", name: "Libya", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LI", countryCode: "LIE", dialCode: "423", label: "Liechtenstein", name: "Liechtenstein", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "LT", countryCode: "LTU", dialCode: "370", label: "Lithuania", name: "Lithuania", continent: "Europe", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18 },
    { countryCode2: "LU", countryCode: "LUX", dialCode: "352", label: "Luxembourg", name: "Luxembourg", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "MO", countryCode: "MAC", dialCode: "853", label: "Macao", name: "Macao", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MG", countryCode: "MDG", dialCode: "261", label: "Madagascar", name: "Madagascar", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "MW", countryCode: "MWI", dialCode: "265", label: "Malawi", name: "Malawi", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "MY", countryCode: "MYS", dialCode: "60", label: "Malaysia", name: "Malaysia", continent: "Asia", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "MV", countryCode: "MDV", dialCode: "960", label: "Maldives", name: "Maldives", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: ",L", countryCode: "MLI", dialCode: "223", label: "Mali", name: "Mali", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MT", countryCode: "MLT", dialCode: "356", label: "Malta", name: "Malta", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MH", countryCode: "MHL", dialCode: "692", label: "Marshall Islands", name: "Marshall Islands", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MQ", countryCode: "MTQ", dialCode: "596", label: "Martinique", name: "Martinique", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MR", countryCode: "MRT", dialCode: "222", label: "Mauritania", name: "Mauritania", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MU", countryCode: "MUS", dialCode: "230", label: "Mauritius", name: "Mauritius", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "YT", countryCode: "MYT", dialCode: "262", label: "Mayotte", name: "Mayotte", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MX", countryCode: "MEX", dialCode: "52", label: "Mexico", name: "Mexico", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "FM", countryCode: "FSM", dialCode: "691", label: "Micronesia", name: "Micronesia", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MD", countryCode: "MDA", dialCode: "373", label: "Moldova", name: "Moldova", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MC", countryCode: "MCO", dialCode: "377", label: "Monaco", name: "Monaco", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MN", countryCode: "MNG", dialCode: "976", label: "Mongolia", name: "Mongolia", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ME", countryCode: "MNE", dialCode: "382", label: "Montenegro", name: "Montenegro", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MS", countryCode: "MSR", dialCode: "1", label: "Montserrat", name: "Montserrat", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "MA", countryCode: "MAR", dialCode: "212", label: "Morocco", name: "Morocco", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MZ", countryCode: "MOZ", dialCode: "258", label: "Mozambique", name: "Mozambique", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MM", countryCode: "MMR", dialCode: "95", label: "Myanmar", name: "Myanmar", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "NA", countryCode: "NAM", dialCode: "264", label: "Namibia", name: "Namibia", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "NR", countryCode: "NRU", dialCode: "674", label: "Nauru", name: "Nauru", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "NP", countryCode: "NPL", dialCode: "977", label: "Nepal", name: "Nepal", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "NL", countryCode: "NLD", dialCode: "31", label: "Netherlands", name: "Netherlands", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "NC", countryCode: "NCL", dialCode: "687", label: "New Caledonia", name: "New Caledonia", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "NZ", countryCode: "NZL", dialCode: "64", label: "New Zealand", name: "New Zealand", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "NI", countryCode: "NIC", dialCode: "505", label: "Nicaragu", name: "Nicaragu", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "NE", countryCode: "NER", dialCode: "227", label: "Niger", name: "Niger", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "NG", countryCode: "NGA", dialCode: "234", label: "Nigeria", name: "Nigeria", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "NU", countryCode: "NIU", dialCode: "683", label: "Niue", name: "Niue", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MP", countryCode: "MNP", dialCode: "1", label: "Northern Mariana Islands", name: "Northern Mariana Islands", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "MK", countryCode: "MKD", dialCode: "389", label: "North Macedonia", name: "North Macedonia", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "NO", countryCode: "NOR", dialCode: "47", label: "Norway", name: "Norway", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "OM", countryCode: "OMN", dialCode: "986", label: "Oman", name: "Oman", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PK", countryCode: "PAK", dialCode: "92", label: "Pakistan", name: "Pakistan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PW", countryCode: "PLW", dialCode: "680", label: "Palau", name: "Palau", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PS", countryCode: "PSE", dialCode: "970", label: "Palestinian Territories", name: "Palestinian Territories", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PA", countryCode: "PAN", dialCode: "507", label: "Panama", name: "Panama", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PG", countryCode: "PNG", dialCode: "675", label: "Papua New Guinea", name: "Papua New Guinea", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PY", countryCode: "PRY", dialCode: "595", label: "Paraguay", name: "Paraguay", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PE", countryCode: "PER", dialCode: "51", label: "Peru", name: "Peru", continent: "South America", embargoed: false, underAgeLimit: 15, minorAgeLimit: 18 },
    { countryCode2: "PH", countryCode: "PHL", dialCode: "63", label: "Philippines", name: "Philippines", continent: "Asia", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "PN", countryCode: "PCN", dialCode: "870", label: "Pitcairn", name: "Pitcairn", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PL", countryCode: "POL", dialCode: "48", label: "Poland", name: "Poland", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "PT", countryCode: "PRT", dialCode: "351", label: "Portugal", name: "Portugal", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PR", countryCode: "PRI", dialCode: "1", label: "Puerto Rico", name: "Puerto Rico", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "QA", countryCode: "QAT", dialCode: "974", label: "Qatar", name: "Qatar", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CG", countryCode: "COG", dialCode: "242", label: "Republic of the Congo", name: "Republic of the Congo", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "RE", countryCode: "REU", dialCode: "262", label: "Réunion", name: "Réunion", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "RO", countryCode: "ROU", dialCode: "40", label: "Romania", name: "Romania", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "RU", countryCode: "RUS", dialCode: "7", label: "Russia", name: "Russia", continent: "Europe/Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "RW", countryCode: "RWA", dialCode: "250", label: "Rwanda", name: "Rwanda", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "BL", countryCode: "BLM", dialCode: "590", label: "Saint Barthélemy", name: "Saint Barthélemy", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SH", countryCode: "SHN", dialCode: "290", label: "Saint Helena", name: "Saint Helena", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KN", countryCode: "KNA", dialCode: "1", label: "Saint Kitts And Nevis", name: "Saint Kitts And Nevis", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "LA", countryCode: "LCA", dialCode: "1", label: "Saint Lucia", name: "Saint Lucia", continent: "", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "MF", countryCode: "MAF", dialCode: "1", label: "Saint Martin", name: "Saint Martin", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "VC", countryCode: "VCT", dialCode: "1", label: "Saint Vincent and the Grenadines", name: "Saint Vincent and the Grenadines", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "WS", countryCode: "WSM", dialCode: "685", label: "Samoa", name: "Samoa", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SM", countryCode: "SMR", dialCode: "378", label: "San Marino", name: "San Marino", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ST", countryCode: "STP", dialCode: "239", label: "Sao Tome And Principe", name: "Sao Tome And Principe", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SA", countryCode: "SAU", dialCode: "966", label: "Saudi Arabia", name: "Saudi Arabia", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "SN", countryCode: "SEN", dialCode: "221", label: "Senegal", name: "Senegal", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "RS", countryCode: "SRB", dialCode: "381", label: "Serbia", name: "Serbia", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SC", countryCode: "SYC", dialCode: "248", label: "Seychelles", name: "Seychelles", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SL", countryCode: "SLE", dialCode: "232", label: "Sierra Leone", name: "Sierra Leone", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "SG", countryCode: "SGP", dialCode: "65", label: "Singapore", name: "Singapore", continent: "Asia", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "SX", countryCode: "SXM", dialCode: "1", label: "Sint Maarten", name: "Sint Maarten", continent: "North America)", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SK", countryCode: "SVK", dialCode: "421", label: "Slovakia", name: "Slovakia", continent: "Europe", embargoed: false, underAgeLimit: 16, minorAgeLimit: 18 },
    { countryCode2: "SI", countryCode: "SVN", dialCode: "386", label: "Slovenia", name: "Slovenia", continent: "Europe", embargoed: false, underAgeLimit: 15, minorAgeLimit: 18 },
    { countryCode2: "SB", countryCode: "SLB", dialCode: "677", label: "Solomon Islands", name: "Solomon Islands", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SO", countryCode: "SOM", dialCode: "252", label: "Somalia", name: "Somalia", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ZA", countryCode: "ZAF", dialCode: "27", label: "South Africa", name: "South Africa", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "KR", countryCode: "KOR", dialCode: "82", label: "South Korea", name: "South Korea", continent: "Asia", embargoed: false, underAgeLimit: 14, minorAgeLimit: 19 },
    { countryCode2: "SS", countryCode: "SSD", dialCode: "211", label: "South Sudan", name: "South Sudan", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ES", countryCode: "ESP", dialCode: "34", label: "Spain", name: "Spain", continent: "Europe", embargoed: false, underAgeLimit: 14, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx xxx xxx", formatDigitRegions: [0, 3, 4, 7, 8, 11], minDigitLength: 9, maxDigitLength: 9 } },
    { countryCode2: "LK", countryCode: "LKA", dialCode: "94", label: "Sri Lanka", name: "Sri Lanka", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "PM", countryCode: "SPM", dialCode: "508", label: "St. Pierre And Miquelon", name: "St. Pierre And Miquelon", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SD", countryCode: "SDN", dialCode: "13", label: "Sudan", name: "Sudan", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SR", countryCode: "SUR", dialCode: "597", label: "Suriname", name: "Suriname", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SJ", countryCode: "SJM", dialCode: "47", label: "Svalbard And Jan Mayen Islands", name: "Svalbard And Jan Mayen Islands", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "SE", countryCode: "SWE", dialCode: "46", label: "Sweden", name: "Sweden", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "CH", countryCode: "CHE", dialCode: "41", label: "Switzerland", name: "Switzerland", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx xxx xx xx", formatDigitRegions: [0, 3, 4, 7, 8, 10, 11, 13], minDigitLength: 1, maxDigitLength: 10 } },
    { countryCode2: "TW", countryCode: "TWN", dialCode: "886", label: "Taiwan", name: "Taiwan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TJ", countryCode: "TJK", dialCode: "992", label: "Tajikistan", name: "Tajikistan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TZ", countryCode: "TZA", dialCode: "255", label: "Tanzania", name: "Tanzania", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TH", countryCode: "THA", dialCode: "66", label: "Thailand", name: "Thailand", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TL", countryCode: "TLS", dialCode: "670", label: "Timor-Leste", name: "Timor-Leste", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TG", countryCode: "TGO", dialCode: "228", label: "Togo", name: "Togo", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TK", countryCode: "TKL", dialCode: "690", label: "Tokelau", name: "Tokelau", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TO", countryCode: "TON", dialCode: "676", label: "Tonga", name: "Tonga", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TT", countryCode: "TTO", dialCode: "1", label: "Trinidad and Tobago", name: "Trinidad and Tobago", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "TN", countryCode: "TUN", dialCode: "216", label: "Tunisia", name: "Tunisia", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TR", countryCode: "TUR", dialCode: "90", label: "Türkiye", name: "Türkiye/Europe", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TM", countryCode: "TKM", dialCode: "993", label: "Turkmenistan", name: "Turkmenistan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "TC", countryCode: "TCA", dialCode: "1", label: "Turks and Caicos Islands", name: "Turks and Caicos Islands", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18, phoneNumberFormat: { format: "xxx-xxxx", formatDigitRegions: [0, 3, 4, 8], minDigitLength: 7, maxDigitLength: 7 } },
    { countryCode2: "TV", countryCode: "TUV", dialCode: "688", label: "Tuvalu", name: "Tuvalu", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "UG", countryCode: "UGA", dialCode: "256", label: "Uganda", name: "Uganda", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "UA", countryCode: "UKR", dialCode: "380", label: "Ukraine", name: "Ukraine", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "AE", countryCode: "ARE", dialCode: "971", label: "United Arab Emirates", name: "United Arab Emirates", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 21 },
    { countryCode2: "GB", countryCode: "GBR", dialCode: "44", label: "United Kingdom", name: "United Kingdom", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "US", countryCode: "USA", dialCode: "1", label: "United States", name: "United States", continent: "North America", states: [{ code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" }, { code: "AA", name: "Armed Forces Americas" }, { code: "AE", name: "Armed Forces Europe" }, { code: "AP", name: "Armed Forces Pacific" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" }, { code: "CT", name: "Connecticut" }, { code: "DC", name: "Dist Of Columbia" }, { code: "DE", name: "Delaware" }, { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" }, { code: "GU", name: "Guam" }, { code: "HI", name: "Hawaii" }, { code: "IA", name: "Iowa" }, { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" }, { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" }, { code: "MA", name: "Massachusetts" }, { code: "MD", name: "Maryland" }, { code: "ME", name: "Maine" }, { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" }, { code: "MO", name: "Missouri" }, { code: "MS", name: "Mississippi" }, { code: "MT", name: "Montana" }, { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" }, { code: "NE", name: "Nebraska" }, { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" }, { code: "NV", name: "Nevada" }, { code: "NY", name: "New York" }, { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" }, { code: "PR", name: "Puerto Rico" }, { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" }, { code: "VA", name: "Virginia" }, { code: "VI", name: "Virgin Islands" }, { code: "VT", name: "Vermont" }, { code: "WA", name: "Washington" }, { code: "WI", name: "Wisconsin" }, { code: "WV", name: "West Virginia" }, { code: "WY", name: "Wyoming" }], phoneNumberFormat: { format: "(xxx) xxx-xxxx", formatDigitRegions: [1, 4, 6, 9, 10, 14], minDigitLength: 10, maxDigitLength: 10 } },
    { countryCode2: "UY", countryCode: "URY", dialCode: "598", label: "Uruguay", name: "Uruguay", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "UZ", countryCode: "UZB", dialCode: "998", label: "Uzbekistan", name: "Uzbekistan", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "VU", countryCode: "VUT", dialCode: "678", label: "Vanuatu", name: "Vanuatu", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "VA", countryCode: "VAT", dialCode: "39", label: "Vatican", name: "Vatican", continent: "Europe", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "VE", countryCode: "VEN", dialCode: "58", label: "Venezuela", name: "Venezuela", continent: "South America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "VN", countryCode: "VNM", dialCode: "84", label: "Vietnam", name: "Vietnam", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "VI", countryCode: "VIR", dialCode: "1", label: "Virgin Islands (U.S.)", name: "Virgin Islands (U.S.)", continent: "North America", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "WF", countryCode: "WLF", dialCode: "681", label: "Wallis And Futuna Islands", name: "Wallis And Futuna Islands", continent: "Oceania", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "EH", countryCode: "ESH", dialCode: "212", label: "Western Sahara", name: "Western Sahara", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "YE", countryCode: "YEM", dialCode: "967", label: "Yemen", name: "Yemen", continent: "Asia", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ZM", countryCode: "ZMB", dialCode: "260", label: "Zambia", name: "Zambia", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
    { countryCode2: "ZW", countryCode: "ZWE", dialCode: "263", label: "Zimbabwe", name: "Zimbabwe", continent: "Africa", embargoed: false, underAgeLimit: 13, minorAgeLimit: 18 },
];
const defaultPhoneNumberFormat = {
    format: "xxxxxxxxxx",
    minDigitLength: 10,
    maxDigitLength: 10
};
const genderList = [
    { name: "Male" },
    { name: "Female" },
]

document.addEventListener('DOMContentLoaded', function () {
    const phoneCountrySelect = document.getElementById('phoneCountry');
    const countrySelect = document.getElementById('country');
    const genderSelect = document.getElementById('gender');

    function createOption(element, value, text, selected = false) {
        const option = document.createElement('option');
        option.value = value;
        option.text = text;
        if (selected) {
            option.selected = true;
        }
        element.add(option);
    }

    countryList.forEach(country => {
        createOption(countrySelect, country.name, country.name, country.countryCode === "US");
        createOption(phoneCountrySelect, `+${country.dialCode}`, `+${country.dialCode} (${country.label})`, country.countryCode === "US");
    });

    function validateAndFormatPhoneNumber(phoneNumber, phoneNumberFormat = defaultPhoneNumberFormat) {
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

        if (cleanedPhoneNumber.length < phoneNumberFormat.minDigitLength || cleanedPhoneNumber.length > phoneNumberFormat.maxDigitLength) {
            return "Invalid phone number length";
        }

        if (!cleanedPhoneNumber.match(new RegExp(`^${phoneNumberFormat.format}$`))) {
            return "Invalid phone number format";
        }

        let formattedPhoneNumber = cleanedPhoneNumber;
        if (phoneNumberFormat.format.includes("-")) {
            formattedPhoneNumber = cleanedPhoneNumber.replace(/(\d{3})(\d{4})/, "$1-$2");
        }

        return formattedPhoneNumber;
    }

    genderList.forEach(gender => {
        createOption(genderSelect, gender.name, gender.name);
    });

    const DateDropdownGenerator = (function () {
        function generateDropdownOptions(start, end, selected) {
            let options = '';
            for (let i = start; i <= end; i++) {
                options += `<option value="${i}" ${selected === i ? 'selected' : ''}>${i}</option>`;
            }
            return options;
        }

        function generateDateDropdowns() {
            const dateDropdowns = document.getElementById('dateDropdowns');

            const daySelect = document.createElement('select');
            daySelect.name = 'day';
            daySelect.innerHTML = generateDropdownOptions(1, 31, 1);
            dateDropdowns.appendChild(daySelect);

            const monthSelect = document.createElement('select');
            monthSelect.name = 'month';
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            monthSelect.innerHTML = months.map((month, index) => `<option value="${index + 1}">${month}</option>`).join('');
            dateDropdowns.appendChild(monthSelect);

            const yearSelect = document.createElement('select');
            yearSelect.name = 'year';
            const currentYear = new Date().getFullYear();
            yearSelect.innerHTML = generateDropdownOptions(currentYear - 1000, currentYear, currentYear);
            dateDropdowns.appendChild(yearSelect);
        }

        return {
            generateDateDropdowns
        };
    })();

    DateDropdownGenerator.generateDateDropdowns();
});