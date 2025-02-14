import Left from "../Components/Dashboard/Left/Left"

const Dashboard = () => {
  return (
    <div className="text-white flex h-screen">
      <div className="w-[18%] border-r border-r-indigo-400 ">
        <Left/>
        
      </div>
      <div>right</div>
    </div>
  )
}

export default Dashboard
