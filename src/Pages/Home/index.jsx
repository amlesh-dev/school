import Carousel from "../../Component/Carousel";
import Navbar from "../../Component/Navbar";
import sampleImages from "../../Assests/images/samples.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <Carousel settings={settings} carouselData={carouselData} />
    </>
  );
};
export default Home;
