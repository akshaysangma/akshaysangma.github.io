# Mission: Redis — Full Expert

## Why
Achieve genuine end-to-end mastery of Redis as foundational infrastructure — not just "I can cache things," but understanding it deeply enough to reason about *why* it behaves the way it does, debug it under pressure, and make sound design and operational decisions. No external deadline; the goal is real craftsmanship, depth over speed.

## Success looks like
- Reach for the *right* data structure for a problem on instinct (when a sorted set beats a list, when a hash beats N strings, when a Stream beats a list-as-queue).
- Explain Redis's behaviour from first principles: single-threaded event loop, in-memory model, atomicity, object encodings, persistence trade-offs.
- Design production-grade patterns correctly — caching (and its failure modes), distributed locks, queues, rate limiters, leaderboards — and know where each one breaks.
- Operate Redis with confidence: persistence (RDB/AOF), replication, Sentinel, Cluster, memory/eviction, monitoring, failover, capacity planning.
- Read the internals well enough to predict memory cost and latency of a given command, and to make sense of the source when needed.

## Constraints
- **No deadline — depth-first.** Favour correct mental models and durable retention over coverage speed.
- **Hands-on.** Learner runs a local Redis (`redis-cli`) and is expected to run commands against it each lesson. Retention is built by doing, not just reading.
- **Starting floor: cache-only.** Comfortable with `GET`/`SET`/`TTL` as a key-value cache; everything past strings is new.

## Out of scope (for now)
- Redis Stack modules in depth (RediSearch, RedisJSON, RedisGraph, RedisBloom, vector search) — revisit once core Redis is mastered.
- Client-library-specific minutiae (specific PHP/Go/Node SDK quirks) beyond what illuminates a concept.
- Managed-service console mechanics (ElastiCache/MemoryStore UIs) beyond the concepts they expose.
