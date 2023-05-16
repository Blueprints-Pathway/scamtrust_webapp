import React, { useState } from 'react'
import jsonp from 'jsonp';

const Newsletter = () => {

  const [email, setEmail] = useState("");

  const handleChange= (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    const url = 'https://gmail.us21.list-manage.com/subscribe/post-json?u=9fe77eeedd13076bc43e9b7ef&amp;id=c9903e42ad&amp;f_id=006fe6e1f0';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
        const { msg, result } = data
        // do something with response
        alert(msg);
    });
};

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input onChange={handleChange}
        type="email" value={email} name="EMAIL" id="mce-EMAIL" required></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Newsletter