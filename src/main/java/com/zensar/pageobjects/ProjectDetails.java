package com.zensar.pageobjects;

import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.zensar.scriptutils.PageBase;
import com.zensar.scriptutils.ScenarioState;

public class ProjectDetails extends PageBase {

	
	@FindBy(xpath = "//button[@id='providerListButton']")
	WebElement viewProviderlist;
	
	@FindBy(xpath = "//h2[@class='main-title']")
	WebElement providerListPage;
	
	@FindBy(xpath = "//*[@id=\"providerListM\"]/section[2]/div[1]/div[1]/div/div[1]/div[1]/h5")
	WebElement processProvider;
	
	@FindBy(xpath = "//*[@id=\"providerListM\"]/section[2]/div[2]/div/div[1]/div/h5")
	WebElement removedProvider;
	
	@FindBy(xpath = "//span[normalize-space()='Add provider']")
	WebElement addProvider;
	
	@FindBy(xpath = "//input[@class='k-input-inner']")
	WebElement providerName;
		
	@FindBy(xpath = "//button[@class='btn primary-btn-large']")
	WebElement confirmAddition;
	
	@FindBy(xpath = "(//button[@class='ng-star-inserted'])[1]")
	WebElement delProvider;
	
	@FindBy(xpath = "(//button [contains(@title,'Reinstate provider')])[1]")
	WebElement reiProvider;
		
	@FindBy(xpath = "//div[@class='p-dropdown-trigger']")
	WebElement delReasonClick;
	
	@FindBy(xpath = "//button[@class='btn primary-btn-large']")
	WebElement confirmDeletion;
	
	@FindBy(xpath = "//button[@class='btn primary-btn-large disabled']")
	WebElement confirmReinstate;
	
	@FindBy(xpath = "//span[normalize-space()='Export list (PDF)']")
	WebElement exportPDF;
	
	@FindBy(xpath = "//span[@class='k-icon k-i-edit']")
	WebElement editFilter;
	
	@FindBy(xpath = "//button[@class='btn primary-btn-large save-provider-list']")
	WebElement updateProviderList;
	
	@FindBy(xpath = "//*[@class='k-expander-title ng-star-inserted']")
	WebElement updateProviderOverview;
	
	@FindBy(xpath = "//*[@class='btn secondary-btn-m edit-overview']")
	WebElement updateProviderOverviewEdit;	
	
	@FindBy(xpath = "//*[@class='btn secondary-btn-m edit-overview']")
	WebElement OverviewEditText;
	
	@FindBy(xpath = "//*[@class='btn primary-btn-medium']")
	WebElement saveUpdated;
		
	@FindBy(xpath = "//div[@class='scope-detail-container ng-star-inserted']//button[@id='projContactListButton']")
	WebElement goToScopeBuilder;
	
	@FindBy(xpath = "(//*[@class='b-title fa-title'])[1]")
	WebElement selectBigData;
	
	@FindBy(xpath = "//div[@class='d-flex content-box box add-to-scope']//span[@class='k-icon k-i-check-circle']")
	WebElement addtoScope;
	
	@FindBy(xpath = "//div[@class='scope-basket-icon ng-star-inserted red']")
	WebElement yourScope;
	
	@FindBy(xpath = "//button[contains(text(),'Save scope')]")
	WebElement saveScope;
	
	@FindBy(xpath = "(//button[@class='k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base'])[1]")
	WebElement anticipateddateUntoched;
	@FindBy(xpath = "(//kendo-icon[@class='k-i-calendar k-button-icon k-icon ng-star-inserted'])[1]")
	WebElement anticipateddatetoched;
	@FindBy(xpath = "(//kendo-icon[@class='k-i-calendar k-button-icon k-icon ng-star-inserted'])[1]")
	WebElement selectDate;
		
	@FindBy(xpath = "(//kendo-icon[@class='k-i-calendar k-button-icon k-icon ng-star-inserted'])[2]")
	WebElement contractSigneddate;
	
	@FindBy(xpath = "(//label[@class='c-radio ng-star-inserted'])[1]")
	WebElement competitiveproject;
	
	@FindBy(xpath = "(//input[@class='k-checkbox k-checkbox-md k-rounded-md'])[9]")
	WebElement sourcingObject;
	
	@FindBy(xpath = "//*[@id='Hide project overview']/div[1]/div[2]/app-project-engagement-section/div/div[1]/section[1]/div[2]/div/textarea")
	WebElement projectOverview;
	
