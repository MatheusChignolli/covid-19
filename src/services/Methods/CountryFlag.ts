import _ from 'lodash'
import { value countryFlagsUrl } from '../api'

const countries = [
  ['AF', 'Afghanistan'],
  ['AX', 'Aland Islands'],
  ['AL', 'Albania'],
  ['DZ', 'Algeria'],
  ['AS', 'American Samoa'],
  ['AD', 'Andorra'],
  ['AO', 'Angola'],
  ['AI', 'Anguilla'],
  ['AQ', 'Antarctica'],
  ['AG', 'Antigua And Barbuda'],
  ['AR', 'Argentina'],
  ['AM', 'Armenia'],
  ['AW', 'Aruba'],
  ['AU', 'Australia'],
  ['AT', 'Austria'],
  ['AZ', 'Azerbaijan'],
  ['BS', 'Bahamas'],
  ['BH', 'Bahrain'],
  ['BD', 'Bangladesh'],
  ['BB', 'Barbados'],
  ['BY', 'Belarus'],
  ['BE', 'Belgium'],
  ['BZ', 'Belize'],
  ['BJ', 'Benin'],
  ['BM', 'Bermuda'],
  ['BT', 'Bhutan'],
  ['BO', 'Bolivia'],
  ['BA', 'Bosnia And Herzegovina'],
  ['BW', 'Botswana'],
  ['BV', 'Bouvet Island'],
  ['BR', 'Brazil'],
  ['IO', 'British Indian Ocean Territory'],
  // ["BN", "Brunei Darussalam"], (Covid API Brazil me retorna apenas Brunei)
  ['BN', 'Brunei'],
  //
  ['BG', 'Bulgaria'],
  ['BF', 'Burkina Faso'],
  ['BI', 'Burundi'],
  ['KH', 'Cambodia'],
  ['CM', 'Cameroon'],
  ['CA', 'Canada'],
  // ["CV", "Cape Verde"], (Covid API Brazil me retorna apenas Cabo Verde)
  ['CV', 'Cabo Verde'],
  //
  ['KY', 'Cayman Islands'],
  ['CF', 'Central African Republic'],
  ['TD', 'Chad'],
  ['CL', 'Chile'],
  ['CN', 'China'],
  ['CX', 'Christmas Island'],
  ['CC', 'Cocos (Keeling) Islands'],
  ['CO', 'Colombia'],
  ['KM', 'Comoros'],
  // ["CG", "Congo"], (Covid API Brazil me retorna apenas Congo (Brazzaville))
  ['CG', 'Congo (Brazzaville)'],
  //
  // ["CD", "Congo, Democratic Republic"], (Covid API Brazil me retorna apenas Congo (Kinshasa))
  ['CD', 'Congo (Kinshasa)'],
  //
  ['CK', 'Cook Islands'],
  ['CR', 'Costa Rica'],
  ['CI', "Cote D'Ivoire"],
  ['HR', 'Croatia'],
  ['CU', 'Cuba'],
  ['CY', 'Cyprus'],
  // ["CZ", "Czech Republic"], (Covid API Brazil me retorna apenas Czechia)
  ['CZ', 'Czechia'],
  //
  ['DK', 'Denmark'],
  ['DJ', 'Djibouti'],
  ['DM', 'Dominica'],
  ['DO', 'Dominican Republic'],
  ['EC', 'Ecuador'],
  ['EG', 'Egypt'],
  ['SV', 'El Salvador'],
  ['GQ', 'Equatorial Guinea'],
  ['ER', 'Eritrea'],
  ['EE', 'Estonia'],
  ['ET', 'Ethiopia'],
  ['FK', 'Falkland Islands (Malvinas)'],
  ['FO', 'Faroe Islands'],
  ['FJ', 'Fiji'],
  ['FI', 'Finland'],
  ['FR', 'France'],
  ['GF', 'French Guiana'],
  ['PF', 'French Polynesia'],
  ['TF', 'French Southern Territories'],
  ['GA', 'Gabon'],
  ['GM', 'Gambia'],
  ['GE', 'Georgia'],
  ['DE', 'Germany'],
  ['GH', 'Ghana'],
  ['GI', 'Gibraltar'],
  ['GR', 'Greece'],
  ['GL', 'Greenland'],
  ['GD', 'Grenada'],
  ['GP', 'Guadeloupe'],
  ['GU', 'Guam'],
  ['GT', 'Guatemala'],
  ['GG', 'Guernsey'],
  ['GN', 'Guinea'],
  ['GW', 'Guinea-Bissau'],
  ['GY', 'Guyana'],
  ['HT', 'Haiti'],
  ['HM', 'Heard Island & Mcdonald Islands'],
  // ["VA", "Holy See (Vatican City State)"], (Covid API Brazil me retorna apenas Holy See)
  ['VA', 'Holy See'],
  //
  ['HN', 'Honduras'],
  ['HK', 'Hong Kong'],
  ['HU', 'Hungary'],
  ['IS', 'Iceland'],
  ['IN', 'India'],
  ['ID', 'Indonesia'],
  // ["IR", "Iran, Islamic Republic Of"], (Covid API Brazil me retorna apenas Iran)
  ['IR', 'Iran'],
  //
  ['IQ', 'Iraq'],
  ['IE', 'Ireland'],
  ['IM', 'Isle Of Man'],
  ['IL', 'Israel'],
  ['IT', 'Italy'],
  ['JM', 'Jamaica'],
  ['JP', 'Japan'],
  ['JE', 'Jersey'],
  ['JO', 'Jordan'],
  ['KZ', 'Kazakhstan'],
  ['KE', 'Kenya'],
  ['KI', 'Kiribati'],
  // ["KR", "Korea"], (Covid API Brazil me retorna apenas Korea, South)
  ['KR', 'Korea, South'],
  //
  ['KW', 'Kuwait'],
  ['KG', 'Kyrgyzstan'],
  // ["LA", "Lao People's Democratic Republic"], (Covid API Brazil me retorna apenas Laos)
  ['LA', 'Laos'],
  //
  ['LV', 'Latvia'],
  ['LB', 'Lebanon'],
  ['LS', 'Lesotho'],
  ['LR', 'Liberia'],
  // ["LY", "Libyan Arab Jamahiriya"], (Covid API Brazil me retorna apenas Libya)
  ['LY', 'Libya'],
  //
  ['LI', 'Liechtenstein'],
  ['LT', 'Lithuania'],
  ['LU', 'Luxembourg'],
  ['MO', 'Macao'],
  // ["MK", "Macedonia"], (Covid API Brazil me retorna North Macedonia)
  ['MK', 'North Macedonia'],
  //
  ['MG', 'Madagascar'],
  ['MW', 'Malawi'],
  ['MY', 'Malaysia'],
  ['MV', 'Maldives'],
  ['ML', 'Mali'],
  ['MT', 'Malta'],
  ['MH', 'Marshall Islands'],
  ['MQ', 'Martinique'],
  ['MR', 'Mauritania'],
  ['MU', 'Mauritius'],
  ['YT', 'Mayotte'],
  ['MX', 'Mexico'],
  ['FM', 'Micronesia, Federated States Of'],
  ['MD', 'Moldova'],
  ['MC', 'Monaco'],
  ['MN', 'Mongolia'],
  ['ME', 'Montenegro'],
  ['MS', 'Montserrat'],
  ['MA', 'Morocco'],
  ['MZ', 'Mozambique'],
  // ["MM", "Myanmar"], (Covid API Brazil me retorna Burma)
  ['MM', 'Burma'],
  //
  ['NA', 'Namibia'],
  ['NR', 'Nauru'],
  ['NP', 'Nepal'],
  ['NL', 'Netherlands'],
  ['AN', 'Netherlands Antilles'],
  ['NC', 'New Caledonia'],
  ['NZ', 'New Zealand'],
  ['NI', 'Nicaragua'],
  ['NE', 'Niger'],
  ['NG', 'Nigeria'],
  ['NU', 'Niue'],
  ['NF', 'Norfolk Island'],
  ['MP', 'Northern Mariana Islands'],
  ['NO', 'Norway'],
  ['OM', 'Oman'],
  ['PK', 'Pakistan'],
  ['PW', 'Palau'],
  ['PS', 'Palestinian Territory, Occupied'],
  ['PA', 'Panama'],
  ['PG', 'Papua New Guinea'],
  ['PY', 'Paraguay'],
  ['PE', 'Peru'],
  ['PH', 'Philippines'],
  ['PN', 'Pitcairn'],
  ['PL', 'Poland'],
  ['PT', 'Portugal'],
  ['PR', 'Puerto Rico'],
  ['QA', 'Qatar'],
  ['RE', 'Reunion'],
  ['RO', 'Romania'],
  // ["RU", "Russian Federation"], (Covid API Brazil me retorna apenas Russia)
  ['RU', 'Russia'],
  //
  ['RW', 'Rwanda'],
  ['BL', 'Saint Barthelemy'],
  ['SH', 'Saint Helena'],
  ['KN', 'Saint Kitts And Nevis'],
  ['LC', 'Saint Lucia'],
  ['MF', 'Saint Martin'],
  ['PM', 'Saint Pierre And Miquelon'],
  // ["VC", "Saint Vincent And Grenadines"], (Covid API Brazil me retorna apenas Saint Vincent and the Grenadines)
  ['VC', 'Saint Vincent and the Grenadines'],
  //
  ['WS', 'Samoa'],
  ['SM', 'San Marino'],
  ['ST', 'Sao Tome And Principe'],
  ['SA', 'Saudi Arabia'],
  ['SN', 'Senegal'],
  ['RS', 'Serbia'],
  ['SC', 'Seychelles'],
  ['SL', 'Sierra Leone'],
  ['SG', 'Singapore'],
  ['SK', 'Slovakia'],
  ['SI', 'Slovenia'],
  ['SB', 'Solomon Islands'],
  ['SO', 'Somalia'],
  ['ZA', 'South Africa'],
  ['GS', 'South Georgia And Sandwich Isl.'],
  ['ES', 'Spain'],
  ['LK', 'Sri Lanka'],
  ['SD', 'Sudan'],
  // ["SS", "South Sudan"], (Adicionando South Sudan)
  ['SS', 'South Sudan'],
  //
  ['SR', 'Suriname'],
  ['SJ', 'Svalbard And Jan Mayen'],
  // ["SZ", "Swaziland"], (Covid API Brazil me retorna apenas Eswatini)
  ['SZ', 'Eswatini'],
  //
  ['SE', 'Sweden'],
  ['CH', 'Switzerland'],
  // ["SY", "Syrian Arab Republic"], (Covid API Brazil me retorna apenas Syria)
  ['SY', 'Syria'],
  //
  ['TW', 'Taiwan'],
  ['TJ', 'Tajikistan'],
  ['TZ', 'Tanzania'],
  ['TH', 'Thailand'],
  ['TL', 'Timor-Leste'],
  ['TG', 'Togo'],
  ['TK', 'Tokelau'],
  ['TO', 'Tonga'],
  ['TT', 'Trinidad And Tobago'],
  ['TN', 'Tunisia'],
  ['TR', 'Turkey'],
  ['TM', 'Turkmenistan'],
  ['TC', 'Turks And Caicos Islands'],
  ['TV', 'Tuvalu'],
  ['UG', 'Uganda'],
  ['UA', 'Ukraine'],
  ['AE', 'United Arab Emirates'],
  ['GB', 'United Kingdom'],
  ['US', 'United States'],
  ['UM', 'United States Outlying Islands'],
  ['UY', 'Uruguay'],
  ['UZ', 'Uzbekistan'],
  ['VU', 'Vanuatu'],
  ['VE', 'Venezuela'],
  // ["VN", "Viet Nam"], (Covid API Brazil me retorna apenas Vietnam)
  ['VN', 'Vietnam'],
  //
  ['VG', 'Virgin Islands, British'],
  ['VI', 'Virgin Islands, U.S.'],
  ['WF', 'Wallis And Futuna'],
  ['EH', 'Western Sahara'],
  ['YE', 'Yemen'],
  ['ZM', 'Zambia'],
  ['ZW', 'Zimbabwe'],
]

export function setCountryFlag(
  countryName: string | undefined
): string | undefined {
  let flagUrl = ''

  countries.forEach((country) => {
    const countryCodeFromObj = _.kebabCase(country[0])
    const countryNameFromObj = _.kebabCase(country[1])
    const countryNameFromFun = _.kebabCase(countryName)

    if (
      countryNameFromObj === countryNameFromFun ||
      countryCodeFromObj === countryNameFromFun
    ) {
      flagUrl =
        countryFlagsUrl + countryCodeFromObj.toUpperCase() + '/flat/64.png'
    }
  })

  return flagUrl === '' ? '/images/empty-flag.png' : flagUrl
}
