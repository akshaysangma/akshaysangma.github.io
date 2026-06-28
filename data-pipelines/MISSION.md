# Mission: Data Pipelines with Databricks/PySpark (and Python)

## Why
Break into a **data engineering role** (career switch). The goal is to become genuinely job-ready at building and operating data pipelines — able to pass technical interviews and do the work on day one — with Databricks + PySpark as the primary stack and Python (pandas/NumPy) as the supporting foundation.

## Success looks like
- Build an end-to-end PySpark ETL pipeline on Databricks: ingest raw data → transform → write a clean Delta table — and explain every step.
- Read and reason about the Spark execution model (lazy transformations vs. actions, partitions, shuffles) well enough to debug and tune a slow job.
- Write idiomatic pandas/NumPy for the local/medium-data work that doesn't need Spark, and know *which tool to reach for*.
- Answer common DE interview questions: ETL vs ELT, batch vs streaming, Delta Lake / medallion architecture, partitioning, joins/shuffles, schema handling, orchestration.
- Optional milestone: pass the **Databricks Certified Data Engineer Associate** exam as proof-of-skill for the job hunt.

## Constraints
- **Level:** "Some of both" — has used pandas and dabbled in Spark/Databricks, but neither is solid. Skip absolute-beginner programming framing; build real competence and fill gaps.
- **Balance:** Databricks/PySpark-heavy. Python (NumPy/pandas/ETL libs) taught as the foundation and the "when not to use Spark" counterpoint.
- **Practice:** Hands-on. Has local Python + access to Databricks (workspace / Community/Free edition). Lessons should lean into runnable exercises with a tight feedback loop.

## Out of scope (for now)
- Deep streaming (Structured Streaming) until batch pipelines are solid — revisit later.
- ML / MLlib / feature engineering modelling — this is a *data engineering* track, not data science.
- Scala Spark. PySpark only.
- Cloud-infra/DevOps depth (Terraform, networking) beyond what a DE touches.
