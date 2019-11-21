import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import InteractionButtons from './InteractionButtons';

const TimelineEvent = (props) => {
  const buttonIcons = [
    <i className="icon fa fa-heart"></i>,
    <i className="icon fas fa-comment"></i>,
    <i className="icon fas fa-retweet"></i>
  ]
  
  return (
    <div className="timeline-event-wrapper">
      <InteractionButtons buttons={buttonIcons}/>
      <article className="timeline-event">
        <p className="event-person">{props.post.person}</p>
        <p className="event-status">{props.post.status}</p>
        <p className="event-time"><Timestamp time={props.post.timestamp} /></p>
      </article>
    </div>
  );
}

export default TimelineEvent;