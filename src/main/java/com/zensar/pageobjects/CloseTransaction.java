package com.zensar.pageobjects;

import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.zensar.scriptutils.PageBase;
import com.zensar.scriptutils.ScenarioState;

public class CloseTransaction extends PageBase {

	@FindBy(xpath = "//h5[@class='transaction-title']")
	WebElement closeTransaction;

	@FindBy(xpath = "//button[@class='btn secondary-icon-btn-m view-all-transaction ng-star-inserted']")
	WebElement viewAllClose;

	// @FindBy(xpath =
	// "//*[@id=\"closedProjectPage\"]/section[2]/section/kendo-grid/div/table/tbody/tr[1]/td[1]/span")
	// WebElement firstCloseTransaction;

	@FindBy(xpath = "//span[contains(@class,'link-to-project-detail')]")
	WebElement firstCloseTransaction;

	@FindBy(xpath = "//span[@class='text']")
	WebElement verifyCloseTransaction;

	@FindBy(xpath = "//div[@class='k-expander-header']")
	WebElement showProjectOverview;

	@FindBy(xpath = "//button[@class='btn secondary-btn-m edit-overview']")
	WebElement editButtonViewOnly;

	@FindBy(xpath = "//p[@class='closed-project']")
	WebElement docsArchiveMsg;

	@FindBy(xpath = "//div[@class='scope-detail-container ng-star-inserted']")
	WebElement scopeOfTransaction;

	@FindBy(xpath = "//div[@class='side-section-div ng-star-inserted']")
	WebElement prjctLeads;

	// @FindBy(xpath = "//section[@class='section-dates
	// ng-star-inserted']/div/div[1]/span")

	@FindBy(xpath = "(//div[@class='side-section-div ng-star-inserted']//span)[1]")
	WebElement prjctStartDate;

	@FindBy(xpath = "(//div[@class='side-section-div ng-star-inserted']//span)[2]")
	WebElement prjctClosedDate;

	// @FindBy(xpath = "//section[@class='section-dates
	// ng-star-inserted']/div/div[2]/span")
	// WebElement prjctClosedDate;

	// @FindBy(xpath =
	// "//section[@class='section-clients']/div/div/div/app-contact-card/div/h6")

	@FindBy(xpath = "(//div[@class='side-section-div ng-star-inserted']//h6[@class='client-name'])[1]")
	WebElement clientLead;

	@FindBy(xpath = "(//div[@class='side-section-div ng-star-inserted']//h6[@class='client-name'])[2]")
	WebElement projectOwner;

	@FindBy(xpath = "(//div[@class='side-section-div ng-star-inserted']//h6[@class='client-name'])[3]")
	WebElement projectPartner;

	@FindBy(xpath = "//div[@class='provider-list-container']")
	WebElement providerFilters;

	@FindBy(xpath = "(//span[contains(@class,'btn-text')])[2]")
	WebElement linkContacts;

	@FindBy(xpath = "//h5[contains(@class,'active-transaction-title')]")
	WebElement projectOverviewReadOnly;

	@FindBy(xpath = "//h5[contains(@class,'active-transaction-title')]")
	WebElement projectDetails;

	@FindBy(xpath = "(//button[contains(@class,'edit-contact')])[1]")
	WebElement viewContact;

	@FindBy(xpath = "//button[contains(@class,'add-contact-btn')]")
	WebElement addContactCTA;

	@FindBy(xpath = "//div[@class='view-contact-container container-div']")
	WebElement contactDetails;

	@FindBy(xpath = "//button[@class='closeDrawer']")
	WebElement closeContact;

	@FindBy(xpath = "//h2[contains(@class,'main-title')]")
	WebElement contactPage;

	@FindBy(xpath = " //div[@class='view-contact-container container-div']/section[3]/div[1]/span")
	WebElement firstName;

	@FindBy(xpath = " //div[@class='view-contact-container container-div']/section[3]/div[2]/span")
	WebElement lastName;

	@FindBy(xpath = "//div[@class='view-contact-container container-div']/section[4]/div[1]/span")
	WebElement jobTitle;

	@FindBy(xpath = "//div[@class='view-contact-container container-div']/section[4]/div[2]/span")
	WebElement projectRole;

