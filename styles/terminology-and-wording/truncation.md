# Truncation

##### Instances where text might need to be truncated:

  1. Whenever the string overflows the container and you don't want the text to overflow to multiples lines. A few examples include:
  	a. Page titles that show object/host names
    b. Table or list view cells that contain long strings or lots of data and that have some method to view the full text

##### Whether to design for truncating strings at the beginning, end, or in the middle requires a bit of research.

  1. Does the product you are designing for have a default truncation scheme? (For example, if your product has a default setting for how to truncate host names but also a user preference if users want to change it to suit their naming scheme, you should follow that scheme along with the guidelines here.
  2. If the product doesn't have a default truncation choice, think about how the product's users are apt to name objects -- is it more likely that the unique part of the name will be at the beginning or end of the string? Based on the answer, we recommend one of two methods of truncation. There are two different methods that could be applied. One is to truncate at the end of the string "abcdef..." and the other would be to truncate in the middle of the string "abc...ghi". Choose the method on the basis of whether text at the end or in the middle of the string is more likely to differentiate the item.

##### Additional truncation guidelines.

  1. Avoid abbreviations or truncated text in navigation items (first, second, and third levels of navigation in the masthead; left navigation).
  2. In any container holding a string, if there is not sufficient room for the full spelling or hyphenation of a word, abbreviate the text according to the English abbreviation rules [actually, should be according to our rules too].  Do not truncate text in column headings.
  3. Indicate truncated text with an ellipsis (…).  If the text is part of a link, the ellipsis should be part of the link as well.
  4. Leave no fewer than 4 characters when truncating text, and preferably leave enough characters to give a fair idea of what the string says.  For example, don't truncate demo1.internal-el6.satellite to de...
  5. Ensure that there is at least one method for the user to view the entire string.  Options include: tooltips (useful for less than 150 characters or so), expanding rows, overlays, others?
  6. For UI text (as opposed to user-generated text), ensure that the truncation does not make an awkward word (i.e. "associate" truncating to "ass...")
  7. If possible, ensure that truncation does not happen after punctuation, because then it is difficult to differentiate which is the ellipsis and which is part of the name.  For example, don't truncate demo1.internal-el6.satellite to demo1….
  8. If a table column is resizable, the truncated text should adjust accordingly, and continue to follow the preceding guidelines.
