import { Table } from "flowbite-react";
import ParticipantsListRow from "./ParticipantsListRow";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";

const ParticipantsList = () => {
    const [camps,setCamps]=useState([]);
    const axiosPublic = useAxiosPublic();
    const {loggedInUser}=useContext(AuthContext);

    useEffect(() => {
        if(loggedInUser._id){
            axiosPublic
            .get(`/requests/${loggedInUser?._id}`)
            .then((res) => {
              setCamps(res.data);
            });
        }
        
      }, [axiosPublic,loggedInUser]);


  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Camp name</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Venue</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Cancel</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

        {camps?.map((camp) => (
          <ParticipantsListRow key={camp._id} camp={camp}></ParticipantsListRow>
        ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ParticipantsList;
