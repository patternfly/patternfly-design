# Terminology and Wording

## Index

1. [Common Terms and Words](#common-terms-and-words)
1. [Abbreviations](#abbreviations)
1. [Acronyms](#acronyms)
1. [Capitalization](#capitalization)
1. [Links](#links)
1. [Punctuation](#punctuation)
1. [Truncation](#truncation)

## Common Terms and Words

- **Login (adj):** As in a "Login page." Login can also be use as a noun, as another name for username; however, "username" is recommended.
- **Log in (v):** Use "Log in" to describe the action of logging in. An example of this is seen on the button label for the [Login](http://www.patternfly.org/pattern-library/application-framework/login-page/) page.
- **Log out (v):** Use "Log out" to describe the action of logging out.
- **Username (n):** Usually a unique ID (e.g., ssmith123). Use "username" for the product login page.

### Terminology and Wording for Action Labels

| Label | Action | Complement | Notes |
| ----- | ------ | ---------- | ----- |
| Add or Add [Object] |  Add an existing item to an existing list, group, view, or other container element. | Remove | If what you are adding is not readily apparent from the context, consider adding a noun to the button label (e.g., Add User). Do not use "Add" to mean create a new item. See "Create" for usage guidelines. |
| Change | Not recommended. See "Edit." | | |
| Create or Create [Object] | Create something new. | Delete | If what you are creating is not readily apparent from the context, consider adding a noun to the button label (e.g. Create User). "New" or "Add" are not recommended for this use case. See "Add" for usage guidelines. |
| Delete | Removes the selected items. | Create | Provides a mechanism to delete an object. "Erase" and "Remove" are not recommended for this use case. See "Remove" for usage guidelines. |
| Edit | A way to make changes to an object such as a file, configuration, policy, etc. | | Provides a facility for making changes to an object the user selects. "Modify" and "Change" are not recommended for this use case. |
| New | Not recommended. See "Add" or "Create." | | |
| Remove or Remove [Object] | Remove an item from a list, group, view, or other  container element without deleting the item. Also see "Add" and "Delete." | Add | If what you are removing is not readily apparent from the context, consider adding a noun to the button label (e.g, Remove File, Remove User, etc.). |
{:.table .table-striped .table-bordered}

## Abbreviations

### General Rules

- Use abbreviations that users are familiar with, and write out uncommon abbreviations.
- Abbreviate units of measurement.
- Use abbreviations consistently.

### Common Abbreviations

| Abbreviation  | Usage |
| ------------- | ----- |
| e.g. and i.e. | Use sparingly. E.g. means "for example," and i.e. means "in other words." Add commas after each (e.g., and i.e.,). Adapted from Red Hat Corporate Style Guide. |
| KVM           | Refers to a kernel-based virtual machine. |
| sysadmin      | Avoid using abbreviations like "sysadmin" and "SysAdmin" as these are too informal. "System" should be singular (i.e., not "systems administrator"), because it can include both a single system and multiple systems, similar to "database administrator" or "brain surgeon," who work on more than one database and brain, respectively. Taken from Red Hat Corporate Style Guide.|
| U.S.          | As a noun, use "United States" unless there are space constraints. As an adjective use "U.S." (e.g., U.S. soldier). As part of an organization, use "U.S." Taken from Red Hat Corporate Style Guide. |
| VM            | Refers to a virtual machine.  OK to abbreviate as long as you've spelled it out once in the first occurrence, and as long as "VM" won't be confused with other terms that share that acronym. Taken from Red Hat Corporate Style Guide. |
{:.table .table-striped .table-bordered}

### Abbreviations for 12 Hour Time System

When referring to time zones, use [http://www.timeanddate.com/time/zones/](http://www.timeanddate.com/time/zones/):

| Symbol | Period |
| --- | --- |
| AM | Ante meridiem (before noon) |
| PM | Post meridiem (after noon) |
{:.table .table-bordered}

## Acronyms

### General Rules

- Use acronyms that users are familiar with, and write out uncommon acronyms.
- Use acronyms consistently.

## Capitalization

### Headline Style

For headline style, capitalize the first letter of every word except for articles (a, an, the), coordinating conjunctions (and, but, or), and prepositions of three letters or fewer (of, on, by, in). **Exception:** Any word that is the first word in the headline or the last word should be capitalized, regardless of its part of speech (e.g., "Where to Install").

### Sentence Style

For sentence style, capitalize the first letter of the first word and any proper nouns.  Use sentence style for blocks of text and as described below in "Capitalization for Common Components" (i.e., "Only show subscriptions that match this Subscription Asset Manager Organization.").

### Capitalization for Common Components

| Component                                                  | Capitalization |
| ---------------------------------------------------------- | -------------- |
| Button labels                                              | Headline       |
| Checkbox labels                                            | Sentence       |
| Column heading labels                                      | Headline       |
| Error messages                                             | Sentence       |
| Group headings, group boxes                                | Headline       |
| List boxes: Introductory text                              | Sentence       |
| List boxes: List box labels                                | Headline       |
| Menu items                                                 | Headline       |
| Prompts                                                    | Sentence       |
| Radio buttons labels                                       | Sentence       |
| States (as shown in tables and filters. E.g., "Up and Running") | Headline       |
| Status messages                                            | Sentence       |
| Syntax hints (text shown inside fields)                    | Sentence       |
| Tab labels                                                 | Headline       |
| Text box labels                                            | Headline       |
| Tooltips                                                   | Sentence       |
| Window titles (browsers, dialog boxes, steps in a wizard)  | Headline       |
{:.table .table-striped .table-bordered}

## Links

### More Information Link

As a user, I want to see a single link that directs me to a page or document with additional information to learn more about a particular subject or task. As the user is reading the sentence, they have the option to click on the more information link to view the additional information. This additional information could live within the same site or outside of the site.

### External links

Links that direct users to an external site should be followed by the [fa-external-link](https://www.patternfly.org/styles/icons/) icon to indicate that they will be taken to a different site. When possible, external links should open in a new browser tab or window, depending on the user's browser preferences.

### General Rules

- The link should be included in a complete sentence. Use punctuation and sentence style capitalization.
- Names or titles of a document or page should use headline style capitalization.
- Links should should use link text styling to indicate that it is clickable. See an example of link text styling under Styles Samples on the [Typography](http://www.patternfly.org/styles/typography/) page.
- Some recommendations for wording include:
    - View [Document Link] for more information.
    - View ‘X’ in [Document Link] for more information.

## Punctuation

* **Ampersand:** Avoid using ampersands; use "and" instead.
* **Colon:** Use sentence style capitalization for introductory text that appears above a control. A colon follows the introductory text.
* **Comma:** Use serial commas. A serial comma is the comma before the "and" in a series of three or more items (e.g., Item 1, item 2, and item 3). Taken from Red Hat Word Nerds.
* **Currency:** For currencies that use the symbol "$" alone, modify with the first two letters of the ISO code (e.g., US$1,500 (United States), AU$1,500 (Australia), HK$1,500 (Hong Kong), CA$1,500 (Canada)). For other currencies, use the national currency symbol whenever possible (e.g., £1,500 = British pound, €1,500 = Euro, ¥1,500 = Japanese Yen, etc.). Generally, we do not provide currency conversions. Taken from Red Hat Corporate Style Guide.
* **Ellipses:** Use an ellipsis (...) to indicate that text is truncated.
* **Exclamation Point:** Avoid using exclamation points except when referring to a command (e.g., the "bang" (!) command).
* **Hyphen:** Hyphenate when needed for clarity.
  * You will usually hyphenate:
    * Complex adjectives (compound modifiers). This is when two adjectives work together to modify an object. The hyphen is used when the first adjective modifies the second adjective (e.g, cloud-based solutions, right-side paralysis, system-wide menu).
      * **Exception:** We never hyphenate "open source," even when used as a complex adjective.
    * When the prefix ends in a vowel and the word that follows begins with the same vowel (i.e., semi-independent, pre-emptive). 
      * **Exceptions:** Cooperate and coordinate.
    * Capitalized words with a prefix (e.g., un-American, non-British).
    * Double prefixes (e.g., sub-subparagraph, re-sublet).
  * You will usually not hyphenate:
    * Words that begin with prefixes. Prefixes can include "multi," "non," "sub," "co," "semi," "pre," "re," etc.
      * **Exceptions:** When not hyphenating makes it unclear (e.g., "He re-covered the leaky roof."). When using words that begin with "non," when the dictionary says otherwise (e.g., nonaddictive, nonabrasive, nonalcoholic).
* **Percent:** In text, use the word "percent" (e.g., 10 percent to 20 percent). In tables, use the percent symbol (e.g., 10% to 20%).
* **Question Mark:** Place a question mark at the end of a question (e.g., "Are you sure you want to delete this file?").

## Truncation

### Instances where text might need to be truncated

- Whenever the string overflows the container and you don't want the text to overflow to multiples lines. For example:
    - Page titles that show object/host names.
    ![#truncation1](img/truncation1@2x.jpg)
    - Table or list view cells that contain long strings or lots of data, and that have some method to view the full text.
    ![#truncation2](img/truncation2@2x.jpg)

### Whether to design for truncating strings at the beginning, end, or in the middle requires a bit of research

- Does the product you are designing for have a default truncation scheme? For example, if your product has a default setting for how to truncate host names, but also a user preference if users want to change it to suit their naming scheme, you should follow that scheme along with the guidelines here.
  ![#truncation3](img/truncation3@2x.jpg)

- If the product doesn't have a default truncation choice, think about how the product's users are apt to name objects. Is it more likely that the unique part of the name will be at the beginning or end of the string? Based on the answer, we recommend either truncating at the end of the string (i.e., abcdef...) or truncating in the middle of the string (i.e., abc...ghi). The method you choose should be based on which part of the string that is not truncated is more likely to differentiate the item.

### Additional truncation guidelines

- Avoid abbreviations or truncated text in navigation items (i.e., all levels of navigation in the masthead and left navigation).

  ![#truncation4](img/truncation4@2x.jpg)

- In any container holding a string, if there is not sufficient room for the full spelling or hyphenated word, consider abbreviating the text. See [Common Abbreviations](ecommon-abbreviations) for examples, or reference the [Chicago Manual of Style](http://www.chicagomanualofstyle.org/16/ch10/ch10_toc.html). Do not truncate text in column headings.

  ![#truncation5](img/truncation5@2x.jpg)

- Indicate truncated text with an ellipsis (…).  If the text is part of a link, the ellipsis should be part of the link as well.

  ![#truncation6](img/truncation6@2x.jpg)

- Leave no fewer than 4 characters when truncating text, and preferably leave enough characters to give a fair idea of what the string says (i.e., don't truncate demo1.internal-el6.satellite to de...).

- Ensure that there is at least one method for the user to view the entire string.  We recommend the use of a [tooltip](https://www.patternfly.org/pattern-library/widgets/#tooltip) (useful for less than 150 characters or so). Other options include expanding rows and overlays.

  ![#truncation7](img/truncation7@2x.jpg)

- For UI text (as opposed to user-generated text), keep in mind that some truncation could cause awkward words (e.g., "associate" truncating to "ass..."). Avoid these scenarios whenever possible.

- Avoid truncation directly before or after punctuation whenever possible, as it may make it difficult to differentiate whether the punctuation is part of the ellipsis or part of the name (i.e., don't truncate demo1.internal-el6.satellite to demo1….).

- If a table column is resizable, the truncated text should adjust accordingly and follow the preceding guidelines.

  Large size:
  ![#truncation8](img/truncation8@2x.jpg)

  Small size:
  ![#truncation9](img/truncation9@2x.jpg)
