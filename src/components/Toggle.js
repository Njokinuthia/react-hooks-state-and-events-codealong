import React , {useState} from "react";

function Toggle() {
  const [isOn , setIsOn] = useState(false);

  const color = isOn? "red": "white";

  function handleClick(){
    console.log("clicked")
    setIsOn(isOn => !isOn)
  }

  return <button style={{backgroundColor: color}} onClick={handleClick}>{isOn?"On":"OFF"}</button>;
}

export default Toggle;
