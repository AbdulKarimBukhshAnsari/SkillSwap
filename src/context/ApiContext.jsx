import { createContext } from "react";

export const apiContext = createContext();

export default function ApiContext({children}) {
    const server = "https://iba-hackathon-backend-gamma.vercel.app"
    return (
        <apiContext.Provider value={server}>
            {children}
        </apiContext.Provider>
    )
}