import { useEffect, useState } from "react";
import profileData from "../../data/profile";

import React from "react";
import SocialIcons from "./SocialIcons";
import Skills from "./Skills";
import Picture from "./Picture";
import Quote from "./Quote";
import Article from "./Article";

type PropsType = {
  display: boolean;
  displayProfileFunc:()=>void;
};


const Profile = (props:PropsType) => {

    const { display, displayProfileFunc } = props;
    const [profileClass, setProfileClass] = useState<string>("profile");
    
    useEffect(() => {
        if(display){
            setProfileClass("profile display");
        } else {
            setProfileClass("profile");
        }
    }, [display]);


  
    return (
      <div className={profileClass}>
        <div className="profile-detail">
          <section className="top-left">
            <Picture />
            <Article article={profileData.introduction} />
            <SocialIcons socials={profileData.socials} />
          </section>

          <section className="middle">
            <Quote quote={profileData.quote} />
          </section>

          <section className="bottom-right">
            <h3>SKILLS</h3>
            <Skills skills={profileData.skills} />
          </section>
        </div>
      </div>
    );
};

export default Profile

//       