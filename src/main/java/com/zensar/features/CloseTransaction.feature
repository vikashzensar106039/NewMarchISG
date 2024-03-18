Feature: CloseTransaction

  Background: 
    Given User navigates to ISG Landing Page and Login

  Scenario Outline: Verify user able Check close Transaction #<DataSetName>
    When user logs in to ISG
    Then Verify for Close Transaction
    Then User Clicks on First close Transaction
    Then Able to verify close transaction message
    Then Able to verify Project overview in read only mode
    Then Able to view Documents archived message
    Then Able to view Scope buider section
    Then Able to view Provider list
    Then Able to view Project Leads
    Then User able on go to Project contact Details
    Then Able to verify Add contact & view button
    Then Able to view detailed contact information
    Then Able to navigate back to dashboard
    
    Examples: 
      | DataSetName      |
      | CloseTransaction |




  Scenario Outline: Verify user able to view full list of close Transactions #<DataSetName>
    When user logs in to ISG having more closed transaction
    Then Verify for Close Transaction
    Then User clicks on View all Close Transaction
    #Then User Clicks on First close Transaction

    Examples: 
      | DataSetName      |
      | CloseTransaction |
