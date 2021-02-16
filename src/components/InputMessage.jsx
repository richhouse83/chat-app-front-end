import React, { useState } from 'react';
import { Link } from '@reach/router';

export default function InputMessage({ socket }) {
  const [messageText, setMessageText] = useState('');

  const handleChange = ({ target: { value } }) => {
    setMessageText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('sending', messageText);
    socket.emit('message', messageText);
    setMessageText('');
  };

  return (
    <section className="input-message">
      <form>
        <textarea
          onChange={handleChange}
          name="message"
          value={messageText}
          id="message"
          cols="30"
          rows="5"
        />
        <Link to="/settings">Settings</Link>
        <button type="button" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
    </section>
  );
}

InputMessage.propTypes = {
  // eslint-disable-next-line no-undef
  socket: PropTypes.function.isRequired,
};
