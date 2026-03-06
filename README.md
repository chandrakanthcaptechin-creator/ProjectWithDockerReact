# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Installation
Install NODEJS
docker

## Execution
Create react project
configure docker in react
start docker engine

## Build 
docker compose up --build


## Test Case
## Field                      ## Description
1) Test Case ID                  TC_001
2) Title                         Employee management App
3) Description                  Verify that the Employee Management screen displays existing employee data, and allows adding, editing, and deleting employee records in the table.
4) Preconditions                 User is logged into the application and navigates to the "Add Employee" form
5) Test Steps                   -Open the Employee Management page.
                                -Existing employee data should be displayed in the table.
                                -To add a new employee, fill in the form fields and click the Save button.
                                -To edit an employee, click the Edit button, modify the data, and click Update.
                                -To delete an employee, click the Delete button on the corresponding row.
6) Test Data                    - Employee ID: 1
                                - Name: Chandrakanth
                                - Date of Joining: 02-03-2026
                                - Resign: N
                                - Date of Resign: N/A
7) Expected Result              - Employee data is correctly saved, updated, and deleted in the database.
                                - Table reflects the changes immediately.
                                - Form resets after saving or updating.
8) Actual Result                Data saving, updating, and deleting works correctly in the database.
9) Status                       Pass
10) Postconditions              After saving or updating, the form fields are cleared, ready for new input.


## To run the test
docker compose run react-app npm install vitest -- to install vitest

docker compose run react-app npm test -- to run the test