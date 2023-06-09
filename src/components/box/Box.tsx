import { useEffect, useState, useRef} from "react";
import styleSettings from "@/data/styleSettings";


type PropsType = {
  boxIsClicked: boolean;
  boxIsHovered: boolean;
  boxIsClikedListener: (
    boxRef: null | HTMLDivElement,
    translate: string,
    boxId: null | string
  ) => void;
  boxIsHoveredListener: (
    isHover: boolean,
    side: string | null,
    projectDetail: ProjectDetailsType | null
  ) => void;
  mainWidth: number;
  mainHeight: number;
  boxId: string;
  projectDetail: ProjectDetailsType;
};

const Box = (props: PropsType): JSX.Element => {

  const {
    boxIsClicked,
    boxIsClikedListener,
    boxIsHoveredListener,
    mainWidth,
    mainHeight,
    boxId,
    boxIsHovered,
    projectDetail,
  } = props;


  const { id, projectType, projectYear, projectName, techs, description, img } =
    projectDetail;

  const [iconBgColor, setIconbgColor] =
    useState<string>("rgb(255, 255, 255)");

  const imgRef = useRef<HTMLImageElement | null>(null);

  const [boxClass, setBoxClass] = useState<string>("box");
  const [iAmTargetBox, setIAmTargetBox] = useState<boolean>(false);
  const [iAmHoveredBox, setIAmHoveredBox] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement | null>(null);

  // set the X,Y distance of this box to the center location
  useEffect(() => {
    const boxWidth = boxRef.current?.offsetWidth ?? 0;
    const boxHeight = boxRef.current?.offsetHeight ?? 0;
    const offsetX = boxRef.current?.offsetLeft ?? 0;
    const offsetY = boxRef.current?.offsetTop ?? 0;
    const _distOffsetX = (mainWidth - boxWidth) / 2;
    const _distOffsetY = (mainHeight - boxHeight) / 2;
    const _translateX = _distOffsetX - offsetX;
    const _translateY = _distOffsetY - offsetY;
    setTranslateX(_translateX);
    setTranslateY(_translateY);
  }, [mainWidth, mainHeight]);

  // Listene if any boxex at the screen is clicked.
  useEffect(() => {
    if (boxIsHovered) {
      if (iAmHoveredBox) return;
      setBoxClass("box not-hovered");
    } else {
      setBoxClass("box");
      setIAmHoveredBox(false);
    }
  }, [boxIsHovered]);

  useEffect(() => {
    if (boxIsClicked) {
      if (iAmTargetBox) return;
      setBoxClass("box disappear");
    } else {
      setBoxClass("box");
      setIAmTargetBox(false);
    }
  }, [boxIsClicked]);


 useEffect(() => {
   if (!imgRef.current) return;

   let styleSetting = [];
   styleSetting = styleSettings.filter(
     (project) => project.projectId.toString() === id.toString()
   );

   if (!styleSetting.length) return;

   imgRef.current.style.backgroundColor = styleSetting[0].iconBackgroundColor;
 }, [iconBgColor]);

  // Function trigger when this box is clicked
  function clickBox() {
    setIAmTargetBox(true);
    setBoxClass("box choosen");
    boxIsClikedListener(
      boxRef.current,
      `${translateX}px,${translateY}px`,
      boxId
    );
  }

  // Function trigger when this box is hovered
  function mouseEnter() {
    setIAmHoveredBox(true);
    let side = "left";
    const offsetX = boxRef.current?.offsetLeft ?? 0;

    if (offsetX >= mainWidth / 2) {
      side = "left";
    } else {
      side = "right";
    }
    boxIsHoveredListener(true, side, projectDetail);
  }

  function mouseLeave() {
   
    if (boxIsClicked) return;
    setIAmHoveredBox(false);
    boxIsHoveredListener(false, null, null);
  }

  return (
    <div className={boxClass} ref={boxRef}>
      <div
        className="box-obj"
        onClick={clickBox}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div className="face-x">{projectName}</div>
        <div className="face-y">
          {img ? (
            <img src={`/static/project-logo/${img}`} alt="/" ref={imgRef} />
          ) : (
            <div><span>{projectName}</span></div>
          )}
        </div>
        <div className="face-z">Z</div>
      </div>
    </div>
  );
};

export default Box