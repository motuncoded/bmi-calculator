import React, {useState} from 'react';
import "./Calculator.css"


const Calculator = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("")
  let calcBmi = (e)=>{
    e.preventDefault()

    if (weight === 0 || height === 0){
      alert("Enter a number");
    }
    else{
      let bmi = (weight / (height * height))
setBmi(bmi.toFixed(1))
if (bmi < 18.5){
  setMessage("Underweight")
} 
else if(bmi >= 18.5 && bmi < 24.5 ){
  setMessage("Normal");
}
else{
  setMessage("Obesity")
}
    }
  }
  let reset = () =>{ window.location.reload()
  }
  return (
    <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
            <div>
            <label>weight (kg)</label>
            <input value={weight} onChange={(e) =>setWeight(e.target.value)}/>
            </div>
            <div>
                <label>height(m)</label>
                <input value={height} onChange={(e) =>setHeight(e.target.value)}/>
            </div>
            <div>
              <button className='btn' type="submit" >Submit</button>
              <button className='btn reset' onClick={reset}>Reset</button>
            </div>
        </form>
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        </div>
  )
}

export default Calculator