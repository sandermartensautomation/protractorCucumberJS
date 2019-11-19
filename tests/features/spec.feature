Feature: Fill name on homepage
    Scenario: I should see my name displayed
    Given you are on the homepage
    When you enter "namename" in the textfield
    Then the correct greeting should appear