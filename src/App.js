import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';
import {useEffect} from 'react'
import './App.css';
import Navbar1 from './Components/NavbarComponent';
import Navbar2 from './Components/NavbarLogin';
import Navbar3 from './Components/NavbarAdmin';
import Navbar4 from './Components/NavbarStaff';
import {useSelector} from "react-redux";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function App() {
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);

  return (
    <div className="App">
      {
        isSuccess === true?
        (userObj.email === "admin@vj.com"?(<><Navbar3 /></>):((userObj.isStaff===true)?(<><Navbar4 /></>):(<><Navbar2 /></>))):(<><Navbar1 /></>)
      }
    </div>
  );
}

export default App;
