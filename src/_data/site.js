module.exports = {
	title: "DB S&S Tools",
	description: "TIM Tool für DB Station&service AG",
	caption: "TIM",
	version : "0.6.100",
	mail: "SuS.Gebaeudeautomation@deutschebahn.com",

	url : {
		home: "/",
		main: "https://www.deutschebahn.com/de/konzern/konzernprofil/Konzernunternehmen/db_station_service_ag-6879530",
		impressum: "https://www.deutschebahn.com/de/impressum",
		info: "https://www.deutschebahn.com/de/konzern/konzernprofil/Konzernunternehmen/db_station_service_ag-6879530",
		this: "https://tim.ga.itbf.db.de"
	},
	author: {
		name: "DB Station&Service AG",
		year: 2023,
		hide: true,
		mail: "michael.stumpp@deutschebahn.com",
		code: "&#x6d;&#x69;&#x63;&#x68;&#x61;&#x65;&#x6c;&#x2e;&#x73;&#x74;&#x75;&#x6d;&#x70;&#x70;&#x40;&#x64;&#x65;&#x75;&#x74;&#x73;&#x63;&#x68;&#x65;&#x62;&#x61;&#x68;&#x6e;&#x2e;&#x63;&#x6f;&#x6d;"
	}, 

	env: process.env.ELEVENTY_ENV === 'production'
}
