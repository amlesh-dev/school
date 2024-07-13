import Carousel from "../../Component/Carousel";
import sampleImages from "../../Assests/images/samples.jpg";
import sideImage from "../../Assests/images/14271.jpg";
import style from "./index.module.scss";
import Footer from "../../Component/Footer";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const carouselData = [
    {
      header: "Header Name",
      subHeader: "Sub Header Name",
      images: sampleImages,
    },
    {
      header: "Header Name",
      subHeader: "Sub Header Name",
      images: sampleImages,
    },
    {
      header: "Header Name",
      subHeader: "Sub Header Name",
      images: sampleImages,
    },
    {
      header: "Header Name",
      subHeader: "Sub Header Name",
      images: sampleImages,
    },
    {
      header: "Header Name",
      subHeader: "Sub Header Name",
      images: sampleImages,
    },
  ];
  return (
    <>
      <div className={style.HomeCarousel}>
        <Carousel settings={settings} carouselData={carouselData} />
      </div>
      <div>
        <div>
          <label className={style.visionlabel}>Our Vision</label>
          <p className={style.visionsublabel}>
            To provide good quality modern education-including a strong
            component of culture, inculcation of values, awareness of the
            environment, adventure activities and physical education- to the
            talented children predominantly from the rural areas without regard
            to their family's socio-economic conditions.
          </p>
        </div>
      </div>
      <div className={style.homeTop}>
        <label className={style.aboutSchool}>About Administrative </label>
        <div className={style.aboutsection}>
          <div>
            <img
              className={style.imagesStyle}
              src={sideImage}
              alt="sideimage"
            />
          </div>
          <div className={style.labeltitle}>
            <label>What is Lorem Ipsum?</label>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
        </div>
        <div className={style.aboutsection}>
          <div className={style.labeltitle}>
            <label>What is Lorem Ipsum?</label>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div>
            <img
              className={style.imagesStyle}
              src={sideImage}
              alt="sideimage"
            />
          </div>
        </div>
        <div className={style.aboutsection}>
          <div>
            <img
              className={style.imagesStyle}
              src={sideImage}
              alt="sideimage"
            />
          </div>
          <div className={style.labeltitle}>
            <label>What is Lorem Ipsum?</label>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Home;
