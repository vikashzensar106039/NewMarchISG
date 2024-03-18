$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/ActiveTransactionProjectContact.feature");
formatter.feature({
  "name": "ActiveTransactionProjectContact",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able add Client to Project contact list #\u003cDataSetName\u003e",
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
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Pronouns",
  "keyword": "Then "
});
formatter.step({
  "name": "Select job Tittle",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Project Responsibilties",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Member",
  "keyword": "Then "
});
formatter.step({
  "name": "Add mobile and Click on save Contact",
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
        "AddContact"
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
  "name": "Verify user able add Client to Project contact list #AddContact",
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
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Pronouns",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select job Tittle",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Project Responsibilties",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.user_Select_Project_Responsibilties()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the Member",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.user_Add_Email_Address_for_the_Member()"
});
formatter.embedding("image/png", "embedded10.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Email Address");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add mobile and Click on save Contact",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.user_Add_mobile_and_Click_on_save_Contact()"
});
formatter.embedding("image/png", "embedded11.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Mobile Number");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able add Client to Project contact list after adding only Required field #\u003cDataSetName\u003e",
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
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Member and Click on save Contact",
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
        "AddContact"
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
  "name": "Verify user able add Client to Project contact list after adding only Required field #AddContact",
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
formatter.embedding("image/png", "embedded12.png");
formatter.embedding("image/png", "embedded13.png");
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
formatter.embedding("image/png", "embedded14.png");
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
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded17.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the Member and Click on save Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_for_the_Member_and_Click_on_save_Contact()"
});
formatter.embedding("image/png", "embedded19.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Email Address");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able add Lead Attorney to Project contact list #\u003cDataSetName\u003e",
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
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Lead Attorney Pronouns",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Job tittle of lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add mobile for Lead Attorney and Click on save Contact",
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
        "AddContact"
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
  "name": "Verify user able add Lead Attorney to Project contact list #AddContact",
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
formatter.embedding("image/png", "embedded20.png");
formatter.embedding("image/png", "embedded21.png");
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
formatter.embedding("image/png", "embedded22.png");
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
formatter.embedding("image/png", "embedded23.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded24.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_the_new_Lead_Attorney()"
});
formatter.embedding("image/png", "embedded25.png");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[contains(@class,\u0027btn primary-btn-m-icon-text add-contact-btn ng-star-inserted\u0027)]\"}\n  (Session info: chrome\u003d122.0.6261.128)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.128, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:49912}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1bbecda55245320f8ac56ce89478551d\n*** Element info: {Using\u003dxpath, value\u003d//button[contains(@class,\u0027btn primary-btn-m-icon-text add-contact-btn ng-star-inserted\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor90.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy21.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy24.isDisplayed(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.waitForElement(GlobalFunction.java:1677)\r\n\tat com.zensar.pageobjects.ProjectContact.AddLeadAttorney(ProjectContact.java:241)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.add_the_new_Lead_Attorney(ActiveTransactionProjectContactStepDefinitions.java:96)\r\n\tat ✽.Add the new Lead Attorney(src/main/java/com/zensar/features/ActiveTransactionProjectContact.feature:45)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Lead_Attorney_First_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Add_Lead_Attorney_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Lead Attorney Pronouns",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Lead_Attorney_Pronouns()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Lead_Attorney_Legal_firm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Job tittle of lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Job_tittle_of_lead_Attorney()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_for_the_Lead_Attorney()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add mobile for Lead Attorney and Click on save Contact",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_mobile_for_Lead_Attorney_and_Click_on_save_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able add Lead Attorney to Project contact list After adding only required field #\u003cDataSetName\u003e",
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
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney and click on save contact",
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
        "AddContact"
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
  "name": "Verify user able add Lead Attorney to Project contact list After adding only required field #AddContact",
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
formatter.embedding("image/png", "embedded26.png");
formatter.embedding("image/png", "embedded27.png");
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
formatter.embedding("image/png", "embedded28.png");
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
formatter.embedding("image/png", "embedded29.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded30.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_the_new_Lead_Attorney()"
});
formatter.embedding("image/png", "embedded31.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Lead_Attorney_First_Name()"
});
formatter.embedding("image/png", "embedded32.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney first Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Add_Lead_Attorney_Last_Name()"
});
formatter.embedding("image/png", "embedded33.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Lead_Attorney_Legal_firm()"
});
formatter.embedding("image/png", "embedded34.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney and click on save contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Add_Email_Address_for_the_Lead_Attorney_and_click_on_save_contact()"
});
formatter.embedding("image/png", "embedded35.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Email Address");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});