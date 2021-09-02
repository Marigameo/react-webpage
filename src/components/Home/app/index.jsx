import React, {useState} from "react";
import Dropdown from "./dropdown";
import animals from '../data/animals.json'

export default function DoctorSearch() {
  const [value, setValue ] = useState(null)
  return <div><Dropdown prop="Search for Doctors, Symtoms, etc.." options={animals} value={value} id='id' label='name' onChange={val => setValue(val)}/></div>;
}