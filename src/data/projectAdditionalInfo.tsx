import tarotSections from "./additionalInfo/tarot/sections";
import phpServerSections from "./additionalInfo/php-server/sections";
import morningStarScrapperSections from "./additionalInfo/morningstar-scrapper/sections";
import optionKatze2Sections from "./additionalInfo/option-katze-2/sections";
import optionKatzeSections from "./additionalInfo/option-katze/sections";

export type SectionType = {
  sectionId: number;
  img: string | null;
  video: string | null;
  content: string;
};

export type projectAdditionalInfoType = {
    id:number;
    folder:string;
    projectId:number;
    sections:Array<SectionType>;
}


const projectAdditionalInfo = [
  {
    id: 0,
    projectId: 0,
    folder: "",
    sections: [],
  },

  // optiona katze
  {
    id: 1,
    projectId: 1,
    folder: "option-katze",
    sections: optionKatzeSections
  },
  // end of option-katze

  // option-katze-2
  {
    id: 2,
    projectId: 2,
    folder: "option-katze-2",
    sections: optionKatze2Sections
  },
  // end of option-katze-2

  // Ellow Tradition
  {
    id: 3,
    projectId: 3,
    folder: "",
    sections: [],
  },
  // end of Ellow Tradition

  // Python Stock Data Scrapper
  {
    id: 4,
    projectId: 4,
    folder: "python-stock-data-scrapper",
    sections: morningStarScrapperSections,
  },
  // End of Python Stock Data Scrapper

  // Docker
  {
    id: 5,
    projectId: 5,
    folder: "php-server",
    sections: phpServerSections,
  },
  // end of Docker

  // NC-Gallery
  {
    id: 6,
    projectId: 6,
    folder: "",
    sections: [],
  },
  // end of NC-Gallery

  // NC-NEWS
  {
    id: 7,
    projectId: 7,
    folder: "",
    sections: [],
  },
  // end of NC-NEWS

  // Tarot Journal
  {
    id: 8,
    projectId: 8,
    folder: "tarot",
    sections: tarotSections,
  },
  // end of Tarot Journal

  // POKÉ-PEDIA
  {
    id: 9,
    projectId: 9,
    folder: "pokepedia",
    sections: [
      {
        sectionId: 0,
        img: null,
        video: "pokepedia-s1.mp4",
        content: ``,
      },
    ],
  },
  // end of POKÉ-PEDIA
  // wws
  {
    id: 10,
    projectId: 10,
    folder: null,
    sections: [],
  },
  // end of wws
  // Schanuzer
  {
    id: 11,
    projectId: 11,
    folder: "schnauzer",
    sections: [
      {
        sectionId: 0,
        img: null,
        video: "schnauzer-s1.mp4",
        content: ``,
      },
    ],
  },
  // end of Schnauzer
];



export default projectAdditionalInfo;
