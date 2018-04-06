# Sort

![Image highlighting attribute selector](img/sort_expand.png)


  1. **Sort Selector:** Contains a list of the possible attributes by which to sort. Objects may be sorted by any attribute, including properties that are not displayed in the current view.(e.g. attributes in hidden columns, or those that are not displayed in a tile). When the user opens this view, the default sort order should be shown selected in the list (for example,”Name”).


  1. **Sort Order Toggle:** Sort can toggle between ascending and descending order. The icon on this button changes according to the order of the current sort. The default for sort is ascending order.

<br />

  See available sort icons below and when they should be used.


| Icon                                        | Class Name               | Tooltip Text | Screenreader Text (aria-label)       | Comments           |
| ------------------------------------------- | ------------------------ | ------------ | ------------------------------------ | ------------------ |
| <span class="fa fa-sort-alpha-asc">![Image sort A-Z](img/fa-sort-alpha-asc.png)</span> | fa-sort-alpha-ascending  | Sort A to Z | Sorted A to Z. Toggle to sort Z to A. | When data to be sorted is alphabetical, use this icon to communicate the sort order. |
| <span class="fa fa-sort-alpha-desc">![Image sort A-Z](img/fa-sort-alpha-desc.png)</span> | fa-sort-alpha-descending | Sort Z to A | Sorted Z to A. Toggle to sort A to Z. | See comments in previous row. |
| <span class="fa fa-sort-numeric-asc">![Image sort 1-9](img/fa-sort-numeric-asc.png)</span>  | fa-sort-numeric-ascending | Sort 1 to 9 | Sorted 1 to 9. Toggle to sort 9 to 1. | When data to be sorted is numeric, use this icon to communicate numerical sort order. |
| <span class="fa fa-sort-numeric-desc">![Image sort 9-1](img/fa-sort-numeric-desc.png)</span> | fa-sort-numeric-descending | Sort 9 to 1 | Sorted 9 to 1. Toggle to sort 1 to 9. | See comments in previous row. |
| ![Image sort common](img/sort-common-asc.png)| | Sort small to large value | Sorted small to large value. Toggle to sort large to small value. | Use this icon to communicate sort order for other data types, such as sort by size, sort by date,sort by distance, etc. |
| ![Image sort common](img/sort-common-desc.png)|  | Sort large to small value | Sorted large to small value. Toggle to sort small to large value. | See comments in previous row. |
