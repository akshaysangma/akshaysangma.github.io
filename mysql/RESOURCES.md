# MySQL & Data Pipelines Resources

Curated, high-trust sources. Knowledge in lessons is drawn from here, not from
memory. Kept in sync with `resources.html` (the published face).

## Knowledge — SQL & MySQL

- [MySQL 8.0 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)
  The primary source — vendor docs for exact syntax and behaviour. Use for: anything where MySQL-specific behaviour matters (data types, functions, `EXPLAIN`, isolation levels). Verify claims here, not from memory.
- [SQLBolt — interactive SQL lessons](https://sqlbolt.com/)
  Browser-based, no setup, immediate feedback. Use for: drilling `SELECT`/`JOIN`/aggregation until automatic. Lesson 12 covers logical query order — the spine of this course.
- [Mode SQL Tutorial](https://mode.com/sql-tutorial/)
  Clear, well-paced, from basic to advanced (window functions, performance). Use for: a second explanation when a concept hasn't clicked.
- ["Use The Index, Luke!" — Markus Winand](https://use-the-index-luke.com/)
  The definitive developer's guide to SQL indexing and the B-tree. Use for: indexes, `EXPLAIN`, why a query is slow, composite-index column order. Has a [MySQL 3-minute test](https://use-the-index-luke.com/3-minute-test/mysql).
- [Select Star SQL](https://selectstarsql.com/)
  Free interactive book that builds real query-writing skill on a single dataset. Use for: spaced retrieval practice on a coherent schema.

## Knowledge — Data Pipelines & Modeling

- [Book: _Designing Data-Intensive Applications_ — Martin Kleppmann](https://dataintensive.net/)
  The canonical text on how data systems work: storage engines, replication, batch vs stream, CDC. Use for: the deep "why" behind pipelines, OLTP vs OLAP, log-based change capture.
- [Book: _The Data Warehouse Toolkit_ — Ralph Kimball & Margy Ross](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-dw-toolkit/)
  The standard reference for dimensional modeling (star schema, facts/dimensions). Use for: warehouse design questions and ETL/ELT modeling.
- [dbt — "What is ELT?" & docs](https://docs.getdbt.com/)
  Modern ELT and transformation-in-the-warehouse practice. Use for: ELT patterns, modeling layers, idempotent transforms, testing data.

## Wisdom (Communities)

- [r/SQL](https://www.reddit.com/r/SQL/)
  Active, beginner-friendly, strong on query-help and interview questions. Use for: "is my query right / idiomatic", interview-prep threads.
- [r/dataengineering](https://www.reddit.com/r/dataengineering/)
  High-signal on pipelines, warehouses, and tooling trade-offs. Use for: real-world pipeline architecture debates and what's actually used in industry.
- [DBA Stack Exchange](https://dba.stackexchange.com/)
  Expert-moderated Q&A for database internals and performance. Use for: deep, specific MySQL/indexing/locking questions.

## Interview practice (drilling grounds)

- [DataLemur — SQL interview questions](https://datalemur.com/) — real-company SQL questions with difficulty tiers.
- [StrataScratch](https://www.stratascratch.com/) — SQL + data interview problems from real companies.
- [LeetCode Database](https://leetcode.com/studyplan/top-sql-50/) — the "Top SQL 50" study plan; good for `JOIN`/window practice under constraints.

## Gaps
- No single high-trust source yet for *streaming/CDC hands-on* (Debezium + Kafka). To fill before Chapter 3 streaming lessons.
