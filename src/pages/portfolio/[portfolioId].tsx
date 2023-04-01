import { useEffect, useState } from "react";
import projects from "../../data/test_data";
import projectsBrief,{ projectsBriefType}  from "@/data/projectBrief";
import projectAdditionalInfo,{
  projectAdditionalInfoType,
  SectionType,
} from "@/data/projectAdditionalInfo";


import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PorfolioBrief from "@/components/portfolio/PortfolioBrief";
import PorfolioTech from "@/components/portfolio/PortfolioTech";
import PortfolioCover from "@/components/portfolio/PortfolioCover";
import PortfolioArticle from "@/components/portfolio/PortfolioArticle";
import PortfolioAdditionalInfo from "@/components/portfolio/PortfolioAdditionalInfo";



const default_project =  {
    id:0,
    projectType:"",
    projectYear:"",
    projectName:"",
    techs:[""],
    description:"",
    img:"",
    socials:{link:"",github:""}
}

const default_brief = {
   id: 0,
    projectId: 0,
    coverImg:"",
    coverVideo:"",
    description:"",
    sections: [],
};

const default_setting = {
    id: 0,
    projectId: 0,
    iconBackgroundColor: "rgb(255, 255, 255)",
};

const default_additionalInfo = {
  id: 0,
  projectId: 0,
  folder:"",
  sections: [
    {
      sectionId: 0,
      img: "",
      folder: "",
      video: "",
      content: "",
    },
  ],
};

const Portfolio = ():JSX.Element => {


  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projectDetails, setProjectDetails] =
    useState<ProjectDetailsType>(default_project);
  const [projectBrief, setProjectBrief] =
    useState<projectsBriefType>(default_brief);


  // const [coverPath,setCoverPath] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] =
    useState<projectAdditionalInfoType>(default_additionalInfo);





  useEffect(() => {

    const url = new URL(window.location.href);
    const portfolioId = url.pathname.split("/")[2];


    // Exit if pram not set
    if (!portfolioId) return;


    // All the data from /data
    const _project = projects.filter(
      (project) => project.id.toString() === portfolioId?.toString()
    );
    const _brief = projectsBrief.filter(
      (project) => project.projectId.toString() === portfolioId?.toString()
    );
    const _section = projectAdditionalInfo.filter(
      (project) => project.projectId.toString() === portfolioId?.toString()
    );

    // Exit if data not get
    if (!_project[0] || !_brief[0] || !_section[0]) return;

    setProjectDetails(_project[0]);
    setProjectBrief(_brief[0]);
    setAdditionalInfo(_section[0]);

    // Set loading to false, display the content
    setIsLoading(false);


  }, [projectDetails]);




  return (
    <div className="portfolio">
      {isLoading ? (
        <div className="loading-page">is loading</div>
      ) : (
        <div className="portfolio-container">
          <PortfolioHeader projectType={projectDetails.projectType} />

          <section className="portfolio-body">
            <PorfolioBrief
              projectName={projectDetails.projectName}
              projectYear={projectDetails.projectYear}
              link={projectDetails.socials.github}
              github={projectDetails.socials.link}
            />

            <PorfolioTech techs={projectDetails.techs} />

            <PortfolioCover
              coverImg={projectBrief.coverImg}
              coverVideo={projectBrief.coverVideo}
            />

            <PortfolioArticle
              projectName={projectDetails.projectName}
              portfolioId={projectBrief.projectId}
              img={projectDetails.img}
              description={projectBrief.description}
            />
          </section>

          <PortfolioAdditionalInfo
            sections={additionalInfo.sections}
            folder={additionalInfo.folder}
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio


