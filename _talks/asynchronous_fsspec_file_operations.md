---
layout: talk
title: "Asynchronous fsspec file operations"
kind: "Short talk"
speakers: "Martin Durant"
---

# Asynchronous fsspec file operations

Asyncio compatibility has been added recently to some fsspec-based file system implementations: http, s3 and gcs. Not only can you now call (some of) the API from async/await-style code, but bulk operations can be carried out massively concurrently, with potentially great speed-ups for file upload/download, copy and delete.

## Speakers

### Martin Durant

A former astrophysicist, Martin has worked in multiple academic positions, including medical imaging research.
After this, Martin became a data scientist, and has since been working for Anaconda for five years. In
open source, he is a member of the Dask, Intake, Streamz and Zarr maintenance teams, with specialisms in
data access, remote filesystems and data formats.
