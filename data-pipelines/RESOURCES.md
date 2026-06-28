# Data Pipelines Resources

Curated, high-trust sources. Explainers draw from here, not from memory. Communities give wisdom.

## Knowledge

### Spark / PySpark / Databricks (primary track)
- [Apache Spark — PySpark Documentation (official)](https://spark.apache.org/docs/latest/api/python/index.html)
  The canonical PySpark reference. Use for: DataFrame API, functions, exact signatures, "Quickstart: DataFrame".
- [Apache Spark — SQL / DataFrames Programming Guide (official)](https://spark.apache.org/docs/latest/sql-programming-guide.html)
  The conceptual guide to the DataFrame/SQL engine. Use for: execution model, Catalyst, reading/writing data.
- [Databricks — PySpark on Databricks (docs)](https://docs.databricks.com/aws/en/pyspark/)
  Databricks-flavoured PySpark, incl. [PySpark basics](https://docs.databricks.com/aws/en/pyspark/basics). Use for: how PySpark behaves *inside* Databricks notebooks/jobs.
- [Databricks — "Apache Spark Programming with Databricks" (free self-paced training)](https://www.databricks.com/training/catalog/apache-spark-programming-with-databricks-134)
  Structured free course on the DataFrame API and distributed architecture. Use for: a guided spine to follow alongside these lessons.
- [Book: *Learning Spark, 2nd Edition* — Damji, Wenig, Das, Lee (free PDF from Databricks)](https://www.databricks.com/resources/ebook/learning-spark-2nd-edition)
  The standard intro text, Spark 3.x, PySpark-friendly. Use for: deeper reads on RDDs→DataFrames, Structured Streaming, tuning.
- [Delta Lake — Documentation (official)](https://docs.delta.io/latest/index.html)
  The open table format underneath Databricks Lakehouse. Use for: ACID, time travel, MERGE, schema evolution, OPTIMIZE.

### Python data tooling (foundation track)
- [pandas — User Guide (official)](https://pandas.pydata.org/docs/user_guide/index.html)
  Use for: DataFrame/Series, indexing, groupby, merge, IO. The "10 minutes to pandas" intro is a fast on-ramp.
- [NumPy — Documentation (official)](https://numpy.org/doc/stable/)
  Use for: ndarray, vectorization, broadcasting, dtypes — the layer pandas sits on.
- [Python — `pathlib`, `csv`, `json`, `sqlite3` stdlib docs](https://docs.python.org/3/library/index.html)
  Use for: lightweight ingestion/IO before reaching for heavier tools.

### Setup
- [Databricks — Sign up for Free Edition (docs)](https://docs.databricks.com/aws/en/getting-started/free-edition) · [Free Edition FAQ](https://www.databricks.com/product/faq/community-edition) · [Free Edition limitations](https://docs.databricks.com/aws/en/getting-started/free-edition-limitations)
  No-cost serverless workspace that replaced Community Edition (retired 2025). Use for: getting a cloud Databricks workspace with zero install. Limitations page = what's capped (serverless only, capped concurrent Job tasks, daily fair-use compute, no SLA, non-commercial).
- [Apache Spark — PySpark Installation guide](https://spark.apache.org/docs/latest/api/python/getting_started/install.html)
  Official install reqs. Verified 2026: Spark 4.0.x (latest, pip-installed by default) supports **Java 17 and 21 only**, **Python 3.10+**. Windows walkthrough captured in `reference/environment-setup.html`.

### Productionizing & governance
- [Databricks — Lakeflow Jobs (orchestration docs)](https://docs.databricks.com/aws/en/jobs)
  Current official name for the orchestrator (formerly "Workflows"/"Jobs", renamed June 2025 Data + AI Summit). Use for: tasks, dependencies (DAG), schedules/triggers, retries, notifications. Lesson 12.
- [Databricks — What happened to Delta Live Tables?](https://docs.databricks.com/aws/en/ldp/where-is-dlt)
  Confirms DLT → **Lakeflow Declarative Pipelines** rename (June 2025); existing `import dlt` code runs unchanged. Use for: declarative pipelines + expectations (data quality). Lesson 14.
- [Databricks — What is Unity Catalog?](https://docs.databricks.com/aws/en/data-governance/unity-catalog/) · [Securable objects](https://docs.databricks.com/aws/en/data-governance/unity-catalog/securable-objects) · [Data lineage](https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-lineage)
  The governance layer. Three-level namespace `catalog.schema.table`, ANSI SQL GRANT/REVOKE, automatic table/column lineage. Lesson 18 + cert domain 5.

### Portfolio dataset
- [NYC TLC Trip Record Data (official)](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page) · [AWS Open Data mirror](https://registry.opendata.aws/nyc-tlc-trip-records-pds/) · [NYC Terms of Use](https://www.nyc.gov/home/terms-of-use.page)
  **Recommended portfolio dataset.** Public, already in Parquet (since May 2022), millions of rows/month, no rider PII. Pair with the TLC taxi-zone lookup for a join. Lesson 15.

### Certification (optional milestone)
- [Databricks Certified Data Engineer Associate — landing page](https://www.databricks.com/learn/certification/data-engineer-associate) · [Certification & Badging FAQ](https://www.databricks.com/learn/certification/faq)
  Cert overview, registration ($200 USD), recert (every 2 years). FAQ note: passing score is set statistically and **not published** — ignore "70%" figures from prep sites. Commonly cited structure: ~45 MCQs / 90 min (verify on official pages).
- [Exam Guide PDF (live as of 2025-07-25)](https://www.databricks.com/sites/default/files/2025-11/databricks-certified-data-engineer-associate-exam-guide-july-25-2025-04.pdf)
  The blueprint. 2026 domains: Platform 10% · Development & Ingestion 30% · Processing & Transformations 31% · Productionizing Pipelines 18% · Governance & Quality 11%. Code shown in SQL where possible, else Python.

## Wisdom (Communities)
- [r/dataengineering](https://www.reddit.com/r/dataengineering/)
  High-signal subreddit for the field. Use for: career-switch advice, tool debates, "is this pipeline design sane?", interview prep.
- [Databricks Community](https://community.databricks.com/)
  Official forum + certifications board. Use for: Databricks-specific questions, exam clarifications.
- [Stack Overflow — `[apache-spark]` / `[pyspark]` tags](https://stackoverflow.com/questions/tagged/pyspark)
  Use for: specific error messages and API gotchas.

## Gaps
- ~~Portfolio dataset~~ — RESOLVED: NYC TLC chosen (above), wired into Lesson 15.
- ~~Unity Catalog / governance~~ — RESOLVED: Lesson 18 added + docs curated above.
- Structured Streaming intentionally out of scope for now (see MISSION) — curate when batch is solid. This is the one remaining deliberate gap.
