import React, { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePaymentFirebase } from "../../firebase/functions";

const Subscription = ({ input_plan_id, input_custom_id }) => {
  const navigate = useNavigate();
    const createSubscription = (data, actions) => {
      return actions.subscription.create({
        plan_id: input_plan_id,
        custom_id:input_custom_id
      });
    };
     const catchError = (err) => {
       console.log("Error");
    };
    const paypalOnApprove = (data, detail) => {
  console.log("Payapl approved");
      console.log(data.subscriptionID);
      // toast.success("Payment Recieved Successfully");
     // window.location.reload();
    console.log("Function Start")
      updatePaymentFirebase({ ...data,plan_id:input_plan_id,org_id:input_custom_id }).then(() => {
         toast.success("Payment Recieved Successfully");
         navigate("/");
         window.location.reload();
      }).catch((e) => {
        console.log(e)
      })
  };

  return (
    <div className="checkout">
      <PayPalButtons
        style={{ layout: "vertical" }}
        createSubscription={(data, details) =>
          createSubscription(data, details)
        }
        onApprove={(data, actions) => paypalOnApprove(data, actions)}
      />
    </div>
  );
};

export default Subscription;
