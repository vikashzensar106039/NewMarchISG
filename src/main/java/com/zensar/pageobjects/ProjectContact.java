package com.zensar.pageobjects;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import com.zensar.scriptutils.PageBase;
import com.zensar.scriptutils.ScenarioState;

public class ProjectContact extends PageBase {

	@FindBy(xpath = "//h5[contains(@class,'active-transaction-title')]")
	WebElement activenotification;
	
	@FindBy(xpath = "(//div[contains(@class,'card-heading')])[1]")
	WebElement firstActive;
	
	@FindBy(xpath = "(//span[contains(@class,'btn-text')])[2]")
	WebElement projectContactList;
	
	@FindBy(xpath = "//button[contains(@class,'btn primary-btn-m-icon-text add-contact-btn ng-star-inserted')]")
	WebElement addClientContact;
	
	@FindBy(xpath = "//input[@aria-label='First Name']")
	WebElement firstNameClient;
	
	@FindBy(xpath = "//input[@aria-label='Last Name']")
	WebElement lastNameClient;
	
	@FindBy(xpath = "//input[@value='He/him']")
	WebElement pronounhe;
	
	@FindBy(xpath = "//select[@aria-label='Job title']")
	WebElement jobTitle;

	@FindBy(xpath = "//select[@aria-label='Project role']")
	WebElement projectRole;
	
	@FindBy(xpath = "//input[@aria-label='Email']")
	WebElement addEmail;
	
	@FindBy(xpath = "//input[@aria-label='Mobile Number']")
	WebElement addMobile;
	
	@FindBy(xpath = "//select[@aria-label='Job title']")
	WebElement projectResponsibilities;
	
	@FindBy(xpath = "//button[@class='btn primary-btn-large saveFormsDetails saveClientContact ng-star-inserted']")
	WebElement saveContact;
	
	
	@FindBy(xpath = "(//label[@class='form-check-label k-label'])[2]")
	WebElement leadAttorney;
	
	
	@FindBy(xpath = "//input[@aria-label='First Name']")
	WebElement leadAttorneyFirstName;
	
	@FindBy(xpath = "//input[@aria-label='Last Name']")
	WebElement leadAttorneyLastName;
	
	
	@FindBy(xpath = "//input[@aria-label='Legal Firm']")
	WebElement attorneyLegalFirm;
	
	
	@FindBy(xpath = "//select[@aria-label='Job title']")
	WebElement attorneyJobTitle;
	
	@FindBy(xpath = "//button[@class='btn primary-btn-large']")
	WebElement confirmClientButton;
	
	@FindBy(xpath = "//span[@class='text']")
	WebElement showRemovedContact;
	
	
	@FindBy(xpath = "(//button[@class='edit-contact k-button k-grid-edit-command k-button-md k-rounded-md k-button-solid-base k-button-solid ng-star-inserted'])[10]")
	WebElement viewRemovedContact;
	
	@FindBy(xpath = "(//button[@class='edit-contact k-button k-grid-edit-command k-button-md k-rounded-md k-button-solid-base k-button-solid ng-star-inserted'])[1]")
	WebElement viewISGContact;
	
	@FindBy(xpath = "//button[@class='btn secondary-btn-large mr-24 ng-star-inserted']")
	WebElement editISGContact;
	
	
	@FindBy(xpath = "(//input[@class='k-checkbox k-checkbox-md k-rounded-md'])[1]")
	WebElement selectISGResponsibilities;
	
	
	@FindBy(xpath = "//label[@class='checkBox dro-cb ng-star-inserted']//input[@type='checkbox']")
	WebElement selectDataRole;
	
	@FindBy(xpath = "//button[@class='btn secondary-btn-large ng-star-inserted']")
	WebElement removefromProjectButton;
	
	@FindBy(xpath = "//p[@class='errorMsg ng-star-inserted']")
	WebElement emailError;
	
	@FindBy(xpath = "//button[@class='btn secondary-btn-large mr-24 ng-star-inserted']")
	WebElement editContactButton;
	
	@FindBy(xpath = "//button[@class='btn primary-btn-large saveFormsDetails ng-star-inserted']")
	WebElement editSaveContactButton;
	
	
	
	public ProjectContact(ScenarioState state) {
		super(state);
	}

	public void ActiveNotification()
	{
		waitForElementClickabality(activenotification);
		pause(10000);
		String notificationMessage = getText(activenotification);
		System.out.println("Number of Active Transaction: " + notificationMessage);
		embedScreenshot();
		zAssertTrue(true, "Number of Active Transaction =  " + notificationMessage,
				"There is no Active Transaction  " + notificationMessage);
	}
	
