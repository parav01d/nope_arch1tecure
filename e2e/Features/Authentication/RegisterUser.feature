@identity
Feature: Register User

  @responseType
  Scenario Outline: Register User response status is correct
    When I try to register a User with the email "<email>" and password "<password>"
    Then the response status should be "<status>"
    Examples:
      | username | email        | password  | status |
      | John Doe | john@doe.de  | 112233    | 201    |
