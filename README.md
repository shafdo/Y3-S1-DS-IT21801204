
# API DOCUMENTATION

This API manages user enrollments in courses.

# Base URL

The base URL for all endpoints is localhost:8888/api/enrollments.

# Endpoints

1.Add New Enrollment
    
- Endpoint: POST /:courseId/:userId/add
- Description: Add a new enrollment for a user in a course.
- Parameters : 
    - `courseId` (string, required): The ID of the course
    - `userId` (string, required): The ID of the user
- Responses:
    - `201 Created`: Returns the newly created enrollment or updated enrollment.
    - `404 Not Found`: Returns an error if the enrollment already exists.
- Example:
    ```bash
    POST localhost:8888/api/enrollments/course456/user123/add
    ```

2.Get Enrollment Status
    
- Endpoint: GET /:courseId/:userId
- Description: Check if a user is enrolled in a course.
- Parameters : 
    - `courseId` (string, required): The ID of the course
    - `userId` (string, required): The ID of the user
- Responses:
    - `200 OK`: Returns whether the user is enrolled (`true` or `false`).
- Example:
    ```bash
    GET localhost:8888/api/enrollments/course456/user123
    ```
3.Delete Enrolled Course from Single Enrollment
    
- Endpoint: DELETE /:courseId/:userId
- Description: Remove a course from a user's enrollment.
- Parameters : 
    - `courseId` (string, required): The ID of the course
    - `userId` (string, required): The ID of the user
- Responses:
    - `200 OK`: Returns the updated enrollment.
    - `404 Not Found`: Returns an error if the user is not enrolled in the course.
- Example:
    ```bash
    DELETE localhost:8888/api/enrollments/course456/user123
    ```

4.Delete Enrollment by User ID
    
- Endpoint: DELETE /:userId
- Description: Delete all enrollments for a user.
- Parameters : 
    - `userId` (string, required): The ID of the user
- Responses:
    - `200 OK`:  Returns a success message if enrollments are deleted.
    - `404 Not Found`: Returns an error if the user has no enrollments.
- Example:
    ```bash
    DELETE localhost:8888/api/enrollments/user123
    ```
5.Delete Course from All Enrollments
    
- Endpoint: DELETE /remove/course/:courseId
- Description: Remove a course from all enrollments.
- Parameters : 
    - `courseId` (string, required): The ID of the course
- Responses:
    - `200 OK`:  Returns a success message if course is removed from all enrollments.
    - `404 Not Found`: Returns an error if no user is enrolled in the course.
- Example:
    ```bash
    DELETE localhost:8888/api/enrollments/remove/course/course456
    ```

