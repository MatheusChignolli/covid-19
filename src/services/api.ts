import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/',
});

export const githubApi = 'https://devarthurribeiro.github.io/';

export const countryFlagsUrl = 'https://www.countryflags.io/';

// import API from "./API";

// // WS006
// export const CadCidadeRequest = async (cidadeLabel) => {
// 	return new Promise(async function (resolve, reject) {
// 		API.post("/cadastrar-cidade-atuacao", cidadeLabel, {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: "Bearer " + localStorage.getItem("ApiToken"),
// 			},
// 		})
// 			.then((response) => {
// 				let responseObject = {
// 					httpcode: response.status,
// 					response: response,
// 				};
// 				resolve(responseObject);
// 			})s
// 			.catch((error) => {
// 				let responseObject;
// 				if (error.response !== undefined) {
// 					responseObject = {
// 						httpcode: error.response.status,
// 						response: error.response,
// 					};
// 				} else {
// 					responseObject = {
// 						httpcode: "error",
// 						response: "error",
// 					};
// 				}
// 				resolve(responseObject);
// 			});
// 	});
// };

// // WS008
// export const CadHorarioRequest = async (horasLabel) => {
// 	return new Promise(async function (resolve, reject) {
// 		API.post(
// 			"/cadastrar-horario-atuacao",
// 			{
// 				idusuario: horasLabel.idusuario,
// 				dommanha: horasLabel.dommanha,
// 				domtarde: horasLabel.domtarde,
// 				segmanha: horasLabel.segmanha,
// 				segtarde: horasLabel.segtarde,
// 				termanha: horasLabel.termanha,
// 				tertarde: horasLabel.tertarde,
// 				quamanha: horasLabel.quamanha,
// 				quatarde: horasLabel.quatarde,
// 				quimanha: horasLabel.quimanha,
// 				quitarde: horasLabel.quitarde,
// 				sexmanha: horasLabel.sexmanha,
// 				sextarde: horasLabel.sextarde,
// 				sabmanha: horasLabel.sabmanha,
// 				sabtarde: horasLabel.sabtarde,
// 				atendeferiado: horasLabel.atendeferiado,
// 				fermanha: horasLabel.fermanha,
// 				fertarde: horasLabel.fertarde,
// 			},
// 			{
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: "Bearer " + localStorage.getItem("ApiToken"),
// 				},
// 			}
// 		)
// 			.then((response) => {
// 				let responseObject = {
// 					httpcode: response.status,
// 					response: response,
// 				};
// 				resolve(responseObject);
// 			})
// 			.catch((error) => {
// 				let responseObject;
// 				if (error.response !== undefined) {
// 					responseObject = {
// 						httpcode: error.response.status,
// 						response: error.response,
// 					};
// 				} else {
// 					responseObject = {
// 						httpcode: "error",
// 						response: "error",
// 					};
// 				}
// 				resolve(responseObject);
// 			});
// 	});
// };

// // WS006
// export const ConsultCityRequest = async (cityLabel) => {
// 	return new Promise(async function (resolve, reject) {
// 		API.post("/consultar-cidade", cityLabel, {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: "Bearer " + localStorage.getItem("ApiToken"),
// 			},
// 		})
// 			.then((response) => {
// 				let responseObject = {
// 					httpcode: response.status,
// 					response: response,
// 				};
// 				resolve(responseObject);
// 			})
// 			.catch((error) => {
// 				let responseObject;
// 				if (error.response !== undefined) {
// 					responseObject = {
// 						httpcode: error.response.status,
// 						response: error.response,
// 					};
// 				} else {
// 					responseObject = {
// 						httpcode: "error",
// 						response: "error",
// 					};
// 				}
// 				resolve(responseObject);
// 			});
// 	});
// };
