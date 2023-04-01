
import { useRouter } from "next/router";



type PropsType = {
  projectType: string
};


const PorfolioHeader = (props:PropsType):JSX.Element => {

    const router = useRouter();

    // Return to main 
    function backToHome():void{
        router.push("/");
    }

    return(
        <div className="portfolio-header">
            <h3>{props.projectType}</h3>
            <button onClick={backToHome}> back </button>
        </div>
    )
}

export default PorfolioHeader;