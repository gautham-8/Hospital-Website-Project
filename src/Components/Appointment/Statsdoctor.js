import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'
import {useState,useEffect} from 'react'
import "../Styles/Appointment.css"

function Statsdoctor() {
    let [appointmentList,setAppointments]=useState([]);
    
    let url = `http://localhost:4000/appointment-api/getappointments`;
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
    
    function getTimes(){
        let map = new Map();
        map.set("19:30", {val: 0});
        map.set("20:00", {val: 0});
        map.set("20:30", {val: 0});
        map.set("Any", {val: 0});
        for(let i=0;i<appointmentList.length;i++){
            map.get(appointmentList[i].time).val++;
        }
        return map;
    }
    
    ChartJS.register(ArcElement, Tooltip, Legend);
    let timeMap = getTimes();
    let myLabels = []
    let myData = []
    for (const [key, value] of timeMap.entries()) {
        myLabels.push(key);
        myData.push(value.val)
    }
    // console.log(myLabels);
    // console.log(myData);
    const data = {
        labels: myLabels,
        datasets: [
        {
            label: '# of Votes',
            data: myData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
        },
        ],
    };
    return(
    <div>
        <p className="head-clr display-5">Statistics</p>
        <p className="display-6">Appointments classified based on the time selected:</p>
        {
            (appointmentList!=undefined)?
            (<Pie className="w-50 mx-auto" data={data} />):
            (<></>)
        }
    </div>);
}

export default Statsdoctor