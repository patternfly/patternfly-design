# Language Selector

## Selector Properties
  ![Language Selector](img/languages-2.png)

  1. **Naming:** All available languages should be listed in the native language. For example, "German" should never exist in the list. Instead, "Deutsch" would appear in this case.
  2. **User Default** (optional): If the Language Selector is being accessed from a login screen, you should include a "User Default" option. This would inherit the language selected by the user on their last session. If available, this option should be the default selection and the first in the list.
  3. **Browser Default:** There should always be a “Browser Default” option at the top of the list. If "User Default" is also available, the Browser Default option will be second in the list. When selected, the application should inherit the current browser language being used.
  4. **Ordering:** Language names should be listed in alphabetic order following any default options. The list should scroll as needed.
  5. **Selecting:** The option or language currently selected should be highlighted for some visual indication. Hovering over another option should also be visually indicated.


## Selector Locations
  * From the [Masthead](https://www.patternfly.org/pattern-library/application-framework/masthead/#_) User section, the selector should be labeled “Change Language.” Hovering over this label should open a list of all available languages.

  ![Language Selector in Masthead](img/v2_language_2.png)

  * On the [Login Page](https://www.patternfly.org/pattern-library/application-framework/login-page/#_), the language selector is located in the top right of the login card.

  ![Language Selector on Login Page](img/language_05.png)

  * The visual treatment of the Language Selector displayed on the Login Page should be consistent with the selector displayed under the Masthead dropdown.

  ![Language Selector Combobox](img/v2_language_3.png)