	@FindBy(xpath = "//textarea[@class='ng-untouched ng-pristine ng-valid']")
	WebElement projectOverviewUntoched;
	
	@FindBy(xpath = "//textarea [contains(@class,'overview-text ng-valid ng-dirty ng-touched')]")
	WebElement projectOverviewText;
	
	@FindBy(xpath = "//*[@class='charLimitNote']")
	WebElement projectOverviewNote;
		
	@FindBy(xpath = "(//span[@class='k-icon k-i-check-circle'])[1]")
	WebElement selectFAClick;
		
	@FindBy(xpath = "//span[normalize-space()='Cross Functional Services']")
	WebElement selectFAOpen;
	
	@FindBy(xpath = "//div[contains(@class,'k-expander-header')]")
	WebElement showProjectOverview;
		
	@FindBy(xpath = "//button[contains(@class,'btn secondary-btn-m edit-overview')]")
	WebElement editProjectOverview;
	
	@FindBy(xpath = "//input[@type='number']")
	WebElement contractDurationYear;
		
	@FindBy(xpath = "//select[@class='automation ng-untouched ng-pristine ng-valid']")
	WebElement autProject;
	
	@FindBy(xpath = "//select[@class='cloud ng-untouched ng-pristine ng-valid']")
	WebElement cloudStrat;
	
	@FindBy(xpath = "//*[contains(text(),'FIS')]")
	WebElement applicationInclu;
	
	@FindBy(xpath = "//textarea[@class='sm-ta ng-pristine ng-valid ng-star-inserted ng-touched']")
	WebElement ProviderWellText;
	@FindBy(xpath = "(//textarea[@class='sm-ta ng-untouched ng-pristine ng-valid ng-star-inserted']")
	WebElement ProviderWellTextuntouched;
	
	@FindBy(xpath = "(//textarea[@class='sm-ta ng-pristine ng-valid ng-star-inserted ng-touched'])[2]")
	WebElement improveSugest;
	@FindBy(xpath = "(//textarea[@class='sm-ta ng-untouched ng-pristine ng-valid ng-star-inserted'])[2]")
	WebElement improveSugestuntouched;
	
	@FindBy(xpath = "(//*[@class='charLimitNote ng-star-inserted'])[2]")
	WebElement loginToISGclient;
	
	@FindBy(xpath = "//*[@id='loginButton']")
	WebElement linkLogin;
	
	@FindBy(xpath = "//input[@type='text' and @autocomplete='username']")
	WebElement textEmail;

	@FindBy(xpath = "//input[@type='password' and @autocomplete='current-password']")
	WebElement textPassword;

	@FindBy(xpath = "//input[@type='submit' and @value='Sign in']")
	WebElement buttonSubmit;
	
	@FindBy(xpath = "//*[@id='Hide project overview']/div[1]/div[2]/app-project-engagement-section/div/div[1]/section[10]/div[2]/textarea")
	WebElement projectOverviewMAxProviderUntoched;
	@FindBy(xpath = "//*[@id='Hide project overview']/div[1]/div[2]/app-project-engagement-section/div/div[1]/section[10]/div[2]/textarea")
	WebElement projectOverviewMaxProvidertoched;
	@FindBy(xpath = "(//*[@class='charLimitNote ng-star-inserted'])[1]")
	WebElement ProviderWellTextNote;
		
	@FindBy(xpath = "//*[@id='Hide project overview']/div[1]/div[2]/app-project-engagement-section/div/div[1]/section[10]/div[2]/textarea")
	WebElement improveSugestUntoched;
	@FindBy(xpath = "//*[@id='Hide project overview']/div[1]/div[2]/app-project-engagement-section/div/div[1]/section[11]/div[2]/textarea")
	WebElement improveSugestToched;
	@FindBy(xpath = "(//*[@class='charLimitNote ng-star-inserted'])[2]")
	WebElement improveSugestNote;
		
	@FindBy(xpath = "//span[@class='k-switch-track k-rounded-full']")
	WebElement toggle;

	@FindBy(xpath = "//span[normalize-space()='Refresh list']")
	WebElement refresh;
	
	@FindBy(xpath = "//span[@class='has-data ng-star-inserted']")
	WebElement selectProviderName;
	
	
	@FindBy(xpath = "//span[@class='p-dropdown-label p-inputtext p-placeholder ng-star-inserted']")
	WebElement reasonForAdd;
	
	@FindBy(xpath = "(//span[@class='ng-star-inserted'])[5]")
	WebElement selectReason;
	

