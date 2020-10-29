---
layout: talk
title: "pandas.(to/from)_sql is simple but not fast"
kind: "Talk"
speakers: "Uwe Korn"
---

# pandas.(to/from)_sql is simple but not fast

Pandas provides convenience methods to read and write to databases using to_sql and read_sql. They provide great usability and a uniform interface for all databases that support an SQL Alchemy connection. Sadly, the layer of convenience also introduces a performance loss. Luckily, for a lot of databases, a performant access layer is available.

## Speakers

### Uwe Korn

Uwe Korn is a Software / Data Engineer at QuantCo. His expertise is on building scalable architectures for machine learning services and the teams around that. Nowadays he focuses on the data engineering infrastructure that is needed to provide the building blocks to bring machine learning models into production. As part of his work to provide an efficient data interchange he became a core committer to the Apache Parquet and Apache Arrow projects. In addition to building software, he is also taking care of packaging software and recently became part of the core team of the conda-forge distribution.
