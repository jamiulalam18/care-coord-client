import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Button, Modal } from "flowbite-react";
import useOrganizer from "../hooks/useOrganizer";
import { AuthContext } from "../Provider/AuthProvider";
import { successToast } from "../Components/Toasts/SuccessToast";
import useHealthPro from "../hooks/useHealthPro";
import { Helmet } from "react-helmet";

const CampDetails = () => {
  const camp_id = useLoaderData();
  const [camp, setCamp] = useState({});
  const axiosPublic = useAxiosPublic();
  const [isOrganizer] = useOrganizer();
  const { user, loggedInUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [isHealthPro]=useHealthPro();

  const {
    camp_name,
    camp_fee,
    camp_date,
    thumbnail,
    short_description,
    main_description,
    camp_venue,
    target_participant,
    special_service,
    professionals,
  } = camp;

  useEffect(() => {
    axiosPublic.get(`/camps/${camp_id}`).then((res) => {
      setCamp(res.data);
    });
  }, [axiosPublic, camp_id]);

  const handleJoin = () => {
    setOpenModal(false);
    const user_id = loggedInUser._id;
    const camp_id = camp?._id;
    const status = "Pending";
    const new_request = {
      user_id,
      camp_id,
      status,
    };
    axiosPublic.post(`/requests`, new_request).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        successToast(
          "Join request successfully submitted. Wait for Organizers to confirm."
        );
      } else {
        successToast("Already Joined");
      }
    });
  };

  return (
    <div className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-cambridge_blue-900 dark:bg-gray-800 dark:text-gray-50 pt-32 md:pt-24 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CareCoord: Camp Details</title>
      </Helmet>
      <div className="w-full mx-auto space-y-4 text-justify">
        <img src={thumbnail} className="w-full mb-4"></img>
        <h1 className="text-4xl font-bold md:text-5xl">{camp_name}</h1>
        <h2 className="text-xl">{short_description}</h2>
        <h2>
          <span className="font-bold">Venue: </span>
          {camp_venue}
        </h2>
        <h2>
          <span className="font-bold">Date: </span>
          {camp_date}
        </h2>
        <h2>
          <span className="font-bold">Fee: </span>${camp_fee}
        </h2>
        <h2>
          <span className="font-bold">Target Participants: </span>
          {target_participant}
        </h2>
        <h2>
          <span className="font-bold">Available professionals: </span>
          {professionals}
        </h2>

        <h2>
          <span className="font-bold">Services: </span>
          {special_service}
        </h2>

        <h2>{main_description}</h2>

        {user && !isOrganizer && (
          <Button
            onClick={() => setOpenModal(true)}
            outline
            className="w-32 mb-2"
            color="gray"
          >
            Join Now
          </Button>
        )}

        {/* {!isOrganizer ? (
          <Button
            onClick={handleJoin}
            outline
            className="w-32 mb-2"
            color="gray"
          >
            Join Now
          </Button>
        ) : (
            <Button
            onClick={handleJoin}
            outline
            className="w-32 mb-2"
            color="gray"
            disabled
          >
            Join Now
          </Button>
        )} */}
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        {isHealthPro ? (
          <Modal.Header>Joining Confirmation</Modal.Header>
        ) : (
          <Modal.Header>Payment Confirmation</Modal.Header>
        )}

        <Modal.Body>
          <div className="space-y-6">
            {isHealthPro ? (
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Thank you for your interest to help. Please confirm to join.
              </p>
            ) : (
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Please confirm the payment of{" "}
                <span className="font-bold">${camp_fee}</span>.
              </p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isHealthPro ? (
            <Button onClick={() => handleJoin()}>Join Now</Button>
          ) : (
            <Button onClick={() => handleJoin()}>Pay Now</Button>
          )}
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CampDetails;
