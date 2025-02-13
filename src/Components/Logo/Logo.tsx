import { MessagesSquare } from "lucide-react"

const Logo = ({className}:{className? : string}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <MessagesSquare />
      <p className="text-lg">TrueEcho</p>
    </div>
  )
}

export default Logo
