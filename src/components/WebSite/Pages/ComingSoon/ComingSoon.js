import React, {useEffect} from "react";
import "./ComingSoon.css";
import AboutIntro from "./Components/CountDown/AboutIntro/AboutIntro";
import Content from "./Content/Content";

const ComingSoon = () => {
  useEffect(() => {
    window.scroll(0,0)
}, )
  return ( 
    <main>
      <Content/>
      <AboutIntro/>
    </main>
   
   );
}
 
export default ComingSoon;