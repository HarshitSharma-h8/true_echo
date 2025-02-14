import {  MoonStar, Sun } from "lucide-react";
import { useTheme } from "../../Hooks/useTheme"

const ThemeSwitcher:React.FC = () => {

    const {theme, setTheme} = useTheme();

    const handelThemeChange = (newTheme : 'light' | 'dark' | 'system')=>{
        setTheme(newTheme);
    }
  return (
    <span className="bg-black dark:bg-white inline-flex items-center justify-between gap-2 px-1 py-1 rounded-full ">
      <button onClick={()=>handelThemeChange('dark')} className={` cursor-pointer  transition-all duration-300 ease-in-out rounded-full p-1 ${theme === 'dark' ? 'bg-primary text-white' : 'text-white'}`}>
      <MoonStar size={16}/>
      </button>
      {/* <button onClick={()=>handelThemeChange('system')} className={`text-white dark:text-black cursor-pointer hover:scale-105 transition duration-300 ease-in-out rounded-full p-2 ${theme === 'system' ? 'bg-primary text-white' : 'text-black'}`}>
      <Monitor size={18}/>
      </button> */}
      <button onClick={()=>handelThemeChange('light')} className={`text-white dark:text-black cursor-pointer  transition-all duration-300 ease-in-out rounded-full p-1 ${theme === 'light' ? 'bg-primary text-white' : 'text-black'}`}>
      <Sun size={16}/>
      </button>
    </span>
  )
}

export default ThemeSwitcher;
