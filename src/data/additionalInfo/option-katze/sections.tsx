import { SectionType } from "@/data/projectAdditionalInfo";

const sections: Array<SectionType> = [
  {
    sectionId: 0,
    img: "option-katze-s5.jpg",
    video: null,
    content: `
    <section>
    <h3>Dig out Arbitrage Chance </h3><br>
    <p>In the red circle of the picture, it shows that if we make a “Long Butterfly” combination, 
    the cost to pay is -7.32 HKD and the premium to receive is 7.38 HKD. 
    The difference of 0.06 HKD means no matter where the price goes (up or down), 
    that 0.06 HKD is for sure in your wallet. If you are so lucky that the price eventually falls to the desired point, 
    you can take a maximum of 2.56 HKD.</p>
    </section>
    <br>`,
  },
  {
    sectionId: 1,
    img: "option-katze-s4.jpg",
    video: null,
    content: `
    <section> 
    <p>The picture below shows the profitability of above “Long Butterfly”  strategy. If we: <br>
    - Buy 1 set of Call Contract@$135<br>
    - Sell 2 sets of Call Contract@$137.5 <br>
    - Buy 1 set of Call Contract@$140 <br>
    No matter how the price moves, the profit is always above "0".   
    It means it is sure to have positive cash flow if adopting this strategy.</p>
    </section>
    <br>`,
  },
  {
    sectionId: 2,
    img: "option-katze-s1.jpg",
    video: null,
    content: `
    <section>
    <p>This is another example that Option Katze found an arbitrage chance.  
    To construct this option combination, you need to pay $2.34 for buying call options and receive $2.34 for selling call options. 
    By doing this,  If the stock is at $6.05, we can take all ($0.25). If not, as you can see, the profit is always at "0".
    It means that the maximum loss is 0!  It is worth taking this risk-free trade.</p>
    </section> 
    <br>`,
  },
  {
    sectionId: 3,
    img: "option-katze-s7.png",
    video: null,
    content: `
    <section>
    <h3>Deploy on Google Cloud</h3><br>
    <p>I have once deployed the application on Google AppEngine. 
    But it costed a lot and I finally gave up.</p>
    </section>
    <br>
    `,
  },
  {
    sectionId: 4,
    img: "option-katze-s8.png",
    video: null,
    content: `
    <section>
    <h3>Google AdSense</h3><br>
    <p>I also embedded ads inside the application. 
    As lacking advertisement on the website, 
    it just earned 148.17 HKD. Though the amount is so poor, 
    it is such a great experience to integrate the application into Google’s services.
    </p>
    </section>
    <br>
    `,
  },
];
export default sections;