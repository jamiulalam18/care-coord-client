import { Helmet } from "react-helmet";
import AddCampForm from "../Components/AddCamp/AddCampForm";

const AddNewCamp = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CareCoord: Add New Camp</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto pt-24">
        <div className="bg-cambridge_blue-800 dark:bg-night text-center rounded-lg py-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            Add a new camp
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Please fill up the form and hit the post button below to add new
            camp.
          </p>
        </div>
        <AddCampForm></AddCampForm>
      </div>
    </div>
  );
};

export default AddNewCamp;
