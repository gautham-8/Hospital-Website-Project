import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Statsdoctor from './Statsdoctor'
import {GrFormTrash} from "react-icons/gr";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

function ViewAppointment() {
  let [appointmentList,setAppointments]=useState([]);
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);

  let url;
  if(userObj.email === "admin@vj.com" || userObj.isStaff === true){
    url = `http://localhost:4000/appointment-api/getappointments`;
  }
  else{
    url = `http://localhost:4000/appointment-api/get-my-appointments/${userObj.email}`;
  }
  useEffect(()=>{
    axios.get(url)
    .then((response) => {
      console.log(response.data.payload);
      setAppointments(response.data.payload);
    })
    .catch((error) => {
      console.log("error-", error);
    });
  },[appointmentList])
  // console.log(appointmentList)
  const removeElement = (id) => {
    // console.log(id);
    axios.delete(`http://localhost:4000/appointment-api/delete-appointment/${id}`)
    .then((response) => {
      setAppointments(response.data.payload);
    })
    .catch((error) => {
      console.log("error-", error);
    });
  };
  return (
    <div>
        {
          (userObj.email === "admin@vj.com" || userObj.isStaff === true)?
          (<>
          <Table className='table table-center table-light container'>
            <Thead>
              <Tr>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Patient's name</Th>
                <Th>Doctor</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Cancel appointment</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                (appointmentList!=undefined)?
                (<>
                {
                  appointmentList.map((ele)=>
                  <Tr key={ele._id}>
                    <Td>{ele.email}</Td>
                    <Td>{ele.phone}</Td>
                    <Td>{ele.name}</Td>
                    <Td>{ele.doc}</Td>
                    <Td>{ele.date}</Td>
                    <Td>{ele.time}</Td>
                    <Td onClick={() => {removeElement(ele._id);}}><GrFormTrash /></Td>
                  </Tr>
                  )
                }
                </>)
                :(<></>)
              }
            </Tbody>
          </Table>
          {/* <Statsdoctor /> */}
          </>):
          (<>
          <Table className='table table-center table-light container'>
            <Thead>
              <Tr>
                <Th>Patient's name</Th>
                <Th>Doctor</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Cancel appointment</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                (appointmentList!=undefined)?
                (<>
                {
                  appointmentList.map((ele)=>
                  <Tr key={ele._id}>
                    <Td>{ele.name}</Td>
                    <Td>{ele.doc}</Td>
                    <Td>{ele.date}</Td>
                    <Td>{ele.time}</Td>
                    <Td onClick={() => {removeElement(ele._id);}}><GrFormTrash /></Td>
                  </Tr>
                  )
                }
                </>)
                :(<></>)
              }
            </Tbody>
            </Table>
          </>)
        }
    </div>
  )
}

export default ViewAppointment