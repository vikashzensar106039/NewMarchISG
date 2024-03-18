package com.zensar.stepDefinations;

import com.zensar.pageobjects.ProjectDetails;
import com.zensar.scriptutils.ScenarioState;
import com.zensar.scriptutils.StepBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
public class ActiveTransactionScopeBuilderStepDefinitions extends StepBase {

	
	ProjectDetails projectDetails;
	

	public ActiveTransactionScopeBuilderStepDefinitions(ScenarioState scenarioState) {
		super(scenarioState);
		 
		 projectDetails = new ProjectDetails(getState());
		
		
	}
	@Then("^User clicks on Go to scope builder$")
	public void user_clicks_on_Go_to_scope_builder() throws Throwable {
		projectDetails.clickScopeBuilder();
		
	}
    @Then("^User selects commonly packed service$")
	public void user_selects_commonly_packed_service() throws Throwable {
    	projectDetails.selectsCommon();
	}
    @And("^User Clicks on Items in Scope Basket & Save Basket$")
	public void user_Clicks_on_Items_in_Scope_Basket_Save_Basket() throws Throwable {
    	projectDetails.saveBasket();
	}

    @Then("^User selects FA from section$")
	public void user_selects_FA_from_section() throws Throwable {
    	projectDetails.selectsFA();
	}
    @Then("^User deselects FA from section$")
	public void user_deselects_FA_from_section() throws Throwable {
    	projectDetails.deselectsFA();
	}
    @Then("^User deselects one Process from section$")
	public void user_deselects_one_Process_from_section() throws Throwable {
    	projectDetails.deselectsProcess();
	}
	}
