### BUG-01 — Valid Gmail Address Rejected
- **Type:** Validation
- **Actual:** `test@gmail.com` is marked as invalid but `test@msg.net` marked as valid.
- **Expected:** Valid email formats must be accepted.

### BUG-06 — API Accepts SQL Injection Payload
- **Type:** Security
- **Actual:** POST request to `https://exclusiveresorts.com/submit-form/` accepts SQL injection payload `'; DROP TABLE Users; --` and returns HTTP 200 OK.
- **Expected:** The API should validate and sanitize all user input, reject malicious SQL injection payloads, and return an appropriate 4xx client error response (e.g. 400 Bad Request or 422 Unprocessable Entity).
(Run newman collection, last test from data.json)

