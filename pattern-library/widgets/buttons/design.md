## Styling

  * Button language should be clear without the use of an icon.
  * Using an icon in a button should be reserved for specific use cases.
  * Buttons should be of equal height. Varying button height can be distracting to the user and give inadvertent importance of one button over another. Do not combine differing sizes within the same row.
  * Three sizes of buttons are offered.
    1. Default.
    2. Large.
    3. Extra Small.

![Button Sizing](img/button-sizing-annotated.png)

## Color

  * There are four different button colors with specific meanings:
    1. **Primary Button:** The primary button is blue. It should be used for the primary call to action on page/modal. Each page should have one clear call to action, so there should never be more than one primary button used on a single page. There is an accessibility reason being that on enter the primary button should be enacted. It's possible that there could be no primary action button on a page.
    2. **Secondary Button:** The secondary button is gray. This will be the majority of the buttons used in an application. Any button that exists on a page that isn't a primary call to action should use this color.
    3. **Destructive Button:** The destructive button is red. This color should be reserved for highly destructive actions only. Most simple "Delete" or "Cancel" functions are not highly destructive. Evaluation should be done to agree that a button meets the highly destructive criteria. One examples of a highly destructive action would be allowing the user to delete all hosts that a system is dependent on to run.

![Button Colors](img/button-colors-annotated.png)

## State

  * There are a few state changes that each of the buttons could take on:
    1. **Active State:** Buttons will appear pressed when active. This treatment is based on the [base bootstrap styling](https://v4-alpha.getbootstrap.com/components/buttons/#active-state).
    2. **Disabled State:** Buttons that could become enabled, but are currently not available. This treatment is based on the [base bootstrap styling](https://v4-alpha.getbootstrap.com/components/buttons/#disabled-state).
