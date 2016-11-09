# Utilization Bar Chart

## Description
![#callout-1](img/utilization-bar-chart-callout-1.png)

  1. **Chart Fill:**
    - The fill color depends on the thresholds.
    - When no thresholds exist the indicator is blue (#0088ce).
    - When a threshold exists and the percentage has not surpassed any thresholds, the indicator is green (#3f9c35).
    - When the utilization percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange (#ec7a08).
    - When the utilization percentage has surpassed the error threshold, the indicator is is red (#cc0000).

  1. **Background Fill:**
    - The background color is grey (#d1d1d1).

  1. **Tooltip:**
    - It is recommend that the percentage is displayed on hover.

  1. **Warning Threshold Indicator** (optional)**:**
    - If a warning threshold exists, that may be visually indicated on the chart. 75% is the typical default value for a warning threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).

  1. **Error Threshold Indicator** (optional)**:**
    - If an error threshold exists, that may be visually indicated on the chart. 90% is the typical default value for an error threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).
