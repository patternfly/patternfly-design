# Table View

## Table States
![Table with a single row selected](./img/table-callout1.png)

1. **Toolbar:** This version of the Table View is using a toolbar with filters and actions. Item count is also included in the toolbar on the right hand side.
1. **Column Visibility:** Control what data displays by hiding and showing columns. See [Column Visibility](#column-visibility) for more details about interaction with the control, and [Toolbar](http://www.patternfly.org/pattern-library/forms-and-controls/toolbar/) for more examples of icon placement in the toolbar.
1. **Sorting:** All columns are sortable. Click the column header to change the sort direction/order. The active column will be highlighted with a blue line above the column and blue text. The carat indicates the direction of the sort.
1. **Select Row(s):** Click on the checkbox to select multiple rows in order to perform bulk actions on those rows simultaneously. Selecting a checkbox activates and highlights the row. This highlight is more prominent than the highlight for hovering over a row.
1. **Hover State:** When the user hovers over a row, that row will be lightly highlighted and outlined. This helps the user to isolate the row, especially when clicking on items in the row.
1. **Inline Actions:** Inline actions can be performed within a single row to manipulate the data. The most common 1-2 (max) actions are shown as a button with additional actions, if any, available via a dropdown menu. These actions should use words rather than icons for clarity. Please reference [Kebab Menu](http://www.patternfly.org/pattern-library/widgets/#kebabs) for details.
1. **Row Shading:** Use alternating row colors to help the user read the content of the table more easily.
1. **Unavailable** (optional): Users can use "-\-" when the value of a cell should be rendered as unavailable.

## Table States – continued
![Table with a all rows selected](./img/table-callout2.png)

1. **Select All Rows:** Selecting the checkbox in the header row selects all rows on the page. The total number of rows selected is shown near the table action buttons.
1. **Filtering** (optional): Users can see results of simple filters here. Results include the item and results count, list of active filters (with ability to remove individual filters), and button to clear all filters.
1. **Column Reordering:** Users can change the order of columns listed in the table. Click on a column header and drag it along the row of headers into the desired position. Note that only one column can be moved at a time.
1. **Bulk Item Actions:** Bulk item action buttons are activated when multiple rows are selected. Some actions are available as both a table action and a bulk item action. The number of rows selected is shown near the table action buttons.

## Column Visibility

![Table with a column visibility menu active](./img/table-col-visibility-menu.png)

1. **Column Visibility Icon:** Displays in the toolbar in the sort control group after the filter control group. Sort controls may or may not be include in the toolbar. If sort controls are included, then column visibility is the last item in the sort control group.
2. **Column Visibility Dropdown:** Lists all columns that can be displayed in the table.
    - Each list item is a checkbox with the column header as the label.
    - The list is sorted by the same order that the columns appear in the table.
    - When a checkbox is unchecked, the column is removed from the table, and the other columns expand to fill the width of the table. Alternatively, when a checkbox is selected, the column is added to the table.

## Simple Expansion

![Table with expandable rows](./img/table-expand-callout.png)

1. **Icon:** Placing the caret at the front of the row signifies that this row is expandable. The caret points to the right when it is closed and down when it is expanded.
2. **Interaction:** Hovering over a row highlights it. Single clicking the caret expands the row. If the row is open and the checkbox is selected, the selection color will take precedence.
3. **Expansion Panel:** When the row is expanded, a panel is inserted between the bottom of the row and the top of the next row. All other content is pushed down the page. Content can be anything that is required to convey details of a selected object. If content exceeds the height of the panel, a scroll bar will be exposed.
4. **Close/Collapse:** Clicking the Close icon will collapse the expansion panel and return the table to its original (collapsed) state. Alternatively, clicking on the caret again will have the same effect. Note: Use of the Close/Collapse icon is not advised if the content of the panel requires its full width.

## States and Row Styling

The background color of a row will change to indicate current states. These are listed with corresponding hex color values below:
- Hover - when the user hovers over a row, even when a row is expanded (#edf8ff)
- Selected - when the user selects a row via selecting the checkbox (#0088ce)
- Open - when a row is expanded (#def3ff)

## Additional Notes about Behavior
- **Empty State:** If no items exist in the table, display the [Empty State](http://www.patternfly.org/pattern-library/communication/empty-state/) pattern. If there are no items to display as the result of a null filter result, see the [Filter](http://www.patternfly.org/pattern-library/forms-and-controls/filter/) pattern for more information about how to display this.
- **Loading State:** If content is loading, display the [Loading State](http://www.patternfly.org/pattern-library/communication/loading-state/) pattern.
- **Pagination:** Table View supports pagination. See [Pagination](https://www.patternfly.org/pattern-library/navigation/pagination/) for more details.

<br>

### What’s not covered in the current design:

- Simple sort.
- Multi-column sort.
- Sticky column headers.
- Mobile design.
