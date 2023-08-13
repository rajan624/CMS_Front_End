import React, { useState } from "react";
import FeaturedCard from "../../Card/FeaturedCard";
import RecentCard from "../../Card/RecentCard";
import RecommendedCard from "../../Card/RecommendedCard";
import BottomSubscriberForm from "../../Form/BottomSubscriberForm";
import HeaderSubscriberForm from "../../Form/HeaderSubscriberForm";
import { GetType } from "../../../utilities/context/authContext";
import CommanLoadingScreen from "../../LoadingScreen/CommanLoadingScreen";

function HomePage() {
  const user = GetType();
  const [loading, setLoading] = useState(true);
  return (
    <main>
            <CommanLoadingScreen open={loading} />
          <article>
            <section class="section hero" aria-label="home">
              <div class="container">
                <h1 class="h1 hero-title">
                  <strong class="strong">Hey, we’re Blogy.</strong> See our
                  thoughts, stories and ideas.
                </h1>
                {!user?.email ? <HeaderSubscriberForm /> : <></>}
              </div>
            </section>

            <FeaturedCard setLoading={setLoading} />
            <RecentCard  setLoading={setLoading} />
            <RecommendedCard setLoading={setLoading} />

            {!user?.email ? <BottomSubscriberForm /> : <></>}
          </article>
        </main>
  );
}

export default HomePage;
