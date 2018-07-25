# List View

## Standard List View

![List view](img/list-view-callout.png)

1. **Toolbar:** The [Toolbar](https://www.patternfly.org/pattern-library/forms-and-controls/toolbar) pattern may include Filter, Sort, Actions, Find, and Change View.
1. **Row:**
    - Clicking on a row will select it (and deselect other rows) if single selection is enabled (i.e., no checkbox selection).
    - Each item in List View should have the same layout.
    - When including titles, make the title bold rather than appending a colon.
    - Links may be displayed within an item.
    - The background color of the row will be used to reflect state. See [States and Row Styling](#states-and-row-styling) for details.
    - When the viewport size is decreased:
        - Content should wrap, displaying multiple rows of data.
        - Content could be eliminated.
1. **Disabled Row** (optional): Rows that are currently not available will be disabled. The cursor should appear visually disabled when user hovers over the row.
1. **Multi-Selection via Checkboxes** (optional): If multi-selection is supported, checkboxes appear on the left. Actions in the Data Toolbar apply to the selected items.
1. **Item Hover:** A hover state should be shown visually when a user hovers over an item.
1. **Inline Actions:** Inline actions should be included if the user needs to be able to quickly perform an action on a single item.

## List View with Simple Expansion

![List view with an expanded row](img/list-view-simple-expansion-callout.png)

1. **Icon:** Placing the caret at the front of the row signifies that this row is expandable. The caret icon points to the right when it is closed and down when it is expanded.
1. **Interaction:**
  - Hovering over a row highlights it. Single clicking anywhere in the row expands the row.
  - If the list supports both expansion and drill-down to details, a button or link must be added to the row to support the drill-down action.
1. **Expansion Panel:** When the row is expanded, a panel is inserted between the bottom of the row and the top of the next row. All other content is pushed down the page. Content can be anything that is required to convey details of a selected object. If content overflows the height of the panel, a scroll bar will be exposed.
1. **Close/Collapse** (optional): Clicking the Close icon will collapse the expansion panel and return the list to its original (collapsed) state. Alternatively, clicking anywhere on the row again will have the same effect. Note: Use of the Close/Collapse icon is not advised if the content of the panel requires its full width.


## List View with Compound Expansion
![List view with compound expansion](img/list-view-compound-expansion-callout.png)

1. **Icon:** When the list supports compound expansion, the caret is placed in front of each attribute that is expandable.
1. **Expandable Attribute:**
  - Hovering over an expandable attribute highlights it. Note that in this case there is no action that applies to single clicking on the entire row. The user must explicitly click on the element they want to expand.
  - Clicking on any expandable attribute opens the expansion panels with details for the selected attribute only. The caret changes direction to point down, and the attribute remains highlighted.
  - Hovering over another expandable attribute will highlight it. Clicking will close the current expansion panel and expand this attribute by opening its row expansion. This action is exactly equivalent to closing the first panel (by clicking close) and expanding the second panel.
1. **Close/Collapse** (optional): Click the Close icon to close/collapse the expansion panel.


## States and Row Styling

The background color of a row will change to indicate current states. These are listed with corresponding hex color values below:

* Hover - when the user hovers over a row (#edf8ff)
* Selected - when the user selects a row via single click or selecting the checkbox (pf-blue-50, #def3ff)
* Open - when a row is expanded (pf-blue-50, #def3ff)
* Edit - when a row is in edit mode via [inline edit](http://www.patternfly.org/pattern-library/forms-and-controls/inline-edit) (pf-blue-50, #def3ff)
* Disabled - when a row is disabled (pf-black-100, #fafafa)

## Additional Notes about Behavior

- **Empty State:** If no items exist, display an Empty State page. See the [Empty State](https://www.patternfly.org/pattern-library/communication/empty-state/#_) pattern for more details. If there are no items to display as the result of a null filter result, see the [Filter](http://www.patternfly.org/pattern-library/forms-and-controls/filter/) pattern for more information about how to display this.
- **Loading State:** If content is not loaded, display the [Loading State](http://www.patternfly.org/pattern-library/communication/loading-state/) pattern.
- **Pagination:** List View can also support pagination. See [Pagination](http://www.patternfly.org/pattern-library/navigation/pagination/) for more details.
- **Vertical Scroll:** Use a vertical scrollbar as needed. A horizontal scrollbar should NOT be used. Instead, the page containing the List View should be responsive.
- **View Selector:** If alternate views are supported, a [View Selector](http://www.patternfly.org/pattern-library/forms-and-controls/view-selector/#design) will be displayed in the top right corner. This will allow the user to switch to another view.
