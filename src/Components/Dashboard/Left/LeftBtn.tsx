import { Link } from "react-router-dom";
const LeftBtn = ({label, icon : Icon, path,  className}:{ label: string; icon: React.ElementType; path: string; className: string }) => {
  return (
    <Link to={path} className={` rounded-lg flex items-center gap-4 p-2 mb-4 hover:bg-primary transition-all duration-300 ease-in-out cursor-pointer ${className}`}>
      <Icon />
      <h1 className="text-lg">{label}</h1>
    </Link>
  )
}

export default LeftBtn
