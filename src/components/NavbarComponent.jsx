import { useState } from "react";
import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";
import { 
  Button, 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenu, 
  NavbarMenuItem, 
  NavbarMenuToggle, 
} from "@nextui-org/react";

import { checkingAuth } from "../helpers/checkingAuth";

const menuItems = [
  {
    name: 'Home',
    path: 'home'
  },
  {
    name: 'Technologies',
    path: 'technologies'
  },
  {
    name: 'Contact me',
    path: 'contactMe'
  }
];

export const NavbarComponent = () => {

  const { status } = checkingAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSignUp = (event) => {
    event.preventDefault()
    navigate('/signUp')
  }

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link to={'/home'}>
            <p className="font-bold text-inherit">⌛ StayFocus</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link to={'/home'}>
            <p className="font-bold text-inherit">⌛ StayFocus</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <NavLink className={({ isActive }) => `${isActive ? 'font-bold text-blue-500' : 'foreground'}`} to="/home">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className={({ isActive }) => `${isActive ? 'font-bold text-blue-500' : 'foreground'}`} to="/technologies" aria-current="page">
            Technologies
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className={({ isActive }) => `${isActive ? 'font-bold text-blue-500' : 'foreground'}`} color="foreground" to="/contactMe">
            Contact me
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      {status == 'not-authenticated' || status == 'checking'
        ?
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to={'/signIn'}>Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button onClick={onSignUp} className="text-white" color="success" variant="solid">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        : <NavbarItem>
          <Button onClick={() => navigate('/dashboard')} className="text-white" color="success" variant="solid">
            Dashboard
          </Button>
        </NavbarItem>}

      <NavbarMenu>
        {menuItems.map(({ name, path }, index) => (
          <NavbarMenuItem key={`${name}-${index}`}>
            <NavLink
              className={({ isActive }) => `w-full ${isActive ? 'font-bold text-blue-500' : 'foreground'}`}
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              to={`/${path}`}
              size="lg"
            >
              {name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
