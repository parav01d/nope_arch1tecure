Feature: Register User

  Scenario: Register User response status is correct
    When I try to register a User with the email "john@doe.de" and password "112233"
    Then the response status should be "201"

  Scenario Outline: Register User validation is correct
    When I try to register a User with the email "<email>" and password "<password>"
    Then the response status should be "<status>"
      And the response validation key is "<key>"
    Examples:
      | username | email        | password  | status |  key              |
      | John Doe | john         | 112233    | 400    |  email            |
      | John Doe | 123123       | 112233    | 400    |  email            |
      | John Doe | john@doe.de  | 1222      | 400    |  password         |
      | John Doe | john         | 1222      | 400    |  password, email  |
