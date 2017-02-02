# Table View

## Table States
![Table with a single row selected](img/table-callout1.png)

1. **Toolbar:** This version of the Table View is using a [Toolbar](http://www.patternfly.org/pattern-library/forms-and-controls/toolbar/) with filter and actions. Item count is also included in the toolbar on the right hand side.
1. **Sorting:** Organize data by sorting columns. All columns are sortable, simply click on the column header to sort via info found in that column.
  - Active column will be highlighted with a blue line above the column and blue text. The carat indicates the direction of the sort, in this case from ascending order alphabetically.
1. **Select Row(s):** Click on the checkbox to select multiple rows in order to perform bulk actions on those rows simultaneously.
  - Selecting a checkbox activates and highlights the row. This highlight is more prominent than the highlight for hovering over a row.
1. **Hover State:** When the user hovers over a row, that row will be lightly highlighted and outlined. This helps the user to isolate the row, especially when clicking on items in the row.
1. **Inline Actions:** Inline actions can be performed within a single row to manipulate the data. The most common 1-2 (max) actions are shown as a button with additional actions, if any, available via a dropdown menu. These actions should use words rather than icons for clarity.
  * Please reference [Kebab Menu](http://www.patternfly.org/pattern-library/widgets/#kebabs)
1. **Row Shading:** Use alternating row colors to help the user read the content of the table more easily.
![Table with a all rows selected](img/table-callout2.png)
1. **Select All Rows:** Selecting the checkbox in the header row selects all rows on the page. The total number of rows selected is shown near the table action buttons.
1. **Filtering** (optional): User can see results of simple filters here. Results include the item and results count, list of active filters (with ability to remove individual filters), and button to clear all filters.
1. **Bulk Item Actions:** Bulk item action buttons are activated when multiple rows are selected. Some actions are available as both a table action and a bulk item action. The number of rows selected is shown near the table action buttons.
1. **Column Reordering:** User can change the order of columns listed in the table. Click on a column header and drag it along the row of headers into the desired position. Note that only one column can be moved at a time.

## Empty State

![Table view empty state](img/empty-state-callout.png)

1. **Empty State:** If no items exist in the table, display the empty state pattern. Simple filter feature will be disabled within the data toolbar in this state. However, table actions will remain enabled.

## What’s not covered in the current design but will be covered in future sprints:

- Column customization
- Simple Sort
- Ability to expand and collapse rows to give user the option to view more details on each item
- Multi Column Sort
- Stick Column Headers
- Mobile Design

## Additional Notes about Behavior

- **Pagination:** Table view supports pagination. See [Pagination](https://github.com/patternfly/patternfly-design/tree/master/pattern-library/navigation/pagination/design) for more details.
