import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Box from "./Box";
import tg from '../assets/svg/social-telegram.svg'
import insta from '../assets/svg/social-instagram.svg'
import tiktok from '../assets/svg/social-tiktok.svg'
import twitter from '../assets/svg/social-twitter.svg'
import discord from '../assets/svg/social-discord.svg'
import { tiger } from "../assets";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
     

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={tiger} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}


      {/* SECOND HALF */}
      {/* <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
         <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> 

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div> */}


      {/* SECOND HALF */}
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 justify-end`} >
        <div className="lg:h-10"></div>
        <Box/>
        <div className="w-full flex justify-center">
        <div class="flex justify-between items-center w-64 h-14">
          <a href="https://www.instagram.com">
            <img src={insta} alt="Instagram" class="w-8 h-8" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="Twitter" class="w-8 h-8" />
          </a>
          <a href="https://telegram.org">
            <img src={tg} alt="Telegram" class="w-8 h-8" />
          </a>
          <a href="https://www.tiktok.com">
            <img src={discord} alt="discord" class="w-8 h-8" />
          </a>
          <a href="https://www.tiktok.com">
            <img src={tiktok} alt="TikTok" class="w-8 h-8" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
