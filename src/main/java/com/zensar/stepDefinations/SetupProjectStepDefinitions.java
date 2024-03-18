package com.zensar.stepDefinations;

import com.zensar.pageobjects.IsgLandingPage;
import com.zensar.scriptutils.ScenarioState;
import com.zensar.scriptutils.StepBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SetupProjectStepDefinitions extends StepBase {

	
	IsgLandingPage isgLandingPage;
	

	public SetupProjectStepDefinitions(ScenarioState scenarioState) {
		super(scenarioState);
		
		 isgLandingPage = new IsgLandingPage(getState());
		
		
	}
	
	@When("^user logs in to ISG having more closed transaction$")
	public void user_logs_in_to_ISG_having_more_closed_transaction() throws Throwable {
		closetransaction.loginToISGforClosedTrans();
	}
	
	@Given("^User navigates to ISG Landing Page and Login$")
	public void user_navigates_to_Isg_Landing_Page() throws Throwable {
		isgLandingPage.openISG();
		
	}
	
	@When("^user logs in to ISG$")
	public void user_clicks_on_submit_another_item() throws Throwable {
		isgLandingPage.loginToISG();
	}
	
	@Then("^Verify for Notifications$")
	public void verify_for_Notifications() throws Throwable {
		isgLandingPage.Notification();
	}
	
	
    @Then("^User clicks on set up Project icon$")
	public void user_clicks_on_set_up_Project_icon() throws Throwable {
		isgLandingPage.ClickSetUpProject();
		
	}
    @Then("^User verifies project details & click on next$")
	public void user_verifies_project_details_click_next() throws Throwable {
		isgLandingPage.ProjectDetails();
	}
    
    @And("^Navigate to Project Overview section & add project overview$")
	public void navigate_Project_Overview_section_add_project_overview() throws Throwable {
		isgLandingPage.projectOverview();
	}
    
    @Then("^Clicks on Next & Add Client Lead$")
	public void clicks_on_Next_Add_Client_Lead() throws Throwable {
		isgLandingPage.clientLead();
	}
    
    @Then("^Select Anticipated award Date$")
	public void select_Anticipated_award_Date() throws Throwable {
		isgLandingPage.anticipated();
	}
    
    @Then("^Select Competitive Project$")
	public void select_Competitive_Project() throws Throwable {
		isgLandingPage.competitive();
	}
    
    @Then("^Select Primary objevtives of sourcing$")
	public void select_Primary_objevtives_of_sourcing() throws Throwable {
		isgLandingPage.primaryobjetive();
	}
    
    @Then("^Enter Client First Name & Last Name$")
	public void enter_Client_First_Name_Last_Name() throws Throwable {
		isgLandingPage.firstLastName();
	}
    
    @Then("^Add Client Lead Email Address & click on next$")
	public void add_Client_Lead_Email_Address_click_on_next() throws Throwable {
		isgLandingPage.leadEmail();
	}
    
    @And("^User Navigates to confirm Project setup page & Clicks on Confirm Project Setup$")
	public void user_Navigates_to_confirm_Project_setup_page_Clicks_Confirm_Project_Setup() throws Throwable {
		isgLandingPage.loginToISG();
	}
    
    @And("^Navigate to Project Overview section & add project overview for 5000 Chracter check$")
	public void navigate_Project_Overview_section_add_project_overview_5000_Chracter_check() throws Throwable {
		isgLandingPage.projectOverviewCharcterSet();
	}
    
    @Then("^Enter Client First Name Validation and enter Last Name$")
   	public void Enter_Client_First_Name_Validation_and_enter_Last_Name() throws Throwable {
   	isgLandingPage.firstNameValidation();
    }
    
    @Then("^Enter Client First Name and enter Last Name with validation$")
   	public void Enter_Client_First_Name_and_enter_Last_Name_with_validation() throws Throwable {
   	isgLandingPage.lastNameValidation();
    }
    
    @Then("^Add Client Lead Email Address & click on next after validation$")
   	public void Add_Client_Lead_Email_Address_click_on_next_after_validation() throws Throwable {
   	isgLandingPage.emailValidation();
    }
    
    @Then("^Select sole source Project & reason$")
   	public void Select_sole_source_Project_and_reason() throws Throwable {
   		isgLandingPage.soleSource();
    }
    
    @Then("^Verify and check for number of Notifications$")
   	public void Verify_and_check_for_number_of_Notifications() throws Throwable {
   		isgLandingPage.noOfNotifications();
    }
    
    @Then("^Verify and check there is no notification for client lead$")
	public void Verify_check_there_notification_client_lead() throws Throwable {
		isgLandingPage.ClientLeadNotification();
	}
    
}
