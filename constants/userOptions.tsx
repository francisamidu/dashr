import { FaCog as ISettings, FaPowerOff as IPowerOff } from "react-icons/fa";
import { BsUpload as IUpload } from "react-icons/bs";
const userOptions = [
  {
    name: "Upload Image",
    icon: <IUpload className="text-md text-inherit" />,
  },
  {
    name: "Settings",
    icon: <ISettings className="text-md text-inherit" />,
  },
  {
    name: "Settings",
    icon: <IPowerOff className="text-md text-inherit" />,
  },
];
export default userOptions;
