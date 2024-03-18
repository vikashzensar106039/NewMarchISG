$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/ActiveTransactionProviderList.feature");
formatter.feature({
  "name": "ActiveTransactionProviderList",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able to add In Process provider#\u003cDataSetName\u003e",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to see In Process provider \u0026 add provider",
  "keyword": "And "
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
        "ProviderList"
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
  "name": "Verify user able to add In Process provider#ProviderList",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.user_will_able_to_click_view_provider_list()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser will be redirected to provider list \u003d  Provider list");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to see In Process provider \u0026 add provider",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.able_to_see_In_Process_provider_add_provider()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});