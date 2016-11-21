# Table View

## Overview

The table view organizes data into rows (of items) and columns (of item attributes). Tables make structured data easy to scan, compare, sort, and analyze. Tables can be embedded into other design patterns. Tables are familiar to users and often the correct choice for structured data, but be careful not to overuse tables. Here are some examples of when not to use a table:

The table pattern should **NOT** be used if:

- Users need to find patterns within a data set. Consider a line chart or a bar chart.
- Users need to browse the data set without knowing exactly what to look for. Consider using a [List View](https://www.patternfly.org/pattern-library/content-views/list-view/#/api).

## Pagination

This pattern defines how pagination behaves within content views, which includes tables, list, and card views.

The persistent elements related to pagination would be found on the bottom of the table.  This includes:

* See the number of items on a page and total number of pages
* See how many pages of data there is.
* View which page you are on (current location)
* Modify how many pages are being displayed.
* Skip to the next or previous page.
* Skip multiple pages.
Navigate to the first/last page.

Selection info will be shown in the top right of the table. This pattern addresses the ability to select all items across multiple pages in addition to selecting all items on a page.

### Default Table

![default table](img/table-example.png)

### Pagination

![pagination](img/pagination_overview.png)