	@FindBy(xpath = "//textarea[@class='form-control ng-untouched ng-pristine ng-valid']")
	WebElement addReasonDetailsUntoched;
	@FindBy(xpath = "//textarea[@class='form-control ng-pristine ng-valid ng-touched']")
	WebElement addReasonDetailstoched;
	
	@FindBy(xpath = "//label[normalize-space()='Provide more details']")
	WebElement provideDetails;
	
	@FindBy(xpath = "//span[@class='p-dropdown-label p-inputtext p-placeholder ng-star-inserted']")
	WebElement deleteDetails;
	
	@FindBy(xpath = "//textarea[@class='ng-untouched ng-pristine ng-valid']")
	WebElement deleteProvideDetailsUntoched;
	
	@FindBy(xpath = "(//span[@class='ng-star-inserted'])[6]")
	WebElement reinstateProviderResaon;
	
	@FindBy(xpath = "//span[@class='p-dropdown-label p-inputtext p-placeholder ng-star-inserted']")
	WebElement reinstateProviderResaonclick;
	
	
	
	public ProjectDetails(ScenarioState state) {
		super(state);
	}
	public void providerList() {
		click(viewProviderlist);
		waitForElement(providerListPage);		
		String providerlistPage = getText(providerListPage);
		System.out.println("User will be redirected to Provider list: " + providerlistPage);
		waitForElement(addProvider);
		embedScreenshot();
		zAssertTrue(true, "User will be redirected to provider list =  " + providerlistPage,
				"User will be redirected to provider list  " + providerlistPage);
				
	}
	public void seeProvider() {
		waitForElement(processProvider);		
		String inprocessprovider = getText(processProvider);
		System.out.println("Number of In Process provider: " + inprocessprovider);
		embedScreenshot();
		zAssertTrue(true, "Number of in Process provider =  " + inprocessprovider,
				"There is no In Process provider  " + inprocessprovider);
		waitForElement(removedProvider);		
		String removedProviderList = getText(removedProvider);
		System.out.println("Number of removed providers are: " + removedProviderList);
		embedScreenshot();
		zAssertTrue(true, "Number of removed providers are =  " + removedProviderList,
				"There are no removed providers  " + removedProviderList);
				
	}
	public void addProvider() throws Throwable {
		click(addProvider);
		waitForElement(providerName);
		click(providerName);
		clearAndEnterText(providerName, getTestDataValue("ProviderNametoAdd"));
		waitForElement(selectProviderName);
		click(selectProviderName);
		waitForElement(reasonForAdd);
		click(reasonForAdd);
		waitForElement(selectReason);
		click(selectReason);
		waitForElement(addReasonDetailsUntoched);
		//selectBoxByIndex(reasonForAdd, 5 );
		//selectBoxByVisibleTextContains(addReasonClick, getTestDataValue("AddReason"));
		click(addReasonDetailsUntoched);
		waitForElement(addReasonDetailstoched);
		//clearText(addReasonDetailstoched);
		click(addReasonDetailstoched);
		//pause(5000);
		click(provideDetails);
		clearAndEnterText(addReasonDetailstoched, getTestDataValue("addReason"));
		pause(2000);
		embedScreenshot(confirmAddition);
		click(confirmAddition);
	}
	
	public void deleteProvider() {
		pause(1000);
		click(delProvider);
		//selectBoxByVisibleText(delReasonClick, getTestDataValue("DelReason"));
		click(delReasonClick);
		waitForElement(deleteDetails);
		click(deleteDetails);
		waitForElement(confirmDeletion);
		pause(5000);
		click(confirmDeletion);
		embedScreenshot();		
	}
	
	public void reinstateProvider() {
		pause(1000);
		click(reiProvider);
		//selectBoxByVisibleTextContains(delReasonClick, getTestDataValue("ReiReason"));
		click(reinstateProviderResaonclick);
		waitForElement(reinstateProviderResaon);
		moveAndClick(reinstateProviderResaon);
		waitForElement(confirmReinstate);
		moveAndClick(confirmReinstate);
		embedScreenshot();		
	}
	
	public void exportProvider() {
		click(exportPDF);
		embedScreenshot();				
	}
	
	public void editProvider() {
		click(editFilter);
		waitForElement(updateProviderList);
		click(updateProviderList);
		embedScreenshot();
	}
	
	public void clickScopeBuilder() {
		pause(10000);
		waitForElement(goToScopeBuilder);		
		click(goToScopeBuilder);
		embedScreenshot();
	}
	
