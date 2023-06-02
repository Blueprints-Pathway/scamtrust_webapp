import React, { useState } from "react";
import axios from "axios";

const Mailchimp = () => {
    const [email, setEmail] = useState("");

  function handleInputChange(e) {
    setEmail(e.target.value);
  }

    function handleFormSubmit(e) {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const data = {
          email_address: email,
          status: "subscribed",
        };
        axios
          .post(
            "https://us21.api.mailchimp.com/3.0/lists/{c9903e42ad}/members/",
            data,
            {
              headers: {
                // Authorization: "apikey YOUR_API_KEY",
                Authorization: "703da46acc1eedaf042109268c341ce9-us21",
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            //console.log(res);
          })
          .catch((error) => {
            //console.log(error);
          });
      }
  return (
    <div>
    <form className="flex flex-col items-center justify-center mt-20" onSubmit={handleFormSubmit}>
      <label>
        Email:
        <input
        className="border-black border-2 mx-2"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <button className="bg-black text-white mt-5" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Mailchimp