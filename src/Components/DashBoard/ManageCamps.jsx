import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ManageCampsRow from "./ManageCampsRow";

const ManageCamps = () => {
  const [camps, setCamps] = useState([]);
  const { loggedInUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (loggedInUser._id) {
      axiosPublic.get(`/campsByUser/${loggedInUser?._id}`).then((res) => {
        setCamps(res.data);
      });
    }
  }, [axiosPublic, loggedInUser]);

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Camp name</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Venue</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {camps?.map((camp) => (
            <ManageCampsRow key={camp._id} camp={camp}></ManageCampsRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageCamps;
