import Subscription from "./Subscription";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const initialOptions = {
  "client-id":
    "AZsvgEhVBy3urcZFgmL4eQ2AV92B_un5ZmsmgSVEqiTTsmMjKCISAiiARhHSTRndaB3F8j9dAgYuv-bu",
  currency: "USD",
  vault: true,
  intent: "subscription",
};

function PaymentButton() {
  const { planId, customId } = useParams();
  useEffect(() => {
    console.log(planId);
    console.log(customId);
  },[])
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Subscription
        input_plan_id={planId}
        input_custom_id={customId}
      />
    </PayPalScriptProvider>
  );
}

export default PaymentButton;
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import PayPalBtn from "./PayPalBtn";

// function Test() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [form, setForm] = React.useState({});
//   const onSubmit = (data) => {
//     setForm(data);
//   };
//  const paypalSubscribe = (data, actions) => {
//    return actions.subscription.create({
//      plan_id: "P-8E85876465511462EMPFH3WQ",
//    });
//  };
// const paypalOnApprove = (data, detail) => {
//   // call the backend api to store transaction details
//   console.log("Payapl approved");
//   console.log(data.subscriptionID);
//   };
//   const paypalOnError = (err) => {
//     console.log("Error");
//   };
//   return(
//     <div className="App">
//       <PayPalBtn
//         amount="<amount>"
//         currency="USD"
//         createSubscription={paypalSubscribe}
//         onApprove={paypalOnApprove}
//         catchError={paypalOnError}
//         onError={paypalOnError}
//         onCancel={paypalOnError}
//       />

//     </div>

//   );
// };

// export default Test;
