import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";
import {
  Button,
  Datepicker,
  FileInput,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import axios from "axios";
import { successToast } from "../Toasts/SuccessToast";

const AddCampForm = () => {
  const { loggedInUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  // const navigate = useNavigate();

  const handleAddPost = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const camp_name = form.get("camp_name");
    const thumbnailFile = form.get("thumbnailFile");
    const camp_fee = form.get("camp_fee");
    const camp_date = form.get("camp_date");
    const camp_venue = form.get("camp_venue");
    const target_participant = form.get("target_participant");
    const special_service = form.get("special_service");
    const short_description = form.get("short_description");
    const main_description = form.get("main_description");
    const professionals = form.get("professionals");

    const organizer = loggedInUser._id;

    let url = "";
    let body = new FormData();
    body.set("key", import.meta.env.VITE_IMGBB_APPID);
    body.append("image", thumbnailFile);
    axios
      .post("https://api.imgbb.com/1/upload", body)
      .then(function (response) {
        url = response.data.data.url;
        const thumbnail = url;
        const number_participants=[];
        const number_professionals=[];

        const new_camp = {
          organizer,
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
         number_participants,
         number_professionals,
        };
        console.log(new_camp);

        // send data to the server
        axiosPublic.post(`/camps`, new_camp).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            successToast("Camp posted successfully!!");
            // navigate(`/manageCamps/${loggedInUser._id}`);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function auto_grow(e) {
    e.currentTarget.style.height = "5px";
    e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
  }

  return (
    <div className="dark:bg-myrtle_green-200 flex justify-center w-full rounded-lg">
      <form
        onSubmit={handleAddPost}
        className="flex max-w-md flex-col gap-2 w-full py-4 rounded-lg"
      >
        <div>
          <div className=" block">
            <Label htmlFor="camp_name" value="Camp Name" />
          </div>
          <TextInput
            id="camp_name"
            name="camp_name"
            placeholder="Camp Name"
            required
            type="text"
          />
        </div>

        <div id="fileUpload" className="max-w-md">
          <div className="block">
            <Label htmlFor="file" value="Thumbnail Picture" />
          </div>
          <FileInput
            id="thumbnail"
            name="thumbnailFile"
            accept="image/*"
            helperText="A thumbnail is useful to attract readers."
            required
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="camp_fee" value="Camp Fee" />
          </div>
          <TextInput
            id="camp_fee"
            name="camp_fee"
            placeholder="0.00"
            required
            type="number"
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="camp_date" value="Camp Date" />
          </div>
          <Datepicker id="camp_date" name="camp_date" placeholder="" required />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="camp_venue" value="Camp Venue" />
          </div>
          <TextInput
            id="camp_venue"
            name="camp_venue"
            placeholder="Camp Venue"
            required
            type="text"
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="target_participant" value="Target participant" />
          </div>
          <TextInput
            id="target_participant"
            name="target_participant"
            placeholder="Target participant"
            required
            type="text"
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="professionals" value="Available professionals" />
          </div>
          <TextInput
            id="professionals"
            name="professionals"
            placeholder="Available professionals"
            required
            type="text"
          />
        </div>

        <div>
          <div className="max-w-md" id="special_service">
            <div className="block">
              <Label
                htmlFor="special_service"
                value="Specialized Services Provided"
              />
            </div>
            <Textarea
              id="special_service"
              name="special_service"
              placeholder="Specialized Services Provided"
              required
              rows={2}
              onInput={auto_grow}
              className="min-h-16"
            />
          </div>
        </div>

        <div>
          <div className="max-w-md" id="short_description">
            <div className="block">
              <Label htmlFor="short_description" value="Short description" />
            </div>
            <Textarea
              id="short_description"
              name="short_description"
              placeholder="Short description"
              required
              rows={2}
              onInput={auto_grow}
              className="min-h-16"
            />
          </div>
        </div>

        <div>
          <div className="max-w-md" id="main_description">
            <div className="block">
              <Label htmlFor="main_description" value="Description" />
            </div>
            <Textarea
              id="main_description"
              name="main_description"
              placeholder="Description"
              required
              rows={4}
              onInput={auto_grow}
              className="min-h-[128px]"
            />
          </div>
        </div>

        <Button type="submit">Post Your Camp</Button>
      </form>
    </div>
  );
};

export default AddCampForm;
