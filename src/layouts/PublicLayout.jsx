import { FooterComponent, NavbarComponent } from "../components";

export const PublicLayout = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </>
    )
}
