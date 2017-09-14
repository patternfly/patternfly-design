# Modeless Overlay

A modeless overlay panel displays more detailed information  about an object while still allowing the user to interact with the UI that is behind the panel.

Some of the general use cases for the modeless overlay might include:
- If the user needs to access more detailed information from a list or dashboard.
- If the user needs more detailed information while still needing access to the underlying UI.
- Quick access to details without leaving a main page.
- A substitute for a modal overlay when the underlying UI directly affects the surfaced details.

Some of the more detailed use cases for the modeless overlay might include:
- This pattern should be used only for detailed or secondary information, primary information should not live on this panel.
- The underlying information should be directly related to the detailed information that is surfaced on the panel.  
- This pattern could be used to add, view, edit, and remove detailed information of an individual item.

Notes about the behavior of the modeless overlay panel:
- The overlay panel can be collapsed and there’s a slight animation that goes along with it when the user closes the panel.  
- The text boxes and fields featured on the overlay panel allow the user to edit them inline.  
- The overlay panel never bleeds onto the top navigation, it rests directly underneath of it.
- There is a slight shadow that appears around the edge of the overlay panel to reinforce that it is on another layer.
- The user can still access the UI layer underneath of the overlay panel when the panel is extended.

## Modeless Overlay Example
![Image of Modeless Overlay](img/modeless-overlay-panel.png)
