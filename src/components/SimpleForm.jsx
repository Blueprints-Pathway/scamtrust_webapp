import React, { useState } from 'react'


const SimpleForm = ({ status, message, onValidated }) => {
    const [option, setOption] = useState("");

    let email, radio;
    const submit = () => {
      email &&
      radio &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        MMERGE1: radio.value,
      });
    }

      const handleOption = (event) => {
        setOption(event.target.value);
      }
      
  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

         {/* RADIO */}
         <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (radio = node)}
        type="radio"
        value="Customer"
        onChange={ handleOption}
        name="MMERGE1" id="mce-MMERGE1-0"
        checked={option === "Customer"}
      />
      <label for="mce-MMERGE1-0">Customer</label>
      <br />

      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (radio = node)}
        type="radio"
        value="Vendor"
        onChange={handleOption}
        name="MMERGE1" id="mce-MMERGE1-1"
        checked={option === "Vendor"}
      />
      <label for="mce-MMERGE1-1">Vendor</label>
      <br />



           {/* EMAIL */}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};


export default SimpleForm