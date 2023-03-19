import { useEffect, useState } from "react";
import profileData from "../../data/profile";
import Image from "next/image";
import profilePic from '../../assets/portfile.jpg';
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

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

          <section className="right">
            <q>{profileData.quote}</q>
            <article>{profileData.introduction}</article>

            <div className="social-media">
              <span>
                <SocialIcon
                  url={profileData.github}
                  bgColor="white"
                  style={{ height: 50, width: 50 }}
                />
              </span>
              <span>
                <SocialIcon
                  url={profileData.email}
                  network="mailto"
                  bgColor="white"
                  style={{ height: 50, width: 50 }}
                />
              </span>
              <span>
                <SocialIcon
                  url={profileData.linkedIn}
                  bgColor="white"
                  style={{ height: 50, width: 50 }}
                />
              </span>
            </div>
          </section>

          <section className="middle">
            <div>
              <Image
   
                className="profilePic"
                src={profilePic}
                alt="/"
       
                quality={100}
      
              />
            </div>
          </section>

          <section className="left">
            <h3>SKILLS</h3>
            <ul>
              {profileData.skills.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </section>
        </div>
      </div>
    );
};

export default Profile



      // <p>{profileData.introduction}</p>
      //     <p>{profileData.email}</p>
      //     <p>{profileData.blog}</p>
      //     <p>{profileData.github}</p>

        //        <div className="door-frame">
        //   <div className="door left" />
        //   <div className="door right">
        //     <div className="shpere" />
        //   </div>
        // </div>

                // <button onClick={displayProfileFunc}>close</button>