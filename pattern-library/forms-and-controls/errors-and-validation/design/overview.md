# Errors and Validation

If a form field submission results in an error, it must be indicated to the user. Errors are always presented on individual form fields, they might also be indicated with an inline notification. This depends on whether the validation happens on the client or the server.

### Client-side validation
When the user leaves a field, i.e. the field loses focus, a validation error message will be presented immediately on that field if an error exists.

* Ensure validation is relevant to the field.
  * Example: Invalid characters for text input fields
* Depending on application constraints, dynamic (on-the-fly) dismissal of errors would be ideal as it provides a visual cue that the user has corrected the error.
* For a wizard, disable the submit button until all required form inputs have been satisfied.

### Server-side validation
When the user submits the form, the entire page is reloaded with indications of validation errors for each field. It is recommended that an inline notification gets presented at the top of the main content area to assist the user in finding and correcting the specific field errors.

* The notification message should describe the error(s) and offer guidance for resolution. It might also include a count of the number of error(s). A total count is useful for long forms where individual field errors might be outside of the user’s current view.
* Once form errors are resolved and submitted, the inline (error) notification should be replaced with a confirmation message.

See [Inline Notifications](http://www.patternfly.org/pattern-library/communication/inline-notifications/) for more information.

### How to perform validation
* Text input fields with validation errors are indicated with a red border around the input box and a Field Error Message below the field describing the error.
  * Field Error Messages should be specific and offer solutions. Example: The “@” character in “user@application” is not allowed. Try “user_at_application” instead.
  * When the error message is presented, content below will automatically get moved down to accommodate it.
* An (optional) inline notification might be presented as well, depending on the use case. See “Server-side validation”.

![Error and Validation](./img/error-and-validation.png)

### When to perform validation
For server-side validation, the error message always appears after user submitted and the entire page was reloaded. For client-side validation, there are several scenarios:

* When possible, it's best to perform inline validation as the widget loses focus so that the user is immediately informed of invalid information. The validation will disappear after user modifies the content within the field and the widget loses focus. However, inline validation shouldn’t be overused as the user may feel frustrated.
* When a required field is not filled or input data is in the incorrect format, we recommend showing a validation as the widget loses focus. If users are asked to provide unfamiliar data or a specific format is needed, we recommend provide syntax hints to preventing users from making mistakes. See [Syntax Hints](http://www.patternfly.org/pattern-library/forms-and-controls/help-on-forms/) for more information.
* Some use cases might require validation as the user types, where the syntax for each character is checked. For example: Checking IP address fields where the only valid characters are numbers and periods.
