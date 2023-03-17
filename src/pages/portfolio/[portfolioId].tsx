import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


const Portfolio = () => {


  const router = useRouter();
  const portfolioId = router.query.portfolioId;
  const [ isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(()=>{
    // fetch data start ...
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  },[]);

  function backToHome():void{
    router.push("/");
  }


  return (
    <section className="portfolio">
      {isLoading ? (
        <div className="loading-page">is loading</div>
      ) : (
        <div className="portfolio-container">
          <h1>show portfolio {portfolioId}</h1>
          <button onClick={backToHome}> close </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio
