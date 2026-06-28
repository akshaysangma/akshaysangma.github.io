# Redis Resources

Curated, high-trust sources for the full-expert Redis arc. Knowledge for lessons is drawn from here, not from memory. Primary sources are marked ★.

## Knowledge

### Canonical reference
- ★ [Official Redis Docs](https://redis.io/docs/latest/) — the canonical reference. Authoritative on data types, persistence, replication, cluster, and configuration. Use for: anything where you need the *current, correct* behaviour.
- ★ [Redis Commands Reference](https://redis.io/commands/) — every command with its **time complexity** and version history. Use for: "what does this command cost?" and exact semantics/flags. This page's Big-O notes are gold for the internals track.
- [Redis source code](https://github.com/redis/redis) — primary source of truth. `src/` is unusually readable C with strong comments (`t_string.c`, `t_zset.c`, `dict.c`, `ae.c`, `object.c`). Use for: settling any "what *actually* happens" question on the internals track.

### Internals & design rationale
- ★ [antirez's blog](https://antirez.com/) — design essays by Redis's creator (Salvatore Sanfilippo). Best source for *why* Redis is built the way it is (single-thread, RDB vs AOF, the Redlock debate, streams design). Use for: internals reasoning and design trade-offs.
- [Redis Design and Implementation — Huangz Hua](https://redisbook.com/) — book dedicated to internals: object encodings, event loop, RDB/AOF format, replication. Use for: deep "how is this implemented" study. (Based on an older Redis 3.x, but the core mechanics still hold.)
- [Redis Explained — Architecture Notes](https://architecturenotes.co/p/redis) — visual, well-illustrated deep dive on the model and architecture. Use for: building intuition before reading source.

### Patterns & applied
- [Redis in Action — Josiah L. Carlson (Manning)](https://www.manning.com/books/redis-in-action) — the canonical patterns book (caching, locks, queues, counters, search). Full text is free online (Manning / redis.com ebook). Use for: real-world recipes and modeling.
- [Redis University (free, official)](https://university.redis.com/) — structured free courses: RU101 (intro), RU201 (data structures), RU301 (cluster/HA), RU202 (streams). Use for: guided, exercise-backed progression that complements these lessons.

## Wisdom (Communities)
- [r/redis](https://www.reddit.com/r/redis/) — general Q&A and design critique. Use for: "is this the right pattern?" sanity checks.
- [Stack Overflow — [redis] tag](https://stackoverflow.com/questions/tagged/redis) — high-signal answers to specific command/behaviour questions, often from core contributors. Use for: precise technical questions.
- [Redis Discord / community](https://redis.io/community/) — closer to the maintainers; good for nuanced internals/ops questions. Use for: questions the docs don't settle.

## Gaps
- No single definitive *operations runbook* source yet (failover drills, capacity sizing, real incident patterns). Will need to assemble from official docs + antirez + real ElastiCache/Sentinel/Cluster guidance as the ops phase approaches.
