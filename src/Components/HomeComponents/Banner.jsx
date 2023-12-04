import { Carousel } from "flowbite-react";
import banner1 from "./../../../public/medical_camp_1.jpg"
import banner2 from "./../../../public/medical_camp_2.jpg"
import banner3 from "./../../../public/medical_camp_3.jpg"

const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={2000}>
        <img
          src={banner1}
          alt="..."
        />
        <img
          src={banner2}
          alt="..."
        />
        <img
          src={banner3}
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;
