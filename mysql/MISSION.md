# Mission: MySQL & Data Pipelines

## Why
Pass a technical interview (and/or certification) where SQL querying, MySQL
internals, and data-pipeline design are tested. The real outcome: walk into the
interview able to *write the query on the whiteboard, explain why it's correct,
and reason out loud about indexes, joins, and how data moves through a system* —
without freezing.

## Success looks like
- Write correct multi-table `JOIN`, `GROUP BY`, and window-function queries from a prose problem, under time pressure.
- Explain the logical order a query executes in, and use it to debug a wrong result.
- Read an `EXPLAIN` plan and say whether an index will be used and why.
- Talk fluently about normalization, transactions/ACID, and isolation levels.
- Sketch a data pipeline (OLTP → warehouse) and defend ETL-vs-ELT, batch-vs-streaming, and CDC choices.

## Constraints
- Starting level: **some basics** — comfortable with simple `SELECT`s and what a table is; `JOIN`s, indexes, and aggregation are shaky.
- Format preference: **in-depth** — go deep across the whole landscape, not a shallow skim.
- Interview prep means **storage strength over fluency**: heavy retrieval practice, spacing, and "explain it back" beats passive reading.

## Out of scope (for now)
- Insider-specific production schemas or pipelines (this is general interview prep, not job onboarding).
- Database administration / ops (replication setup, backups, tuning a live server) beyond what an interview asks conceptually.
- NoSQL systems, except where contrasted to explain when a relational DB is the right choice.
