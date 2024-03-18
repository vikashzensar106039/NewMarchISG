package com.zensar.stepDefinations;

import com.zensar.pageobjects.ProjectContact;
import com.zensar.scriptutils.ScenarioState;
import com.zensar.scriptutils.StepBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
public class ActiveTransactionProjectContactStepDefinitions extends StepBase {

	ProjectContact projectContact;
	

	public ActiveTransactionProjectContactStepDefinitions(ScenarioState scenarioState) {
		super(scenarioState);
		 projectContact = new ProjectContact(getState());
		
		
	}

	
	@Then("^Verify for Active Transaction$")
	public void verify_for_Active_Notifications() throws Throwable {
		projectContact.ActiveNotification();
	}
		
    @Then("^User clicks on first Active Transaction$")
	public void User_clicks_first_Active_Transaction() throws Throwable {
		projectContact.FirstActiveTransaction();
		
	}
    
    @And("^Click on go to Project contact list$")
	public void navigate_Project_Overview_section_add_project_overview() throws Throwable {
		projectContact.ProjectContactList();
	}
    
    @And("^Click on edit contact button$")
	public void Click_on_edit_contact_button() throws Throwable {
		projectContact.editContactButton();
	}
    
    @And("^Verify and click on save contact button$")
	public void Verify_and_click_on_save_contact_button() throws Throwable {
		projectContact.saveContactButton();
	}
    
    
    @Then("^Add the new client contact$")
	public void clicks_on_Next_Add_Client_Lead() throws Throwable {
		projectContact.AddClientContact();
	}
    @Then("^Add Client First Name$")
	public void select_Anticipated_award_Date() throws Throwable {
		projectContact.ClientFirstName();
	}
    @And("^Add Client Last Name$")
	public void select_Competitive_Project() throws Throwable {
		projectContact.ClientLastName();
	}
    
    @Then("^Select Pronouns$")
	public void select_Primary_objevtives_of_sourcing() throws Throwable {
		projectContact.SelectPronoun();
	}
    @Then("^Select job Tittle$")
	public void enter_Client_First_Name_Last_Name() throws Throwable {
		projectContact.SelectJobTitle();
	}
    
    @Then("^Select Project Role$")
	public void add_Client_Lead_Email_Address_click_on_next() throws Throwable {
		projectContact.SelectProjectRole();
	}
    
    @Then("^Select Project Responsibilties$")
	public void user_Select_Project_Responsibilties() throws Throwable {
		projectContact.SelectProjectResponsibilities();
	}
    @Then("^Add Email Address for the Member$")
	public void user_Add_Email_Address_for_the_Member() throws Throwable {
		projectContact.AddEmailAddress();
	}
    
    @And("^Add mobile and Click on save Contact$")
	public void user_Add_mobile_and_Click_on_save_Contact() throws Throwable {
		projectContact.AddMobileSave();
	}
    
    @Then("^Add Email Address for the Member and Click on save Contact$")
	public void add_Email_Address_for_the_Member_and_Click_on_save_Contact() throws Throwable {
		projectContact.AddEmailSave();
	}
        
    @Then("^Add the new Lead Attorney$")
	public void add_the_new_Lead_Attorney() throws Throwable {
		projectContact.AddLeadAttorney();
	}
    
    @Then("^Add Lead Attorney First Name$")
	public void add_Lead_Attorney_First_Name() throws Throwable {
		projectContact.AddAttorneyFirstName();
	}
    
    @And("^Add Lead Attorney Last Name$")
	public void Add_Lead_Attorney_Last_Name() throws Throwable {
		projectContact.AddAttorneyLastName();
	}
    
    @Then("^Select Lead Attorney Pronouns$")
   	public void select_Lead_Attorney_Pronouns() throws Throwable {
   		projectContact.SelectPronoun();
   	} 
    @Then("^Select Lead Attorney Legal firm$")
	public void select_Lead_Attorney_Legal_firm() throws Throwable {
		projectContact.AddAttorneyLegalFirm();
	} 
    @Then("^Select Job tittle of lead Attorney$")
	public void select_Job_tittle_of_lead_Attorney() throws Throwable {
		projectContact.AddAttorneyJobTitle();
	} 
    @Then("^Add Email Address for the Lead Attorney$")
	public void add_Email_Address_for_the_Lead_Attorney() throws Throwable {
		projectContact.AddAttorneyEmailAddress();
	}
    @And("^Add mobile for Lead Attorney and Click on save Contact$")
	public void add_mobile_for_Lead_Attorney_and_Click_on_save_Contact() throws Throwable {
		projectContact.AddAttorneyMobileSave();
	}
    
    @Then("^Add Email Address for the Lead Attorney and click on save contact$")
	public void Add_Email_Address_for_the_Lead_Attorney_and_click_on_save_contact() throws Throwable {
		projectContact.AddAttorneyEmailAddressSave();
	}
    
    @Then("^Select Project Role as Client lead$")
	public void select_Project_Role_Client_lead() throws Throwable {
		projectContact.ProjectRoleClientLead();
	}
    
    @Then("^Add Email Address for the Client Lead and Click on save Contact$")
	public void add_Email_Address_for_Member_save_Contact() throws Throwable {
		projectContact.AddEmailSave();
	}
    @Then("^Confirm for the new client lead$")
	public void confirm_new_client_lead() throws Throwable {
		projectContact.ConfirmClientLead();
	}
    
    @Then("^Click on show removed contact$")
	public void click_show_removed_contact() throws Throwable {
		projectContact.ShowRemovedContact();
	}
    @And("^check view option in removed contact$")
	public void check_view_option_in_removed_contact() throws Throwable {
		projectContact.ViewRemovedContact();
	}
    @Then("^Click on isg contact$")
	public void click_isg_contact() throws Throwable {
		projectContact.ISGContacts();
	}
    
    @And("^Verify for Project Responsibilities & data room owner role$")
	public void verify_Project_Responsibilities_data_room_owner_role() throws Throwable {
		projectContact.ProjectResponsDataRole();
	}
    
    @And("^Verify there is no remove contact button$")
	public void verify_remove_contact_button() throws Throwable {
		projectContact.RemoveContactButton();
	}
    
    @And("^Add Email Address for the Member and Click on save Contact for Duplicate$")
	public void add_Email_Address_Member_Click_on_save_Contact() throws Throwable {
		projectContact.DuplicateContactAdd();
	}
    
    @And("^Add Email Address for the ISG and Click on save Contact$")
	public void add_Email_Address_ISG_Click_save_Contact() throws Throwable {
		projectContact.ISGContactAdd();
	}
    
    @And("^Add Email Address for the Attorney and Click on save Contact$")
	public void add_Email_Address_Attorney_Click_save_Contact() throws Throwable {
		projectContact.DuplicateAttorneyContact();
	}
	}
