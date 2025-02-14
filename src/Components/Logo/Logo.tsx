import { MessagesSquare } from "lucide-react"
import { Link } from "react-router-dom"

const Logo = ({className}:{className? : string}) => {
  return (
    <Link to={"/"} className={`flex gap-2 items-center ${className} text-black dark:text-white cursor-pointer`}>
      <MessagesSquare size={38}/>
      <p className="text-3xl">TrueEcho</p>
    </Link>
  )
}

export default Logo
