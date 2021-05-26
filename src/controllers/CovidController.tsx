// import React from 'react';
import { api } from '../services/api'

// Importando Interfaces
import { CovidData } from '../interfaces/CovidData'
import { CountriesCovidData } from '../interfaces/CountriesCovidData'

export const getBrazilStatesCases = async (): Promise<CovidData[]> => {
  return await api.get('/api/report/v1/').then((res) => {
    return res.data.data
  })
}

export const getBrazilCases = async (): Promise<CountriesCovidData> => {
  return await api.get('/api/report/v1/brazil').then((res) => {
    return res.data.data
  })
}

export const getCountriesCases = async (): Promise<CountriesCovidData[]> => {
  return await api.get('/api/report/v1/countries').then((res) => {
    return res.data.data
  })
}

// import {
// 	CadCidadeRequest,
// 	CadHorarioRequest,
// 	ConsultCityRequest,
// } from "../services/AtendenceService";
// import { CheckAuthRequest } from "./CommonFunctions";

// // WS006
// export const CadCidadeController = async (cidadeLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await CadCidadeRequest(cidadeLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"CadCidadeErrorMessage",
// 				response.response.data.message
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"CadCidadeErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			CadCidadeController(cidadeLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"CadCidadeErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS008
// export const CadHorarioController = async (horasLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await CadHorarioRequest(horasLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"CadHorarioErrorMessage",
// 				response.response.data.message
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"CadHorarioErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			CadHorarioController(horasLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"CadHorarioErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS008
// export const ConsultCityController = async (cityLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await ConsultCityRequest(cityLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			let cidadesArray = [];
// 			let cidadesIdArray = [];
// 			response.response.data.forEach((element) => {
// 				cidadesArray[cidadesArray.length] = {
// 					title: element.nmcidade + " - " + element.coduf,
// 				};
// 				cidadesIdArray[cidadesIdArray.length] = element.codcidade;
// 			});
// 			localStorage.setItem("CidadesArray", JSON.stringify(cidadesArray));
// 			localStorage.setItem(
// 				"CidadesIdArray",
// 				JSON.stringify(cidadesIdArray)
// 			);
// 			return "200";
// 		default:
// 			return "error";
// 	}
// };

// --------------------------------------------------------------------------------------------------------------------------------

// import { BusinessRequest } from "../services/BusinessService";
// import { CheckAuthRequest } from "./CommonFunctions";

// // WS011
// export const BusinessController = async (partnerLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await BusinessRequest(partnerLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"BusinessErrorMessage",
// 				response.response.data.message
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"BusinessErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			BusinessController(partnerLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"BusinessErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// --------------------------------------------------------------------------------------------------------------------------------

// import { AuthController } from "./UserController";

// export const CheckAuthRequest = async () => {
// 	if (localStorage.getItem("ApiToken") === null) {
// 		const response = await AuthController();
// 		if (response === "200") {
// 			localStorage.clear();
// 			window.location.href = process.env.REACT_APP_API_URL_DEFAUT;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return true;
// 	}
// };

// --------------------------------------------------------------------------------------------------------------------------------

// import {
// 	ProfessionalRequest,
// 	PartnerRequest,
// 	FinishCadRequest,
// 	GetPartnerRequest,
// } from "../services/ProfessionalService";
// import { CheckAuthRequest } from "./CommonFunctions";

// // WS009
// export const ProfessionalController = async (professionalLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await ProfessionalRequest(professionalLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"ProfessionalErrorMessage",
// 				response.response.data.message
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"ProfessionalErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			ProfessionalController(professionalLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"ProfessionalErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS010
// export const PartnerController = async (partnerLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await PartnerRequest(partnerLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"ProfessionalErrorMessage",
// 				response.response.data.message
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"ProfessionalErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			PartnerController(partnerLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"ProfessionalErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS014
// export const GetPartnerController = async () => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await GetPartnerRequest();
// 	switch (response.httpcode) {
// 		case 200:
// 			localStorage.setItem(
// 				"PartnerData",
// 				JSON.stringify(response.response.data)
// 			);
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"GetPartnerErrorMessage",
// 				response.response.data.message
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"GetPartnerErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			GetPartnerController();
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"GetPartnerErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS018
// export const FinishCadController = async (finishLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await FinishCadRequest(finishLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"FinishCadErrorMessage",
// 				response.response.data.message
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"FinishCadErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			FinishCadController(finishLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"FinishCadErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// --------------------------------------------------------------------------------------------------------------------------------

