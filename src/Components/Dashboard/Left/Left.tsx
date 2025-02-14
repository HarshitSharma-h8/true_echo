import ThemeSwitcher from "../../Button/ThemeSwitcher";
import Logo from "../../Logo/Logo";
import Image from "../../../assets/testimonial.png";
import LeftBtn from "./LeftBtn";
import {MessageSquareText, Star, SmilePlus} from "lucide-react"

const leftMenu = [
    {
        label : "Text box",
        icon : MessageSquareText,
        url : "",
        active : true
    },
    {
        label : "Star",
        icon : Star ,
        url : "",
        active : false
    },
    {
        label : "Emogi",
        icon : SmilePlus,
        url : "",
        active : false
    },

]

const Left = () => {
  return (
    <div className="px-4 py-5 ">
      {/* Logo */}
      <div className="mb-5">
        <Logo />
      </div>
      <div className="bg-primary rounded-lg p-2 mb-6 ">
        <div className="flex justify-between ">
          <div className="flex gap-2 relative ">
            <img
              src={Image}
              alt="user"
              className="w-[35px] h-[35px] object-cover bg-white rounded-full"
            />
            <h1 className="text-xl">h8_silver</h1>
            <div className="h-3 w-3 absolute bg-green-400 rounded-full left-5.5 animate-ping "></div>
            <div className="h-3 w-3 absolute bg-green-400 rounded-full left-5.5 "></div>
          </div>
          {/* <h1 className="text-white text-2xl">Dashboard</h1> */}
          <ThemeSwitcher />
        </div>
      </div>
      <div>
      {/* <MessageSquareText /> */}
        {leftMenu.map((item)=>(
            <LeftBtn label={item.label} icon={item.icon} path={item.url} className={`${item.active ? 'bg-primary':''}`}/>
        ))}
      </div>
    </div>
  );
};

export default Left;
