import { useState } from "react";
import Profile from "../profile/Profile";

const Head = () => {

  const [displayProfile, setDisplayProfile ] = useState<boolean>(false)

   function displayProfileController():void{
      setDisplayProfile((prevState:boolean) => {

        // fixBodyPosition(!prevState);
        return  !prevState;
      });
   }

  //  function fixBodyPosition(fix:boolean):void{
  //   if (fix) {
  //     document.body.style.position = "fixed"
  //   } else {
  //       document.body.style.position = "unset";
  //   }
  //  }

    return (
      <div className="head">
        <h1>Wilson Wong</h1>
        <button className={displayProfile ? "display" : ""} onClick={displayProfileController}>
          <span>Who am I?</span>
        </button>
        <Profile
          display={displayProfile}
          displayProfileFunc={displayProfileController}
        />
      </div>
    );
};

export default Head;
