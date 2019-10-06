import * as reporter from "cucumber-html-reporter";

const options = {
    // theme: "bootstrap", hierarchy
    theme: "hierarchy",
    jsonFile: "./e2e/Reports/Cucumber.json",
    output: "./e2e/Reports/Report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "UserManagement Version": "1.0.0",
        "Test Environment": "STAGING",
    }
};

reporter.generate(options);
