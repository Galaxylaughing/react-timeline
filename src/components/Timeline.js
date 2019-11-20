import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event, i) => {
    return (
      <article key={i}>
        <TimelineEvent post={ event } />
      </article>
    );
  });
  
  return (
    <section>
      {eventComponents}
    </section>
  );
}

export default Timeline;