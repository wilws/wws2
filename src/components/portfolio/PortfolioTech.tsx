import Badge from "../../components/UI/badge";

type PropsType = {
  techs: Array<string>;
};

const PorfolioTech = (props: PropsType): JSX.Element => {
  const { techs } = props;

  let badgeKey = 0;
  return (
    <div className="portfolio-techs">
      <h3>Techs Applied</h3>
      <div>
        {techs.map((tech) => {
          return <Badge key={badgeKey++}>{tech}</Badge>;
        })}
      </div>
    </div>
  );
};

export default PorfolioTech;
