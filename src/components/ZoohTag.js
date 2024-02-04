import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function ZoohTag({ tag }) {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg="secondary">{tag}</Badge>
    </Stack>
  );
}

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data from the server or use your preferred method
    fetch('http://localhost:8080/events/all')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.eventID}>
            <strong>{event.name}</strong>
            <p>Time: {new Date(event.time).toLocaleString()}</p>
            <p>
              Tags:{' '}
              {event.Tag && (
                <ZoohTag tag={event.Tag.tagName} />
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
