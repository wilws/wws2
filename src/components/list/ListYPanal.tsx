import Badge from "../UI/badge";
import styleSettings from "@/data/styleSettings";
import { useState, useEffect, useRef } from "react";

type PropsType = {
  id: number;
  img: string | null;
  projectName: string;
  projectYear: string;
  projectType: string;
  techs: Array<string>;
};

const ListYPanal = (props: PropsType): JSX.Element => {
    const { img, projectName, projectYear, projectType, techs, id } = props;
    const imgRef = useRef<HTMLImageElement|null>(null);
    const [iconBgColor, setIconbgColor] =
        useState<string>("rgb(255, 255, 255)");


     useEffect(() => {
       
       if (!imgRef.current) return;

       let styleSetting = []
       styleSetting = styleSettings.filter(
         (project) => project.projectId.toString() === id.toString()
       );

       if (!styleSetting.length) return;

       imgRef.current.style.backgroundColor = styleSetting[0].iconBackgroundColor;

     }, [iconBgColor]);
  

    let badgeKey = 0;

    return (
      <div className="panal-y-detail">
        {img ? (
          <img
            className="list-img"
            src={`/static/project-logo/${img}`}
            alt="/"
            ref={imgRef}
          />
        ) : (
          <div className="no-img">
            <span>{projectName}</span>
          </div>
        )}
        <h1 className="list-projectName">{projectName}</h1>
        <div className="list-projectShortDescription">
          <span className="list-projectYear">{projectYear}</span>
          <span></span>
          <span className="list-projectType">   - {projectType} - </span>
        </div>

        <div className="list-badge">
          {techs.map((tech: string) => {
            return <Badge key={badgeKey++}>{tech}</Badge>;
          })}
        </div>
      </div>
    );
}

export default ListYPanal;
