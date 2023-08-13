import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function BottomSubscriberForm() {
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
           `${process.env.REACT_APP_API_URL}/subscriber/registerSubscriber`,
           data
         )
         .then(function (response) {
           toast.success(response.data.msg);
           setEmail("");
           console.log(response);
         })
         .catch(function (error) {
           console.log(error);
           toast.error(error.response.data.msg);
           setEmail("");
         });
     } catch (error) {
       console.log(error.response.data.msg);
     }
   };
  return (
    <section class="section newsletter">
      <h2 class="h2 section-title">
        Subscribe to <strong class="strong">new posts</strong>
      </h2>

      <form onSubmit={handleSubmit} action="" class="newsletter-form">
        <input
          type="email"
          name="email_address"
          placeholder="Your email address"
          required
          class="email-field"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit" class="btn">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default BottomSubscriberForm;
