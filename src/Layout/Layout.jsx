import { Outlet } from "react-router"
import Navbar from "../Components/Shared/Navbar"

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <footer>
                <div className="bg-neutral text-white p-5 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} All Rights Reserved by Dream School
                    </p>
                    <p className="text-sm">
                        Developed By -{" "}
                        <a
                            href="https://najatul-islam.vercel.app/"
                            className="text-danger-color underline capitalize font-bold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Najatul Islam
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout