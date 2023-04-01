
import { useRouter } from "next/router";
import { useState } from "react";
import ListYPanal from "./ListYPanal";
import ListXPanal from "./ListXPanal";



type PropsType = {
  projectDetail: ProjectDetailsType;
  largeScreen:boolean;
};

const List = (props:PropsType):JSX.Element => {

  const router = useRouter();

  const {
    id,
    projectType,
    projectYear,
    projectName,
    techs,
    description,
    img,
  } = props.projectDetail;

 

  function onClickHandler():void {
    router.push(`/portfolio/${id}`);
  }


  return (
    <div className="list" onClick={onClickHandler}>
      <div className="list-obj">
        <div className="list-faceX"></div>
        <div className="list-faceY">
          <ListYPanal
            img={img}
            id={id}
            projectName={projectName}
            projectYear={projectYear}
            projectType={projectType}
            techs={techs}
          />
        </div>
      </div>
    </div>
  );
}

export default List
