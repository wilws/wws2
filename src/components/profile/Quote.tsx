type PropsType = {
  quote: string;
};

const Quote = (props: PropsType): JSX.Element => {
  let key = 0;
  return <q className="profile-quote">{props.quote}</q>;
};

export default Quote;
