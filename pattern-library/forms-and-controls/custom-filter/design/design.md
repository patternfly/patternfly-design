# Custom Filter
## Save Option



![Save Option](img/customfilter-page1.png)

1. **Placement of the Save Icon**  : The Save option appears in the Active Filter Area. Optionally this can be either an icon or a button.  

1. **Availability of Save Option:** If the current filter applied is not already saved as a custom filter, then the save button should be enabled else it will remain disabled.

1. **Disabled State of Save Option ** : The Save option remains disabled, if the filters in the Active filter-bar are already saved as a custom filter by the user.
![Disabled State of Save Option](img/customfilter-page1b.png)




## Saving Filter Dialog

![Saving Filter Dialog](img/customfilter-page2.png)

1. **Invoking The Saving Dialog **: The save icon/button when clicked the user is presented with a dialogue to enter a name for the filter.
1. **Default Name of The Custom Filter ** (optional): The Filter name text field, provides a default name based on some predefined or pre-configured pattern, that helps the user to save the filter with minimal clicks.
1. **Saving the Custom Filter **: The save button  on the dialog saves the custom filter in the system.
1. **Disabled State of the Save Option**: Note that the Save Option in the Active Filter bar turns disabled, while the dialog is open. If the user saves the current filter then post saving the Save Option remains disabled. In case the user canceled the dialog without saving the filter, the Save Option gets enabled again.
1. **User Defined Filter Name**: If the user can provide a custom name for the filter in the filter name field before saving.![User Defined Filter Name](img/customfilter-page3.png)

## Sucess Message of Saving a Custom Filter
![Sucess Message of Saving a Custom Filter](img/customfilter-page4.png)

1. **User Notification:**
User is notified that the filter is saved.This may be through toast messages or alert boxes or any other means that makes the user aware that his filter is saved.  

## Accessing the Saved Custom Filters


![Accessing the Saved Custom Filters](img/customfilter-page6.png)

1. **"My Filters" Section in the Filter**:All of the saved custom filters are grouped under "My Filters" in the Filter Bar dropdown.

1. **Accessing the Saved Filters **:To access the saved custom filters, the user selects "My Filters" in the filter bar.


![Accessing the Saved Filters](img/customfilter-page7.png?)

1. **Invoking the List of Saved Filters **: Once the "My Filters" is selcted, the user can click on the carat on the filter bar to invoke the flyout with the list of saved filters. The list is sorted alphabetically or based on most recent to oldest (Optional - this behaviour can be pre-configured).![Invoking the List of Saved Filters](img/customfilter-page8.png)

1. **Selecting the Filter from the List **: The user selects the desired filter name from the list.![Selecting the Filter from the List](img/customfilter-page9.png)
1. **Type Ahead Feature **: The user can also type in the text box the name of the custom filter name he is looking for. While he types in, the type ahead appears with the matching saved filter names.![Type Ahead Feature](img/customfilter-page9b.png)1. **Custom Filter Applied **: Based on the custom filter selcted, the result based on the filter takes effect in the view. The active filter bar appears with all the filter parameters used in the applied custom filter. ![Custom Filter Applied](img/customfilter-page10.png)


## Delete a Custom Filter
![Delete a Custom Filter](img/customfilter-page11.png)
1. **Delete icon in the list **: While the user rolls over any item on the list, the delete icon appears next to the filter name. Clicking on this icon removes the corresponding filter.
