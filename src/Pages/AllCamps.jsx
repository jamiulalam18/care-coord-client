import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import CampCard from "../Components/AllCamp/CampCard";
import { Helmet } from "react-helmet";

const AllCamps = () => {
  const [camps, setCamps] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/camps`).then((res) => {
      setCamps(res.data);
    });
  }, [axiosPublic]);

  return (
    <div className="max-w-screen-xl mx-auto pt-28 flex flex-col items-center justify-center">
      <div className="lg:px-5 mt-4 w-full">
        <Helmet>
          <meta charSet="utf-8" />
          <title>CareCoord: All Camps</title>
        </Helmet>
        {camps.map((camp) => (
          <CampCard key={camp._id} camp={camp}></CampCard>
        ))}
      </div>
    </div>
  );
};

export default AllCamps;
