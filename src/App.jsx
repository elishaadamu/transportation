import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import Introduction from './pages/Introduction'
import TrendAndForcast from './pages/TrendAndForcasts'
import SystemTomorrow from './pages/SystemTomorrow'
import SystemToday from './pages/SystemToday'
import Funding from './pages/Funding'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/trend_and_forecast" element={<TrendAndForcast />} />
                <Route path="/system_today" element={<SystemToday />} />
                <Route path="/system_tomorrow" element={<SystemTomorrow />} />
                <Route path="/funding" element={<Funding />} />
            </Routes>
        </Router>
    );
}
