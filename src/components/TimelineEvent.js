import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <article className="timeline-event">
      <p className="event-person">{props.post.person}</p>
      <p className="event-status">{props.post.status}</p>
      <p className="event-time"><Timestamp time={props.post.timestamp} /></p>
    </article>
  );
}

export default TimelineEvent;