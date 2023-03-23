type PropsType = {
  article: string;
};

const Article = (props: PropsType): JSX.Element => {
  let key = 0;
  return <article className="profile-article">{props.article}</article>;
};

export default Article;
