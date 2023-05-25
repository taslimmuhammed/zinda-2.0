import { apple, buy, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="buy" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={buy} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        How to buy?
      </h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        To buy Turbo Token, follow these simple steps:

        <p className="mt-3">Step 1: Download and set up metamask in your browser.</p>
        <p className="mt-3">Step 2: Now you can buy the token from this website.</p>
        <p className="mt-3">Step 3: Check for the connect wallet button , if its not there ypu are ready to go.</p>
        <p className="mt-3">Step 4: Enter the amount of tokens you need to buy.</p>
        <p className="mt-3">Step 5: Click the buy now button and verify the transaction using Metamask pop-up.</p>
        <p className="mt-3">Step 6: If sucsess pop comes boom, you have claimed the tokens.</p>
        <p className="mt-3">Step 7: To see the tokes in you wallet import the asset using the contract address "0xCaF33cE4498af1a22e47297E7eEA005BFB048687".</p>
      </p>
      <div className="font-sm text-blue-200 mt-3">*Please note that trading fees and slippage may apply during the purchase process.</div>
      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
