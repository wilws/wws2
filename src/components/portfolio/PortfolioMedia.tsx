
import { useState } from "react";
type PropsType = {
  folder: string
  imgName: string | null;
  videoName: string | null;
};


const ProfolioMedia = (props:PropsType): JSX.Element => {
  const { folder, imgName, videoName } = props;
  const [fullSceenClass, setFullScreenClass] =
    useState<string>("screen-background");
  
  let src: string;

  function fullScreenHandler(){

    if (fullSceenClass === "screen-background") {
      setFullScreenClass("screen-background full-screen");
    } else {
      setFullScreenClass("screen-background");
    }
   
  }

  if (imgName) {
    src = `/static/${folder}/${imgName}`;
    return (
      <div className={fullSceenClass}>
        <button onClick={fullScreenHandler}>close</button>
        <img src={src} onClick={fullScreenHandler} />
      </div>
    );
  }
  
  if (videoName) {
    src = `/static/${folder}/${videoName}`;
    return (
      <div className={fullSceenClass}>
        <button onClick={fullScreenHandler}>close</button>
        <video loop autoPlay muted playsInline onClick={fullScreenHandler}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }
  
  return (<span></span>)
  
};


export default ProfolioMedia;