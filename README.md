#cypress-assignment

#QA Cypress Testing Assignment

## Introduction
This is a test automation framework for UI Test Automation


TypeScript is also installed and enabled, so if you are comfortable with it, please feel free to use the same.

## Steps

1. In the command line, install the package dependencies using the command `npm install`
2. Run the tests using the command `npm run cypress:open`. This brings the Cypress runner. You can now run the tests.
3. In your IDE or code editor of choice (we recommend VS Code but you are free to choose what you like most) edit the code.

## Brief about the framework:
1. It's a pure page object model framework where I am creating separate page object classes, test classes for each page to make it more maintainable.
2. Reading data from fixtures for better maintainability.
3. Moved base URL in cypress config file.
4. Making locators to be more consistant.
5. Mostly doing assertions using implicit assertion wherever applicable.
6. Created common reusable methods like login, submitContact which can be resused whenever we extend out test cases.
