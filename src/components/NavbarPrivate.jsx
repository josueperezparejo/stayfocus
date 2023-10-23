import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { startSignOutUser } from "../store/slices/auth/thunks";

export const NavbarPrivate = () => {

  const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSignOut = (event) => {
    event.preventDefault()
    dispatch(startSignOutUser())
  }

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">⌛ StayFocus</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">⌛ StayFocus</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={photoURL}
            />
          </DropdownTrigger>
        </Dropdown>
      </NavbarContent>

      <NavbarItem>
        <NavbarBrand>
          {displayName}
        </NavbarBrand>
      </NavbarItem>

      <NavbarItem>
        <Button onClick={onSignOut} className="text-white" color="danger" variant="solid">
          Log out
        </Button>
      </NavbarItem>
    </Navbar>
  );
}
