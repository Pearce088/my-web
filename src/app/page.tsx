import "@/styles/globals.css";

import LoginPage from "@/components/LoginForm/LoginForm";
import NavBar from "@/components/layout/NavBar/NavBar";

const App = () => {
 
    return (
    <>
        <head>
            <link rel="icon" href="/jt-icon.png" />
        </head>
        <body>
        {/* Untuk menambahkan komponen layout setiap halaman/page */}
            <NavBar />
            <LoginPage />
        </body>
    </>
    );
}

export default App;