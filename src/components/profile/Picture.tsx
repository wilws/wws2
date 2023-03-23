import Image from "next/image";
import profilePic from "../../assets/portfile.jpg";



const Picture = (): JSX.Element => {
  let key = 0;
  return (
    <div className="profile-picture">
      <Image className="profilePic" src={profilePic} alt="/" quality={100} />
    </div>
  );
};

export default Picture;
