$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/ProjectContact.feature");
formatter.feature({
  "name": "ProjectContact",
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
  "status": "passed"
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Lead_Attorney_First_Name()"
});
formatter.embedding("image/png", "embedded26.png");
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
formatter.embedding("image/png", "embedded27.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Lead Attorney Pronouns",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Lead_Attorney_Pronouns()"
});
formatter.embedding("image/png", "embedded28.png");
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
formatter.embedding("image/png", "embedded29.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Job tittle of lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Job_tittle_of_lead_Attorney()"
});
formatter.embedding("image/png", "embedded30.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_for_the_Lead_Attorney()"
});
formatter.embedding("image/png", "embedded31.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Email Address");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add mobile for Lead Attorney and Click on save Contact",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_mobile_for_Lead_Attorney_and_Click_on_save_Contact()"
});
formatter.embedding("image/png", "embedded32.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Mobile Number");
formatter.result({
  "status": "passed"
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
formatter.embedding("image/png", "embedded33.png");
formatter.embedding("image/png", "embedded34.png");
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
formatter.embedding("image/png", "embedded35.png");
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
formatter.embedding("image/png", "embedded36.png");
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
formatter.embedding("image/png", "embedded37.png");
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
formatter.embedding("image/png", "embedded38.png");
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
formatter.embedding("image/png", "embedded39.png");
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
formatter.embedding("image/png", "embedded40.png");
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
formatter.embedding("image/png", "embedded41.png");
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
formatter.embedding("image/png", "embedded42.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Email Address");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able add Client Lead to Project contact list  #\u003cDataSetName\u003e",
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
  "name": "Select Project Role as Client lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Client Lead and Click on save Contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Confirm for the new client lead",
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
  "name": "Verify user able add Client Lead to Project contact list  #AddContact",
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
formatter.embedding("image/png", "embedded43.png");
formatter.embedding("image/png", "embedded44.png");
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
formatter.embedding("image/png", "embedded45.png");
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
formatter.embedding("image/png", "embedded46.png");
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
formatter.embedding("image/png", "embedded47.png");
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
formatter.embedding("image/png", "embedded48.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Project Role as Client lead",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Project_Role_Client_lead()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser role as client lead is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the Client Lead and Click on save Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_for_Member_save_Contact()"
});
formatter.embedding("image/png", "embedded49.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Email Address");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm for the new client lead",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.confirm_new_client_lead()"
});
formatter.embedding("image/png", "embedded50.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able view removed contact in contact list  #\u003cDataSetName\u003e",
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
  "name": "Click on show removed contact",
  "keyword": "Then "
});
formatter.step({
  "name": "check view option in removed contact",
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
  "name": "Verify user able view removed contact in contact list  #AddContact",
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
formatter.embedding("image/png", "embedded51.png");
formatter.embedding("image/png", "embedded52.png");
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
formatter.embedding("image/png", "embedded53.png");
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
formatter.embedding("image/png", "embedded54.png");
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
formatter.embedding("image/png", "embedded55.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on show removed contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.click_show_removed_contact()"
});
formatter.embedding("image/png", "embedded56.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check view option in removed contact",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.check_view_option_in_removed_contact()"
});
formatter.embedding("image/png", "embedded57.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able view ISG Contact \u0026 add Project responsibilities  #\u003cDataSetName\u003e",
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
  "name": "Click on isg contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify for Project Responsibilities \u0026 data room owner role",
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
  "name": "Verify user able view ISG Contact \u0026 add Project responsibilities  #AddContact",
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
formatter.embedding("image/png", "embedded58.png");
formatter.embedding("image/png", "embedded59.png");
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
formatter.embedding("image/png", "embedded60.png");
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
formatter.embedding("image/png", "embedded61.png");
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
formatter.embedding("image/png", "embedded62.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on isg contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.click_isg_contact()"
});
formatter.embedding("image/png", "embedded63.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Project Responsibilities \u0026 data room owner role",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_Project_Responsibilities_data_room_owner_role()"
});
formatter.embedding("image/png", "embedded64.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser responsibilities for ISG contact is selected");
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy21.perform(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.perform(EventFiringWebDriver.java:360)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.zensar.scriptutils.GlobalFunction.click(GlobalFunction.java:408)\r\n\tat com.zensar.pageobjects.ProjectContact.ProjectResponsDataRole(ProjectContact.java:371)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.verify_Project_Responsibilities_data_room_owner_role(ActiveTransactionProjectContactStepDefinitions.java:164)\r\n\tat ✽.Verify for Project Responsibilities \u0026 data room owner role(src/main/java/com/zensar/features/ProjectContact.feature:107)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\t\tat com.sun.proxy.$Proxy21.perform(Unknown Source)\r\n\t\tat org.openqa.selenium.support.events.EventFiringWebDriver.perform(EventFiringWebDriver.java:360)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat com.zensar.scriptutils.GlobalFunction.click(GlobalFunction.java:408)\r\n\t\tat com.zensar.pageobjects.ProjectContact.ProjectResponsDataRole(ProjectContact.java:371)\r\n\t\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.verify_Project_Responsibilities_data_room_owner_role(ActiveTransactionProjectContactStepDefinitions.java:164)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\t\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\t\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\t\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\t\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\t\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\t\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\t\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\t\tat com.zensar.runner.ProjectContact.feature(ProjectContact.java:37)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\t\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\t\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\t\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\t\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\t\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\t\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\t\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\t\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\t\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\r\n\t\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\r\n\t\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\t\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\t\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\t\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\t\tat java.lang.Thread.run(Thread.java:748)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy21.perform(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.perform(EventFiringWebDriver.java:360)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.zensar.scriptutils.GlobalFunction.click(GlobalFunction.java:408)\r\n\tat com.zensar.pageobjects.ProjectContact.ProjectResponsDataRole(ProjectContact.java:371)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.verify_Project_Responsibilities_data_room_owner_role(ActiveTransactionProjectContactStepDefinitions.java:164)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat com.zensar.runner.ProjectContact.feature(ProjectContact.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//label[@class\u003d\u0027checkBox dro-cb ng-star-inserted\u0027]//input[@type\u003d\u0027checkbox\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.128)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.128, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53364}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9266731ba248af6a9ed00a8ae79a211f\n*** Element info: {Using\u003dxpath, value\u003d//label[@class\u003d\u0027checkBox dro-cb ng-star-inserted\u0027]//input[@type\u003d\u0027checkbox\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor90.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy21.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy24.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 68 more\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user not able to remove ISG Contact  #\u003cDataSetName\u003e",
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
  "name": "Click on isg contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify there is no remove contact button",
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
  "name": "Verify user not able to remove ISG Contact  #AddContact",
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
formatter.embedding("image/png", "embedded65.png");
formatter.embedding("image/png", "embedded66.png");
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
formatter.embedding("image/png", "embedded67.png");
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
formatter.embedding("image/png", "embedded68.png");
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
formatter.embedding("image/png", "embedded69.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on isg contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.click_isg_contact()"
});
formatter.embedding("image/png", "embedded70.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify there is no remove contact button",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_remove_contact_button()"
});
formatter.write("[INFO]\t[Assertion Pass]\tRemove button is not there for ISG Contact");
formatter.embedding("image/png", "embedded71.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user can edit Project responsibilities and assign as data room owner for ISG Contact  #\u003cDataSetName\u003e",
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
  "name": "Click on isg contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on edit contact button",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Project Responsibilties",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify and click on save contact button",
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
  "name": "Verify user can edit Project responsibilities and assign as data room owner for ISG Contact  #AddContact",
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
formatter.embedding("image/png", "embedded72.png");
formatter.embedding("image/png", "embedded73.png");
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
formatter.embedding("image/png", "embedded74.png");
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
formatter.embedding("image/png", "embedded75.png");
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
formatter.embedding("image/png", "embedded76.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on isg contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.click_isg_contact()"
});
formatter.embedding("image/png", "embedded77.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on edit contact button",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Click_on_edit_contact_button()"
});
formatter.embedding("image/png", "embedded78.png");
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
formatter.embedding("image/png", "embedded79.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify and click on save contact button",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Verify_and_click_on_save_contact_button()"
});
formatter.embedding("image/png", "embedded80.png");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn primary-btn-large saveFormsDetails ng-star-inserted\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.128)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.128, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53706}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ce8319c677c1b86675df11b29ee071ce\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn primary-btn-large saveFormsDetails ng-star-inserted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor90.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy21.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy24.isDisplayed(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.waitForElement(GlobalFunction.java:1677)\r\n\tat com.zensar.pageobjects.ProjectContact.saveContactButton(ProjectContact.java:151)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.Verify_and_click_on_save_contact_button(ActiveTransactionProjectContactStepDefinitions.java:44)\r\n\tat ✽.Verify and click on save contact button(src/main/java/com/zensar/features/ProjectContact.feature:132)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user can not add duplicate contact #\u003cDataSetName\u003e",
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
  "name": "Add Email Address for the Member and Click on save Contact for Duplicate",
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
  "name": "Verify user can not add duplicate contact #AddContact",
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
formatter.embedding("image/png", "embedded81.png");
formatter.embedding("image/png", "embedded82.png");
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
formatter.embedding("image/png", "embedded83.png");
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
formatter.embedding("image/png", "embedded84.png");
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
formatter.embedding("image/png", "embedded85.png");
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
formatter.embedding("image/png", "embedded86.png");
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
formatter.embedding("image/png", "embedded87.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the Member and Click on save Contact for Duplicate",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_Member_Click_on_save_Contact()"
});
formatter.embedding("image/png", "embedded88.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Member Email Address");
formatter.write("[INFO]\t[Assertion Pass]\tEmail is duplicate");
formatter.embedding("image/png", "embedded89.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user can not add ISG contact #\u003cDataSetName\u003e",
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
  "name": "Add Email Address for the ISG and Click on save Contact",
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
  "name": "Verify user can not add ISG contact #AddContact",
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
formatter.embedding("image/png", "embedded90.png");
formatter.embedding("image/png", "embedded91.png");
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
formatter.embedding("image/png", "embedded92.png");
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
formatter.embedding("image/png", "embedded93.png");
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
formatter.embedding("image/png", "embedded94.png");
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
formatter.embedding("image/png", "embedded95.png");
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
formatter.embedding("image/png", "embedded96.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the ISG and Click on save Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_ISG_Click_save_Contact()"
});
formatter.embedding("image/png", "embedded97.png");
formatter.write("[INFO]\t[Assertion Pass]\tISG team members can only be added via the corresponding OneSys project.");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user can not add duplicate attorney #\u003cDataSetName\u003e",
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
  "name": "Add Email Address for the Attorney and Click on save Contact",
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
  "name": "Verify user can not add duplicate attorney #AddContact",
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
formatter.embedding("image/png", "embedded98.png");
formatter.embedding("image/png", "embedded99.png");
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
formatter.embedding("image/png", "embedded100.png");
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
formatter.embedding("image/png", "embedded101.png");
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
formatter.embedding("image/png", "embedded102.png");
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
formatter.embedding("image/png", "embedded103.png");
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
formatter.embedding("image/png", "embedded104.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Email Address for the Attorney and Click on save Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_Attorney_Click_save_Contact()"
});
formatter.embedding("image/png", "embedded105.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Attorney Email Address");
formatter.write("[INFO]\t[Assertion Pass]\tEmail is duplicate");
formatter.embedding("image/png", "embedded106.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});