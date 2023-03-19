import Box from "../../components/box/Box";
import React, { useState, useRef, useEffect,FC } from "react";
import { useRouter } from "next/router";
import PortfolioDescription from "../../components/portfolio/ProfolioDescription";


import projects from "../../data/test_data";



const Main = (): JSX.Element => {
  const [boxes, setBoxes] = useState<any>([]); // Each box represnt a project
  const [boxIsClicked, setBoxIsClicked] = useState<boolean>(false);
  const [boxIsHovered, setBoxIsHovered] = useState<boolean>(false);
  const [descriptionOpenSide, setDescriptionOpenSide] = useState<string | null>(
    null
  ); // decide the description open on left or right side

  const [projectDetail, setProjectDetail] = useState<ProjectDetailsType | null>(
    null
  ); // store the projectDetails of the clicked / hovered box
  const [mainWidth, setMainWidth] = useState<number>(0); // width of the browser
  const [mainHeight, setMainHeight] = useState<number>(0); // height of the browser
  const router = useRouter();
  const mainRef = useRef<HTMLDivElement | null>(null);

  // This function is passed to child box to listen the click event and got the clicked box
  function boxIsClikedListener(
    boxRef: null | HTMLDivElement,
    translate: string,
    boxId: null | string
  ): void {
    boxIsHoveredListener(true,null,null)
    setBoxIsClicked(true); // tell all the child boxes that a box is selected
    if (boxRef) {
 
      setTimeout(() => { boxRef.style.animation = `unset`;},100)
      setTimeout(() => {
        boxRef.style.transform = `translate(${translate})`;
      }, 300);// move the selected box to center
      setTimeout(() => {
        const boxObj: HTMLElement | null = boxRef.querySelector(".box-obj");
        if (boxObj){
          boxObj.style.perspective = "1000px";
          boxObj.style.transform = `translateZ(2000px) `;
        }
       }, 3900);
      setTimeout(() => {
        router.push(`/portfolio/${boxId}`);
      }, 4300);
    }
  }

  function boxIsHoveredListener(
    isHover: boolean,
    side: string | null,
    projectDetail: ProjectDetailsType | null
  ) {
    setBoxIsHovered(isHover);
    setDescriptionOpenSide(side);
    setProjectDetail(projectDetail);
  }

  // get the width of height of the browser
  useEffect(() => {
    const width = mainRef.current?.offsetWidth ?? 0;
    const height = mainRef.current?.offsetHeight ?? 0;
    setMainWidth(width);
    setMainHeight(height);

    const _boxes = projects.map((project) => {
      return (
        <Box
          key={project.id}
          boxIsClikedListener={boxIsClikedListener}
          boxIsHoveredListener={boxIsHoveredListener}
          boxIsClicked={boxIsClicked}
          boxIsHovered={boxIsHovered}
          mainWidth={mainWidth}
          mainHeight={mainHeight}
          boxId={project.id.toString()}
          projectDetail={project}
        />
      );
    });
    setBoxes(_boxes);

 
  }, [mainWidth, mainHeight, boxIsClicked, boxIsHovered]);

  return (
    <main className="main" ref={mainRef}>
      {boxes.map((box: JSX.Element) => box)}
      <PortfolioDescription
        side={descriptionOpenSide}
        display={boxIsHovered}
        projectDetail={projectDetail}
      />
    </main>
  );
};

export default Main;
