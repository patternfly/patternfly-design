# Dual Pane Selector

Dual Pane Selectors allow users to visually compare available and selected items and move items between those states.  They are best used when more than 30 items appear in a list or if there is a specific applicable use case. Lists under 30 items should consider using the [Bootstrap Multiple Select widget](http://www.patternfly.org/pattern-library/widgets/#bootstrap-select).

## Default State
![Selecting Items](1.png)

  1. **Select All**
    - Selects all items in the list.
    - When some items are selected, if the user then clicks the Select All button, all items will then be selected. Clicking again will deselect all items.

  1. **Type-ahead Filter**
    - Type-ahead filter allows you to easily reduce long lists to more quickly find items.

  1. **Sorting (optional)**
    - Default sort will be alphabetical.
    - Additional sorting options are dependent on the data.

  1. **Additional Actions (optional)**
      - Additional actions can be presented as a button.
      - More than one action should be presented in a kebab.

  1. **Shuttle Buttons**
    - Used to move selected items between the two state panes.

  1. **Pane Width/Height & Scrolling**
      - The panes should have flexible widths and a maximum height.
      - The pane may decrease in height as the items move out of a list, but a maximum height limit would be met with a scroll to accommodate additional list items.

    1. **Item Count Labels**
        - The bottom of each pane should have a count to the number of items selected.

    1. **Empty State**
        - Empty panes should possess an Empty State message to inform users that there are no selections to be made, or no items have been selected.

## Selecting and Moving Items

![Selecting Items](2.png)
![Select All](3.png)

1. **Hover Highlight**
  - Standard highlight should exist on hover.

1. **Select Highlight + Icon**
  - Selected items are highlighted with the addition of a checkmark icon to visually reinforce item selection. This is particularly useful when multiple selections have been made.

1. **Selecting within both panes**
  - The panes participate in mutually exclusive highlighting. Only the items in one state pane may be selected at any give time.

1. **Moving an Item**
  - After an item(s) has been selected, the Shuttle Buttons move the items to the desired state pane.
  - After items are moved they remain highlighted in their new state pane as visual confirmation. They remain highlighted until a new selection is made.
  - If no known sort methodology is determined, items will added to the bottom of the list.


## Bulk Moving
![Select All](4.png)

1. **Select All**
  - When Select All is clicked, all items are highlighted following the above highlight and move rules.
  - Clicking the box again will deselect all.

## Empty State on Selection Pane
![Empty State](5.png)

1. **Initial Pane is Empty**
  - When all items are selected and removed from the first state pane an Empty State message should be shown letting the users know there are no other items available for selection.

## Deep thoughts in Liz's Corner
![Default State](oneclick.png)
1. **One-Click Move**
  - Upon hover a right or left arrow appears along with the highlight.
  - Clicking the arrow moves it to the corresponding pane.
  - This is for individual select only and does not have multiple select ability.
