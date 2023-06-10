import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSearchComponents from "../../components/SharedComponents/LoadingSearchComponents/LoadingSearchComponents";
import { getPlanDetails, updateCheckoutPayment } from "../../firebase/functions";
const initialOptions = {
  "client-id":
    "AZsvgEhVBy3urcZFgmL4eQ2AV92B_un5ZmsmgSVEqiTTsmMjKCISAiiARhHSTRndaB3F8j9dAgYuv-bu",
  currency: "USD",
  intent: "capture",
};
export default function CheckoutPaymentButton() {
  const { planId, count, customId } = useParams();
  const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
  const [planName, setPlanName] = useState('')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getPlanDetails({ plan_id: planId })
      .then((data) => {
          console.log(data.data);
        console.log(data.data.pricing_scheme.value);
        setLoading(false);
          setAmount(data.data.pricing_scheme.value * count);
      })
      .catch((e) => {
        setLoading(false)
          console.log(e);   
      });
      if (planId == "featuredJobs") {
          setPlanName("fetauredJobsCount");
          
      } else if (planId == "jobSlots") {
           setPlanName("jobSlots");
      } else if (planId == "salesDnaTest") {
           setPlanName("salesDnaTestCount");
      } else if (planId == "tglCandidateSelection") {
           setPlanName("tglCandidateSelectionCount");
      }
  }, []);
  return (
    <>
      {loading ? <LoadingSearchComponents></LoadingSearchComponents> :
        <PayPalScriptProvider options={initialOptions}>
          {/* {`${JSON.stringify(amount)}`} */}
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                console.log(details)
                updateCheckoutPayment({ ...details, count: count, planName: planName }).then(() => {
                  toast.success("Payment Received")
                  navigate("/")
                })
              });
            }}
          />
        </PayPalScriptProvider>}
      </>
  );
}
