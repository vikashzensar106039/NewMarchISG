package com.zensar.stepDefinations;

import com.zensar.pageobjects.ProjectDetails;
import com.zensar.scriptutils.ScenarioState;
import com.zensar.scriptutils.StepBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
public class ActiveTransactionStepDefinitions extends StepBase {

	
	ProjectDetails projectDetails;
	

	public ActiveTransactionStepDefinitions(ScenarioState scenarioState) {
		super(scenarioState);
		 
		 projectDetails = new ProjectDetails(getState());
		
		
	}
	@Then("^User Updates Project Overview$")
	public void user_Updates_Project_Overview() throws Throwable {
		projectDetails.updateProjectOverview();
		
	}
	
	@Then("^user logs in to ISG as Client$")
	public void user_logs_in_to_ISG_as_Client() throws Throwable {
		projectDetails.loginAsClient();
		
	}
	
	@Then("^User not able to Update Project Overview$")
	public void User_not_able_to_Update_Project_Overview() throws Throwable {
		projectDetails.unableToUpdateProjectOverview();
		
	}
	
	 @Then("^Validate for anticipated award date$")
		public void validate_for_anticipated_award_date() throws Throwable {
			projectDetails.selectAnticipated();
		}
	
	 @Then("^Select for Competitive project$")
		public void select_for_Competitive_project() throws Throwable {
			projectDetails.selectCompetitive();
		}
	 
	 @Then("^Select primary objevtives for sourcing$")
		public void Select_primary_objevtives_for_sourcing() throws Throwable {
			projectDetails.selectSourcingObject();
		}
	 
	 @Then("^Check for contract signed date$")
		public void check_for_contract_signed_date() throws Throwable {
			projectDetails.contractSigned();
		}
	 @And("^select contract duration in a years$")
		public void select_contract_duration_years() throws Throwable {
			projectDetails.contractDuration();
		}
	 @And("^Select type of automation of the project$")
		public void select_type_automation_project() throws Throwable {
			projectDetails.automationProject();
		}
	 @Then("^Select Cloud strategy$")
		public void select_Cloud_strategy() throws Throwable {
			projectDetails.cloudStrategy();
		}
	 @And("^Select the Application Included$")
		public void Select_Application_Included() throws Throwable {
			projectDetails.applicationIncluded();
		}
	 @Then("^What provider do well$")
		public void what_provider_well() throws Throwable {
			projectDetails.providerWell();
		}
	 @Then("^What improvements you suggest for their future pursuits and save$")
		public void what_improvements_suggest_future_pursuits_save() throws Throwable {
			projectDetails.improvementsSugest();
		}
	 @Then("^User Validates for Maximum Character in Project Overview$")
		public void user_Validates_Maximum_Character_Project_Overview() throws Throwable {
			projectDetails.OverviewMaxCharacter();
		}
	 
	 @Then("^User Validates for Maximum Character in What did the provider/Carrier do well & Save$")
		public void maximum_Character_Provider() throws Throwable {
			projectDetails.OverviewMaxProvider();
		}
	 @Then("^User Validates for Maximum Character in What improvements would you suggest for their future pursuits & save$")
		public void maximum_Character_future_prospects() throws Throwable {
			projectDetails.OverviewMaxPursuits();
		}
	 
	}
