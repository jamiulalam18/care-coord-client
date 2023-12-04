/* eslint-disable react/prop-types */
import { Button, Table } from "flowbite-react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { successToast } from "../Toasts/SuccessToast";
const ManageRequestRow = ({request, refresh, setRefresh}) => {
    const {camp_id, user_id, status}=request;
    const axiosPublic=useAxiosPublic();
    const [userdetails, setUserdetails] = useState({});
    const [campdetails, setCampdetails] = useState({});

    useEffect(() => {
        if(camp_id){
            axiosPublic
            .get(`/camps/${camp_id}`)
            .then((res) => {
              setCampdetails(res.data);
            });
        }
        
      }, [axiosPublic,camp_id]);

      useEffect(() => {
        if(user_id){
            axiosPublic
            .get(`/users/${user_id}`)
            .then((res) => {
              setUserdetails(res.data);
            });
        }
        
      }, [axiosPublic,user_id]);

      const handleApprove=() => {
        axiosPublic.patch(`/updateReqStatus/${request._id}`, { status: "Approved" })
        .then((res) => {
          if (res.data.modifiedCount === 1) {
            successToast("Request Approved!!!!");
            setRefresh(!refresh);
          }
        });
      };

      const handleDecline=() => {
        axiosPublic.patch(`/updateReqStatus/${request._id}`, { status: "Declined" })
        .then((res) => {
          if (res.data.modifiedCount === 1) {
            successToast("Request Declined!!!!");
            setRefresh(!refresh);
          }
        });
      };

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Link to={`/campDetails/${camp_id}`}>{campdetails?.camp_name}</Link>
            </Table.Cell>
            <Table.Cell>{userdetails?.full_name}</Table.Cell>
            <Table.Cell>{userdetails?.role}</Table.Cell>
            <Table.Cell>{status}</Table.Cell>
            <Table.Cell>
              <Button
                className=""
                onClick={handleApprove}
              >
                Approve
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="failure"
                onClick={handleDecline}
              >
                Decline
              </Button>
            </Table.Cell>
          </Table.Row>
    );
};

export default ManageRequestRow;