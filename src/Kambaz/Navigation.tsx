import { Link , useLocation} from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const {pathname} = useLocation();
  const links = [
    {label:"Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard},
    {label:"Account",   path: "/Kambaz/Account",   icon: FaRegCircleUser},
    {label:"Courses",   path: "/Kambaz/Courses",   icon: LiaBookSolid},
    {label:"Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline},
    {label:"Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox},
    {label:"Labs",      path: "/Labs",             icon: LiaCogSolid},
  ];
  return (
    <div id="wd-kambaz-navigation" style={{width:110}}
        className="list-group rounded-0 position-fixed
        bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className ="list-group-item bg-black border-0 text-center">
          <img src="/images/NEU.png" width="90px" /></a>
 

        {links.map((link) =>(
          <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
            ${pathname.includes(link.label)? "text-danger bg-white":"text-white bg-black"}`}>
              {link.icon({className:"fs-1 text-danger"})}
              <br />
              {link.label}
            </Link>
            ))}
    
    </div>
);
}
