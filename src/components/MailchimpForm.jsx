import React, { useState } from 'react';
import useMailchimpSubscribe from 'react-mailchimp-subscribe';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic handled by react-mailchimp-subscribe
  };

  const url = 'YOUR_MAILCHIMP_FORM_ACTION_URL';

  const { subscribe, status, error } = useMailchimpSubscribe({ url });

  const handleSubscribe = () => {
    subscribe({ EMAIL: email, OPTIONS: selectedOption });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>

      <div>
        <label>
          Option 1
          <input
            type="radio"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleOptionChange}
          />
        </label>

        <label>
          Option 2
          <input
            type="radio"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleOptionChange}
          />
        </label>
      </div>

      <button type="submit" onClick={handleSubscribe} disabled={status === 'sending'}>
        {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
      </button>

      {status === 'error' && <p>{error}</p>}
      {status === 'success' && <p>Subscribed successfully!</p>}
    </form>
  );
};

export default MailchimpForm;
