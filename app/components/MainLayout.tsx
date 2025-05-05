import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div>
            <Nav />
                {children}
            <Footer />
        </div>
    )
}

export default MainLayout;