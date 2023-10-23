import { FooterComponent, NavbarPrivate } from "../components";

export const PrivateLayout = ({ children }) => {
    return (
        <>
            <NavbarPrivate />
            {children}
            <FooterComponent />
        </>
    )
}
