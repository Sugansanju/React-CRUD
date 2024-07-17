import React, { useEffect, useState } from "react";
import axios from 'axios';
import TableData from "./Components/TableData";
function AllUsers() {
  const [allUsers,setAllUsers]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4444/employee')
        .then((res)=>{
            console.log("==response",res.data)
            setAllUsers(res.data);
        })
        .catch((err)=>{

        })
    },[])
  return (
    <>
      <TableData props={allUsers}/>
    </>
  );
}

export default AllUsers;
