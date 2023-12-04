import { Helmet } from "react-helmet";
import Banner from "../Components/HomeComponents/Banner";
import PopularCamps from "../Components/HomeComponents/PopularCamps";
import Testimonials from "../Components/HomeComponents/Testimonials";

const Home = () => {
    return (
        <div className="max-w-screen-xl pt-20 mx-auto">
            <Helmet>
        <meta charSet="utf-8" />
        <title>CareCoord: Home</title>
      </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;