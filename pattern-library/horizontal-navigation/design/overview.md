It is recommended to use horizontal navigation when you want to provide access to global navigation of an application at the top of every page. When using this pattern with the Notification Drawer, it is recommended to use the sticky horizontal navigation so that the navigation and notification drawer [notification drawer](http://www.patternfly.org/pattern-library/communication/notification-drawer/#/api)  stick to the top of the page on scroll. This horizontal navigation pattern will support up to three levels of navigation.

The top level (primary) navigation should always be exposed. Secondary and tertiary levels can either be persistent or hidden within drop-down menus. The latter provides less visibility to lower-level categories but saves vertical screen space.

As a rule of thumb, the horizontal navigation is the preferred choice over  [vertical navigation](http://www.patternfly.org/pattern-library/navigation/vertical-navigation/) when:

There are a small number of fixed categories.
You want to provide the best visibility to primary categories by placing them immediately below the page header area.
Consider using [vertical navigation](http://www.patternfly.org/pattern-library/navigation/vertical-navigation/) if you need a solution that can easily scale for a large amount of menu items and easily adapt to small screen sizes. Horizontal menus can also be made responsive but it usually requires a transformation from horizontal to vertical. Since vertical menus are already in this format, the transition from desktop to mobile is less disorienting.

Jump to [Masthead Design](http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/#example-overview-1), [Standard Horizontal Navigation](http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/#example-overview-2), or [Navbar Variations](http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/#example-overview-3)

## Masthead Design

For horizontal navigation, we recommend the masthead design be small in height to reduce vertical real estate, accommodating for the navigation. The logo area is in the left corner and contains the application product name image file, in the form of a sized SVG graphic. However, if additional rebranding capabilities are desired, there is an option for a taller masthead which will include a product logo.

### Option 1
![Masthead Horizontal](img/masthead-horizontal.png)

### Option 2
![Masthead Horizontal Variation](img/masthead-horizontalvariation.png)

Standard Horizontal Navigation
![Standard Horizontal Navigation](img/standard-horizontal navigation.png)

[View full page example](http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/horizontal-navigation.html)

## Navbar Variations

### Single-Level Menu Bar
![Single Level Menu Bar](img/single-level-menu-bar.png)

### Two-Level Menu Bar
![Two Level Menu Bar](img/two-level-menu-bar.png)


### Menu Bar with Drop-Downs
![Menu Bar with drop downs](img/menu-bar-with-drop-downs.png)
