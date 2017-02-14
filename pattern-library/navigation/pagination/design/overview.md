# Pagination

This pattern defines how pagination behaves within content views. When present, pagination is consistent across all three content views.

* Pagination is optional.
  * Pagination is not necessary when there is a small amount of content.
  * Pagination is not necessary when an application uses "lazy load" to load content as a user scrolls.
* Pagination can be "sticky" and remain fixed to the bottom of a user's browser.
  * A sticky footer is not recommended for views with content *below* pagination.

## Pagination - Table View

![Pagination Overview](img/pagination_overview.png)
