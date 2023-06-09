import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function HeaderSubscriberForm() {
    const [email, setEmail] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email);
      const data = {
        email: email,
      };
      try {
        await axios
          .post(
            `${process.env.REACT_APP_API_URL}/user/registerSubscriber`,
            data
          )
          .then(function (response) {
            toast.success(response.data.msg);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            toast.error(error.response.data.msg);
          });
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
  return (
    <div class="wrapper">
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          name="email_address"
          placeholder="Your email address"
          className="email-field"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>

      <p class="newsletter-text">
        Get the email newsletter and unlock access to members-only content and
        updates
      </p>
    </div>
  );
}

export default HeaderSubscriberForm