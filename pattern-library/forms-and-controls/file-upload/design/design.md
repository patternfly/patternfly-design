# File Upload

Patterns Available:
* [Multiple File Upload](#multiple-file-upload)
* [Single File Upload](#single-file-upload)
* [Editable File Upload](#editable-file-upload)

## Multiple File Upload
![Multiple File](img/Mul1.png)

![Multiple File](img/Mul2.png)

![Multiple File](img/Mul3.png)

1. **Drag and drop area**: Users may drag and drop files anywhere in this box or click “browse” to open a file directory and search for files.
2. **Max files and size** (optional): Indicates to the user how many files they may upload and how large the upload may be.
3. **Hover state**: Upon dragging files over the drop area, the box becomes outlined in blue and the text changes to “Drop Files Here.”
4. **Upload status**: After the files have been dropped, their upload status is shown.
 * **Success**: For files that have successfully uploaded, the pficon-ok icon will be shown to the left of the filename and the file size is listed to the right (optional). Users have the option to remove the file by selecting "Remove."
 * **Failure**: For unsuccessful uploads, the pficon-error-circle-o icon is used instead. Users have the option to select "Retry" or "Remove."
 * **Loading**: For files that are still loading, the spinner icon is shown.
 * **Note**: If a selected file does not match the requirements for the file upload, an error dialog will appear to inform the user that the file is unable to be uploaded. (Ex: "Error: The file you are trying to upload, 'filename.csv' is the wrong file type. Please select another file.")


## Single File Upload

![Single File](img/Single3.png)

1. **Single File**: This pattern may be used for cases in which users may upload only one file, and it behaves the same way as the Multiple File Upload. After a file has been uploaded, its upload status is shown with the file size (optional) and  "Remove" link listed to the right.
 * Note that if a user drags a new file to the drop area, a dialog will appear informing the user that they will overwrite the old file. Users may continue or cancel the action.


## Editable File Upload
![Editable File](img/Combo1.png)

![Editable File](img/Combo2.png)

![Editable File](img/Combo3.png)

1. **Drag and drop area**: Users may drag and drop a file anywhere in this box, click “browse” to open a file directory and search for files, or type or paste text directly into the box.
2. **Max files and size** (optional): Indicates to the user how many files they may upload and how large the upload may be.
3. **Hover state**: Upon dragging a file over the drop area, the box becomes outlined in blue and the text changes to “Drop File Here.”
4. **Edit box**: After the file has successfully uploaded or the user has copied and pasted into the box, the edit box is populated with content and the empty state disappears. Users may edit the content by typing directly into the box.
 * If a user deletes the contents of the edit box, it will return to the original empty state.
