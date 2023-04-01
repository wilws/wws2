import { useRef, useEffect }  from 'react';
import styleSettings, { styleType } from "@/data/styleSettings";

type PropsType = {
  projectName: string
  portfolioId: number
  img: string | null;
  description: string;
};

const PortfolioArticle = (props: PropsType): JSX.Element => {

    const {portfolioId, img, description,projectName } = props;

    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
      const _setting = styleSettings.filter(
        (project) => project.projectId.toString() === portfolioId?.toString()
      );

      if (!_setting[0]) return;
      if (!imgRef.current) return;
      imgRef.current.style.backgroundColor = _setting[0].iconBackgroundColor;
    }, [portfolioId]);

  return (
    <div className="portfolio-article">

      { img ?
        (<img
          src={`/static/project-logo/${img}`}
          alt="/"
          ref={imgRef}
        />):(
           <div className="no-img"><span>{projectName}</span></div>
        )
      }

      <div
        dangerouslySetInnerHTML={{
          __html: `${description}`,
        }}
      />

    </div>
  );
};

export default PortfolioArticle;
