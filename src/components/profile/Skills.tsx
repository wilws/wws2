type PropsType = {
  skills: Array<string>;

};

const Skills = (props:PropsType):JSX.Element => {

    let key = 0
    return (
        <ul className="profile-skills">
            {
                props.skills.map((skill) => {
                    return(
                        <li key={key++}>{skill}</li>
                    )
                })
            }
        </ul>
    )
}

export default Skills