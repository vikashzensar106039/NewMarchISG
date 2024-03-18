$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/ActiveTransaction.feature");
formatter.feature({
  "name": "ActiveTransaction",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able Update project Overview #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User Updates Project Overview",
  "keyword": "Then "
});
formatter.step({
  "name": "Validate for anticipated award date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select for Competitive project",
  "keyword": "Then "
});
formatter.step({
  "name": "Select primary objevtives for sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Check for contract signed date",
  "keyword": "Then "
});
formatter.step({
  "name": "select contract duration in a years",
  "keyword": "And "
});
formatter.step({
  "name": "Select type of automation of the project",
  "keyword": "And "
});
formatter.step({
  "name": "Select Cloud strategy",
  "keyword": "Then "
});
formatter.step({
  "name": "Select the Application Included",
  "keyword": "And "
});
formatter.step({
  "name": "What provider do well",
  "keyword": "Then "
});
formatter.step({
  "name": "What improvements you suggest for their future pursuits and save",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "ValidLogin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user able Update project Overview #ValidLogin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Updates Project Overview",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.user_Updates_Project_Overview()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate for anticipated award date",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.validate_for_anticipated_award_date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select for Competitive project",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.select_for_Competitive_project()"
});
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select primary objevtives for sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.Select_primary_objevtives_for_sourcing()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check for contract signed date",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.check_for_contract_signed_date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tContract sign date is selected");
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select contract duration in a years",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.select_contract_duration_years()"
});
formatter.write("[INFO]\t[Assertion Pass]\tContract duration is Updated");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select type of automation of the project",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.select_type_automation_project()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Cloud strategy",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.select_Cloud_strategy()"
});
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the Application Included",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.Select_Application_Included()"
});
formatter.embedding("image/png", "embedded11.png");
formatter.write("[INFO]\t[Assertion Pass]\tApplication included are selected");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "What provider do well",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.what_provider_well()"
});
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "What improvements you suggest for their future pursuits and save",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.what_improvements_suggest_future_pursuits_save()"
});
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify project Overview maximum character set #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User Validates for Maximum Character in Project Overview",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "ValidLogin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify project Overview maximum character set #ValidLogin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded15.png");
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded17.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Validates for Maximum Character in Project Overview",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.user_Validates_Maximum_Character_Project_Overview()"
});
formatter.embedding("image/png", "embedded19.png");
formatter.embedding("image/png", "embedded20.png");
formatter.embedding("image/png", "embedded21.png");
formatter.write("[INFO]\t[Assertion Pass]\tThere is a limit of 500 Characters");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify client not able Update project Overview #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG as Client",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User not able to Update Project Overview",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "ValidLogin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify client not able Update project Overview #ValidLogin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG as Client",
  "keyword": "When "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.user_logs_in_to_ISG_as_Client()"
});
formatter.embedding("image/png", "embedded22.png");
formatter.embedding("image/png", "embedded23.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded24.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (3)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded25.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User not able to Update Project Overview",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.User_not_able_to_Update_Project_Overview()"
});
formatter.write("[INFO]\t[Assertion Pass]\tedit button is not present");
formatter.embedding("image/png", "embedded26.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify What did the provider/Carrier do well maximum character set #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User Validates for Maximum Character in What did the provider/Carrier do well \u0026 Save",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "ValidLogin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify What did the provider/Carrier do well maximum character set #ValidLogin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded27.png");
formatter.embedding("image/png", "embedded28.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded29.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded30.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Validates for Maximum Character in What did the provider/Carrier do well \u0026 Save",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.maximum_Character_Provider()"
});
formatter.embedding("image/png", "embedded31.png");
formatter.embedding("image/png", "embedded32.png");
formatter.embedding("image/png", "embedded33.png");
formatter.embedding("image/png", "embedded34.png");
formatter.write("[INFO]\t[Assertion Pass]\tThere is a limit of 500 Characters");
formatter.embedding("image/png", "embedded35.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify What improvements would you suggest for their future pursuits for maximum character set #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User Validates for Maximum Character in What improvements would you suggest for their future pursuits \u0026 save",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "ValidLogin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify What improvements would you suggest for their future pursuits for maximum character set #ValidLogin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded36.png");
formatter.embedding("image/png", "embedded37.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded38.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded39.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Validates for Maximum Character in What improvements would you suggest for their future pursuits \u0026 save",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionStepDefinitions.maximum_Character_future_prospects()"
});
formatter.embedding("image/png", "embedded40.png");
formatter.embedding("image/png", "embedded41.png");
formatter.embedding("image/png", "embedded42.png");
formatter.write("[INFO]\t[Assertion Pass]\tThere is a limit of 500 Characters");
formatter.embedding("image/png", "embedded43.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});