	public void selectsCommon() {
		pause(1000);
		waitForElement(selectBigData);
		click(selectBigData);
		waitForElement(addtoScope);
		forceClick(addtoScope);		
		embedScreenshot();
	}
	
	public void saveBasket() {
		pause(4000);
		waitForElement(yourScope);
		click(yourScope);
		waitForElement(saveScope);
		click(saveScope);			
		embedScreenshot();				
	}
	
	public void selectsFA() {
		pause(4000);
		waitForElement(selectFAClick);
		click(selectFAClick);
		embedScreenshot();		
						
	}
	public void deselectsFA() {
		pause(10000);
		waitForElement(selectFAClick);
		click(selectFAClick);		
	}
	
	public void deselectsProcess() {
		pause(10000);
		waitForElement(selectFAClick);
		click(selectFAClick);		
		embedScreenshot();				
	}
	
	public void updateProjectOverview() {
		pause(10000);
		click(showProjectOverview);
		click(editProjectOverview);
		embedScreenshot();		
	}
	
	public void selectAnticipated() {
		pause(4000);
		click(anticipateddateUntoched);
		zAssertTrue(isPresent(anticipateddateUntoched), "Anticipated date is selected",
				"Anticipated date is not selected");
		embedScreenshot(contractDurationYear);
	}
	
	public void contractSigned() {
		pause(4000);
		click(contractSigneddate);
		zAssertTrue(isPresent(contractSigneddate), "Contract sign date is selected",
				"Contract sign date is not selected");
		embedScreenshot(contractSigneddate);
	}
	
	public void contractDuration() {
		pause(4000);
		clearAndEnterText(contractDurationYear, getTestDataValue("ContractDuration"));
		zAssertTrue(isPresent(contractSigneddate), "Contract duration is Updated",
				"Contract duration is not Updated");
	}
	
	
	
	public void automationProject() {
		pause(2000);
		forceClick(autProject);
		selectBoxByVisibleTextContains(autProject, getTestDataValue("autProjectReason"));
		embedScreenshot(autProject);
	}
	
	
	public void cloudStrategy() {
		pause(2000);
		forceClick(cloudStrat);
		selectBoxByVisibleTextContains(cloudStrat, getTestDataValue("cloudStrategy"));
		embedScreenshot(cloudStrat);
				
	}
	
	public void applicationIncluded() {
		pause(2000);
		click(applicationInclu);
		embedScreenshot();
		zAssertTrue(isPresent(applicationInclu), "Application included are selected",
				"Application included are not selected");
		embedScreenshot(applicationInclu);
	}
	
	
	public void selectCompetitive() {
		pause(2000);
		click(competitiveproject);
		embedScreenshot(competitiveproject);	
		//zAssertTrue(isPresent(competitiveproject), "Competitive Project is selected",
				//"Competitive Project is not selected");
	}
	
	
	public void selectSourcingObject() {
		pause(2000);
		click(sourcingObject);
		embedScreenshot(sourcingObject);	
		//zAssertTrue(isPresent(competitiveproject), "Competitive Project is selected",
				//"Competitive Project is not selected");
	}
	
	public void providerWell() {
		pause(4000);
		click(projectOverviewMAxProviderUntoched);
		pause(4000);
		click(projectOverviewMaxProvidertoched);
		pause(4000);
		clearAndEnterText(projectOverviewMaxProvidertoched, getTestDataValue("ProviderWell"));
		//zAssertTrue(isPresent(ProviderWellText), "Provider do well is Updated",
		//	"Provider do well is not Updated");
		embedScreenshot(projectOverviewMaxProvidertoched);
		click(ProviderWellTextNote);	
	}
	
	
	public void improvementsSugest() {
		pause(4000);
		click(improveSugestUntoched);
		pause(4000);
		click(improveSugestToched);
		pause(4000);
		clearAndEnterText(improveSugestToched, getTestDataValue("ImprovementSugesstion"));
		//zAssertTrue(isPresent(improveSugest), "Improvement Suggestion is Updated",
			//	"Improvement Suggestion is not Updated");
		embedScreenshot(improveSugestToched);
		click(improveSugestNote);	
		click(saveUpdated);
	}
	
	
	public void OverviewMaxCharacter() throws Throwable {
		pause(9000);
		click(showProjectOverview);
		pause(1000);
		embedScreenshot(showProjectOverview);
		pause(5000);
		click(editProjectOverview);
		pause(5000);
		click(projectOverviewUntoched);
		pause(1000);
		embedScreenshot(projectOverviewUntoched);
		pause(5000);
		clearText(projectOverview);
		pause(1000);
		embedScreenshot(projectOverview);
		pause(5000);
		clearAndEnterText(projectOverview, getTestDataValue("ProjectOverviewMax"));
		highlightElement(projectOverviewNote);
		pause(5000);
		zAssertTrue(isPresent(projectOverviewNote), "There is a limit of 500 Characters",
				"There is no limit of 500 Characters");
		click(saveUpdated);		
				
	}
	
