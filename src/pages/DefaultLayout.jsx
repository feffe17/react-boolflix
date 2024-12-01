import { Outlet } from "react-router-dom";
import { AppHeader } from "../Components/AppHeader";

export default function DefaultLayout() {
    return (
        <div className="App">
            <AppHeader />
            <main>
                <Outlet />
            </main>

        </div>
    )
}