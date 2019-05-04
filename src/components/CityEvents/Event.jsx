import React from 'react';
import cs from './CityEvents.module.sass';

const data = {
  title: 'Blockchain Couples Meeting',
  date: 'May 1st, 2019 - 1:23pm',
  location: 'Bitcoin Center, San Francisco, CA',
  subtitle:
    'Welcome to the meetup for blockchain couples! This event is hosted by MouseBelt in San Francisco.',
  organizer: 'test@email.com',
  paragraphs: [
    {
      header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body:
        'Donec vitae odio fringilla justo euismod suscipit vel in mauris. Suspendisse cursus viverra augue, vel pretium dolor tincidunt sit amet. Sed gravida, nibh ut rhoncus blandit, tortor sem aliquam tellus, non gravida est diam ultricies est. Praesent tincidunt efficitur purus, vulputate sodales ex dignissim et. Nam at tempus est. Fusce fermentum bibendum enim. Nunc sollicitudin pretium diam eget consequat. Aliquam quis fringilla risus. Pellentesque ut viverra urna, sit amet egestas dolor. Integer ac lacus nec tellus tincidunt consequat. Donec nec finibus erat, eu varius justo. In leo orci, commodo ac libero eu, fringilla ultricies nisi.'
    },
    {
      header: 'Vestibulum a nunc turpis.',
      body:
        'Nullam fringilla, augue eleifend dapibus vulputate, elit est rhoncus nulla, eget tempus augue ligula ut erat. Ut laoreet interdum felis, ut malesuada erat scelerisque eget. Donec in viverra justo, non condimentum lacus. In euismod, nunc congue efficitur vestibulum, augue est blandit eros, in sagittis urna justo vel augue. Maecenas dignissim eget ipsum sed cursus. Integer magna dui, ullamcorper non maximus a, convallis et sem. Integer vulputate at nisi et tempus. Ut ac rutrum arcu.'
    },
    {
      body:
        'Nulla imperdiet erat a tempor viverra. Integer eu bibendum lectus.Vivamus facilisis ullamcorper mi et maximus. Quisque nunc dui, dignissim eu sapien sed, sollicitudin ultricies nibh. Suspendisse pretium nisi nec purus lacinia scelerisque. Ut vehicula, ante in dictum porta, libero dui consectetur lorem, ac commodo lacus neque et mauris. Pellentesque sapien eros, vestibulum non urna vitae, pretium pharetra nibh. '
    }
  ]
};

// in production data will be passed through props

const Event = ({ close }) => (
  <div className={cs.inner} style={{ marginTop: 60 }}>
    <h2 style={{ background: `url('/img/event_bg.png')` }}>{data.title}</h2>

    <div className={cs.eventMain}>
      <div className={cs.back} onClick={close}>
        <img src='/img/back.png' alt='back arrow' />
        <span>Back</span>
      </div>

      <h3>{data.title}</h3>
      <span className={cs.eventDate}>{data.date}</span>
      <span className={cs.eventLocation}>{data.location}</span>
      <h5>{data.subtitle}</h5>

      {data.paragraphs.map(i => (
        <>
          <p>
            {i.header && <span>{i.header}</span>}
            {i.body}
          </p>
          <br />
        </>
      ))}

      <div style={{ marginBottom: 75 }}>
        <span>Contact the organizer:</span>
        <span style={{ color: '#247BA0' }}>{data.organizer}</span>
      </div>

      <button>REGISTER</button>
    </div>
  </div>
);

export default Event;
