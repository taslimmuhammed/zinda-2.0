import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6  text-white text-center`} >
    {/* {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))} */}
    <h2 className="text-center">
      <span className="font-poppins text-gradient uppercase ml-3 text-6xl font-bold">
        ZINDA AI
        </span>
      <span className="font-poppins uppercase ml-3 text-6xl">- THE GENERATION WEALTH TOKEN</span>
    </h2>
    <div className="font-mono mt-2">
      ZINDA AI (ZNDA) is a revolutionary meme coin featuring our futuristic freedom of integrating AI into finance for AI-Powered wealth creation . Hop on board and join the ride!
    </div>

    <h2 className=" mt-32 text-center">
      <span className="font-poppins uppercase ml-3 text-6xl">REDEFINE THE FINANCE FOR ALL WITH</span>
      <span className="font-poppins text-gradient uppercase ml-3 text-6xl ">
        ZINDA AI
      </span>
      
    </h2>
    <div className="font-mono mt-8 max-w-7xl text-center">
      ZINDA AI token began as a bold experiment in one of largest project to unlock financial freedom
      with AI inspired by the power of artificial intelligence and accessibility to everyone. ZINDA AI
      token will be the base of new AI wealth coach , intelligent investment and power data 24/7
      respond to markets trend faster.
      <p>Confident in the AI's abilities and the driven projects using ZINDA AI token to redesign financial
      freedom , ZINDA AI token will reshape the world of investment across all AI financial platforms</p>
      <p>As we continue our journey, we invite you to join us in exploring the exciting possibilities that lie
      ahead for ZINDA AI Token and its community</p>

    </div>
  </section>
);

export default Stats;
