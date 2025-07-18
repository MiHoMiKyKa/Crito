import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import News from "../pages/News";
import Contact from "../pages/Contact";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;