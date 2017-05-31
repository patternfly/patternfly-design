all
# exclude_rule 'MD010' # no-hard-tabs - This rule is triggered by any lines that contain hard tab characters instead of using spaces for indentation.
exclude_rule 'MD013' # line-length - This rule is triggered when there are lines that are longer than the configured line length
exclude_rule 'MD022' # blanks-around-headers - This rule is triggered when headers (any style) are either not preceded or not followed by a blank line
exclude_rule 'MD024' # no-duplicate-header - This rule is triggered if there are multiple headers in the document that have the same text
exclude_rule 'MD040' # fenced-code-language - This rule is triggered when fenced code blocks are used, but a language isn't specified
exclude_rule 'MD041' # first-line-h1 - This rule is triggered when the first line in the file isn't a top level (h1) header

rule 'MD007', :indent => '4' # ul-indent - This rule is triggered when list items are not indented by the configured number of spaces
rule 'MD026', :punctuation => '.,;!?' # no-trailing-punctuation - This rule is triggered on any header that has a punctuation character as the last character in the line
rule 'MD029', :style => 'ordered' # ol-prefix - This rule is triggered on ordered lists that do not have a prefix that increases in numerical order