// import {
// 	AuthRequest,
// 	PreCadRequest,
// 	ValidaTiketRequest,
// 	CadPasswordRequest,
// 	LoginRequest,
// 	UserInfoRequest,
// 	ContactRequest,
// 	ProfileImageRequest,
// 	FaqRequest,
// 	NoticesRequest,
// 	NoticeRequest,
// 	TrailsRequest,
// 	TrailRequest,
// 	ContentRequest,
// 	AcceptContractRequest,
// } from "../services/UserService";
// import { CheckAuthRequest } from "./CommonFunctions";

// // WS001
// export const AuthController = async () => {
// 	let date = new Date();
// 	let formatedDate =
// 		date.getFullYear() +
// 		"-" +
// 		("0" + (date.getMonth() + 1)).slice(-2) +
// 		"-" +
// 		("0" + date.getDate()).slice(-2) +
// 		("0" + date.getHours()).slice(-2) +
// 		":" +
// 		(date.getMinutes() < 10 ? "0" : "") +
// 		date.getMinutes() +
// 		":00";
// 	const response = await AuthRequest(formatedDate);
// 	switch (response.httpcode) {
// 		case 200:
// 			localStorage.setItem("ApiToken", response.response.data.token);
// 			return "200";
// 		case 403:
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS002
// export const PreCadController = async (preCadLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await PreCadRequest(preCadLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			localStorage.setItem("CheckPreCadResquest", "True");
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"PreCadToken",
// 				response.response.data.tickeacesso
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"ErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			PreCadController(preCadLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"ErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS003
// export const ValidaTiketController = async (ApiToken) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await ValidaTiketRequest(ApiToken);
// 	switch (response.httpcode) {
// 		case 200:
// 			localStorage.setItem(
// 				"UserData",
// 				JSON.stringify(response.response.data)
// 			);
// 			return "200";
// 		case 201:
// 			return "201";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			ValidaTiketController(ApiToken);
// 			return "401";
// 		default:
// 			try {
// 				localStorage.setItem(
// 					"ErrorMessage",
// 					response.response.data.message
// 				);
// 			} catch (error) {
// 				localStorage.setItem("ErrorMessage", error);
// 			}
// 			return "error";
// 	}
// };

// // WS003
// export const CadPasswordController = async (passwordLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await CadPasswordRequest(passwordLabel);
// 	if (response.httpcode === 200) {
// 		localStorage.setItem(
// 			"UserData",
// 			JSON.stringify(response.response.data)
// 		);
// 		return "200";
// 	} else if (response.httpcode === 201) {
// 		localStorage.setItem("ErrorMessage", response.response.data.message);
// 		return "201";
// 	} else {
// 		try {
// 			localStorage.setItem(
// 				"ErrorMessage",
// 				response.response.data.message
// 			);
// 		} catch (error) {
// 			localStorage.setItem("ErrorMessage", error);
// 		}
// 		return "error";
// 	}
// };

// // WS005
// export const LoginController = async (loginLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await LoginRequest(loginLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			localStorage.setItem(
// 				"UserData",
// 				JSON.stringify(response.response.data)
// 			);
// 			return "200";
// 		case 202:
// 			localStorage.setItem(
// 				"LoginErrorMessage",
// 				response.response.data.message
// 			);
// 			return "202";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			LoginController(loginLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"LoginErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS019
// export const UserInfoController = async (idUser) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await UserInfoRequest(idUser);
// 	switch (response.httpcode) {
// 		case 200:
// 			let responseData = response.response.data;
// 			let base64Image = responseData.imgperfil;
// 			responseData.imgperfil = "";
// 			localStorage.setItem(
// 				"UserData",
// 				JSON.stringify(response.response.data)
// 			);
// 			localStorage.setItem("IdOperacao", "1");
// 			return { httpcode: "200", image: base64Image };
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			UserInfoController(idUser);
// 			return { httpcode: "401", image: "" };
// 		default:
// 			return { httpcode: "error", image: "" };
// 	}
// };

// // WS021
// export const ContactController = async (contactLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await ContactRequest(contactLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			localStorage.setItem("CheckPreCadResquest", "True");
// 			return "200";
// 		case 201:
// 			localStorage.setItem(
// 				"PreCadToken",
// 				response.response.data.tickeacesso
// 			);
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"ErrorMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			ContactController(contactLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"ErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS022
// export const ProfileImageController = async (profileImageLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await ProfileImageRequest(profileImageLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 201:
// 			return "201";
// 		case 400:
// 			localStorage.setItem(
// 				"ProfileImageMessage",
// 				response.response.data.message
// 			);
// 			return "400";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			ProfileImageController(profileImageLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"ProfileImageMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };

