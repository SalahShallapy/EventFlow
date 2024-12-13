# EventFlow

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

EventFlow is a full-featured React Event Management Form component built with React Router. It allows you to create and update events effortlessly while demonstrating advanced React Router concepts like Form navigation, redirects, and state handling.

## Project Overview

### Overview

![Project OverView](/frontend/public/overview.png)

### All Events Overview

![Project OverView](/frontend/public/allevents.png)

### Event Detalis Overview

![Project OverView](/frontend/public/eventdetails.png)

### Edit Event Overview

![Project OverView](/frontend/public/editevent.png)

### New Event Overview

![Project OverView](/frontend/public/newevent.png)

## Features

- Create and Edit Events: Dynamically create new events or update existing ones with support for URL-based actions (POST, PATCH).
- Form Handling: Collect title, image URL, date, and description from users with built-in input validation.
- Seamless Navigation: Cancel button redirects smoothly with **useNavigate().**
- State Management: `useNavigation()` hook shows form submission states (loading indicators).
- Backend Integration: API communication with **fetch()** ensures reliable updates.
- Error Handling: Graceful backend error responses with redirect actions.

## React Router Concepts Used

- **useNavigate()** : Redirects users to the main events page or previous views.
- **useNavigation()** : Provides UI state feedback during form submission.
- Form Component: Utilizes React Router's native **<Form>** component for quick form action handling and validation.
- Action Functions: Handles HTTP **POST** and **PATCH** requests to save or update events.
- Redirect Responses: Automatically redirects users after form interactions.

## Project Structure

```
EventFlow
│      package-lock.json
│      README.md
│
└───backend
│   │    app.js
│   │    events.json
│   │    package-lock.json
│   │    package.json
│   │
│   └─── data
│   │    events.js
│   │
│   └─── routes
│   │    events.js
│   │
│   └─── data
│        error.js
│        validation.js
│
└─── fronted
      │
      │  package-lock.json
      │  package.json
      │
      └───public -------> All Images Sources
      │
      └─── src
         │   App.js
         │   index.js
         │   index.css
         │
         ├─── components
         │     EventForm.js
         │     EventForm.module.css
         │     EventItem.js
         │     EventItem.module.css
         │     EventsList.js
         │     EventsList.module.css
         │     EventsNavigation.js
         │     EventsNavigation.module.css
         │     MainNavigation.js
         │     MainNavigation.module.css
         │     NewsletterSignup.js
         │     NewsletterSignup.module.css
         │     PageContent.js
         │     PageContent.module.css
         │
         │
         ├─── pages
         │      EditEventPage.js
         │      ErrorPage.js
         │      EventDetailPage.js
         │      EventRootLayout.js
         │      Events.js
         │      HomePage.js
         │      NewEventPage.js
         │      NewsletterPage.js
         │      RootLayout.js
         │

```

## Installation

To get started with the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SalahShallapy/EventFlow-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd EventFlow
   ```
3. Navigate to the backend directory:
   ```bash
   cd backend
   ```
4. Install backend dependencies:
   ```bash
   npm install
   ```
5. Run the backend server:
   ```bash
   npm start
   ```
6. Navigate out of the backend directory to the main project directory:
   ```bash
   cd ..
   ```
7. Navigate to the Frontend directory:
   ```bash
   cd frontend
   ```
8. Install dependencies:
   ```bash
   npm install
   ```
9. Run the project:
   ```bash
   npm start
   ```

## Note

- This project's backend is locally setup and is not running on a server so you have to follow the installing steps and start the backend server in order to see the fetched data on the frontend UI

## API Endpoints

### 1. Create Event (Add New Event)

curl -X POST http://localhost:8080/events

### 2. Update Event (Edit Existing Event)

curl -X PATCH http://localhost:8080/events/:eventId

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

   <p align="right">(<a href="#top">back to top</a>)</p>
