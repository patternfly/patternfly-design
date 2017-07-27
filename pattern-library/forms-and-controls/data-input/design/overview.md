# Data Input

## Selection Controls

### Overview
You should choose a selection control pattern based on the number of choices available to the user.
* Use **radio buttons** or **checkboxes** when you need to select from 2 to 5 known choices.
* When there are more than 5 choices, when layout space is limited, or when there are variable choices, use a **Select list**.
* Use a **Switch** input to allow the user to toggle between enabled and disabled states.

Implement these patterns in a well-structured layout to avoid visual clutter.

### Details

#### Checkboxes
You should use Checkboxes when users need to select one or more items from a list of known options. When it's possible, arrange checkboxes vertically to facilitate easy visual scanning. If there are many items and labels are short, use a multi-column grid arrangement to save vertical space.

If necessary, you can nest other controls within a checkbox item. Enable and disable nested options when the user selects or unselects a check box.

![Checkbox Usage](img/data-input-checkboxes.png)
1. Checkboxes arranged in a two-column grid to conserve vertical space
2. Checkboxes with nested controls

#### Radio Buttons
Radio buttons allow users to make mutually exclusive selections. You must include more than one radio button in a group, and only one selection can be active at a time.

To allow users to select a null option, use "None" or a similar term to represent that choice.

You may arrange radio button vertically or horizontally according to your preference. However, vertically-arranged radio buttons are easier for users to scan.

Like checkboxes, you can use radio buttons to nest other controls , following the same guidelines for enabling or disabling options.

As a general rule, you shouldn't use radio buttons when more than 2-5 options are available or if there are space constraints. In these cases, try using a [Select list](#select-lists) instead.

![Radio Button Usage](img/data-input-radio-buttons.png)
1. A horizontal group of radio buttons
2. A vertical group of radio buttons with nested controls

#### On/Off Switches
Use an On/Off switch when a user is presented with the binary choice to enable or disable some optional attribute or capability. In such a case, switches are excellent alternatives to a single checkbox or set of two radio buttons.

Since the switch pattern is only used to enable or disable an attribute, you can simply labeling when using a switch by using only the name of the affected attribute. If the options you're presenting to the user are anything other than "on" or "off," you should use radio buttons instead.

Just like radio buttons and checkboxes, switches can be used to enable or disable a set of nested controls.

![Switch Usage](img/data-input-switch.png)


#### Select Lists
You should use select lists when there are more than 5 known options, or when space is too limited for radio buttons. Select list should also be used when options are dynamic or variable.

PatternFly offers two types of Select controls, Bootstrap Single Select and Bootstrap Multi Select.
* Use Bootstrap Single Select for selecting a single, mutually exclusive option.
* Use Bootstrap Multi Select for selecting one or more options.

When fewer than five options exist, you should use radio buttons or checkboxes to display all options to the user simultaneously.

![Bootstrap Single Select](img/bootstrap-single-multi-select.png)

#### Comboboxes
A combobox allows users to type a value into the field *or* select a predefined option from the dropdown list. Comboboxes also support type-ahead features– a filtered list of options is displayed as the user types. This makes it easier to select a preferred option when there are too many options to quickly scan the full list.

You should use a combobox in place of a single select list when there are more than 10 options.

![Bootstrap Combobox](img/bootstrap-combobox.png)


## Data Entry Controls
You should choose a data entry control pattern that is optimized for the type of data a user will input. In some cases, users may need to select from a fixed set of options. In other cases, they may need to input a value directly.
* Use *bound-entry controls* like the **Date Picker**, **Time Picker**, or **Touchspin** when entering strictly-typed data. This will reduce the need for field-level validation and prevent user input errors.

When implementing these patterns, you should take notice of the alignment of data. Consider data comparison and visual flow when deciding to left or right-align data entry controls.

### Details

#### Text Entry
Text edit fields are the simplest and most common controls for allowing a user to enter a string of characters from the keyboard. Edit fields should be appropriately sized to anticipate the longest value possible (if a maximum character length is known). In cases where a value is too long to be fully displayed in an edit box, [truncation](http://www.patternfly.org/styles/terminology-and-wording/#_) should be used.

If the acceptable entries into a text edit field are constrained, syntax hints and field validation are recommended to prevent data entry errors.

#### Bound Entry Controls
Bound entry controls should be used when entering special data types, including dates, time, and other forms of numeric data. These controls constrain user input and combine keyboard and mouse interaction. They are designed to only allow valid inputs and therefore avoid the need for secondary validation. See the [Datepicker](http://www.patternfly.org/pattern-library/forms-and-controls/datepicker/), [Timepicker](http://www.patternfly.org/pattern-library/forms-and-controls/timepicker/), and [Bootstrap Touchspin](http://www.patternfly.org/pattern-library/widgets/#bootstrap-touchspin) components for more details.

![Bound Data Input](img/data-input-bound-controls.png)

This dialog box uses bounded data entry controls to prevent user errors. A date picker allows the user to pick a valid date. A time picker, a Bootstrap Touchspin control, and a select list control are used to set time, repeats, and participants, respectively.

![Data Input Dashboard](img/data-input-dashboard.png)

#### Bootstrap Touchspin
PatternFly provides two kinds of [Bootstrap Touchspin](http://www.patternfly.org/pattern-library/widgets/#bootstrap-touchspin) controls. The Bootstrap Touchspin with stacked buttons is the preferred method for entering numeric data on a web form. The user has a lot of user experience with this pattern, but the control buttons are too small on mobile devices, will be very hard to click, and may lead to input errors . If your application needs to adapt to small screen devices, you should avoid using the Bootstrap Touchspin (stacked) control.

An alternative is to use the Bootstrap Touchspin (without stacked). When using this control, the width of field will have a huge influence on user experience. Too wide a field will make it frustrating for users to click the control buttons. In this case, it would better adjust the width of input fields to match the length of the expected input.

![Bootstrap Touchspin Width](img/data-input-bootstrap-touchspin-width.png)

#### Bootstrap Select
[Bootstrap Select]( http://www.patternfly.org/pattern-library/widgets/#bootstrap-select) can also be used to enter numeric data. This pattern helps users select a value quickly and accurately, preventing user input errors. This is especially true in the usage scenarios for selecting data from some special data group (eg. -20 / -10 / -5 / 0 / 5 / 10 / 20).

When using a select list, options should be less than 20. Long lists that require scrolling are not easy to operate on mobile devices.

![Select list](img/data-input-select-list.png)

#### Left alignment or right alignment
Whether numbers should be left aligned vs. right aligned (vs. decimal aligned) is based on the context they are being used in. When to use it?

##### Left alignment
No matter edit state or view stats of common information form, user usually review the information from left to right then from top to bottom.

![Left alignment](img/left-alignment.png)

##### Right alignment
On account of numbers right alignment, the numbers will be much more easier to be compared. Alignment of the decimal dot would make the data contrast clearer.

Right alignment is important for pure numeric values and decimal values, in that the right supports the functional purpose of scanning for value rather than using a formatted field like date time or zip code. Right alignment would lend to the comparative scanning of numbers in tables as well, and delineating the alignment as formatted field value like a date/time or zip code vs. a decimal based numeric value.

![Right alignment](img/right-alignment.png)

###### Tips:
Numeric fields would better be left aligned.
When there is a number already filled in, and you want to add more digits to it, you have to click in the small margin between the last number and the number selector. It is not a easy operation with a mouse and on a touchscreen will be harder.
