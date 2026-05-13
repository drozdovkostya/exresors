# 🐛 Lead Generation Form - Bug Report List

## [HIGH SEVERITY]

### BUG-01 — Valid Gmail Address Rejected
- **Type:** Validation
- **Actual:** `a@gmail.com` is marked as invalid.
- **Expected:** Valid email formats must be accepted.

### BUG-02 — Form Submitted with Invalid Email
- **Type:** Validation
- **Actual:** Submission triggers even with `test@` or `invalid-email`.
- **Expected:** Submit must be blocked until a valid email format is provided.

### BUG-03 — Backend Does Not Validate Phone Number
- **Type:** Backend Validation
- **Actual:** Server accepts `123` or `abc` as a valid phone number.
- **Expected:** Backend must enforce international phone format standards.

### BUG-04 — Missing ARIA Labels for Screen Readers
- **Type:** Accessibility (A11y)
- **Actual:** Input fields lack `aria-label` or `<label>` tags. Screen readers announce "Edit text, blank".
- **Expected:** Each field must have a descriptive label for assistive technologies.

### BUG-05 — Error Messages Are Not Announced
- **Type:** Accessibility (A11y)
- **Actual:** Validation errors lack `aria-live`. VoiceOver stays silent when errors appear.
- **Expected:** Use `aria-live="assertive"` or `role="alert"` for instant error announcement.

### BUG-06 — API Accepts SQL Injection Payload
- **Type:** Security
- **Actual:** POST request to `https://exclusiveresorts.com/submit-form/` accepts SQL injection payload `'; DROP TABLE Users; --` and returns HTTP 200 OK.
- **Expected:** The API should validate and sanitize all user input, reject malicious SQL injection payloads, and return an appropriate 4xx client error response (e.g. 400 Bad Request or 422 Unprocessable Entity).

---

## [MEDIUM SEVERITY]

### BUG-07 — Missing Postal Code Validation
- **Type:** Validation
- **Actual:** Form accepts `1` and `abc` in the Postal Code field.
- **Expected:** Postal Code field should validate length and format based on regional rules.

### BUG-08 — Name Fields Accept Numeric Values
- **Type:** Input Validation
- **Actual:** Name fields accept `123` or numeric-only strings.
- **Expected:** Only alphabetic characters and standard symbols (e.g. hyphens) should be allowed.

### BUG-09 — Incorrect Phone Codes in Dropdown
- **Type:** UI / Data
- **Actual:** Some country codes in the dropdown are mismatched or outdated.
- **Expected:** Dialing codes must match international ITU standards.

### BUG-10 — Submit Button Active with Invalid Data
- **Type:** UX / UI Logic
- **Actual:** Submit button remains enabled even if required fields are empty or invalid.
- **Expected:** Submit button should remain disabled until all required fields pass validation.

### BUG-11 — Sensitive Debug Logs Exposed in Production
- **Type:** Security / Maintenance
- **Actual:** Development console logs are visible in the production environment.
- **Expected:** All debug logging must be disabled in production builds.

### BUG-12 — React Hydration Mismatch in Production
- **Type:** Frontend (React)
- **Actual:** Console displays: "Hydration completed but contains mismatches."
- **Expected:** Server-side rendered HTML and client-side rendered HTML must match correctly.

### BUG-13 — Error Messages Are Not Focusable
- **Type:** Accessibility / UX
- **Actual:** Focus remains on the "Submit" button; users cannot navigate directly to validation errors.
- **Expected:** Focus should move to the error summary or the first invalid field after failed submission.

---

## [LOW SEVERITY]

### BUG-14 — Generic Error Banner Message
- **Type:** UX
- **Actual:** Error banner displays generic text like "There was a problem" without explaining the issue.
- **Expected:** Error banner should provide specific validation feedback or summarize invalid fields.