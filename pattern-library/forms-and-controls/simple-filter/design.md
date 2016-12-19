# Filter

## Filter Bar
![Image highlighting attribute selector](img/filter_bar.png)

  1. **Attribute Selector** (optional)**:** Contains a list of the possible attributes by which to filter.

  1. **Filter Query Field:** The user’s filter query is entered here. All objects that do not have this value for the selected attribute are hidden. If the selected attribute contains 15 or fewer possible values, the text box is substituted for a combo box containing the possible values. The filter is activated when the user presses the “enter” key or selects a value from the combo box.

![Image highlighting filter query field](img/filter_bar_2.png)


## Active Filters Bar

![Title highlighting active filters bar](img/active_filters_bar.png)

1. **Active filter:** Filters are labeled with the attribute and value used to create them. Clicking the X in the box will remove the filter. New filters appear to the right of existing filters and are highlighted briefly upon appearance. If no active filters exist, the active filters bar is hidden.

1. **Clear All Filters:** Clicking this action removes all currently active filters.

1. **Item and Results Count:** Shows the number of items that satisfy all currently applied filters as well as the total number of items and the type of item. If no filters are applied, only the total number of items and the item type are displayed.

**Note:** These filters stack one one another using the “AND” boolean operator. Thus, adding more filters in this way can ONLY REDUCE the number of visible items on the screen. If a particular attribute does not allow for more than one value at a time, the active value will remain in the filter query field until it is changed. Changing the active value will replace the current filter for that attribute rather than adding an additional filter.
