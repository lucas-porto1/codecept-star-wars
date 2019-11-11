exports.config = {
	tests: "./*/*_test.js",
	output: "./output",
	helpers: {
		REST: {
		//	timeout:"100000",  -- Retirar o comentário, caso tenha problema de timeout. A API também pode estar indisponível, verifique antes..
			endpoint: "https://swapi.co",
			onRequest: () => {
				//request.headers.auth = "123";
			}
		}
	},
	include: {},
	bootstrap: null,
	mocha: {
		reporterOptions: {
			reportDir: "output",
			uniqueScreenshotNames: true
		}
	},
	name: "starwars-codeceptjs-lpg",
	plugins: {
		allure: {
			outputDir: "report",
			enabled: true
		}
	}
};