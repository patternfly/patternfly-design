# Sort

![Image highlighting attribute selector](./img/sort_expand2.png)

  1. **Sort Selector:** Contains a list of the possible attributes by which to sort. Objects may be sorted by any attribute, including properties that are not displayed in the current view. (e.g. attributes in hidden columns, or those that are not displayed in a tile). When the user opens this view, the default sort order should be shown selected in the list (for example,"Name").

  1. **Sort Order Toggle:** Sort can toggle between ascending and descending order. The icon on this button changes according to the order of the current sort. The default for sort is ascending order.
  <br />

  See available sort icons below and when they should be used.

| Icon                                        | Class Name               | Tooltip Text | Screenreader Text (aria-label)       | Comments           |
| ------------------------------------------- | ------------------------ | ------------ | ------------------------------------ | ------------------ |
| <span class="fa fa-sort-alpha-asc"></span>  | fa-sort-alpha-asc | Sort A to Z | Sorted A to Z. Toggle to sort Z to A. | When data to be sorted is alphabetical, use this icon to communicate the sort order.  |
| <span class="fa fa-sort-alpha-desc"></span> | fa-sort-alpha-desc | Sort Z to A | Sorted Z to A. Toggle to sort A to Z. | See comments in previous row. |
| <span class="fa fa-sort-numeric-asc"></span>| fa-sort-numeric-asc | Sort 1 to 9 | Sorted 1 to 9. Toggle to sort 9 to 1. | When data to be sorted is numeric, use this icon to communicate numerical sort order. |
| <span class="fa fa-sort-numeric-desc"></span>| fa-sort-numeric-desc | Sort 9 to 1 | Sorted 9 to 1. Toggle to sort 1 to 9. | See comments in previous row. |
| <span class="pficon pficon-sort-common-asc"> | pficon-sort-common-asc | Sort small to large value | Sorted small to large value. Toggle to sort large to small value. | Use this icon to communicate sort order for other data types, such as sort by size, sort by date, sort by distance, etc. |
| <span class="pficon pficon-sort-common-desc">| pficon-sort-common-desc | Sort large to small value | Sorted large to small value. Toggle to sort small to large value. | See comments in previous row. |
{:.table .table-striped .table-bordered}
