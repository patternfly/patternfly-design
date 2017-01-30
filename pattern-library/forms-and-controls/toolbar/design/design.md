# Toolbar

![Toolbar pattern with callouts](img/toolbar-design.png)
  1. **Filter:** Enables a user to quickly reduce the number of content items on screen at one time by applying stackable filters to a content view.

  1. **Component Divider:** Visually and spatially separates the toolbar’s component patterns. No divider is needed between left-aligned and right-aligned sets of patterns because they are separated by a significant space.

  1. **Sort:** Helps users make sense of content by ordering it in a logical fashion based on a single attribute.

  1. **Column Visibility:** Enables users to define what columns are visible within a table. If the user changes the view to something other than the table view, then this icon does not display in the toolbar. Refer to the [Table View](http://www.patternfly.org/pattern-library/content-views/table-view/) design page for more details

  1. **Actions:** Contains actions for one or more pieces of content in the current view.

  1. **Find:** Locates a specific item or items by automatically scrolling or paging to all occurrences of an entered query. Unlike filtering, it does not remove content from the view.

  1. **Change View:** Allows users to utilize the advantages of different content representations by switching between ways of visualizing the same dataset.

  1. **Active Filters:** A component of the filter tool that contains a list of all currently active filters as well as the Clear All Filters action. Not displayed if stackable filters are disabled.

  1. **Content and Results Count:** Shows the number of content items that satisfy all currently applied filters, as well as the total number of items and the type of item. If no filters are applied, only the total number of items and the item type are displayed (e.g. 40 Virtual Machines). May be displayed to the left of right-aligned content if stackable filters are disabled.

## Layouts

The Toolbar can take different shapes depending on which content controls are included.

![Toolbar pattern with callouts](img/toolbar-layout1.png)

![Toolbar pattern with callouts](img/toolbar-layout2.png)

The content controls should be arranged according to the above templates. If one or more component patterns are not needed, the remaining patterns should align to the edge of the toolbar rather than leaving an empty space for the missing pattern.
