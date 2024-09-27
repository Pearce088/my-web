import "@/styles/globals.css";

import { NavBar } from "@/components/NavBar/NavBar";
import { LoginPage } from "@/components/LoginForm/LoginForm";

const App = () => {
    return (
    <>
        <head>
            <link rel="icon" href="/jt-icon.png" />
        </head>
        <body>
            <NavBar />
            <LoginPage />
        </body>
    </>
    );
}

export default App;