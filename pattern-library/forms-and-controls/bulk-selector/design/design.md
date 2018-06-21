# Bulk Selector

![Bulk Selector](img/BulkSelector-Callout1.png)

![Bulk Selector](img/BulkSelector-Callout2.png)

1. **Bulk Selector Checkbox**: Enables a user to quickly select or deselect all elements on the current page of the related component.
 * Clicking the bulk selector when **some** items in the related component are selected will deselect all items.
 * Clicking the bulk selector when **all** items in the related component are selected will deselect all items.
 * Clicking the bulk selector when **no** items in the related component are selected will select all items.
2. **Tooltip** (optional): Reflects the current selection state.
 * For partially elected lists, the tooltip text is “Partially Selected” and screenreader text is “Click to deselect all”.
 * For lists with all selected, the tooltip text is “All Items Selected” and screenreader text is “Click to deselect all”.
 * For lists with none selected, the tooltip text is “No Items Selected” and screenreader text is “Click to select all”.
3. **Dropdown** (optional): Allows the user to select all items of a particular state. Default values are "Select All" and "Select None." Additional values should be able to be added to work off of filtered states, such as "Red Cars or Blue Cars" / "Running VMs", etc. The dropdown component is recommended for use with a [card view](http://www.patternfly.org/pattern-library/content-views/card-view/).

## Selection States
* The bulk selector checkbox fill will change to reflect the current selection state. There are three selection states and corresponding fills:
 1. Partially selected
 2. All Items selected
 3. No Items selected


 ![Bulk Selector](img/BulkSelector-SelectionStates-All.png)


This component is often used to select multiple items and perform an action on them. Note that after an action is completed, the selection state remains as is until the user changes the selection.

See [list view](http://www.patternfly.org/pattern-library/content-views/list-view/) for more on list behavior and visual treatment.
