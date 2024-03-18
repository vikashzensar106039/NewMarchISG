Feature: ActiveTransactionProviderList

  Background: 
    Given User navigates to ISG Landing Page and Login

  Scenario Outline: Verify user able view In Process provider and Removed providers #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Process provider & Removed Provider

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify user able to add In Process provider#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Process provider & add provider

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify user able to Delete In Process provider#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Process provider & delete provider

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify user able to reinstate provider from Removed providers#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Removed provider & reinstate provider

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify user able Export provider list#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to click on export provider list

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify user able Edit filter #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to click on Edit & change values for In scope geographies ,In Scope industry & TCV

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify user able Enable toggle to share list with client#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to click on toggle button

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify there is no toggle to share list for client lead login#<DataSetName>
    When user logs in to ISG as Client
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Not able to find toggle button

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify there is no add provider button for client lead login#<DataSetName>
    When user logs in to ISG as Client
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Not able to find add provider

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify there is no refresh list button for client lead login#<DataSetName>
    When user logs in to ISG as Client
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Not able to find refresh list button

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify there is no remove provider button for client lead login#<DataSetName>
    When user logs in to ISG as Client
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Not able to find Remove provider button

    Examples: 
      | DataSetName  |
      | ProviderList |

  Scenario Outline: Verify there is no reinstate provider button for client lead login#<DataSetName>
    When user logs in to ISG as Client
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Not able to find reinstate provider button

    Examples: 
      | DataSetName  |
      | ProviderList |
