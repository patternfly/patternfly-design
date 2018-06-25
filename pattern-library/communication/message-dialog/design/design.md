# Message Dialog Types

## Confirmation Dialog

### Usage
Use a confirmation dialog to validate user decisions and communicate consequences.

**Note:** Since confirmation dialogs disrupt user task flow, do not provide confirmation dialogs for actions that are easily reversed or insignificant.

### Content
Confirmation dialogs need to clearly restate the action the user is trying to take and explicitly outline the consequences of that action.

- **Buttons:** Provide buttons on confirmation dialogs that make it simple for users to understand and confirm their choices. When choosing button labels, use descriptive verbs that clearly indicate the consequence of a selection, like Delete, Save, or Create. Avoid vague labels like OK or Done.
- **Button Types:** If an action will seriously impact the system and cannot be undone, use a destructive style button. Otherwise, use a primary button.

### Examples
Confirm a non-destructive action
![Confirmation Dialog 1](img/msg-dialog-confirmation@2x.png)
Ambiguous title and button labels make it more difficult for the user to understand their options and make a decision.
Descriptive title and button labels make it easy for the user to scan the content and make a decision quickly.

### Confirm a Destructive Action
Use a destructive button style and warning icon for actions that are difficult or impossible to undo.

![Confirmation Dialog 2](img/msg-dialog-confirmation2@2x.png)

1. **Title Bar:** The title given to the wizard should convey the purpose of the wizard and the process the user is going through. It can be the action label on the button, link, or menu that invokes the wizard, but should also take advantage of the ability for something more descriptive while remaining concise.
1. **Loading Wizard State** (optional): For cases when the wizard will take a few moments to load, we recommend using a loading indicator and short message informing the user that the wizard is loading. Otherwise, the wizard should be empty.

## Error Dialog

### Usage
Use error dialogs to inform users of problems interrupting normal or expected behavior.

### Content
An error message should be actionable, human readable, and answer the following questions:
- What is the problem?
- Why did it happen?
- How can I fix it?

Never blame the user. Use passive voice where appropriate to avoid assigning blame.
- ⛔ You put in the wrong password.
- ✅ That password wasn’t recognized OR
- ✅ We didn’t recognize that password.

### Examples
![Error Dialog 1](img/msg-dialog-error1@2x.png)
![Error Dialog 2](img/msg-dialog-error2@2x.png)

## Passive Dialog

### Usage
Use passive dialogs to communicate critical information like the status of an application or result of an action.

Information in a passive dialog should be important, immediately relevant, and either lead to or require action on the users part.

Some usage examples include:
- Notifying a user that an operation may take a long time to complete
- Notifying a user that a critical process is complete

**Note:** If information is not critical, don’t use a passive dialog. Instead, use inline notifications or toast notifications.

### Content
Passive modals should clearly communicate the issue and any actions required of the user as a result of the issue.

### Examples
![Passive Dialog ](img/msg-dialog-passive@2x.png)
