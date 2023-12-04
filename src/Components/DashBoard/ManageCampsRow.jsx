/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageCampsRow = ({camp}) => {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Link to={`/campDetails/${camp?._id}`}>{camp?.camp_name}</Link>
            </Table.Cell>
            <Table.Cell>{camp?.camp_date}</Table.Cell>
            <Table.Cell>{camp?.camp_venue}</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
    );
};

export default ManageCampsRow;