// // WS023
// export const FaqController = async (contactLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await FaqRequest(contactLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return {
// 				data: response.response.data.faq,
// 				httpcode: "200",
// 			};
// 		case 201:
// 			return {
// 				data: response.response.data.faq,
// 				httpcode: "201",
// 			};
// 		case 400:
// 			return {
// 				httpcode: "400",
// 			};
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			ContactController(contactLabel);
// 			return {
// 				httpcode: "401",
// 			};
// 		case 403:
// 			return {
// 				httpcode: "403",
// 			};
// 		default:
// 			return {
// 				error: "error",
// 			};
// 	}
// };

// // WS024
// export const NoticesController = async (noticesLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await NoticesRequest(noticesLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return {
// 				data: response.response.data.noticias,
// 				httpcode: "200",
// 			};
// 		case 201:
// 			return {
// 				data: response.response.data.noticias,
// 				httpcode: "201",
// 			};
// 		case 400:
// 			return {
// 				httpcode: "400",
// 			};
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			NoticesController(noticesLabel);
// 			return {
// 				httpcode: "401",
// 			};
// 		case 403:
// 			return {
// 				httpcode: "403",
// 			};
// 		default:
// 			return {
// 				error: "error",
// 			};
// 	}
// };

// // WS025
// export const NoticeController = async (noticeLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await NoticeRequest(noticeLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return {
// 				data: response.response.data,
// 				httpcode: "200",
// 			};
// 		case 201:
// 			return {
// 				data: response.response.data,
// 				httpcode: "201",
// 			};
// 		case 400:
// 			return {
// 				httpcode: "400",
// 			};
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			NoticeController(noticeLabel);
// 			return {
// 				httpcode: "401",
// 			};
// 		case 403:
// 			return {
// 				httpcode: "403",
// 			};
// 		default:
// 			return {
// 				error: "error",
// 			};
// 	}
// };

// export const TrailsController = async (trailsLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await TrailsRequest(trailsLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return {
// 				data: response.response.data.trilhas,
// 				httpcode: "200",
// 			};
// 		case 201:
// 			return {
// 				data: response.response.data.trilhas,
// 				httpcode: "201",
// 			};
// 		case 400:
// 			return {
// 				httpcode: "400",
// 			};
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			TrailsController(trailsLabel);
// 			return {
// 				httpcode: "401",
// 			};
// 		case 403:
// 			return {
// 				httpcode: "403",
// 			};
// 		default:
// 			return {
// 				error: "error",
// 			};
// 	}
// };

// export const TrailController = async (trailLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await TrailRequest(trailLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return {
// 				data: response.response.data,
// 				httpcode: "200",
// 			};
// 		case 201:
// 			return {
// 				data: response.response.data,
// 				httpcode: "201",
// 			};
// 		case 400:
// 			return {
// 				httpcode: "400",
// 			};
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			TrailController(trailLabel);
// 			return {
// 				httpcode: "401",
// 			};
// 		case 403:
// 			return {
// 				httpcode: "403",
// 			};
// 		default:
// 			return {
// 				error: "error",
// 			};
// 	}
// };

// export const ContentController = async (contentLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await ContentRequest(contentLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return {
// 				data: response.response.data,
// 				httpcode: "200",
// 			};
// 		case 201:
// 			return {
// 				data: response.response.data,
// 				httpcode: "201",
// 			};
// 		case 400:
// 			return {
// 				httpcode: "400",
// 			};
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			ContentController(contentLabel);
// 			return {
// 				httpcode: "401",
// 			};
// 		case 403:
// 			return {
// 				httpcode: "403",
// 			};
// 		default:
// 			return {
// 				error: "error",
// 			};
// 	}
// };

// export const AcceptContractController = async (acceptContractLabel) => {
// 	const ApiTokenValid = await CheckAuthRequest();
// 	if (!ApiTokenValid) return "error";
// 	const response = await AcceptContractRequest(acceptContractLabel);
// 	switch (response.httpcode) {
// 		case 200:
// 			return "200";
// 		case 202:
// 			localStorage.setItem(
// 				"ErrorMessage",
// 				response.response.data.message
// 			);
// 			return "202";
// 		case 401:
// 			localStorage.removeItem("ApiToken");
// 			AcceptContractController(acceptContractLabel);
// 			return "401";
// 		case 403:
// 			localStorage.setItem(
// 				"ErrorMessage",
// 				response.response.data.message
// 			);
// 			return "403";
// 		default:
// 			return "error";
// 	}
// };
