import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <article>
      <p>{props.post.person}</p>
      <p>{props.post.status}</p>
      <Timestamp time={props.post.timestamp} />
    </article>
  );
}

export default TimelineEvent;