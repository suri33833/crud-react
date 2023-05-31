import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const webToken = process.env.REACT_APP_WEB_TOKEN;
  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;

    if (form.reportValidity()) {
      axios.post(`https://${webToken}.mockapi.io/crud-app`, {
        name: name,
        email: email,
        header,
      });
      form.reset();
    }
  }
  function handleRead() {
    navigate("/read");
  }
  return (
    <>
      <h2>Create</h2>
      <form ref={formRef}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control "
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          value="Submit"
        />
        &nbsp;
        <button type="button" className="btn btn-success" onClick={handleRead}>
          Read
        </button>
      </form>
    </>
  );
};

export default Create;
