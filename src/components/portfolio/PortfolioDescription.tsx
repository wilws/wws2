import { useEffect,useState } from "react";
import Badge from "../UI/badge";
import List from "../list/List";

type PropsType = {
  side: string | null;
  display: boolean;
  projectDetail: ProjectDetailsType | null;
};

const PortfolioDescription = (props: PropsType): JSX.Element => {

  
  const {
    side,
    display,
    projectDetail,
  } = props;


  const [portfolioDescriptionClass, setPortfolioDescriptionClass] =
    useState<string>("portfolio-description");

  useEffect(() => {

    if (!display) {
      setPortfolioDescriptionClass("portfolio-description");
      return;
    }

    switch (side) {
      case "left":
        setPortfolioDescriptionClass("portfolio-description left");
        break;

      case "right":
        setPortfolioDescriptionClass("portfolio-description right");
        break;

      default:
        setPortfolioDescriptionClass("portfolio-description");
        return;
    }

  }, [display, projectDetail]);

  return (
    <div className={portfolioDescriptionClass}>
      {projectDetail && <List projectDetail={projectDetail} largeScreen={true}/> }
    </div>
  );
};

export default PortfolioDescription;


  // <h1>{projectDetail?.projectYear && projectDetail?.projectYear}</h1>
  //     <h1>{projectDetail?.projectName && projectDetail?.projectName}</h1>
  //     <div className="tech-badges">
  //       {projectDetail?.techs &&
  //         projectDetail?.techs.map((tech) => {
  //           return <Badge key={badgeKey++}>{tech}</Badge>;
  //         })}
  //     </div>


  //     