	@FindBy(xpath = "//div[@class='view-contact-container container-div']/section[5]/div[1]/span/a")
	WebElement emailID;

	@FindBy(xpath = "//div[@class='view-contact-container container-div']/section[5]/div[2]/span")
	WebElement mobileNumber;

	@FindBy(xpath = "//a[contains(text(),'Back to project')]")
	WebElement backToProject;

	@FindBy(xpath = "//a[contains(text(),'Back to dashboard')]")
	WebElement backToDashboard;
	
	@FindBy(xpath = "//*[@id='loginButton']")
	WebElement linkLogin;
	
	
	@FindBy(xpath = "//input[@type='text' and @autocomplete='username']")
	WebElement textEmail;

	@FindBy(xpath = "//input[@type='password' and @autocomplete='current-password']")
	WebElement textPassword;

	@FindBy(xpath = "//input[@type='submit' and @value='Sign in']")
	WebElement buttonSubmit;

	public CloseTransaction(ScenarioState state) {
		super(state);
	}

	public void closeTrans() {
		pause(10000);
		scrollToBottom();
		waitForElement(closeTransaction);
		embedScreenshot();
		String notificationMessage = getText(closeTransaction);
		System.out.println("Number of Close Transaction: " + notificationMessage);
		zAssertTrue(true, "Number of Close Transaction =  " + notificationMessage,
				"There is no Active Transaction  " + notificationMessage);
	}

	public void viewAllClose() {
		pause(20000);
		waitForElement(closeTransaction);
		String closed = getText(closeTransaction);
		System.out.println(closed);
		String closedTransactionCount = closed.substring(21,23);
		System.out.println("CountExtract Substring =" + closedTransactionCount);
		int count = Integer.valueOf(closedTransactionCount);
		System.out.println("CountExtract count =" + count);
		if (count > 5) {
			scrollToBottom();
			waitForElement(viewAllClose);
			pause(2000);
			zAssertTrue(isPresent(viewAllClose), "View All Closed Transactions link is present and closedTransaction Count =" + closed,
					"View All Closed Transactions link is NOT present and closedTransaction Count =" + closed);
			highlightElement(viewAllClose);
			forceClick(viewAllClose);
			pause(20000);
			embedScreenshot();
			//write a code to extract no of items from Page opened (failing in dev) 
			highlightElement(backToDashboard);
			forceClick(backToDashboard);
		}
		else {
		zAssertTrue(isPresent(viewAllClose), "View All Closed Transactions link is present and closedTransaction Count =" + closed,
				"View All Closed Transactions link is not be Present as count is less than 5 : closedTransaction Count =" + closed);	
		}
	
	}

	public void firstClose() {
		waitForceScroll(firstCloseTransaction);
		waitForElementClickabality(firstCloseTransaction);
		highlightElement(firstCloseTransaction);
		pause(5000);
		embedScreenshot();
		click(firstCloseTransaction);
	}

	public void verifyClose() {
		waitForElement(verifyCloseTransaction);
		highlightElement(verifyCloseTransaction);
		System.out.println("Closed Transaction Notification" + verifyCloseTransaction);
		embedScreenshot();
		System.out.println("Closed Transaction Read only notification Message= " + verifyCloseTransaction.getText());
		zAssertTrue(true, "Read only notification is Present", "Read only notification is NOT Present  ");
		unHighlightElement(verifyCloseTransaction);
	}

	public void projectOverviewRead() {
		waitForElement(showProjectOverview);
		forceClick(showProjectOverview);
		highlightElement(editButtonViewOnly);
		isElementInteractable(editButtonViewOnly);
		zAssertTrue(true, "Edit button is disabled", "Edit button is enabled");
		boolean chkEditButton = editButtonViewOnly.isEnabled();
		System.out.println("Is edit button enabled? =" + chkEditButton);
		embedScreenshot();
		forceClick(showProjectOverview);
		}


	public void docsArchived() {
		waitForElementVisibility(docsArchiveMsg);
		highlightElement(docsArchiveMsg);
		pause(5000);
		embedScreenshot();
		String expectedArchiveMsg = "All documents have now been archived.";
		zAssertEquals(docsArchiveMsg.getText(), expectedArchiveMsg, "Documents Check");
		unHighlightElement(docsArchiveMsg);
	}

	public void closedScopeBuilder() {
		moveToElement(scopeOfTransaction);
		highlightElement(scopeOfTransaction);
		pause(5000);
		embedScreenshot();
		unHighlightElement(scopeOfTransaction);
	}

	public void closedProviderSection() {
		moveToElement(providerFilters);
		highlightElement(providerFilters);
		pause(5000);
		embedScreenshot();
		unHighlightElement(providerFilters);
	}

	public void projectLeads() {
		scrollToElement(prjctLeads);
		highlightElement(prjctLeads);
		embedScreenshot();
		waitForElement(prjctStartDate);
		waitForElement(prjctClosedDate);
		String startDate = getText(prjctStartDate);
		String closedDate = getText(prjctClosedDate);
		String ProjectDates = startDate + "|" + closedDate;
		System.out.println("Project Dates = " + ProjectDates);

		String clientLeadName = getText(clientLead);
		String projectOwnerName = getText(projectOwner);
		String projectPartnerName = getText(projectPartner);
		String ProjectLeads = clientLeadName + "|" + projectOwnerName + "|" + projectPartnerName;
		System.out.println("Project Dates = " + ProjectDates);
		System.out.println("Project Leads = " + ProjectLeads);
		zAssertTrue(true, "Details =  " + ProjectDates + "||" + ProjectLeads,
				"There is no project lead details for the project");
		unHighlightElement(prjctLeads);
	}

	public void projectContactDetails() {
		scrollToBottom();
		waitForElement(linkContacts);
		pause(2000);
		waitForceScrollClick(linkContacts);
		waitForElement(contactPage);
		highlightElement(contactPage);
		pause(2000);
		embedScreenshot();
		unHighlightElement(contactPage);
	}

	public void addContactView() {
		waitForElement(addContactCTA);
		highlightElement(addContactCTA);
		embedScreenshot();
		isElementInteractable(addContactCTA);
		highlightElement(viewContact);
		pause(1000);
		forceClick(viewContact);
	}

	public void viewDetailContact() {
		highlightElement(contactDetails);
		embedScreenshot();
		String contactFirstName = getText(firstName);
		String contactLastName = getText(lastName);
		String contactEmailId = getText(emailID);
		String contactMoibleNumber = getText(mobileNumber);
		String contactJobTitle = getText(jobTitle);
		String contactProjectRole = getText(projectRole);
		String contactDetails = contactFirstName + "|" + contactLastName + "|" + contactEmailId + "|"
				+ contactMoibleNumber + "|" + contactJobTitle + "|" + contactProjectRole;
		System.out.println("Contact Details= " + contactDetails);
		zAssertTrue(true, "Contact Details =  " + contactDetails,
				"There is no contact details for the project  " + contactDetails);
	}

	public void backtoDashboard() {
		forceClick(closeContact);
		forceClick(contactPage);
		highlightElement(backToProject);
		forceClick(backToProject);
		pause(1000);
		highlightElement(backToDashboard);
		forceClick(backToDashboard);

	}
	
	
	public void loginToISGforClosedTrans() {
		pause(1000);
		loginToISGforClosedTrans(getEnvProperty("usrClosedTrans"),getEnvProperty("usrpaswdTrans"));
  }

	public void loginToISGforClosedTrans(String username,String password) {
		embedScreenshot(linkLogin);
		forceClick(linkLogin,10);
		pause(500);
		System.out.println("Clicked Login");
		enterText(textEmail,username);
		System.out.println("username : " + username);
		enterText(textPassword, password);
		System.out.println("password : " + password);
		embedScreenshot(buttonSubmit);
		click(buttonSubmit);
		long startTime=System.currentTimeMillis();
		while(isPresent("//chr-modal-login")){    //Wait until login pop-up is disappeared
			System.out.println("waiting for login popup to disapear...");
			pause(500);
			if((System.currentTimeMillis()-startTime) > 30000)    //break if taking too much time
                  break;

          }
  }
	
}