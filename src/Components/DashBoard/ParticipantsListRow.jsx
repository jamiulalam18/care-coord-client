/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ParticipantsListRow = ({camp}) => {
    const {camp_id, status}=camp;
    const axiosPublic=useAxiosPublic();
    const [listedCamp, setListedCamp]=useState();

    useEffect(() => {
        if(camp_id){
            axiosPublic
            .get(`/camps/${camp_id}`)
            .then((res) => {
              setListedCamp(res.data);
            });
        }
        
      }, [axiosPublic,camp_id]);


    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Link to={`/campDetails/${camp_id}`}>{listedCamp?.camp_name}</Link>
            </Table.Cell>
            <Table.Cell>{listedCamp?.camp_date}</Table.Cell>
            <Table.Cell>{listedCamp?.camp_venue}</Table.Cell>
            <Table.Cell>{status}</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Cancel
              </a>
            </Table.Cell>
          </Table.Row>
    );
};

export default ParticipantsListRow;