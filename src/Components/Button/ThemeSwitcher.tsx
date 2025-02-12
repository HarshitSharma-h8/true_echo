import { Monitor, MoonStar, Sun } from "lucide-react";
import { useTheme } from "../../Hooks/useTheme"

const ThemeSwitcher:React.FC = () => {

    const {theme, setTheme} = useTheme();

    const handelThemeChange = (newTheme : 'light' | 'dark' | 'system')=>{
        setTheme(newTheme);
    }
  return (
    <div className="bg-gray-700 flex items-center gap-3 px-3 py-2 rounded-full ">
      <button onClick={()=>handelThemeChange('dark')} className="text-green-500 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <MoonStar />
      </button>
      <button onClick={()=>handelThemeChange('system')} className="text-green-500 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <Monitor />
      </button>
      <button onClick={()=>handelThemeChange('light')} className="text-green-500 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <Sun />
      </button>
    </div>
  )
}

export default ThemeSwitcher;
