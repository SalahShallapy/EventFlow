import { redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem.js";

export default function EventDetailPage() {
  const data = useRouteLoaderData("details");
  return <EventItem event={data.event} />;
}

export async function loaderDetail({ request, params }) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: `Couldn't fetch the events` }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: `Couldn't delete the event` }),
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
}
