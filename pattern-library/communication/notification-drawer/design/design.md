# Notification Drawer
Jump to [Toast Notification](#toast-notification), [Notification Drawer](#notification-drawer), [Expand Behavior](#expand-behavior-|-optional), or [Notification Drawer | Responsive State](#notification-drawer-|-responsive-state)

## Toast Notification
![Image of standard Toast Notification](img/toast.png)

1. **Toast Notification:** The drawer should utilize the current [Toast Notification](https://www.patternfly.org/pattern-library/communication/toast-notifications/#/api). The notification shows the title and an optional content-relevant icon.

## Notification Drawer
![Image of standard Notification Drawer](img/tray.png)

1. **Icon:** Displays visual differentiator when new or unread notifications are present. Clicking on the icon will slide out a drawer and dismiss the toast notification. Clicking on the icon again will close the drawer.
2. **Drawer Title:** Title of Drawer.
3. **Accordion:** Only one notification tab may be opened at a given time -maximizing drawer space. Italicized text will indicate number of new events. Clicking on the title will expand accordion.
4. **Row:** Example content shows relevant icon creating a visual differentiator between content severity or object type. New/unread notifications are shown in bold.
5. **Row Hover State:** Example of hover state.
6. **Mark All Read:** Clicking “Mark All Read” changes all visible unread rows (bold row type) to read (regular row type).
7. **Icon Empty:** The empty state shows no new events.
8. **Row Actions:** Clicking on the [Kabob](https://www.patternfly.org/pattern-library/widgets/#kebabs) menu will reveal a drop down containing actions for that item.
9. **Infinite Scroll:** Infinite scroll reduces need to identify time range on accordion tab. Allows for free-range historical search of notifications.

## Expand Behavior | Optional
The notification drawer has the ability to expand in order to view additional details regarding an event. The expand drawer functionality is optional. Use of this feature will depend on the amount of information available.

1. **Collapsed Drawer:** The expand icon is in the top left corner of the notification drawer and is shown as a link to expand the drawer.
2. **Expanded Drawer:** Individual rows may include additional information when in the expanded state. The collapse icon is in the top left corner of the notification drawer and is shown as a link. All other notification drawer features should remain the same as the collapsed view.

### Collapsed Drawer
![Image of Collapsed Notification Drawer](img/collapsed.png)

### Expanded Drawer
![Image of Expanded Notification Drawer](img/expanded.png)

## Notification Drawer | Responsive State
This is how the notification drawer looks on small screens. The icon of notification drawer is exposed on the navigation bar and the drawer will take over the whole screen width.

![navigation-vertical-notifications-responsive-callout](img/navigation-drawer-responsive-callout.png)

1. **Icon - no new events**: No fill indicates no new events.
2. **Icon - new events**: When new or unread notifications are present, the icon will change to be full.
3. **Icon - drawer open**: When clicking on the icon, the notification drawer will be open and the icon change to be full and blue (#0088ce). Clicking on the icon again will close the drawer.
4. **Drawer Title**: Title of Drawer.
5. **Accordion**: Only one notification tab may be opened at a given time - maximizing drawer space. Italicized text will indicate number of new events. Clicking on the title will expand accordion. When there are no new notifications, all the accordions are default to be collapsed.
6. **Row**: Example content shows relevant icon to draw attention to event severity or object type. New/unread notifications are shown in bold.
7. **Complex Events**:  Individual rows may include additional information in complex events. User can tap on the event and full contents will show. If the event was unread, it will be marked as read at the same time. Tapping on the event again will collapse it. Tapping on another event will also lead to collapse it because only one event may be expanded at a given time.
8. **Mark All Read**: Clicking “Mark All Read” changes all visible unread rows (bold row type) to read (regular row type). After clicking “Mark All Read”, the button will be hidden.
9. **Row Actions**: Clicking on the [Kabob](https://www.patternfly.org/pattern-library/widgets/#kebabs) menu will reveal a drop down containing actions for that item.
10. **Loading More**: User can scroll up and down within an accordion to view more events. It will load 10 events at a time by default. When scrolling to the bottom of the list, user can pull up to load more events.
