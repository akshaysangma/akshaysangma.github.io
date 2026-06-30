# Mission: Apache Airflow

## Why
Build genuine fluency in Apache Airflow — the vocabulary, the mental model, and the
"why" behind each concept — so it can be explained clearly and confidently in a
technical interview, without hand-waving.

## Success looks like
- Can answer "What is Airflow and what problem does it solve?" crisply, including why it beats a pile of cron jobs.
- Can define a DAG, Task, and Operator from memory and explain how they relate.
- Can sketch Airflow's architecture (scheduler, executor, workers, metadata DB, API/web server) and say what each piece does.
- Can reason out loud about scheduling, dependencies, retries, and failure handling — the topics interviewers probe.
- Recognises and correctly uses the standard terminology, so answers sound like someone who has used the tool.

## Constraints
- **Total beginner** to Airflow — start from zero, no assumed exposure.
- **Limited Python** — lessons must not assume Python fluency; explain any code line by line and keep code light.
- Goal is conceptual fluency for interviews, not shipping production pipelines — favour understanding and vocabulary over deep hands-on authoring.
- Short lessons, one win each (working-memory friendly).

## Out of scope (for now)
- Deploying / operating a production Airflow cluster (Helm, Kubernetes executor tuning, scaling).
- Deep Python authoring patterns and large custom-operator development.
- Provider-specific integrations beyond what illustrates a concept.
- Insider-internal Airflow setup (revisit only if the mission shifts toward on-the-job use).
