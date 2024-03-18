$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/SetupProject.feature");
formatter.feature({
  "name": "SetupProject",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
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
  "name": "Verify user able to Setup new Project #ValidLogin",
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
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Set up Project notification \u003d  3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.embedding("image/png", "embedded4.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to Project setup page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tProject Number for the Project \u003d  8018122");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME Ventures");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME NGS Train 98");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Kathy Rudy");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Sourcing 3 Next Gen");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  01 Mar 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  11 Jun 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  USA");
formatter.embedding("image/png", "embedded5.png");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Consumer Services");
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to project overview page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.write("[INFO]\t[Assertion Pass]\tCompetitive Project is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.write("[INFO]\t[Assertion Pass]\tPrimary Objective value is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.embedding("image/png", "embedded10.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to add client lead page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.embedding("image/png", "embedded11.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Lead Email ID");
formatter.embedding("image/png", "embedded12.png");
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project with Projet Overview validation #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview for 5000 Chracter check",
  "keyword": "And "
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
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
  "name": "Verify user able to Setup new Project with Projet Overview validation #ValidLogin",
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
formatter.embedding("image/png", "embedded14.png");
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Set up Project notification \u003d  3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded17.png");
formatter.embedding("image/png", "embedded18.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to Project setup page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tProject Number for the Project \u003d  8018122");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME Ventures");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME NGS Train 98");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Kathy Rudy");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Sourcing 3 Next Gen");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  01 Mar 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  11 Jun 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  USA");
formatter.embedding("image/png", "embedded19.png");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Consumer Services");
formatter.embedding("image/png", "embedded20.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview for 5000 Chracter check",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview_5000_Chracter_check()"
});
formatter.embedding("image/png", "embedded21.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to project overview page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded22.png");
formatter.write("[INFO]\t[Assertion Pass]\tCompetitive Project is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded23.png");
formatter.write("[INFO]\t[Assertion Pass]\tPrimary Objective value is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.embedding("image/png", "embedded24.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to add client lead page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.embedding("image/png", "embedded25.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Lead Email ID");
formatter.embedding("image/png", "embedded26.png");
formatter.embedding("image/png", "embedded27.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project with first name validation #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Client First Name Validation and enter Last Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
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
  "name": "Verify user able to Setup new Project with first name validation #ValidLogin",
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
formatter.embedding("image/png", "embedded28.png");
formatter.embedding("image/png", "embedded29.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.embedding("image/png", "embedded30.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Set up Project notification \u003d  3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded31.png");
formatter.embedding("image/png", "embedded32.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to Project setup page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tProject Number for the Project \u003d  8018122");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME Ventures");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME NGS Train 98");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Kathy Rudy");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Sourcing 3 Next Gen");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  01 Mar 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  11 Jun 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  USA");
formatter.embedding("image/png", "embedded33.png");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Consumer Services");
formatter.embedding("image/png", "embedded34.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded35.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to project overview page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded36.png");
formatter.write("[INFO]\t[Assertion Pass]\tCompetitive Project is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded37.png");
formatter.write("[INFO]\t[Assertion Pass]\tPrimary Objective value is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.embedding("image/png", "embedded38.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to add client lead page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Client First Name Validation and enter Last Name",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Enter_Client_First_Name_Validation_and_enter_Last_Name()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect first Name with Number");
formatter.write("[INFO]\t[Assertion Pass]\tNumbers are not allowed in this field.\nActual:Numbers are not allowed in this field.\nExpectedNumbers are not allowed in this field.");
formatter.embedding("image/png", "embedded39.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect first Name with Space");
formatter.write("[INFO]\t[Assertion Pass]\tFirst name is required.\nActual:First name is required.\nExpectedFirst name is required.");
formatter.embedding("image/png", "embedded40.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect first Name with more than 100 Characters");
formatter.write("[INFO]\t[Assertion Pass]\tMaximum 100 characters are allowed.\nActual:Maximum 100 characters are allowed.\nExpectedMaximum 100 characters are allowed.");
formatter.embedding("image/png", "embedded41.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect first Name with Special Character");
formatter.write("[INFO]\t[Assertion Pass]\tSpecial characters are not allowed in this field.\nActual:Special characters are not allowed in this field.\nExpectedSpecial characters are not allowed in this field.");
formatter.embedding("image/png", "embedded42.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect first Name with blank space");
formatter.write("[INFO]\t[Assertion Pass]\tFirst name is required.\nActual:First name is required.\nExpectedFirst name is required.");
formatter.embedding("image/png", "embedded43.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Lead Email ID");
formatter.embedding("image/png", "embedded44.png");
formatter.embedding("image/png", "embedded45.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project with last name validation #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Client First Name and enter Last Name with validation",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
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
  "name": "Verify user able to Setup new Project with last name validation #ValidLogin",
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
formatter.embedding("image/png", "embedded46.png");
formatter.embedding("image/png", "embedded47.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.embedding("image/png", "embedded48.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Set up Project notification \u003d  3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded49.png");
formatter.embedding("image/png", "embedded50.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to Project setup page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tProject Number for the Project \u003d  8018122");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME Ventures");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME NGS Train 98");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Kathy Rudy");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Sourcing 3 Next Gen");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  01 Mar 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  11 Jun 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  USA");
formatter.embedding("image/png", "embedded51.png");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Consumer Services");
formatter.embedding("image/png", "embedded52.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded53.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to project overview page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded54.png");
formatter.write("[INFO]\t[Assertion Pass]\tCompetitive Project is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded55.png");
formatter.write("[INFO]\t[Assertion Pass]\tPrimary Objective value is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.embedding("image/png", "embedded56.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to add client lead page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Client First Name and enter Last Name with validation",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Enter_Client_First_Name_and_enter_Last_Name_with_validation()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.embedding("image/png", "embedded57.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect last Name with Number");
formatter.embedding("image/png", "embedded58.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumbers are not allowed in this field.\nActual:Numbers are not allowed in this field.\nExpectedNumbers are not allowed in this field.");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect last Name with Space");
formatter.embedding("image/png", "embedded59.png");
formatter.write("[INFO]\t[Assertion Pass]\tLast name is required.\nActual:Last name is required.\nExpectedLast name is required.");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect last Name with more than 100 character");
formatter.embedding("image/png", "embedded60.png");
formatter.write("[INFO]\t[Assertion Pass]\tMaximum 100 characters are allowed.\nActual:Maximum 100 characters are allowed.\nExpectedMaximum 100 characters are allowed.");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect last Name with special character");
formatter.embedding("image/png", "embedded61.png");
formatter.write("[INFO]\t[Assertion Pass]\tSpecial characters are not allowed in this field.\nActual:Special characters are not allowed in this field.\nExpectedSpecial characters are not allowed in this field.");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered incorrect last Name with blank space");
formatter.embedding("image/png", "embedded62.png");
formatter.write("[INFO]\t[Assertion Pass]\tLast name is required.\nActual:Last name is required.\nExpectedLast name is required.");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Lead Email ID");
formatter.embedding("image/png", "embedded63.png");
formatter.embedding("image/png", "embedded64.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project with email validation #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next after validation",
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
  "name": "Verify user able to Setup new Project with email validation #ValidLogin",
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
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.embedding("image/png", "embedded67.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Set up Project notification \u003d  3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded68.png");
formatter.embedding("image/png", "embedded69.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to Project setup page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tProject Number for the Project \u003d  8018122");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME Ventures");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME NGS Train 98");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Kathy Rudy");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Sourcing 3 Next Gen");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  01 Mar 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  11 Jun 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  USA");
formatter.embedding("image/png", "embedded70.png");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Consumer Services");
formatter.embedding("image/png", "embedded71.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded72.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to project overview page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded73.png");
formatter.write("[INFO]\t[Assertion Pass]\tCompetitive Project is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded74.png");
formatter.write("[INFO]\t[Assertion Pass]\tPrimary Objective value is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.embedding("image/png", "embedded75.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to add client lead page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.embedding("image/png", "embedded76.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next after validation",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Add_Client_Lead_Email_Address_click_on_next_after_validation()"
});
formatter.write("[INFO]\t[Assertion Pass]\tCase 2 - Invalid Email address ");
formatter.embedding("image/png", "embedded77.png");
formatter.write("[INFO]\t[Assertion Pass]\tInvalid Email Field Error Validation\nActual:Not a valid email address.\nExpectedNot a valid email address.");
formatter.write("[INFO]\t[Assertion Pass]\tCase 2 - Email field is Blank");
formatter.embedding("image/png", "embedded78.png");
formatter.write("[INFO]\t[Assertion Pass]\tBlank Email Field Error Validation\nActual:Email is required.\nExpectedEmail is required.");
formatter.write("[INFO]\t[Assertion Pass]\tCase 3 - Email field cross character limit");
formatter.embedding("image/png", "embedded79.png");
formatter.write("[INFO]\t[Assertion Pass]\tmaximum character limit Error Validation\nActual:Maximum 255 characters are allowed.\nExpectedMaximum 255 characters are allowed.");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Non Com email Address");
formatter.embedding("image/png", "embedded80.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project with sole source #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select sole source Project \u0026 reason",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
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
  "name": "Verify user able to Setup new Project with sole source #ValidLogin",
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
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.embedding("image/png", "embedded83.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Set up Project notification \u003d  3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded84.png");
formatter.embedding("image/png", "embedded85.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to Project setup page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tProject Number for the Project \u003d  8018122");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME Ventures");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME NGS Train 98");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Kathy Rudy");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Sourcing 3 Next Gen");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  01 Mar 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  11 Jun 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  USA");
formatter.embedding("image/png", "embedded86.png");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Consumer Services");
formatter.embedding("image/png", "embedded87.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded88.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to project overview page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select sole source Project \u0026 reason",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Select_sole_source_Project_and_reason()"
});
formatter.embedding("image/png", "embedded89.png");
formatter.write("[INFO]\t[Assertion Pass]\tSole Source Project is selected");
formatter.embedding("image/png", "embedded90.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded91.png");
formatter.write("[INFO]\t[Assertion Pass]\tPrimary Objective value is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.embedding("image/png", "embedded92.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to add client lead page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.embedding("image/png", "embedded93.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered Lead Email ID");
formatter.embedding("image/png", "embedded94.png");
formatter.embedding("image/png", "embedded95.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user is able to check number of notifications on Home page#\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify and check for number of Notifications",
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
  "name": "Verify user is able to check number of notifications on Home page#ValidLogin",
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
formatter.embedding("image/png", "embedded96.png");
formatter.embedding("image/png", "embedded97.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify and check for number of Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Verify_and_check_for_number_of_Notifications()"
});
formatter.embedding("image/png", "embedded98.png");
formatter.write("[INFO]\t[Assertion Pass]\tShow fewer notifications");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});