	public void FirstActiveTransaction()
	{
		waitForElement(firstActive);
		pause(10000);
		click(firstActive);
		embedScreenshot();
	}
	
	public void ProjectContactList()
	{
		waitForElement(projectContactList);
		pause(5000);
		waitForceScrollClick(projectContactList);
		embedScreenshot();
		
	}
	
	public void editContactButton()
	{
		waitForElement(editContactButton);
		//waitForceScrollClick(projectContactList);
		click (editContactButton);
		embedScreenshot();
	}
	
	public void saveContactButton()
	{
		waitForElement(editSaveContactButton);
		embedScreenshot();
		click (editSaveContactButton);
	}
	
	
	public void AddClientContact()
	{
		waitForElement(addClientContact);
		pause(5000);
		click(addClientContact);
		
	}
	public void ClientFirstName()
	{
		pause(5000);
		clearAndEnterText(firstNameClient, getTestDataValue("FirstName"));
		zAssertTrue(isPresent(firstNameClient), "User entered first Name",
				"User has not entered first name");
	}
	public void ClientLastName()
	{
		pause(5000);
		clearAndEnterText(lastNameClient, getTestDataValue("LastName"));
		embedScreenshot();
		zAssertTrue(isPresent(firstNameClient), "User entered last Name",
				"User has not entered last name");
	}
	
	public void SelectPronoun()
	{
		waitForElement(pronounhe);
		pause(5000);
		click(pronounhe);
		embedScreenshot();
	}
	public void SelectJobTitle()
	{
		waitForElement(jobTitle);
		pause(5000);
		selectBoxByVisibleTextContains(jobTitle, getTestDataValue("JobTitle"));
		
		embedScreenshot();
	}
	public void SelectProjectRole()
	{
		waitForElement(projectRole);
		pause(5000);
		selectBoxByVisibleTextContains(projectRole, getTestDataValue("ProjectRole"));
		
		embedScreenshot();
	}
	public void SelectProjectResponsibilities()
	{
		waitForElement(projectResponsibilities);
		pause(5000);
		click(projectResponsibilities);
		embedScreenshot();
	}
	
	public void AddEmailAddress()
	{
		clearAndEnterText(addEmail, getTestDataValue("Email"));
		embedScreenshot();
		zAssertTrue(isPresent(addEmail), "User entered Email Address",
				"User has not entered Email Address");
	}
	
	public void AddMobileSave()
	{
		clearAndEnterText(addMobile, getTestDataValue("Mobile"));
		embedScreenshot();
		zAssertTrue(isPresent(addMobile), "User entered Mobile Number",
				"User has not Mobile Number");
		click(saveContact);
	}
	
	public void AddEmailSave()
	{
		clearAndEnterText(addEmail, getTestDataValue("Email"));
		embedScreenshot();
		zAssertTrue(isPresent(addEmail), "User entered Email Address",
				"User has not entered Email Address");
		click(saveContact);
	}
	
		
	public void AddLeadAttorney()
	{
		
		waitForElement(addClientContact);
		pause(5000);
		click(addClientContact);
		waitForElement(leadAttorney);		
		click(leadAttorney);
		embedScreenshot();
	}
	
	public void AddAttorneyFirstName()
	{
		pause(5000);
		waitForElement(leadAttorneyFirstName);
		embedScreenshot();
		clearAndEnterText(leadAttorneyFirstName, getTestDataValue("AttorneyFirstName"));
		zAssertTrue(isPresent(leadAttorneyFirstName), "User entered Attorney first Name",
				"User has not entered Attorney first name");
	}
	public void AddAttorneyLastName()
	{
		pause(5000);
		waitForElement(leadAttorneyLastName);		
		embedScreenshot();
		clearAndEnterText(leadAttorneyLastName, getTestDataValue("AttorneyLastName"));
		zAssertTrue(isPresent(leadAttorneyLastName), "User entered Attorney Last Name",
				"User has not entered Attorney Last name");
	}
	
	
	public void AddAttorneyLegalFirm()
	{
		pause(5000);
		waitForElement(attorneyLegalFirm);		
		embedScreenshot();
		clearAndEnterText(attorneyLegalFirm, getTestDataValue("AttorneyLegalFirm"));
		zAssertTrue(isPresent(attorneyLegalFirm), "User entered Attorney Last Name",
				"User has not entered Attorney Last name");
	}
	
