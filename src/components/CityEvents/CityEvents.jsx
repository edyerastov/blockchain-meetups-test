import React, { useState, useEffect, useContext } from 'react';
import cs from './CityEvents.module.sass';
import { NonHeroNavBar } from '../NavBar';
import Footer from '../Footer';
import EventCard from './EventCard';
import { EventContext } from '../App';
import extended from './data';
import Event from './Event';

function useMedia(queries, values, defaultValue) {
  const match = () => {
    const query = queries.findIndex(q => matchMedia(q).matches);
    return values[query] || defaultValue;
  };

  const [value, setValue] = useState(match);

  useEffect(() => {
    const handler = () => {
      const tmp = match();
      if (tmp === value) return;
      setValue(tmp);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return value;
}

const CityEvents = ({ match, event }) => {
  const [localEventsIndex, setLocalEventsIndex] = useState(0);
  const [allEventsIndex, setAllEventsIndex] = useState(0);
  const ctx = useContext(EventContext);
  const [eventShown, setEventShown] = useState(false);

  const toggleEventShown = () => setEventShown(!eventShown);

  const itemsPer = useMedia(
    ['(min-width: 1201px)', '(min-width: 931px)', '(min-width: 651px)'],
    [4, 3, 2],
    1
  );

  let justify;

  switch (itemsPer) {
    case 1:
      justify = 'center';
      break;
    case 2:
    case 3:
      justify = 'space-around';
      break;
    default:
      justify = 'space-between';
      break;
  }

  /**
   * @param {number} direction +1 or -1
   */
  const handleLocalChange = direction => {
    let newIdx;
    if (direction > 0) {
      newIdx = localEventsIndex + itemsPer;
      if (newIdx >= extended.length) newIdx = localEventsIndex;
    } else if (direction < 0) {
      newIdx = localEventsIndex - itemsPer;
      if (newIdx < 0) newIdx = 0;
    }

    if (newIdx === localEventsIndex) return;
    setLocalEventsIndex(newIdx);
  };

  /**
   * @param {number} direction +1 or -1
   */
  const handleAllChange = direction => {
    let newIdx;
    if (direction > 0) {
      newIdx = allEventsIndex + itemsPer;
      if (newIdx >= ctx.length) newIdx = allEventsIndex;
    } else if (direction < 0) {
      newIdx = allEventsIndex - itemsPer;
      if (newIdx < 0) newIdx = 0;
    }

    if (newIdx === allEventsIndex) return;
    setAllEventsIndex(newIdx);
  };

  return (
    <div className={cs.cityEvents}>
      <NonHeroNavBar
        style={{
          top: 0,
          left: 0,
          right: 0,
          background: '#fff',
          padding: '10px 70px',
          boxSizing: 'content-box'
        }}
        selected={true}
      />

      {eventShown ? (
        <Event close={toggleEventShown} />
      ) : (
        <div className={cs.inner}>
          <h2>San Francisco</h2>

          <div className={cs.events}>
            <section className={cs.eventsNearby}>
              <h3>Discover events near you:</h3>

              <div className={cs.eventList} style={{ justifyContent: justify }}>
                {extended
                  .slice(localEventsIndex, localEventsIndex + itemsPer)
                  .map(ev => (
                    <EventCard
                      data={ev}
                      key={ev.title + Math.random()}
                      onClick={toggleEventShown}
                    />
                  ))}
              </div>

              <div className={cs.controls}>
                <div
                  className={cs.prev}
                  onClick={handleLocalChange.bind(this, -1)}
                >
                  <img src='/img/arrow.png' alt='prev' />
                </div>

                <div className={cs.selected}>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>

                <div
                  className={cs.next}
                  onClick={handleLocalChange.bind(this, 1)}
                >
                  <img src='/img/arrow.png' alt='next' />
                </div>
              </div>
            </section>

            <section className={cs.allEvents}>
              <h3>All events:</h3>

              <div className={cs.eventList} style={{ justifyContent: justify }}>
                {ctx
                  .slice(allEventsIndex, allEventsIndex + itemsPer)
                  .map(ev => (
                    <EventCard
                      data={ev}
                      key={ev.title + Math.random()}
                      onClick={toggleEventShown}
                    />
                  ))}
              </div>

              <div className={cs.controls}>
                <div
                  className={cs.prev}
                  onClick={handleAllChange.bind(this, -1)}
                >
                  <img src='/img/arrow.png' alt='prev' />
                </div>

                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>

                <div
                  className={cs.next}
                  onClick={handleAllChange.bind(this, 1)}
                >
                  <img src='/img/arrow.png' alt='next' />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CityEvents;
