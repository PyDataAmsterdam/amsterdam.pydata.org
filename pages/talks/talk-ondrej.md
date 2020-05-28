---
layout: talk
title: Ondrej Kokes - High Performance Data Loss
description: 
---

Say I give you a CSV with business orders, there are just three of them, the business is just taking off. Pandas tells you the average purchase is for $45, but you can equally use Excel, which gives you the same answer. In anticipation of a rosy future, you decide to use a Big Data Tool. You load it up and process the very same CSV and you report the business is actually doing thousands of orders for millions of dollars.

What is this sorcery? Did I just hijack your analysis by "hacking" a CSV? Are big data tools broken? Can this happen in reality?

With the emergence of big-ish data, lots of tech has focused on the performance side of things. While more performance should be better than less performance, it's not all roses. When evaluating these technologies, we've often stumbled upon integrity issues, sometimes to leading massive data losses. Or, as illustrated above, it can lead to strange data... gains.

In this talk, I'll go over several implementation details that can lead to a large data loss without triggering any warnings or errors. We'll go over a few cases (with data and code examples), but the main ideas are as follows:

correctness should always trump performance - always make sure you're getting the right results, only then focus on performance
"explicit is better than implicit" - this Zen of Python quote is not just about code clarity, it's useful when using data processing tools with hidden logic
fail early, fail often - would you like a pipeline that never fails, but produces garbage, or would you prefer to be paged every now and then, because of an issue?
The main takeaway is that you should understand the abstractions you're using to process your data, no matter what your role is. Every single step that is there between a data source and your report/analysis/database/sink should be understandable, predictable, and, most importantly, correct. After all, our job as data guardians is to deliver data things reliably and correctly - our customer doesn't care if it's in the shiniest new Apache tool or in Cobol, orchestrated by Ada.
