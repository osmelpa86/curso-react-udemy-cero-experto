import {Routes, Route, BrowserRouter} from "react-router-dom";
import {JobDetails} from "../components/JobDetails.jsx";
import {JobLists} from "../components/JobLists.jsx";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<JobLists/>}/>
                <Route exact path="/jobs" element={<JobLists/>}/>
                <Route exact path="/jobs/:position" element={<JobDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
};