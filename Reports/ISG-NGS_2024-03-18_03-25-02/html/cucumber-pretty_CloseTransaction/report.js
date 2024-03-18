$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/CloseTransaction.feature");
formatter.feature({
  "name": "CloseTransaction",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able Check close Transaction #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Close Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on View all Close Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User Clicks on First close Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to verify close transaction message",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to verify Project overview in read only mode",
  "keyword": "Then "
});
formatter.step({
  "name": "User able on go to Project contact Details",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to verify Add contact \u0026 view button",
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
        "CloseTransaction"
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
  "name": "Verify user able Check close Transaction #CloseTransaction",
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
  "name": "Verify for Close Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseTransactionStepDefinitions.Verify_for_Close_Transaction()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Close Transaction \u003d  Closed transactions (1)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on View all Close Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseTransactionStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn secondary-icon-btn-m view-all-transaction ng-star-inserted\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.128)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.128, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51006}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4977dea2ef41ae68d197ae1fe5ac7186\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn secondary-icon-btn-m view-all-transaction ng-star-inserted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor90.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy21.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy24.isDisplayed(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.waitForElement(GlobalFunction.java:1677)\r\n\tat com.zensar.pageobjects.CloseTransaction.viewAllClose(CloseTransaction.java:49)\r\n\tat com.zensar.stepDefinations.CloseTransactionStepDefinitions.user_clicks_on_set_up_Project_icon(CloseTransactionStepDefinitions.java:32)\r\n\tat ✽.User clicks on View all Close Transaction(src/main/java/com/zensar/features/CloseTransaction.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Clicks on First close Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseTransactionStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Able to verify close transaction message",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseTransactionStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Able to verify Project overview in read only mode",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseTransactionStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User able on go to Project contact Details",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseTransactionStepDefinitions.select_Anticipated_award_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Able to verify Add contact \u0026 view button",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseTransactionStepDefinitions.select_Competitive_Project()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});