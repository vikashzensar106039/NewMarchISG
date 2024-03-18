Feature: ProjectContact

  Background: 
    Given User navigates to ISG Landing Page and Login

  Scenario Outline: Verify user able add Client to Project contact list #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new client contact
    Then Add Client First Name
    And Add Client Last Name
    Then Select Pronouns
    Then Select job Tittle
    Then Select Project Role
    Then Select Project Responsibilties
    Then Add Email Address for the Member
    And Add mobile and Click on save Contact

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user able add Client to Project contact list after adding only Required field #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new client contact
    Then Add Client First Name
    And Add Client Last Name
    Then Select Project Role
    Then Add Email Address for the Member and Click on save Contact

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user able add Lead Attorney to Project contact list #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new Lead Attorney
    Then Add Lead Attorney First Name
    And Add Lead Attorney Last Name
    Then Select Lead Attorney Pronouns
    Then Select Lead Attorney Legal firm
    Then Select Job tittle of lead Attorney
    Then Add Email Address for the Lead Attorney
    And Add mobile for Lead Attorney and Click on save Contact

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user able add Lead Attorney to Project contact list After adding only required field #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new Lead Attorney
    Then Add Lead Attorney First Name
    And Add Lead Attorney Last Name
    Then Select Lead Attorney Legal firm
    Then Add Email Address for the Lead Attorney and click on save contact

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user able add Client Lead to Project contact list  #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new client contact
    Then Add Client First Name
    And Add Client Last Name
    Then Select Project Role as Client lead
    Then Add Email Address for the Client Lead and Click on save Contact
    Then Confirm for the new client lead

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user able view removed contact in contact list  #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Click on show removed contact
    And check view option in removed contact

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user able view ISG Contact & add Project responsibilities  #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Click on isg contact
    And Verify for Project Responsibilities & data room owner role

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user not able to remove ISG Contact  #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Click on isg contact
    And Verify there is no remove contact button
    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user can edit Project responsibilities and assign as data room owner for ISG Contact  #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Click on isg contact
    Then Click on edit contact button
    Then Select Project Responsibilties
    And Verify and click on save contact button
    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user can not add duplicate contact #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new client contact
    Then Add Client First Name
    And Add Client Last Name
    Then Select Project Role
    Then Add Email Address for the Member and Click on save Contact for Duplicate

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user can not add ISG contact #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new client contact
    Then Add Client First Name
    And Add Client Last Name
    Then Select Project Role
    Then Add Email Address for the ISG and Click on save Contact

    Examples: 
      | DataSetName |
      | AddContact  |

  Scenario Outline: Verify user can not add duplicate attorney #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    And Click on go to Project contact list
    Then Add the new client contact
    Then Add Client First Name
    And Add Client Last Name
    Then Select Project Role
    Then Add Email Address for the Attorney and Click on save Contact

    Examples: 
      | DataSetName |
      | AddContact  |
