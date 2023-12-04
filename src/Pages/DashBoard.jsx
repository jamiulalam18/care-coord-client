import { Tabs } from "flowbite-react";
import Profile from "../Components/DashBoard/Profile";
import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
import useOrganizer from './../hooks/useOrganizer';
import ParticipantsList from "../Components/DashBoard/ParticipantsList";
import ManageCamps from "../Components/DashBoard/ManageCamps";
import ManageRequests from "../Components/DashBoard/ManageRequests";
import { Helmet } from "react-helmet";

const DashBoard = () => {
    const {loggedInUser}=useContext(AuthContext);
    const [isOrganizer]=useOrganizer();
  return (
    <div className="max-w-screen-xl mx-auto pt-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CareCoord: Dashboard</title>
      </Helmet>
      <h2 className="text-4xl text-center">DashBoard</h2>

      <Tabs aria-label="Tabs with underline" style="underline">
        <Tabs.Item active title="Profile">
          <Profile loggedInUser={loggedInUser}></Profile>
        </Tabs.Item>
        {
            !isOrganizer? (<Tabs.Item title="My joining list">
                <ParticipantsList></ParticipantsList>
            </Tabs.Item>):<></>
        }
        {
            isOrganizer? (<Tabs.Item title="Manage Camps">
                <ManageCamps></ManageCamps>
            </Tabs.Item>):<></>
        }
        {
            isOrganizer? (<Tabs.Item title="Manage Joining Requests">
                <ManageRequests></ManageRequests>
            </Tabs.Item>):<></>
        }
      </Tabs>
    </div>
  );
};

export default DashBoard;
