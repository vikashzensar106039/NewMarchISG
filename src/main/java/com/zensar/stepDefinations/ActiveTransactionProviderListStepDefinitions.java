package com.zensar.stepDefinations;

import com.zensar.pageobjects.ProjectDetails;
import com.zensar.scriptutils.ScenarioState;
import com.zensar.scriptutils.StepBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
public class ActiveTransactionProviderListStepDefinitions extends StepBase {

	
	ProjectDetails projectDetails;
	

	public ActiveTransactionProviderListStepDefinitions(ScenarioState scenarioState) {
		super(scenarioState);
		 
		 projectDetails = new ProjectDetails(getState());
		
		
	}
	 @Then("^User will able to click view provider list$")
		public void user_will_able_to_click_view_provider_list() throws Throwable {
			projectDetails.providerList();
		}
	    @And("^Able to see In Process provider & Removed Provider$")
		public void able_to_see_In_Process_provider_Removed_Provider() throws Throwable {
	    	projectDetails.seeProvider();
		}
	    @And("^Able to see In Process provider & add provider$")
		public void able_to_see_In_Process_provider_add_provider() throws Throwable {
			projectDetails.addProvider();
		}
	    @And("^Able to see In Process provider & delete provider$")
		public void able_to_see_In_Process_provider_delete_provider() throws Throwable {
			projectDetails.deleteProvider();
		}
	    @And("^Able to see In Removed provider & reinstate provider$")
		public void Able_to_see_In_Removed_provider_reinstate_provider() throws Throwable {
			projectDetails.reinstateProvider();
		}
	    @And("^Able to click on export provider list$")
		public void able_to_click_on_export_provider_list() throws Throwable {
			projectDetails.exportProvider();
		}
	    @And("^Able to click on Edit & change values for In scope geographies ,In Scope industry & TCV$")
		public void able_to_click_on_Edit_change_values() throws Throwable {
			projectDetails.editProvider();
		}
	        
	
	    @And("^Able to click on toggle button$")
		public void able_click_toggle_button() throws Throwable {
			projectDetails.toggleButton();
		}
	    @And("^Not able to find toggle button$")
		public void not_able_find_toggle_button() throws Throwable {
			projectDetails.nottoggleButton();
		}
	    @And("^Not able to find add provider$")
		public void not_able_find_add_provider() throws Throwable {
			projectDetails.addProviderbutton();
		}
	    @And("^Not able to find refresh list button$")
		public void not_able_to_find_refresh_list_button() throws Throwable {
			projectDetails.refreshbutton();
		}
	    @And("^Not able to find Remove provider button$")
		public void not_able_find_Remove_provider_button() throws Throwable {
			projectDetails.removeProvider();
		}
	    @And("^Not able to find reinstate provider button$")
		public void not_able_to_find_reinstate_provider_button() throws Throwable {
			projectDetails.reinstateProviderButton();
		}
	    
   
	}
