# Field Labeling

Labels are always provided for input fields to help users understand what information is being requested of them. This pattern has recommendations for three variations to support different use cases.  


## High-Level Recommendations

* Use [right-aligned labels](#right-aligned-labels) as your default choice.  It has been shown that this approach leads to the shortest completion times.
* Use [top-aligned labels](#top-aligned-labels) when you are space constrained or if mobile usage is a high priority.
* Whatever approach you use, we recommend that you maintain consistency throughout an application.
* If a [field is required](#indicating-required-fields) a required field indicator should be used.
* If the label is not intuitive or the field is complex enough to give more information, a [field level help](http://www.patternfly.org/pattern-library/forms-and-controls/help-on-forms/) icon/popover should be provided.


## Right-Aligned Labels
The ragged left edge makes scanning for context difficult, although the proximity between label and input aids quicker form completion.

![right-aligned labels](./img/right-aligned-labels.png)

Right-aligned labels are good for layouts with more horizontal space than vertical, and support (western), left to right, reading between label and field. The label and the field are in close proximity, allowing the user to traverse quickly, and the vertical margin between all the labels and inputs might aid scanning in long forms.

Despite these advantages, the irregular, ragged left edge of form labels makes this presentation visually busy and more difficult to scan. Long labels need to wrap to a second line, increasing vertical height and/or disrupting the order of the presentation.


#### Use When
* The user is likely to understand the overall context of the form, and scannability is not a priority.
* Completing the form quickly is a priority, but using the “top-aligned” format is not a viable solution.
* For desktop and tablet interfaces, ensure that there is sufficient margin to the left of the form labels to accommodate most labels.
* To accommodate mobile viewports, right-aligned labels should be responsive by adjusting to a top-aligned layout.


## Top-Aligned Labels
Top-aligned labels provide a consistent left edge, along with close proximity of label and input. This offers ease of use for both scanning and form completion while requiring more vertical space than the alternatives.

![top-aligned labels](./img/top-aligned-labels.png)

Top-aligned labels offer the most horizontal area for long labels, relative to the other options as labels can vary in length without affecting the overall presentation. Because the labels are in close proximity to the input fields this approach supports scannability and quick data entry. But because this approach is so visually efficient, however, users might move too quickly through the form and potentially make data entry errors.


#### Use When
* The ability to complete the form quickly is a high priority.
* When label length might vary, e. g. internationalization support.
* The label length might be long, such as for “natural language” question-style labels.
* The user will be entering familiar content and is less likely to make data entry errors.
* Only a few form fields need to be presented.
* Related fields must be grouped horizontally. For example [first name] [last name]


## Left-Aligned Labels
The strong vertical edge helps users to scan for context, although the distance between label and input might slow users down.

![left-aligned labels](./img/left-aligned-labels.png)

Left-aligned labels are good for unfamiliar content or forms in which well considered responses are necessary. Users can easily scan the left edge to read the labels and understand the larger context of the form while the distance between labels and inputs might slow users down. Like right-aligned labels, they support (western), left to right reading between label and field and are good for layouts with more horizontal space than vertical.


#### Use When
* The user is presented with unfamiliar content, and would benefit from scanning the form to understand the overall context.
* The user needs to provide a well considered response - providing data related to critical or complex tasks.
* It’s more important that the user pay close attention to the form material, rather than completing it quickly.
* User needs to be able to make the visual connection between the label and the input; ensure that there isn’t too much space between these elements.
* To accommodate mobile viewports, left-aligned labels should be responsive by adjusting to a top-aligned layout.


## Indicating Required Fields
If only some of the fields are required and others are optional, a required field should be indicated with a red asterisk (<span style="color:red"> * </span>) to the left of the field label. Due to responsiveness issues, we do not recommend labeling optional fields with "(optional)".

![form with required fields (right-aligned)](./img/right-aligned-labels.png)

When all fields on a form are either required or optional, it is not necessary to place the required field indicator on all fields. Simply include a message at the top of the form that indicates whether all fields are required or optional (if it will not be obvious to the target user).  

When fields are all required:
![form with all required fields (right-aligned)](./img/form-all-fields-required.png)

When fields are all optional:
![form with all fields optional](./img/form-all-fields-optional.png)
