# Redis Glossary

The canonical language for this workspace. Every lesson and exercise uses these terms. **A term is added only once the learner has used it correctly** — this file grows as understanding does, it is not a dictionary to read ahead.

## Terms

**Key**:
The unique name that addresses one value in Redis's single global keyspace. Always a binary-safe string.
_Avoid_: index, id, field

**Value**:
The data a key points to. In Redis a value is always a *typed* structure (string, list, hash, set, sorted set, …), not just bytes.
_Avoid_: data, entry

**TTL (Time To Live)**:
The remaining lifetime of a key before Redis automatically deletes it. Set per-key; absence of a TTL means the key is persistent (no expiry).
_Avoid_: expiry timer, timeout
