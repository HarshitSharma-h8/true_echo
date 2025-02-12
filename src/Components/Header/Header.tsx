import { useAppSelector } from "../../Store/Hook"
import ThemeSwitcher from "../Button/ThemeSwitcher";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

const Header = () => {
    // user authentication status
    const isAuthenticated = useAppSelector((state)=> state.auth.isAuthenticated);

    const navItems = [
        {
            name : 'Home',
            slug: '/',
            active : true
        },
        {
            name : 'Feedback Type',
            slug: '/',
            active : true
        },
        {
            name : 'Dashborad',
            slug: '/dashboard',
            active : isAuthenticated
        },
        {
            name : 'Login',
            slug: '/login',
            active : !isAuthenticated
        },
        {
            name : 'Signup',
            slug: '/login',
            active : !isAuthenticated
        },
        {
            name : 'Logout',
            slug: '/logout',
            active : isAuthenticated
        },
    ] 

  return (
    <header className="dark:text-white border-b-2  border-b-gray-200">
      <Container>
        <nav className="flex items-center justify-between h-[10vh] ">
            <div>
                <Logo/>
            </div>
            <ul className="flex items-center gap-5">
                {navItems.map(item => 
                    item.active ? (
                        <li key={item.name}>{item.name}</li>
                    ) : null
                )}
            </ul>
            <ThemeSwitcher/>
        </nav>
      </Container>
    </header>
  )
}

export default Header
