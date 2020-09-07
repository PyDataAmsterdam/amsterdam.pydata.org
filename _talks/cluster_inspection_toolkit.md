---
layout: talk
title: "Cluster Inspection Toolkit"
kind: "Poster"
speakers: "Annemarie Paul and Sebastian Rabe"
---

# Cluster Inspection Toolkit

Extracting meaningful insights after clustering a given data set is hard and laborsome.

We propose a toolkit containing three techniques to derive meaningful insights from arbitrary clustering solutions or low-cardinality multi-class classifications in a shorter amount of time:

1.	Cluster plotting: Feature inputs are usually high dimensional. To represent the cluster solution in a low-dimensional and thus plotable space Uniform-Manifold Approximation and Projection is employed.
2.	Cluster assignment: Which features and what interactions drive the clustering? The cluster assignment can be reverse engineered in an interpretable manner using gradient-boosted trees and shaply values.
3.	Feature inspection: The contribution of a specific feature on the global clustering space can be approximated by combining of a low-dimensional UMAP projection with a kernel ridge regression.

To test our toolkit, we apply all three techniques to real data on AirBnb hostings (other data sets are possible) and extract relevant clusters and their descriptions. Moreover, we created a streamlit-based toolkit-interface which, together with python-code snippets, we would like to present in the poster session and to discuss with the PyData community.

## Speakers

### Annemarie Paul

Hi, I am Annemarie and work as Senior Data Scientist at Ginkgo Analytics. I studied labor and education economics, as well as statistics and econometrics, and switched from Academia to the private sector about two yeas ago. I am Pyladies Hamburg co-organizer and Women in AI City Lead for Hamburg and I think that the python community is a great opportunity to learn and grow together. I am super curious how the global PyData community looks like and happy to get to know more people who are passionate about the universe of data analysis and about developing helpful data-driven real-world solutions.

### Sebastian Rabe

