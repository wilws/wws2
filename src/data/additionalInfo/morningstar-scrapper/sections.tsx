import { SectionType } from "@/data/projectAdditionalInfo";

const sections: Array<SectionType> = [
      {
        sectionId: 0,
        img: null,
        video: "python-stock-data-scrapper-s1.mp4",
        content: ` 
        <p>This is a demo video showing how the application automatically scrapes company data from Morningstar.</p><br>
        <p>The application will click the relevant buttons on the screen and download the reports wanted.</p><br>
        <p>Reports will be saved inside the "data" folder.</p>
        <p>Company data is so valuable in evaluating the performance, as well as the stock price, of the company.</p><br>
        <p class="warning">This application is for learning purposes only. Please subscribe service from morningstar to obtain company data for other uses.</p><br>
        `
      },
    ];

export default sections;