import "@/styles/globals.css";

import Beranda from "./beranda/page";

const App = () => {
 
    return (
    <>
        <head>
            <link rel="icon" href="/jt-icon.png" />
        </head>
        <body>
        {/* Untuk menambahkan komponen layout setiap halaman/page */}
            <Beranda />
        </body>
    </>
    );
}

export default App;