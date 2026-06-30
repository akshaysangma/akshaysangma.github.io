# Apache Airflow Resources

Curated, high-trust sources for this course. Current stable release at course start: **Airflow 3.2.2**.

## Knowledge

- [Apache Airflow — Official Documentation (stable)](https://airflow.apache.org/docs/apache-airflow/stable/)
  The canonical, authoritative reference. Versioned and maintained by the project. Use for: precise definitions, current behaviour, anything you'd otherwise guess at.
- [Core Concepts — Overview & Architecture](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/overview.html)
  The component diagram and one-line descriptions of scheduler, dag processor, executor, workers, triggerer, API/web server, metadata DB. Use for: the architecture interview question.
- [Core Concepts — DAGs](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)
  Definition of a DAG, tasks, dependencies, schedule, data interval, DAG runs. Use for: the "what is a DAG" question and dependency/scheduling reasoning.
- [Airflow 101: Building Your First Workflow](https://airflow.apache.org/docs/apache-airflow/stable/tutorial/fundamentals.html)
  Gentle, official walkthrough of a first DAG. Use for: seeing the vocabulary in real (light) code once the mental model is in place.
- [Concepts glossary terms across the docs](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/index.html)
  Index of the core-concepts pages (Operators, Sensors, TaskFlow, Executors, XComs, etc.). Use for: drilling a specific term once it comes up in a lesson.

## Wisdom (Communities)

- [Apache Airflow Slack (community)](https://apache-airflow-slack.herokuapp.com/)
  Official community Slack — active, practitioner-heavy. Use for: real-world "how do people actually do X" questions once you're past the basics.
- [r/dataengineering](https://www.reddit.com/r/dataengineering/)
  Where Airflow is discussed in the context of real pipelines and interviews. Use for: interview-experience threads, tooling trade-offs, sanity checks.
- [Stack Overflow — `airflow` tag](https://stackoverflow.com/questions/tagged/airflow)
  High-volume Q&A. Use for: specific error messages and "why doesn't my DAG run" patterns.

> Community note: the user is preparing for interviews, not yet shipping pipelines. Communities are
> listed for when curiosity outruns the lessons; don't push joining one unless asked.

## Gaps
- No single canonical "Airflow for interviews" question bank vetted as high-trust yet. Interview-style drilling is handled inside the lessons (quizzes) and by the teacher on demand, rather than by an external source.
