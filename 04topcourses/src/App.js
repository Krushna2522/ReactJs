import React from "react";
import Navbar from './Components/Navbar';
import Filters from './Components/Filters';
import Cards from './Components/Cards';
import { filterData,apiUrl } from "./data";
import {useState, useEffect} from 'react';
import Loading from './Components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Toast } from 'react-toastify/dist/components';


function App()
{
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  async function getCourses(){
    try{
    const data= await fetch(apiUrl);
    const output= await data.json();
    //console.log(output.data);
    setCourses(output.data);
    setLoading(false);
    }
    catch(error)
    {
      console.log("Network Error Occured");
    }
  }
  useEffect(()=>{
    getCourses();
  },[]);
  //console.log(filterData);
  return (<div>
    <Navbar></Navbar>
    <Filters filters={filterData} setCategory={setCategory}></Filters>
    {
      loading ? (<Loading></Loading>):(<Cards courses={courses} category={category}></Cards>)
    }
    {/* <Cards courses={courses}></Cards> */}
    <ToastContainer></ToastContainer>
  </div>);
};

export default App;
