import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6  text-white`} >
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
    <h2 >
      <span className="font-poppins text-gradient uppercase ml-3 text-6xl font-bold">
        ZINDA AI
        </span>
      <span className="font-poppins uppercase ml-3 text-6xl">- The Generation X Token</span>
    </h2>
    <div className="font-mono mt-2">
      ZINDA AI (ZNDA) is a revolutionary meme coin featuring our futuristic toad mascot. Hop on board and join the ride! 
    </div>

    <h2 className=" mt-32">
      <span className="font-poppins uppercase ml-3 text-6xl">Generate the</span>
      <span className="font-poppins text-gradient uppercase ml-3 text-6xl ">
         Hottest Memes
      </span>
      
    </h2>
    <div className="font-mono mt-8 max-w-7xl text-center">
      Turbo Token began as a bold experiment in cryptocurrency creation. Inspired by the power of artificial intelligence, the project's founder turned to GPT-4 with a simple challenge: create the next great meme coin, starting with a budget of just $69. Confident in the AI's abilities, the founder pledged to follow all instructions provided by GPT-4 and document the process.

      Driven by the innovative insights of GPT-4 and fueled by the enthusiasm of its community, Turbo Token has come a long way from its humble beginnings. Today, the token stands as a testament to the power of AI-guided creativity, and the potential it holds for reshaping the world of cryptocurrency. As we continue our journey, we invite you to join us in exploring the exciting possibilities that lie ahead for Turbo Token and its community.
    </div>
  </section>
);

export default Stats;
