import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ManageRequestRow from "./ManageRequestRow";

const ManageRequests = () => {
  const [requests, setRequests] = useState([]);
  const { loggedInUser } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (loggedInUser._id) {
      axiosPublic.get(`/requestsToUser/${loggedInUser?._id}`).then((res) => {
        setRequests(res.data);
        console.log(res.data);
      });
    }
  }, [axiosPublic, loggedInUser, refresh]);

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Camp name</Table.HeadCell>
          <Table.HeadCell>User name</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Approve</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Decline</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {requests?.map((request) => (
            <ManageRequestRow key={request._id} request={request} refresh={refresh} setRefresh={setRefresh}></ManageRequestRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageRequests;
