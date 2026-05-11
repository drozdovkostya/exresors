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

### BUG-04 — Missing ARIA Labels for Screen Readers (A11y)
- **Type:** Accessibility
- **Actual:** Input fields lack `aria-label` or `<label>` tags. Screen readers announce "Edit text, blank".
- **Expected:** Each field must have a descriptive label for assistive technologies.

### BUG-05 — Error Messages Are Not Announced (A11y)
- **Type:** Accessibility
- **Actual:** Validation errors lack `aria-live`. VoiceOver stays silent when errors appear.
- **Expected:** Use `aria-live="assertive"` or `role="alert"` for instant error announcement.

---

## [MEDIUM SEVERITY]

### BUG-06 — Missing Postal Code Validation
- **Type:** Validation
- **Actual:** Form accepts `1`, `abc`, or `@@@` in the Postal Code field.
- **Expected:** Validate length and format based on regional rules.

### BUG-07 — Name Fields Accept Numeric Values
- **Type:** Input Validation
- **Actual:** Names accept `123` or numeric-only strings.
- **Expected:** Only alphabetic characters and standard symbols (hyphens, etc.) allowed.

### BUG-08 — Incorrect Phone Codes in Dropdown
- **Type:** UI / Data
- **Actual:** Some country codes in the dropdown are mismatched or outdated.
- **Expected:** Dialing codes must match international ITU standards.

### BUG-09 — Submit Button Active with Invalid Data
- **Type:** UX / UI Logic
- **Actual:** Button is enabled even if required fields are empty or invalid.
- **Expected:** Button should remain disabled until all required fields pass validation.

### BUG-10 — Debug Logging in Production
- **Type:** Security / Maintenance
- **Actual:** Development console logs are visible in the production environment.
- **Expected:** All debug logging must be disabled for production builds.

### BUG-11 — Hydration Mismatch Error
- **Type:** Frontend (React)
- **Actual:** Console shows "Hydration completed but contains mismatches."
- **Expected:** SSR and Client-side rendered HTML must match perfectly.

### BUG-12 — Error Messages Are Not Focusable
- **Type:** Accessibility / UX
- **Actual:** Focus remains on the "Submit" button; users cannot "Tab" to error descriptions.
- **Expected:** Move focus to the error summary or the first invalid field on failure.

---

## [LOW SEVERITY]

### BUG-13 — Generic Error Banner Message
- **Type:** UX
- **Actual:** Banner says "There was a problem," without specifying what is wrong.
- **Expected:** Provide specific feedback or a summary of invalid fields.