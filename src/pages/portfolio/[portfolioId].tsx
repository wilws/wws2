import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import projects from "../../data/test_data";



const Portfolio = () => {


  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projectDetails, setProjectDetails] = useState<ProjectDetailsType | null>(null);


  useEffect(() => {
    const portfolioId = router.query.portfolioId;
    const _project = projects.filter(
      (project) => project.id.toString() === portfolioId?.toString()
    );
  
    setProjectDetails(_project[0]);
    setTimeout(()=>{
          setIsLoading(false);
    },500);

  }, []);

  function backToHome():void{
    router.push("/");
  }


  return (
    <section className="portfolio">
      {isLoading ? (
        <div className="loading-page">is loading</div>
      ) : (
        <div className="portfolio-container">
          <button onClick={backToHome}> close </button>
          <h1>{projectDetails?.id && projectDetails?.id}</h1>
          <h1>{projectDetails?.projectType && projectDetails?.projectType}</h1>
          <h1>{projectDetails?.projectYear && projectDetails?.projectYear}</h1>
          <h1>{projectDetails?.projectName && projectDetails?.projectName}</h1>
          {projectDetails?.techs &&
            projectDetails?.techs.map((tech) => {
              return <h1>{tech}</h1>;
            })}
          <p>{projectDetails?.description && projectDetails?.description}</p>
        </div>
      )}
    </section>
  );
};

export default Portfolio

          // <h1>show portfolio {portfolioId}</h1>