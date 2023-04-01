
// type sectionType = {
//   no: number;
//   img: string;
//   video: string;
//   content: string;
// };

export type projectsBriefType = {
  id: number;
  projectId: number;
  coverImg: string | null;
  coverVideo: string | null;
  description: string;
  // sections: Array<sectionType>;
};

const projectsBrief: Array<projectsBriefType> = [
  //Longlife Production Limited
  {
    id: 0,
    projectId: 0,
    coverImg: "long-life-cover.png",
    coverVideo: null,
    description:
      "This is a pure HTML + CSS + Javascript webpage for a visual merchandising services company Longlife Production Limited.<br><br>My designer friend one day urgently asked for my assistance to make a website for the company. He gave me the web layout and picture and I made them online. Hence this simple web page is created.",
  },

  //OPTION KATZE
  {
    id: 1,
    projectId: 1,
    coverImg: "option-katze-cover.png",
    coverVideo: null,
    description: `
      option is a type of financial contract that allows the buyer to purchase or sell the underlying asset at a predetermined price (strike price) on 
      or before a specific date (expiration date), but it is not mandatory. 
      <br/>
      <br/>      
      Option Katze was a web application designed to test the profitability of different options strategies. 
      It offered features such as scraping option price data from the internet, calculating the profit or loss of each strategy, 
      and generating results in tables for easy comparison of maximum gains and losses. 
      The application was built using the Python programming language with the Django framework and styled with Bootstrap, 
      and it used BeautifulSoap for data scraping. 
      <br>
      <br>
      Although it was once deployed on Google AppEngine and joined Google AdSense, 
      the high cost of hosting led to the application being discontinued.
      <br><br><br><br><br><br><br><br><br><br><br><br><br>
    `,
  },

  //OPTION KATZE II
  {
    id: 2,
    projectId: 2,
    coverImg: null,
    coverVideo: "option-katze-2-cover.mp4",
    description: `
      Technical analysis is a methodology used to predict the price movement of stocks. 
      However, it is often criticized by fundamental investors who liken it to astrology. 
      To determine the accuracy of technical analysis, I created this application to back-test the profitability of different trading signals.
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`,
  },

  //Ellow Tradition
  {
    id: 3,
    projectId: 3,
    coverImg: null,
    coverVideo: "ellow_video-cover.mp4",
    description: `
    In 2014, I learned PHP, AJAX, and MySQL from books and established an e-commerce company called "Ellow Tradition". 
    The company sold interesting cultural handcraft, but unfortunately, it was not successful. 
    However, the website I created helped me secure a job as a PHP Web Developer at AsiaTees, a radio-control (R/C) hobby company.
    Recently, after completing NodeJs and VueJs courses on Udemy, I wanted to put my new skills into practice. 
    I believe that the best way to master newly acquired skills is through practice. As a result, I decided to rebuild "Ellow Tradition" as a way to practice my NodeJs and VueJs skills.
  
    <br>
    <br>

 
    The interface for this project was designed using Adobe XD, while VueJs was used as the frontend technology. <br><br>
    To manage the state in the frontend, Vuex was adopted. <br><br>
    In the backend, NodeJs written in TypeScript, ExpressJs, and MongoDB were used. <br><br>
    Communication between the server and client side was performed using REST API, while JSON Web Token was implemented for authentication purposes. <br><br>
    The payment gateway was handled using the Stripe API. Initially, the website was deployed on Heroku, but it was later moved to Render.
    <br>
    <br>
    <b>Features of this Demo include: </b><br>
    - Users can create their account<br>
    - Users can log in to their account<br>
    - Users can view the purchase history on the member page<br>
    - Users can view the products<br>
    - Users can add products to the cart<br>
    - Users can amend product quantities on the cart page<br>
    - Users can checkout and pay via Stripe API
    <br>
    <br>`,
  },

  //Stock Data Scrapper
  {
    id: 4,
    projectId: 4,
    coverImg: "morningstar-scrapper-cover.svg",
    coverVideo: null,
    description: `
    After completing my bachelor's degree, I enrolled in a PGDip. in Investment Management and Financial Intelligence because I have a keen interest in studying stock and finance. <br><br>
    My investment style focuses on generating stable cash flow and is therefore primarily based on assets such as Corp Bonds, Gov Bonds, REITs, and some high-yield stocks. 
    To avoid default risk, I analyze a company's data to determine if they have a good debt-asset ratio, healthy cash flow, steady growth, and distribution records. <br><br>

    While MorningStar is a useful tool to collect company data, I need to analyze data for more than 50 companies, and downloading reports one by one can be time-consuming. To automate this tedious process, I created this small Python app using Selenium.<br><br>`,
  },

  //Docker
  {
    id: 5,
    projectId: 5,
    coverImg: null,
    coverVideo: "php-server-cover.mp4",
    description: `
    I once undertook the challenge of developing a product management application. <br><br>
    
    For the backend server, I decided to use PHP without relying on any frameworks. With using the MVC pattern with OOP, I created an efficient backend that could handle product creation and deletion, while Apache served as the server, and MySql acted as the database.
    For the frontend, I opted for VueJs. <br><br>

    Later on, I delved deeper into creating multi-container applications using Docker. I was intrigued by the idea of building a Docker application that would link PHP, MySql, and VueJs together. <br><br> 
    This project served as an excellent self-taught lesson that bolstered my knowledge of Docker, especially the concepts of "Bind Mounts," "Volume," and "Docker Composer." Instead of Apache, I opted for Nginx to host the PHP in this Docker project.<br><br>`,
  },

  //NC-Gallery
  {
    id: 6,
    projectId: 6,
    coverImg: null,
    coverVideo: "nc-gallery-cover.mp4",
    description: `
     Art is an integral part of human culture and history, and while not everyone may appreciate it, 
     it can enrich our lives and inspire us. <br><br>
     As a front-end developer, 
     incorporating art into website designs can greatly enhance their aesthetic appeal.
    For a ReactJs project at Northcoders, I developed "NC-Gallery," an application that requests data from the Art Institute of Chicago's backend to display a stunning collection of artwork. 
    <br><br>The beauty of the art deeply inspired me, prompting me to use the API in my project.
    The app itself is relatively straightforward, using the useContext() hook to manage image fetching and state.<br><br> Incorporating beautiful art pictures into websites can enhance their visual appeal, making them more attractive to users. As such, art is an excellent addition for front-end developers looking to improve their designs.`,
  },

  //NC-NEWS
  {
    id: 7,
    projectId: 7,
    coverImg: null,
    coverVideo: "nc-news-cover.mp4",
    description: `
    As part of my Northcoders course, I completed a full-stack project called <b>NC-News</b>. <br><br>
    The goal of this project was to develop a React application and a Node server from scratch, 
    while also practicing Agile development using tools like Trello for Kanban, Excalidraw for idea drafting, and Github's branching and pull request for merging approval.<br><br>

    The backend of NC-NEWS was built using NodeJs, with Jest used for testing each API endpoint. <br><br>
    The server is deployed on Render and data is stored on ElephantSQL. <br><br>
    The front end was developed using ReactJs and used the data management package Redux. <br><br>Rest APIs were used to facilitate communication between the front and back ends.<br><br>
    
    Features of the application:<br>
    <ul style="list-style: none;">
      <li>- Users can view the articles</li>
      <li>- Users can leave a comment on articles</li>
      <li>- Users can vote for articles</li>
      <li>- Users can share articles</li>
      <li>- Users can sort the article by date, title or authors, etc.</li>
    </ul>
    <br><br>
    Other features:<br>
    - "Debounce" is applied in the "Vote" function to prevent "over-click" or abuse of the function
    <br><br>
    Remark:<br>
    - Login / Signup is under development.
    - Image in articles is randomly generated. It is not related to the context of the articles.
`,
  },

  //Tarot Journal
  {
    id: 8,
    projectId: 8,
    coverImg: "tarot-cover.png",
    coverVideo: null,
    description: `
    During my time at the Northcoders course, my team and I developed a tarot card application called "Tarot Journal." 
    This app is designed to help users learn how to use tarot cards and understand the meaning of each card. <br><br>

    I was a back-end developer in this project. I utilized Node.js with TypeScript to construct the back end of the application. 
    To ensure quality, I used Jest to test each API endpoint.  <br><br>
    
    I also took charge of the authentication process for the app. When users sign up, 
    they receive a 4-digit verification code via email, which is required to complete the sign-up process. 
    Successful sign-ups generate a JSON Web Token (JWT) for users to use in the app. <br><br>

    I also played a role in configuring the Bottom Tab and Stack navigation in React Native for the front-end development. <br><br>
  
    The front-end development is still in progress.`,
  },

  //POKÉ-PEDIA"
  {
    id: 9,
    projectId: 9,
    coverImg: null,
    coverVideo: "pokepedia-cover.mp4",
    description: `
      This is a project built with NextJs that utilizes the PokeAPI to fetch Pokemon data.
      It features both lazy loading and search functionality.<br><br>
      Redux is used to maintain the state of the data fetched, while Redux-Thunk is implemented for dispatching asynchronous fetch actions.<br><br>
      Additionally, the "fast-average-color" package is incorporated to automatically select a theme color for each Pokemon's background. <br><br>
      Debouncing is also enabled for the search bar input, ensuring that the search function is only called once the user has finished typing.
     `,
  },
  // wws
  {
    id: 10,
    projectId: 10,
    coverImg: null,
    coverVideo: "wws-cover.mp4",
    description: `
    This is  my first portfolio webpage to showcase my works. <br><br>
    I spent a lot of time training in pure CSS, HTML, and JavaScript – yes, the "pure" ones – 
    and I feel like I've really mastered these three tools to create different animations. 
    Practice makes perfect, so I made this website as a way to keep practicing. <br><br>

    I always emphasize using pure CSS (or SCSS/SASS) because it's the key to realizing the frontend design in your mind.
    Plus, it allows you to try bolder ideas. And when you can handle CSS well, it's no problem to switch to tools like Bootstrap or Tailwind.<br><br>

    I loved my first website so much that I didn't want to replace it. But I underestimated the compatibility of those complex animation effects on different devices. 
    So I decided to redesign and remake it using NextJS with SCSS. This time, I planned and tested everything well. <br><br>

    The more I learn and try, the more I grow. And now, I feel so confident in doing frontend work with most of the animation effects.
    `,
  },
  // Schnauzer
  {
    id: 11,
    projectId: 11,
    coverImg: "schnauzer-cover.png",
    coverVideo: null,
    description: `
    This is a nifty little app that scrapes bond data off the internet. <br><br>
    As a bond investor, it's not just about how much you can make, but also how much you could potentially lose. 
    To make sure I have a diversified bond portfolio, I usually aim to include around 10-15 high yield bonds with a leverage of 1.6x. <br><br>

    Picking out those bonds can be a real hassle, though. 
    And managing the portfolio is no picnic either. 
    Adding just one bond to the mix can impact the whole duration, convexity, and P/L of the entire portfolio. 
    And some bonds even have a "callable" nature that can expose you to call risk. <br><br>

    So, to simplify things, I came up with an idea to automate the bond scanning process. 
    I call it the "Schanuer Bond Screener." 
    The tool handles the first step of collecting the data, 
    and then I use Django Rest Framework (DRF) to build an API endpoint for extracting the data.<br><br>

    I chose to use Django Rest Framework (DRF) instead of NodeJs because DRF has some great features like 
    "serializer" and "viewset" that can save you a lot of time when building backend paths. 
    With the "ModelViewSet" feature, you don't need to define POST/GET/DELETE/PUT requests one by one, which is a huge time-saver.<br><br>

    Right now, I'm still working on this application and my next step is to build a frontend using either REACTJS or VUEJS to visualize the data.

    `,
  },
];





export default projectsBrief;