import "./sectiontitle.scss";

interface SectionTitleProps {
  text: string;
  backgroundImg?: string;
}

function SectionTitle(props: SectionTitleProps) {
  const { text, backgroundImg } = props;
  const defaultImg = "images/section_title_background.png";

  return (
    <div
      className="section-title"
      style={{
        backgroundImage:
          window.innerWidth > 800
            ? `url(${defaultImg})`
            : 'none'  
      }}
    >
   <div className="gradient"></div>

      <h2>{text}</h2>
    </div>
  );
}

export default SectionTitle;

/*style={{
        backgroundImage:
          window.innerWidth > 800
            ? backgroundImg !== undefined
              ? `url(${backgroundImg})`
              : `url(${defaultImg})`
            : "none",
      }}*/