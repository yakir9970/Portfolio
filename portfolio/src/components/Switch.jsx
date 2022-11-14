import React, { useState,useEffect } from "react";
import "./Switch.css";

function Switch() {
  const [isToggled, setIsToggled] = useState(false);
  const [theme,setTheme]=useState("light")


  const onToggle = () => {
    setIsToggled(!isToggled);
    if(isToggled){
      setTheme("light")
    }else{
      setTheme("dark")
    }
  };

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else if(theme==="light"){
      document.documentElement.classList.remove("dark")
    }
  },[theme])


  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;