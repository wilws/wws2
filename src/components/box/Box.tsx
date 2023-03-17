import { useEffect, useState, useRef } from "react";

type PropsType = {
  boxIsClicked: boolean;
  boxIsClikedListener: (
    boxRef: null | HTMLDivElement,
    translate: string,
    boxId: null | string
  ) => void;
  mainWidth: number;
  mainHeight: number;
  boxId: string
};

const Box = (props: PropsType) => {

    const { boxIsClicked, boxIsClikedListener, mainWidth, mainHeight, boxId } = props;
    const [boxClass, setBoxClass] = useState<string>('box');
    const [iAmTargetBox, setIAmTargetBox] = useState<boolean>(false);
    const [translateX, setTranslateX] = useState<number>(0);
    const [translateY, setTranslateY] = useState<number>(0);
    const boxRef = useRef<HTMLDivElement | null>(null);


    // set the X,Y distance of this box to the center location
    useEffect(()=>{
            const boxWidth = boxRef.current?.offsetWidth ?? 0;
            const boxHeight = boxRef.current?.offsetHeight ?? 0;
            const offsetX = boxRef.current?.offsetLeft ?? 0;
            const offsetY = boxRef.current?.offsetTop ?? 0;
            const _distOffsetX = (mainWidth-boxWidth)/2
            const _distOffsetY = (mainHeight-boxHeight)/2
            const _translateX = _distOffsetX - offsetX
            const _translateY = _distOffsetY - offsetY
            setTranslateX(_translateX)
            setTranslateY(_translateY)
    },[mainWidth, mainHeight]);


    // Listene if any boxex at the screen is clicked.
    useEffect(()=>{
        if (boxIsClicked) {
            if (iAmTargetBox) return;
            setBoxClass("box disappear");
        } else {
            setBoxClass("box");
            setIAmTargetBox(false);
        }
  },[boxIsClicked]);

  // Function trigger when this box is clicked
  function clickBox() {
    setIAmTargetBox(true);
    setBoxClass("box choosen");
    boxIsClikedListener(
      boxRef.current,
      `${translateX}px,${translateY}px`,
      boxId
    );
  };

  return (
    <div className={boxClass} onClick={clickBox} ref={boxRef}>
      <div className="box-obj">
        <div className="face-x">X</div>
        <div className="face-y">Y</div>
        <div className="face-z">Z</div>
      </div>
    </div>
  );
};

export default Box