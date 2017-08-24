# Toggle Filter

## Design Description
Toggle filter is a component that enables a user to quickly access a common, singular filter criteria. It is displayed as a toggle button group. The application can use up to 4 quick filter criteria.

![Image highlighting of toggle filter design](img/toggle1.png)

![Image highlighting toggle filter design](img/toggle2.png)

#### Use of toggle filter
The toggle filter can not use together with the Filter pattern. The toggle filter can only use alone. The filters cannot be active at the same time. When using together with the Filter pattern, the results of the two filters are separate. Toggle filter results are not dependent on Filter. When a user clicks the toggle filter, after getting a result from the Filter, the previous filtering criteria (pill) and criteria results will be cleared, and replaced by the new results, based on the toggle filter criteria.

![Image highlighting toggle filter design](img/toggle3.png)

![Image highlighting toggle filter design](img/toggle4.png)

## Design Interaction

![Image highlighting toggle filter attribute](img/toggle5.png)
1.**Toggle filter attribute:** The attributes are single select buttons. The toggle filters are not representative of multiple filtering criteria per button. Each toggle button is an “or” command. Only one button can be chosen at a time.

  ![Image highlighting toggle filter selected and results](img/toggle6.png)
2.**Toggle filter Selected and results:** When user clicks an attribute, the attribute will be highlighted.  Clicking on the attribute again, will deselect  and remove the filter and the highlighting. The data will go back to default. The filtering results listed under the pattern, will directly reflect the state of the toggle filter. The widget style is using the style of the current Patternfly Button Group. See [Patternfly button group](http://www.patternfly.org/pattern-library/widgets/).

![Image highlighting toggle filter interaction](img/toggle7.png)
3.**Toggle filter result when used with Filter:** When using together with Filter, The filtering results are independent. The widget style will be the same as the current Filter UI. [Filter pattern can be found here](http://www.patternfly.org/pattern-library/forms-and-controls/filter/#/overview).

![Image highlighting toggle filter interaction](img/toggle8.png)
4.**Toggle filter used after Filter:** When a user clicks the toggle filter after Filter activated, the previous filtering result will be clear and replaced by the new result.

![Image highlighting toggle filter interaction](img/toggle9.png)
![Image highlighting toggle filter interaction](img/toggle10.png)
5.**Toggle filter used before Filter:** In the case that toggle filter used before Filter, the toggle filter result will be replaced by the Filter when the Filter is activated.
