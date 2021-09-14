import React, {useState} from "react";
import Dropdown from "./dropdown/DropDown";
import symptoms from '../data/symptoms.json'

export default function Symptoms() {
  const [value, setValue ] = useState(null)
  return <div><Dropdown prop="Search for Doctors or Symptoms." options={symptoms} value={value} id='id' label='name' onChange={val => setValue(val)}/></div>;
}