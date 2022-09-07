import { getScopedCssBaselineUtilityClass } from "@mui/material";
import { useEffect, useState } from "react";

const [users, setUsers]=useState([]);

const ref=collection(db,"users");
useEffect(()=>{
const getUsers=async ()=>{
    const data= await getScopedCssBaselineUtilityClass(ref);
}
},[])