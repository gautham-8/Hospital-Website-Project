import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import NavbarComponent from './Components/NavbarComponent';
import NavbarLogin from './Components/NavbarLogin';
import NavbarAdmin from './Components/NavbarAdmin';
import NavbarStaff from './Components/NavbarStaff';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Appointment from './Components/Appointment';
import BookAppointment from './Components/Appointment/Appointmentform';
import ViewAppointment from './Components/Appointment/ViewAppointment';
import { PrivateRoute, GuestRoute } from './Components/RouteGuards';

function App() {
  const { userObj, isSuccess } = useSelector((state) => state.user);
  const isAdmin = isSuccess && userObj.email === 'admin@vj.com';
  const isStaff = isSuccess && userObj.isStaff === true;
  const isRegularUser = isSuccess && !isAdmin && !isStaff;

  return (
    <div className="App">
      {!isSuccess && <NavbarComponent />}
      {isRegularUser && <NavbarLogin />}
      {isAdmin && <NavbarAdmin />}
      {isStaff && <NavbarStaff />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route
          path="/sign-up"
          element={isAdmin ? <Signup /> : <GuestRoute><Signup /></GuestRoute>}
        />
        <Route
          path="/appointments"
          element={<PrivateRoute><Appointment /></PrivateRoute>}
        >
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="view-appointments" element={<ViewAppointment />} />
          <Route path="" element={<Navigate to="book-appointment" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
