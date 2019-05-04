import React from 'react';
import cs from './CityEvents.module.sass';

const EventCard = ({ data, onClick }) => {
  const { img, title, subtitle, description, author, attending } = data;
  return (
    <div
      className={cs.eventCard}
      style={{ backgroundImage: `url('/img/${img}')` }}
      onClick={onClick}
    >
      <div className={cs.info}>
        <h4>{title}</h4>
        {subtitle && <h5>{subtitle}</h5>}
        <div className={cs.description}>{description}</div>
        <div className={cs.author}>{author}</div>

        <div className={cs.attending}>
          Attending
          <span>{attending}+</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
