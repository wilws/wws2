
import { SocialIcon } from "react-social-icons";

type PropsType = {
  projectName: string;
  projectYear: string | null;
  link:string | null;
  github:string | null;
};


const PorfolioBrief = (props: PropsType):JSX.Element => {
  
  const { projectName, projectYear, link, github } = props;

  
  return (
    <div className="portfolio-brief">
      <h1>{projectName}</h1>
      <ul>
        <li>
          <span>{projectYear}</span>
        </li>

        {github && (
          <li>
            <SocialIcon
              url={github}
              bgColor="white"
              target="_blank"
              style={{ height: 25, width: 25 }}
            />
          </li>
        )}

        {link && (
          <li>
            <SocialIcon
              url={link}
              bgColor="white"
              target="_blank"
              style={{ height: 25, width: 25 }}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default PorfolioBrief;