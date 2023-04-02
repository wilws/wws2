import { SectionType } from "@/data/projectAdditionalInfo";
import PortfolioMedia from "../../components/portfolio/PortfolioMedia";

type PropsType = {
  sections: Array<SectionType>;
  folder:string | null;
};

const PortfolioAdditionalInfo = (props: PropsType): JSX.Element => {

  const { sections, folder } = props;
  return (
    <>
      {sections.length ? (
        <section className="portfolio-additional-info">
          <h3>Project Details</h3>

          {sections.map((section) => {
            return (
              <section className="section" key={section.sectionId}>
                <article>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${section.content}`,
                    }}
                  />
                </article>
                <PortfolioMedia
                  folder={`/project-additional-info/${folder}`}
                  imgName={section.img}
                  videoName={section.video}
                />
              </section>
            );
          })}
        </section>
      ) : (
        <div className="portfolio-no-additional-info"></div>
      )}
    </>
  );

};

export default PortfolioAdditionalInfo;
