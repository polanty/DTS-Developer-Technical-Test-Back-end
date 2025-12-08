
# DTS Developer Technical Test – Task Management API

## Overview

This project is a simple **task management system** built as part of the DTS Developer Technical Test.
It provides a backend API that allows caseworkers to **create tasks**, with validation, persistence, and unit tests.
The solution follows clean coding practices and is designed to be easy to understand, run, and extend.

---

## Tech Stack

- **Node.js (18+)**
- **Express.js**
- **SQLite** (local persistence for simplicity)
- **Jest** (unit testing)
- **Nodemon** (development)

---

## Features Implemented

- Create a new task via a REST API
- Input validation with meaningful error responses
- Data persisted to a local database
- Unit tests covering core functionality
- Clear API documentation

---

## Getting Started (Run Locally)

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
git clone <https://github.com/polanty/DTS-Developer-Technical-Test-Back-end.git>
cd DTS-Developer-Technical-Test
npm install
npm run dev
```

The application will start on:

```
http://localhost:3000
```

A local SQLite database file (`database.sqlite`) is automatically created in the project root.

---

## API Documentation

### Create Task

**Endpoint**

```
POST /tasks
```

**Description**
Creates a new task for a caseworker.

---

### Request Body

```json
{
  "title": "Prepare case notes",
  "description": "For hearing on Friday",
  "status": "PENDING",
  "dueDateTime": "2025-02-10T15:00:00Z"
}
```

---

### Field Validation

| Field       | Required | Rules                                           |
| ----------- | -------- | ----------------------------------------------- |
| title       | ✅ Yes   | Must be a non-empty string                      |
| description | ❌ No    | Optional                                        |
| status      | ✅ Yes   | One of `PENDING`, `IN_PROGRESS`, `COMPLETED`    |
| dueDateTime | ✅ Yes   | Must be a valid ISO 8601 datetime in the future |

---

### Successful Response (201)

```json
{
  "_id": "65a9f836c9f479e35e1d92c1",
  "title": "Prepare case notes",
  "description": "For hearing on Friday",
  "status": "PENDING",
  "dueDateTime": "2025-02-10T15:00:00Z",
  "createdAt": "2025-01-20T12:30:00Z"
}
```

---

### Error Responses

| Status Code | Scenario                                     |
| ----------- | -------------------------------------------- |
| 400         | Validation error (missing or invalid fields) |
| 500         | Internal server error                        |

Example validation error:

```json
{
  "error": "Title is required"
}
```

---

## Testing

Unit tests are implemented to validate task creation and input validation.

Run tests using:

```bash
npm test
```

---

## Design Decisions

- **SQLite** was chosen for simplicity and ease of setup during assessment.
- Only task creation is implemented, as per the test requirements.
- The architecture allows easy extension for additional CRUD operations if required.
- Validation and error handling are implemented to ensure predictable API behaviour.

---

## Notes

The API is designed to be consumed by a frontend client.
The solution focuses on clarity, maintainability, and best practices within the scope of the exercise.

---
