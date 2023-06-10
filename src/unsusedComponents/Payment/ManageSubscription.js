import React, { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cancelPlan, updatePaymentFirebase } from "../../firebase/functions";
import { GetType } from "../../context/authContext";
import LoadingSearchComponents from "../../components/SharedComponents/LoadingSearchComponents/LoadingSearchComponents";

const ManageSubscription = ({ input_plan_id, input_custom_id }) => {
    const navigate = useNavigate();
    const userType = GetType();
    const [loading, setLoading] = useState(false);
  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: input_plan_id,
      custom_id: input_custom_id,
    });
  };
  const catchError = (err) => {
    console.log("Error");
  };
  const paypalOnApprove = (data, detail) => {
    console.log("Payapl approved");
    console.log(data.subscriptionID);
   
    // window.location.reload();
      setLoading(true);
    console.log("Function Start");
    cancelPlan({
      subscriptionID: userType?.planData?.subscriptionId,
    })
      .then(() => {
        console.log("inside then function");
        updatePaymentFirebase({
          ...data,
          plan_id: input_plan_id,
          org_id: input_custom_id,
        })
          .then(() => {
            console.log("inside then function");
              toast.success("Payment Recieved Successfully");
            
              navigate("/");
              setLoading(false);
                window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
    
   
  };

  return (
      <div className="checkout">
          {loading ?<LoadingSearchComponents></LoadingSearchComponents>:
      <PayPalButtons
        style={{ layout: "vertical" }}
        createSubscription={(data, details) =>
          createSubscription(data, details)
        }
        onApprove={(data, actions) => paypalOnApprove(data, actions)}
      />}
    </div>
  );
};

export default ManageSubscription;
