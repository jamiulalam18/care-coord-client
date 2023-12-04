import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampCard from "../AllCamp/CampCard";

const PopularCamps = () => {
  const [camps, setCamps] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/camps`).then((res) => {
      if (res.data.length > 6) {
        setCamps(res.data.slice(0, 6));
      } else {
        setCamps(res.data);
      }
    });
  }, [axiosPublic]);
  return (
    <div>
      <h2 className="text-4xl my-4 text-center underline">Popular Camps</h2>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <div className="lg:px-5 w-full">
          {camps.map((camp) => (
            <CampCard key={camp._id} camp={camp}></CampCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCamps;
