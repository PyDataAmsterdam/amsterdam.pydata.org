---
layout: page
title: Live Event Schedule
---

<script src="../assets/js/cookie.min.js"></script>
<script src="../assets/js/moment.min.js"></script>
<script src="../assets/js/moment-timezone-with-data.js"></script>

<style>
:root {
    --border-light: #dfdfdf;
    --foreground: #4E4852;
}
table.schedule-global {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  color: var(--foreground);
  border: 1px solid var(--border-light);
  border-bottom: 4px solid var(--border-light);
  line-height: 24px;
}
table.schedule-global td, table.schedule-global th {
  border: 1px solid var(--border-light);
  padding: 3px 4px;
}
table.schedule-global td, table.schedule-global tr {
  background: #FFF;
}
table.schedule-global tbody td {
  font-size: 13px;
  border: 1px solid var(--foreground);
  vertical-align: middle;
}
table.schedule-global thead {
  background: #FFFFFF;
  border-bottom: 4px solid var(--border-light);
}
table.schedule-global thead th {
  font-size: 15px;
  font-weight: bold;
  color: var(--border-light);
  border-left: 2px solid var(--border-light);
}
table.schedule-global thead th:first-child {
  border-left: 0px solid var(--border-light);
}

table.schedule-global tfoot {
  font-size: 14px;
  font-weight: bold;
  color: var(--border-light);
  border-top: 4px solid var(--border-light);
}
table.schedule-global tfoot td {
  font-size: 14px;
}

.schedule-global .major {
  background: #b8d9e3;
}

.schedule-global .tutorial {
  background: #fbe5d4;
}

.schedule-global .talks {
  background: #ffffcc;
}

/* Extracurriculars */
.schedule-global .extra {
  background: #98edf7;
}

.select-with-arrow {
  position: relative;
  margin-bottom: 20px;
}

.select-with-arrow:after {
  content: '▼';
  font: 17px "Consolas", monospace;
  left: 265px;
  top: 15px;
  padding-left: 10px;
  border-left: 1px solid #999;
  position: absolute;
  pointer-events: none;
}

.select-with-arrow select {
  display: block;
  width: 300px;
  word-break: normal;
  border: 1px solid #cccccc;
}
</style>

# Schedule

<div class="select-with-arrow">
    <select name="timezone" selected="UTC" id="timezone-picker" onChange="updateTimezone(this.value)">
        <option value="UTC">UTC</option>
    </select>
</div>

## Saturday, November 7th

{: .schedule-global }

|                                Time (UTC) |                                 Major Events |
| :---------------------------------------: | :------------------------------------------: |
|  <span day="7" time="08:00-16:00"></span> | {: .major } Humble Data Workshop - Session 1 |
|  <span day="7" time="16:00-23:59"></span> | {: .major } Humble Data Workshop - Session 2 |


## Wednesday, November 11th

{: .schedule-global }

