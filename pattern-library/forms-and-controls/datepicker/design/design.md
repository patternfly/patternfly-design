# Date and Time
Date and Time picker has a number of variations, jump to a section below for applied examples:
* [DatePicker](#DatePicker)
* [TimePicker](#TimePicker)
* [DateTimePicker](#DateTimePicker)
* [DateRangePicker](#DateRangePicker)
* [DateTimeRangePicker](#DateTimeRangPicker)

</br>
### DatePicker
</br>
![DatePicker](img/datepicker-guidance.png)

1. **Input Field:** The datepicker field is read only due to the limitations of the input validation.

1. **Calendar Icon:** The calendar icon is shown on the right.

1. **Calendar:** The calendar is displayed when the user clicks on the input field.

1. **Today Button:** This button is a shortcut to select today’s date.

1. **Today indicator:** Today indicator: The indication of Today’s date.

1. **Month and Year Switch:** Change the view of the calendar to month or year by clicking on the calendar header.

1. **Previous and Next Buttons:** Allows the user to navigate through the months or years.

### TimePicker
</br>

![TimePicker](img/timepicker-guidance.png)

1. **Input Field:** The Timepicker field is read only due to the limitations of the input validation.

1. **Time Icon:** The time icon is shown on the right.

1. **Time:** The Time is displayed when the user clicks on the input field.

1. **AM and PM Buttons:** Allows the user to toggle between AM and PM.

1. **Select Hour:** Use the picker to select the hour.

1. **Select Minute:** Use the picker to select the minute.

1. **Up and Down Buttons:** Allows the user to step through the hours or minutes.

### DateTimePicker

</br>

![DateTimePicker](img/dateTimepicker-guidance.png)

DateTimePicker is a combination of DatePicker and TimePicker. Refer to the [DatePicker](#DatePicker) and [TimePicker](#TimePicker) for more details about design guidance.

1. **Input Field:** The DateTimepicker field is read only due to the limitations of the input validation.

1. **DateTimePicker:** The DateTimePicker is displayed when the user clicks on the input field.

1. **Now Button:** This button is a shortcut to select current time.

### DateRangePicker
</br>

![DateRange](img/daterange-guidance.png)

DateRangePicker is a combination of two DatePickers. Refer to the [DatePicker](#DatePicker) for more details about design guidance.
1. **StartDate Input Field:** When the user clicks on the StartDate Input Field, the calendar is display for selecting a StartDate.

1. **EndDate Input Field:** When the user clicks on the EndDate Input Field, the calendar is display for selecting an EndDate.


### Selecting Predefined Ranges

![Predefined Ranges](img/daterange-flexble.png)

1. **Predefined Range (optional):** This action allow user to quickly select some predefined ranges, such as : 7 days, 15 days, 30 days... The Options available in the  dropdown menu may be any number of days.

  - When both the StartDate and the EndDate field are empty, user clicks “7 days “, the date range selected will be 7 days starting from Today’s date.

  - When the StartDate is filled, user clicks “7 days “,  the date range selected  will be 7 days after the StartDate.

  - When the EndDate is filled, user clicks “7 days “, the date range selected  will be 7 days before the EndDate.

### DateTimeRangePicker
</br>

![DateTimeRangPicker](img/dateTimerange-guidance.png)

DateTimeRangePicker is a combination of Two DateTimePickers. Refer to the [DateTimePicker](#DateTimePicker) for more details about design guidance.

1. **StartDate Input Field:** When the user clicks on the StartDate Input Field, the DateTimePicker is display for selecting a StartDate and Time.

1. **EndDate Input Field:** When the user clicks on the EndDate Input Field, the DateTimePicker is display for selecting an EndDate and Time.