	public void AddAttorneyJobTitle()
	{
		pause(5000);
		waitForElement(attorneyJobTitle);
		selectBoxByVisibleTextContains(attorneyJobTitle, getTestDataValue("AttorneyJobTitle"));
		embedScreenshot();
	}
	public void AddAttorneyEmailAddress()
	{
		pause(5000);
		clearAndEnterText(addEmail, getTestDataValue("Email"));
		embedScreenshot();
		zAssertTrue(isPresent(addEmail), "User entered Attorney Email Address",
				"User has not entered Attorney Email Address");
	}
	
	public void AddAttorneyMobileSave()
	{
		pause(5000);
		clearAndEnterText(addMobile, getTestDataValue("Mobile"));
		embedScreenshot();
		zAssertTrue(isPresent(addMobile), "User entered Attorney Mobile Number",
				"User has not Attorney Mobile Number");
		click(saveContact);
	}
	
	
	public void AddAttorneyEmailAddressSave()
	{
		pause(5000);
		clearAndEnterText(addEmail, getTestDataValue("Email"));
		embedScreenshot();
		zAssertTrue(isPresent(addEmail), "User entered Attorney Email Address",
				"User has not entered Attorney Email Address");
		click(saveContact);
	}
	
	public void ProjectRoleClientLead()
	{
		pause(5000);
		waitForElement(projectRole);
		selectBoxByVisibleTextContains(projectRole, getTestDataValue("RoleClientLead"));
		zAssertTrue(isPresent(projectRole), "User role as client lead is selected",
				"User role as client lead is not selected");
	}
	
	public void ConfirmClientLead()
	{
		waitForElement(confirmClientButton);
		pause(5000);
		click(confirmClientButton);
		embedScreenshot();
	}
	
	public void ShowRemovedContact()
	{
		waitForElement(showRemovedContact);
		pause(5000);
		click(showRemovedContact);
		embedScreenshot();
	}
	
	
	public void ViewRemovedContact()
	{
		waitForElement(viewRemovedContact);
		pause(5000);
		click(viewRemovedContact);
		embedScreenshot();
	}
	
	
	public void ISGContacts()
	{
		waitForElement(viewISGContact);
		pause(5000);
		click(viewISGContact);
		embedScreenshot();
	}
	
	
	public void ProjectResponsDataRole()
	{
		waitForElement(viewISGContact);
		pause(5000);
		click(viewISGContact);
		embedScreenshot();
		click(editISGContact);
		pause(2000);
		click(selectISGResponsibilities);
		zAssertTrue(isPresent(selectISGResponsibilities), "User responsibilities for ISG contact is selected",
				"User responsibilities for ISG contactis not selected");
		click(selectDataRole);
		zAssertTrue(isPresent(selectDataRole), "ISG role as data room owner can be assigned",
				"ISG role as data room owner can be assigned");
	}
	public void RemoveContactButton()
	{
		//waitForElement(removefromProjectButton);
		//pause(5000);
		//click(removefromProjectButton);
		//embedScreenshot();
		isPresent(removefromProjectButton);
		zAssertTrue(true, "Remove button is not there for ISG Contact",
				"Remove button not there for ISG Contact");
		embedScreenshot(editContactButton);
	}
	
	public void DuplicateContactAdd()
	{
		pause(5000);
		clearAndEnterText(addEmail, getTestDataValue("ClientEmail"));
		embedScreenshot();
		zAssertTrue(isPresent(addEmail), "User entered Member Email Address",
				"User has not entered Member Email Address");
		click(saveContact);
		zAssertTrueAndTakeScreenshot(emailError.isDisplayed(),"Email is duplicate","Email is not duplicate");
	}
	public void ISGContactAdd()
	{
		pause(5000);
		clearAndEnterText(addEmail, getTestDataValue("ISGEmail"));
		embedScreenshot();
		zAssertTrue(isPresent(addEmail), "ISG team members can only be added via the corresponding OneSys project.",
				"ISG team members can be added");
		//click(saveContact);
		//zAssertTrueAndTakeScreenshot(emailError.isDisplayed(),"ISG contact can not be added","ISG contact can be added");
	}
	
	public void DuplicateAttorneyContact()
	{
		//pause(5000);
		clearAndEnterText(addEmail, getTestDataValue("Attorney Email"));
		embedScreenshot();
		zAssertTrue(isPresent(addEmail), "User entered Attorney Email Address",
				"User has not entered Attorney Email Address");
		click(saveContact);
		zAssertTrueAndTakeScreenshot(emailError.isEnabled(),"Email is duplicate","Email is not duplicate");
	}
}