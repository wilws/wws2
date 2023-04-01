import PortfolioMedia from "../../components/portfolio/PortfolioMedia";

type PropsType = {
  coverImg: string | null;
  coverVideo: string | null;
};

const PortfolioCover = (props: PropsType): JSX.Element => {
  const { coverImg, coverVideo } = props;
  return (
    <div className="portfolio-cover">
      <PortfolioMedia
        folder="project-cover"
        imgName={coverImg}
        videoName={coverVideo}
      />
    </div>
  );
};

export default PortfolioCover;
