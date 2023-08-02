# My Fitness Buddy

## Hosted at: https://myfitnessbuddy-o0mlozxbq-longnphan.vercel.app/

#### Welcome to the My Fitness Buddy web application. This application was created using React, Redux, Tailwind CSS, DaisyUI, React Google Charts, Axios, and the Edamam Food Database API, https://www.edamam.com/

## Getting Started

1.  Upon visiting the website, users will be greeted with a profile page. While it is not necessary to create a profile to use the website, it is recommended. Creating a profile allows the application to calculate the recommended number of calories a user should be consuming daily.

    <img width="716" alt="image" src="https://github.com/longnphan/myfitnessbuddy/assets/67768035/cf8aeeb7-552c-4a1e-8f8a-8f6e2ac1b0c0">

## Tracker Page

1.  If a profile was created, users will be redirected to the **_Tracker_** page.
2.  If a profile was not created, users can get to the **_Tracker_** page by clicking on the **Tracker** link located towards the top right corner.

    <img width="695" alt="image" src="https://github.com/longnphan/myfitnessbuddy/assets/67768035/10ad4f48-0fb0-4881-af5e-eb90fead99c1">

3.  To start tracking calories, start by clicking on the **_ADD FOOD_** link.
4.  After clicking the **_ADD FOOD_** link, users will see a search bar. After typing a food item into the search bar and pressing the **Search** button, a list of foods will populate below the search bar. If user does not see the food item they are looking for, try to be specific and include brand names or restaurant names.

    <img width="804" alt="image" src="https://github.com/longnphan/myfitnessbuddy/assets/67768035/dab44bd8-6593-4542-a7cc-98b4c9bdd972">

5.  Click on the **+** button to add the food item to the tracker. _Please note: the database data gives calorie data per one hundred gram serving of the food item. Adding the food item multiple times might be required depending on how many servings are being consumed_.

6.  After adding the food item, users will see the food item they added on the **_Tracker_** page. _The calories from the added food item will be subtracted above in the ***Calories Remaining*** section._

    <img width="505" alt="image" src="https://github.com/longnphan/myfitnessbuddy/assets/67768035/024365d3-8d8c-4987-94cc-40e1e631addc">

7.  Users can click on the food item they just added on the **_Tracker_** page to get more details about the food item. From here, users can:

        a.  Find macronutrient information about the food item.
        b.  Delete the food item from their list by clicking on the **_DELETE_** button.
        c.  Go back to the tracker page by clicking on the top left corner of the card.

    <img width="509" alt="image" src="https://github.com/longnphan/myfitnessbuddy/assets/67768035/ae94a259-c4a2-4ba8-a1b8-8ff410919dac">

## Dashboard Page

1.  The Dashboard page will not have any charts displayed until users add food items to the **_Tracker_** page. After adding food items, users will see charts for their **_Daily Calories_** and **_Daily Macros._**

2.  Users can toggle between charts by clicking on the **_Calories_** button or the **_Macros_** button.

    <img width="662" alt="image" src="https://github.com/longnphan/myfitnessbuddy/assets/67768035/2c5c1a7d-12ce-45c4-903f-961b7bfc6aaf">
