import { card, road } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} id="roadmap">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        RoadMap.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our roadmap showcases the milestones we aim to achieve.

        <h2 className="font-bold mt-3">Q2 2023:</h2>
        Token creation and smart contract development
        Community building and marketing campaign

        <h2 className="font-bold mt-3">PreSales and WebSite launch</h2>

        {/* Community building and marketing campaign */}


        <h2 className="font-bold mt-3">Q3 2023:</h2>
        Launch ZINDA AI for trading

        <h2 className="font-bold mt-3">Q4 2023:</h2>
        launch ZINDA AI integration in AI wealth coach project beta version subject to readiness of third parties
        Launch ZINDA AI on main crypto exchanges
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={road} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
