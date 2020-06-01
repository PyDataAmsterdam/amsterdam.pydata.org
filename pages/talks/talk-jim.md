---
layout: talk
title: Jim Dowling - Hopsworks.ai - a feature store for machine learning
description: 
---

A Feature Store enables machine learning (ML) features to be registered, discovered, and used as part of ML pipelines, thus making it easier to transform and validate the training data that is fed into machine learning systems.
 
Feature stores can also enable consistent engineering of features between training and inference, but to do so, they need a common data processing platform. The first Feature Stores, developed at hyperscale AI companies such as Uber, Airbnb, and Facebook, enabled feature engineering using domain specific languages, providing abstractions tailored to the companies' feature engineering domains. However, a general purpose Feature Store needs a general purpose feature engineering, feature selection, and feature transformation platform.

In this talk, we describe how we built a general purpose, open-source Feature Store for ML on the open-source Hopsworks platform with Apache Spark. We will show how the Feature Store enables end-to-end ML pipelines to be factored into feature engineering and data science stages that each can run at different cadences. And we will show how we built the world's first managed feature store for the cloud, hopsworks.ai.
