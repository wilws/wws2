import { SectionType } from "@/data/projectAdditionalInfo";

const sections: Array<SectionType> = [
  {
    sectionId: 0,
    img: null,
    video: "option-katze-2-s1.mp4",
    content: `
          <section>
            <p>In this video, “CLP HOLDINGS” (ticker: 0002.hk) was chosen as an example to test the trading signal "RSI".</p><br>
            <p>1-year daily price record which was provided by Yahoo Fiance API was used in this testing.</p><br>
            

            <h2>Setting</h2>
            <br>
            
            <h4>Entry Point: </h4>
            <ul style="list-style:none">
                <li> -  Buy 1 stock when RSI is lower than or equal to 20</li>
                <li> -  Sell 1 stock when RSI is higher than or equal to 70</li>
            </ul>
            <br>

            <h4>Exit Point: </h4> 
              <ul style="list-style:none">
                  <li>
                  a. For the long position, close the position when:
                      <ul style="list-style:none; padding-left:50px">
                          
                          <li> - 10% profit was made, or,</li>
                          <li> - 5% loss was made</li>
                      </ul>
                  </li>
                  <br>
                  <li>
                   b For the short position, close the position when:
                       <ul style="list-style:none; padding-left:50px">
                          <li> - 20% profit was made, or,</li>
                          <li> - 10% loss was made</li>
                      </ul>
                  </li>              
              </ul>

          <br>

        
          <h4>Length of Holding</h4> 
          <p>The position would keep opening until exit points were met.</p>    
        <br><hr>
    <section/>`,
  },
  {
    sectionId: 1,
    img: null,
    video: null,
    content: `
      <section>
      <h2>Result</h2><br>
      <p>There were 66 trades in a year</p><br>

      <h4>For long position:</h4>
       <ul style="list-style:none">
          <li>- 16 trades were made</li>
          <li>- 4  trades were lost</li> 
          <li>- 0 trade won</li>
          <li>- 12 trades were still open and did not meet the exit point</li>
      </ul>
      <br>
      <h4>For Short position:</h4>
       <ul style="list-style:none">
          <li>- 25 trades were made</li>
          <li>- 0  trades lost</li> 
          <li>- 21 trades won </li>
          <li>- 4 trades were still open and did not meet the exit point</li>
      </ul>
      <br>
      <b>The total profit is 265.65 HKD for this strategy</b>
      </section>`,
  },
];
export default sections;