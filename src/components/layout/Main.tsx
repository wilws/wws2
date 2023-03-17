import Box from "../../components/box/Box";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";



const Main = () => {
  const boxes = [];
  const [boxIsClicked, setBoxIsClicked] = useState(false);
  const [selectedBoxId, setSelectedBoxId] = useState<string>("");
  const mainRef = useRef<null | HTMLDivElement>(null);
  const [mainWidth, setMainWidth] = useState<number>(0);
  const [mainHeight, setMainHeight] = useState<number>(0);
  const router = useRouter();


  // get the width of height of the browser
  useEffect(() => {
    const width = mainRef.current?.offsetWidth ?? 0;
    const height = mainRef.current?.offsetHeight ?? 0;
    setMainWidth(width);
    setMainHeight(height);
  }, []);


  // This function is passed to child box to get the click event 
  function boxIsClikedListener(
    boxRef: null | HTMLDivElement,
    translate: string,
    boxId:null| string
  ): void {
    setBoxIsClicked(true); // tell all the child boxes that a box is selected
    setSelectedBoxId(boxId ?? "");
    if (boxRef) {
      boxRef.style.transform = `translate(${translate})`; // move the selected box to center
      setTimeout(()=>{router.push(`portfolio/${boxId}`);},4800);
    }
 

  }

  // dummy box data
  for (let i = 0; i < 10; i++) {
    boxes.push(
      <Box
        key={i}
        boxIsClikedListener={boxIsClikedListener}
        boxIsClicked={boxIsClicked}
        mainWidth={mainWidth}
        mainHeight={mainHeight}
        boxId={i.toString()}
      />
    );
  }

  return (
    <main className="main" ref={mainRef}>
      {boxes.map((box) => box)}
    </main>
  );
};

export default Main;
