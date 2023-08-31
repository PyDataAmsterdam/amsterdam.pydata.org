+++
title = "In-Process Analytical Data Management with DuckDB"
+++

DuckDB is a novel analytical data management system. DuckDB supports complex queries, has no external dependencies, and is deeply integrated into the Python ecosystem. Because DuckDB runs in the same process, no serialization or socket communication has to occur, making data transfer virtually instantaneous. For example, DuckDB can directly query Pandas data frames faster than Pandas itself. In our talk, we will describe the user values of DuckDB, and how it can be used to improve their day-to-day lives through automatic parallelization, efficient operators and out-of-core operations.

Data management systems and data analysts have a troubled relationship: Common systems such as Postgres or Spark are unwieldy, hard to set up and maintain, hard to transfer data in and out, and hard to integrate into complex end-to-end workflows. As a response, analysts have developed their own ecosystem of data wrangling tools such as Pandas or Polars. These tools are much more natural for analysts to use, but are limited in the amount of data they can process or the amount of automatic optimization that is supported.

DuckDB is a new analytical data management system that is built for an in-process use case. DuckDB speaks SQL, has no external dependencies, and is deeply integrated into the Python ecosystem. DuckDB is Free and Open Source software under the MIT license. DuckDB uses state-of-the art query processing techniques with vectorized execution, lightweight compression, and morsel-driven automatic parallelism. DuckDB is out-of-core capable, meaning that it is capable of not only reading datasets that are bigger than main memory. This allows for analysis of far greater datasets and in many cases removes the need to run separate infrastructure.

The “duckdb” Python package is not a client to the DuckDB system, it provides the entire database engine. DuckDB runs without any external server directly inside the Python process. Once there, DuckDB can run complex SQL queries on data frames in Pandas, Polars or PyArrow formats out-of-the box. DuckDB can also directly ingest files in Parquet, CSV or JSON formats. Because DuckDB runs in the same process, data transfer are virtually instantaneous. Conversely, DuckDB’s query results can be transferred back into data frames very cheaply, allowing direct integration with complex downstream libraries such as PyTorch or TensorFlow.

DuckDB enjoys fast-growing popularity, the Python package alone is currently downloaded around one million times a month. DuckDB has recently become the default backend of the Ibis project that offers a consistent interface in Python over a variety of data backends.

This talk is aimed at two main groups, data analysts and data engineers. For the analysts, we will explain the user values of DuckDB, and how it can be used to improve their day-to-day lives. For data engineers, we will describe DuckDB’s capabilities to become part of large automated data pipelines. The presenters for the proposed talk, Hannes Mühleisen and Mark Raasveldt are the original creators of DuckDB, they are still leading the project and are deeply familiar with its Python integration.

---

## Speaker: Hannes Mühleisen

Prof. Dr. Hannes Mühleisen is a creator of the DuckDB database management system and Co-founder and CEO of DuckDB Labs, a consulting company providing services around DuckDB. He is also a senior researcher of the Database Architectures group at the Centrum Wiskunde & Informatica (CWI), the Dutch national research lab for Mathematics and Computer Science in Amsterdam. Hannes is also Professor of Data Engineering at Radboud Universiteit Nijmegen. His' main interest is analytical data management systems.
