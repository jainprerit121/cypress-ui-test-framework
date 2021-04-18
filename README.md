# Snappet.cypress-assignment

#QA Cypress Testing Assignment

## Introduction
This is an assignment for QA candidates

## Task

This assignment is about two things
1. Create meaningful, reproducible, reliable and non-flaky tests
2. Creating clean, readable and maintainable code. 

Below are five tests that (somehow) work but require cleaning up. Update this code to make it easier to maintain, more readable and has sensible ways of asserting data. You might want to research different approaches to improving UI automation such as Page Object Models.

 1. Verity that you can log in with valid credentials
 2. Check to see if rooms are saved and displayed in the UI
 3. Check to see the confirm message appears when branding is updated
 4. Check to see if the contact form shows a success message
 5. Check to see if unread messages are bolded


TypeScript is also installed and enabled, so if you are comfortable with it, please feel free to use the same.

## Steps

1. In the command line, install the package dependencies using the command `npm install`
2. Run the tests using the command `npm run cypress:open`. This brings the Cypress runner. You can now run the tests.
3. In your IDE or code editor of choice (we recommend VS Code but you are free to choose what you like most) edit the code and run it till you feel confident it is done.
4. Share results with us.

## Modeifications Done:
1. Changed framework to page object model where I am creating separate page object class, test class for each page to make it more maintainable.
2. Reading data from fixtures for better maintainability.
3. Moved base URL in cypress config file.
4. Instead of directly accessing URL for different pages, using navigation options available on the webpage as it will also cover the necessary navigation.
5. Fixed locators to be more consistant.
6. Updated assertions using implicit assertion wherever applicable.
7. Created common reusable methods like login, submitContact which can be resused whenever we extend out test cases.