import { SocialIcon } from 'react-social-icons';

type SocialIcon = {
    platform:string;
    link:string
}

type PropsType = {
  socials: Array<SocialIcon>;
};

const SocialIcons = (props: PropsType): JSX.Element => {
  let key = 0;
  return (
    <ul className="profile-social-icons">
        {
            props.socials.map((social)=>{
                return (
                    <li key={key++}>
                        <SocialIcon
                            url={social.link}
                            bgColor="white"
                            style={{ height: 50, width: 50 }}
                        />
                    </li>
                )
            })
        }
        
    </ul>
  )
};

export default SocialIcons;
