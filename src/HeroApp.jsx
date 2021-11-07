import React from "react";
import { AuthContextProvider } from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";

export const HeroApp = () => {
    return (
        <AuthContextProvider>
            <AppRouter />
        </AuthContextProvider>
    );
};
