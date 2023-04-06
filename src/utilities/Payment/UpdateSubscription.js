import ManageSubscription from "./ManageSubscription";
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

function UpdateSubscription() {
  const { planId, customId } = useParams();
  useEffect(() => {
    console.log(planId);
    console.log(customId);
  }, []);
  return (
    <PayPalScriptProvider options={initialOptions}>
      <ManageSubscription input_plan_id={planId} input_custom_id={customId} />
    </PayPalScriptProvider>
  );
}

export default UpdateSubscription;
