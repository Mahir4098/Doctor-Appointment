import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import AppointList from "../Pages/AppointList/AppointList";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [

            {
                path: "/",
                loader: () => fetch("DoctorData.json"),
                Component: Home
            },
            {
                path: "/contact",
                Component: Contact

            },
            {
                path: "/doctorDetails/:id",
                loader: () => fetch("DoctorData.json"),
                Component: DoctorDetails
            },
            {
                path: "/appointList",
                loader: () => fetch("DoctorData.json"),
                Component: AppointList
            },
            {
                path:"*",
                Component:NotFound
            }


        ]
    },
]);