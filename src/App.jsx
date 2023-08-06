import { useState } from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Forgot from "./pages/Forgot";

export default function App() {
    const [page, setPage] = useState("login");

    const selectPage = () => {
        if (page === "login") {
            return <Login setPage={setPage} />;
        }
        if (page === "forgot") {
            return <Forgot setPage={setPage} />;
        }
        if (page === "register") {
            return <Registration setPage={setPage} />;
        }
    };

    const pages = () => {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-screen bg-[#222222]">
                    {selectPage()}
                </div>
            </>
        );
    };

    return <>{pages()}</>;
}