	public void OverviewMaxProvider() throws Throwable {
		pause(9000);
		click(showProjectOverview);
		pause(1000);
		embedScreenshot(showProjectOverview);
		pause(5000);
		click(editProjectOverview);
		pause(5000);
		click(projectOverviewMAxProviderUntoched);
		pause(1000);
		embedScreenshot(projectOverviewMAxProviderUntoched);
		pause(5000);
		clearText(projectOverviewMaxProvidertoched);
		pause(1000);
		embedScreenshot(projectOverviewMaxProvidertoched);
		pause(1000);
		clickAndEnterText(projectOverviewMaxProvidertoched, getTestDataValue("ProviderWellMax"));
		pause(5000);
		highlightElement(ProviderWellTextNote);
		embedScreenshot(ProviderWellTextNote);
		pause(5000);
		zAssertTrue(isPresent(ProviderWellTextNote), "There is a limit of 500 Characters",
				"There is no limit of 500 Characters");
		embedScreenshot(ProviderWellTextNote);
		click(saveUpdated);		
	
	}
	
	public void OverviewMaxPursuits() throws Throwable {
		pause(9000);
		click(showProjectOverview);
		pause(1000);
		embedScreenshot(showProjectOverview);
		pause(1000);
		click(editProjectOverview);
		pause(5000);
		click(improveSugestUntoched);
		pause(1000);
		embedScreenshot(improveSugestUntoched);
		pause(5000);
		clearText(improveSugestToched);
		pause(1000);
		embedScreenshot(improveSugestToched);
		pause(1000);
		clearAndEnterText(improveSugestToched, getTestDataValue("ImprovementSugesstionMax"));
		highlightElement(improveSugestNote);
		zAssertTrue(isPresent(improveSugestNote), "There is a limit of 500 Characters",
				"There is no limit of 500 Characters");
		embedScreenshot(improveSugestNote);
		click(saveUpdated);		
				
	}
			public void loginAsClient() {
			pause(1000);
			loginAsClient(getEnvProperty("usernameClient"), getEnvProperty("passwordClient"));
		}
		
		public void loginAsClient(String usernameClient,String passwordClient) {
			embedScreenshot(linkLogin);
			forceClick(linkLogin,10);
			pause(500);
			System.out.println("Clicked Login");
			enterText(textEmail,usernameClient);
			System.out.println("usernameClient : " + usernameClient);
			enterText(textPassword, passwordClient);
			System.out.println("passwordClient : " + passwordClient);
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
	
	
	public void unableToUpdateProjectOverview() {
		pause(10000);
		click(showProjectOverview);
		//click(editProjectOverview);
		isPresent(editProjectOverview);
		zAssertTrue(true, "edit button is not present" , "edit button is present");		
		embedScreenshot(editProjectOverview);
	}
	
	public void toggleButton() {
		click(toggle);
		zAssertTrue(isPresent(toggle), "Toggle is enabled",
				"Toggle is not enabled");

	}
	public void nottoggleButton() {
		click(toggle);
		zAssertTrue(isPresent(toggle), "Toggle button is Present",
				"Toggle is not present");

	}
	public void addProviderbutton() {
		pause(1000);
		click(addProvider);
		zAssertTrue(isPresent(addProvider), "Add Provider button is Present",
				"Add Provider button is not present");
	}
	public void refreshbutton() {
		pause(1000);
		click(refresh);
		zAssertTrue(isPresent(refresh), "Refresh button is Present",
				"Refresh button is not present");
	}
	public void reinstateProviderButton() {
		pause(1000);
		click(reiProvider);
		zAssertTrue(isPresent(reiProvider), "Reinstate Provider button is Present",
				"Reinstate Provider button is not present");
	}
	public void removeProvider() {
		pause(1000);
		click(delProvider);
		zAssertTrue(isPresent(delProvider), "Remove Provider button is Present",
				"Remove Provider button is not present");
	}
	
	
}