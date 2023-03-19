type PropsType = {
  children: string 
};

const Badge = (props:PropsType): JSX.Element => {
    return(
        <div className="badge">
            <span>{props.children}</span>
        </div>
    )
}

export default Badge;