# 📋 Test Plan: Lead Generation Form API

This document outlines the testing strategy for the Lead Generation Form API. The goal is to ensure data integrity, security, and a seamless user experience by validating the submission process against various scenarios.

---

## 🔍 1. Scope

### **In-Scope**
*   **Functional Validation**: Testing mandatory fields, data types and business logic.
*   **Security**: Verifying protection against common vulnerabilities like SQL Injection and XSS.
*   **API Integrity**: Validating JSON response structures and HTTP status codes.

### **Out-of-Scope**
*   **Performance/Load Testing**: High-concurrency stress testing is handled in a separate suite.
*   **Integration testing**: Need more permissions.
*   **Visual Styling**: CSS/Layout testing is part of the UI/UX design review.

---

## ⚠️ 2. Risk Areas

*   **Data Integrity**: Potential for client-side validation bypass leading to "dirty" or incomplete leads in the database.
*   **Security Vulnerabilities**: Input fields acting as entry points for malicious scripts or unauthorized database queries.
*   **UX & Concurrency**: Risks associated with duplicate submissions (double-clicks) and high API latency affecting lead conversion.

---

## 🤖 3. Automation Strategy

*   **Tools**: **Playwright** (Atomic API/E2E testing).
*   **Approach**: Automated execution of core functional, validation, and security scenarios.
*   **CI/CD Integration**: Critical cases (Smoke and Security) are executed automatically on every build to prevent regressions.

---

## 🛠 4. How to Run

To execute the automated suite using Playwright, run:

```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Show test report
npx playwright show-report