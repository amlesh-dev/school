import Carousel from "../../Component/Carousel";
import Navbar from "../../Component/Navbar";
import sampleImages from "../../Assests/images/samples.jpg";
import style from "./index.module.scss";

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
      <Navbar />
      <div className={style.HomeCarousel}>
        <Carousel settings={settings} carouselData={carouselData} />
      </div>
    </>
  );
};
export default Home;
