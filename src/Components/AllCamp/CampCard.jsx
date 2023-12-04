/* eslint-disable react/prop-types */

import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useOrganizer from "../../hooks/useOrganizer";
import { useContext, useState } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import { successToast } from "../Toasts/SuccessToast";
import useHealthPro from "./../../hooks/useHealthPro";

const CampCard = ({ camp }) => {
  const [isOrganizer] = useOrganizer();
  const [isHealthPro] = useHealthPro();
  const { user, loggedInUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const {
    camp_name,
    camp_fee,
    camp_date,
    thumbnail,
    short_description,
    camp_venue,
  } = camp;
  const axiosPublic = useAxiosPublic();

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
    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-2">
      <div
        className="h-48 lg:h-auto lg:w-80 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${thumbnail})` }}
        title={camp_name}
      ></div>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white dark:bg-cambridge_blue rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">{camp_date}</p>
          <p className="text-sm text-gray-600 flex items-center">
            {camp_venue}
          </p>
          {/* <div className="flex">
            <Badge color="info">{post_category}</Badge>
          </div> */}
          <div className="text-gray-900 font-bold text-xl mb-2">
            {camp_name}
          </div>
          <p className="text-gray-700 text-base">{short_description}</p>
          {/* <div className="flex flex-wrap gap-3 mt-3">
            {post_tags_arr.map((tag) => (
              // eslint-disable-next-line react/jsx-key
              <Badge color="gray">{tag}</Badge>
            ))}
          </div> */}
        </div>
        {user && !isOrganizer && (
          <Button
            // onClick={handleJoin}
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

        <Link to={`/campDetails/${camp?._id}`}>
          <Button className="w-32">Details</Button>
        </Link>
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

export default CampCard;
