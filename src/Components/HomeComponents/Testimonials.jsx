import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/testimonials`).then((res) => {
      setTestimonials(res.data);
    });
  }, [axiosPublic]);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={2000}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
          ></TestimonialCard>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
