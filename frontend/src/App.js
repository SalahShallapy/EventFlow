// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import EditEventPage from "./Pages/EditEventPage";
import EventDetailPage, {
  loaderDetail,
  deleteEventAction,
} from "./Pages/EventDetailPage";
import Events, { loaderEvents } from "./Pages/Events";
import NewEventPage from "./Pages/NewEventPage";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import EventRootLayout from "./Pages/EventRootLayout";
import { action as manipluteEventAction } from "./components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "./Pages/NewsletterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <Events />, loader: loaderEvents },
          {
            id: "details",
            path: ":eventId",
            loader: loaderDetail,
            children: [
              {
                index: true,
                action: deleteEventAction,
                element: <EventDetailPage />,
              },

              {
                path: "edit",
                element: <EditEventPage />,
                action: manipluteEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipluteEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