|                                 Time (UTC)|                                                                                         Major Events    | Extracurriculars (TBD) | Sponsor Events (TBD) | Talk Watch Parties (TBD)  |
| :---------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :--------------------: | :------------------: | :-----------------------: |
|       <span day="11" time="03:30"></span> | {: .talks }                                            [Talks released](./talk_release_schedule#nov-11) |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="11" time="04:00-07:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="08:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                     ^^ [Track Q&A Panel: Data Visualization and Interpretability #0](./qa_panels#viz-1) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="08:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="09:00"></span> | {: .tutorial }                                                                                          |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="09:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |    ^^ [Tutorial Office Hours, Solving large-scale inverse problems in Python with PyLops](../talks/130) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="10:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="10:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="11:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                               ^^ [Track Q&A Panel: Julia For Python & Julia Users](./qa_panels#julia-1) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="11:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="11" time="12:00-13:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="14:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                                                                  ^^ Keynote Watch Party |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="14:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="15:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                                                                ^^ Keynote Fireside chat |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="15:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="11" time="16:00-16:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="17:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                                                                          ^^ Short Talks |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="17:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="11" time="18:00-18:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="19:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                  ^^ [Track Q&A Panel: Lessons from Industry #1](./qa_panels#industry-1) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="19:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="20:00"></span> | {: .tutorial }                                                                                          |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="20:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                     ^^ [Tutorial Office Hours, Probability Calibration: Latest Techniques](../talks/43) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="21:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="21:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="22:00"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="11" time="22:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |

## Thursday, November 12th

{: .schedule-global }

|                                 Time (UTC)|                                                                                         Major Events    | Extracurriculars (TBD) | Sponsor Events (TBD) | Talk Watch Parties (TBD)  |
| :---------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :--------------------: | :------------------: | :-----------------------: |
|       <span day="12" time="03:30"></span> | {: .talks }                                            [Talks released](./talk_release_schedule#nov-12) |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="12" time="04:00-08:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="09:00"></span> | {: .tutorial }                                                                                          |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="09:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |    ^^ [Tutorial Office Hours, Solving large-scale inverse problems in Python with PyLops](../talks/130) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="10:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="10:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="11:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                            ^^ [Track Q&A Panel: Open Science #1](./qa_panels#opensci-1) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="11:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="12" time="12:00-19:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="20:00"></span> | {: .tutorial }                                                                                          |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="20:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                  ^^ [Tutorial Office Hours, Panel: Dashboards for PyData](../talks/299) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="21:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="21:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="22:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                     ^^ [Track Q&A Panel: Data Visualization and Interpretability #2](./qa_panels#viz-2) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="12" time="22:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |

## Friday :jack_o_lantern:, November 13th

{: .schedule-global }

|                                 Time (UTC)|                                                                                                                      Major Events    |             Extracurriculars (TBD) | Sponsor Events (TBD) | Talk Watch Parties (TBD)  |
| :---------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------: | :------------------: | :-----------------------: |
|       <span day="13" time="03:30"></span> | {: .talks }                                                                         [Talks released](./talk_release_schedule#nov-13) |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
| <span day="13" time="04:00-07:30"></span> |                                                                                                                                      |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="08:00"></span> | {: .major }                                                                                                                          |                                    |                      |                           |
|                                        ^^ |                                                         ^^ [Track Q&A Panel: Causal and Statistical Methods #1](./qa_panels#stats-1) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="08:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="09:00"></span> | {: .tutorial }                                                                                                                       |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="09:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |    ^^ [Tutorial Office Hours, Beautiful (ML) Data: Patterns & Best Practice for effective Data solutions with PyTorch](../talks/187) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="10:00"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="10:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="11:00"></span> | {: .major }                                                                                                                          |                                    |                      |                           |
|                                        ^^ |                                                               ^^ [Track Q&A Panel: Lessons from Industry #2](./qa_panels#industry-2) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="11:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
| <span day="13" time="12:00-13:30"></span> |                                                                                                                                      |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="14:00"></span> |                                                                                                                                   ^^ | {: .extra }                        |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |            ^^ Executives at PyData |                   ^^ |                        ^^ |
|       <span day="13" time="14:30"></span> |                                                                                                                                   ^^ |                                 ^^ |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
| <span day="13" time="15:00-16:00"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="16:30"></span> | {: .major }                                                                                                                          |                                    |                      |                           |
|                                        ^^ |    ^^ [Keynote Watch Party: Multi-Label Classification with Human Rights Data, by Maria Gargiulo and Megan Price, PhD](../talks/402) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="17:00"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="17:30"></span> | {: .major }                                                                                                                          |                                    |                      |                           |
|                                        ^^ |                                                    ^^ [Keynote Fireside chat with Maria Gargiulo and Megan Price, PhD](../talks/404) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="18:00"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="18:30"></span> |                                                                                                                                      |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="19:00"></span> | {: .major }                                                                                                                          |                                    |                      |                           |
|                                        ^^ |                                                              ^^ [Track Q&A Panel: Data Science in Production #1](./qa_panels#prod-1) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="19:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="20:00"></span> | {: .tutorial }                                                                                                                       |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="20:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                             ^^ [Tutorial Office Hours, Why and What If – Causal Analysis for Everyone](../talks/170) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="21:00"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="21:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="22:00"></span> | {: .major }                                                                                                                          |                                    |                      |                           |
|                                        ^^ |                                                                             ^^ [Track Q&A Panel: Open Science #2](./qa_panels#viz-2) |                                 ^^ |                   ^^ |                        ^^ |
|       <span day="13" time="22:30"></span> |                                                                                                                                   ^^ |                                    |                      |                           |
|                                        ^^ |                                                                                                                                   ^^ |                                 ^^ |                   ^^ |                        ^^ |

## Saturday, November 14th

{: .schedule-global }

|                                 Time (UTC)|                                                                                         Major Events    | Extracurriculars (TBD) | Sponsor Events (TBD) | Talk Watch Parties (TBD)  |
| :---------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :--------------------: | :------------------: | :-----------------------: |
|       <span day="14" time="03:30"></span> | {: .talks }                                            [Talks released](./talk_release_schedule#nov-14) |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="14" time="04:00-07:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="08:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                              ^^ [Track Q&A Panel: Miscellaneous #1](./qa_panels#misc-1) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="08:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="09:00"></span> | {: .tutorial }                                                                                          |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="09:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |          ^^ [Tutorial Office Hours, A Gentle Introduction to Multi-Objective Optimisation](../talks/82) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="10:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="10:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="11:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                ^^ [Track Q&A Panel: Data Science in Production #2](./qa_panels#prod-2)  |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="11:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="12:00"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="12:30"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                                                                                          ^^ Short Talks |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="13:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="14" time="13:30-16:30"></span> |                                                                                                         |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="17:00"></span> | {: .tutorial }                                                                                          |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="17:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |          ^^ [Tutorial Office Hours, Exploratory Data Analysis with Pandas and Matplotlib](../talks/363) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="18:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="18:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="19:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                ^^ [Track Q&A Panel: Miscellaneous & Algorithmic Accountability](./qa_panels#misc-acc-1) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="19:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="20:00"></span> | {: .tutorial }                                                                                          |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="20:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |         ^^ [Tutorial Office Hours, From 0 to Virtual Assistant (now with Human Handoff!)](../talks/177) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="21:00"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="21:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="22:00"></span> | {: .major }                                                                                             |                        |                      |                           |
|                                        ^^ |                            ^^ [Track Q&A Panel: Causal and Statistical Methods #2](./qa_panels#stats-2) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="14" time="22:30"></span> |                                                                                                      ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                      ^^ |                     ^^ |                   ^^ |                        ^^ |

## Sunday, November 15th

{: .schedule-global }

|                                 Time (UTC)|                                                                                             Major Events    | Extracurriculars (TBD) | Sponsor Events (TBD) | Talk Watch Parties (TBD)  |
|                               :---------: | :---------------------------------------------------------------------------------------------------------: | :--------------------: | :------------------: | :-----------------------: |
|       <span day="15" time="03:30"></span> | {: .talks }                                                [Talks released](./talk_release_schedule#nov-15) |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="15" time="04:00-08:30"></span> |                                                                                                             |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="09:00"></span> | {: .tutorial }                                                                                              |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="09:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |               ^^ [Tutorial Office Hours, Mine your own data - Analyze your Facebook Timeline](../talks/322) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="10:00"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="10:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="11:00"></span> | {: .major }                                                                                                 |                        |                      |                           |
|                                        ^^ |                                                  ^^ [Track Q&A Panel: Miscellaneous #2](./qa_panels#misc-2) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="11:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
| <span day="15" time="12:00-15:00"></span> |                                                                                                             |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="15:30"></span> | {: .major }                                                                                                 |                        |                      |                           |
|                                        ^^ |                                                                                              ^^ Short Talks |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="16:00"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="16:30"></span> |                                                                                                             |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="17:00"></span> | {: .major }                                                                                                 |                        |                      |                           |
|                                        ^^ | ^^ [Keynote Watch Party: Tangible Steps Towards Algorithmic Accountability by Ayodele Odubela](../talks/66) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="17:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="18:00"></span> | {: .major }                                                                                                 |                        |                      |                           |
|                                        ^^ |                                               ^^ [Keynote Fireside chat with Ayodele Odubela](../talks/403) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="18:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="19:00"></span> | {: .major }                                                                                                 |                        |                      |                           |
|                                        ^^ |                                     ^^ [Track Q&A Panel: Data Science in Production #3](./qa_panels#prod-3) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="19:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="20:00"></span> | {: .tutorial }                                                                                              |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="20:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                               ^^ [Tutorial Office Hours, Scaling Up Your Data Work With Dask](../talks/338) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="21:00"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="21:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="22:00"></span> | {: .major }                                                                                                 |                        |                      |                           |
|                                        ^^ |                                         ^^ [Track Q&A Panel: Algorithmic Accountability](./qa_panels#acc-1) |                     ^^ |                   ^^ |                        ^^ |
|       <span day="15" time="22:30"></span> |                                                                                                          ^^ |                        |                      |                           |
|                                        ^^ |                                                                                                          ^^ |                     ^^ |                   ^^ |                        ^^ |

<script type="text/javascript">
    {% include timezone-picker.js %}
</script>
