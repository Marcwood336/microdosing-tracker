import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import  DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import './Activate_account.scss';
import { useNavigate } from "react-router-dom";

const Activate_account =(props)=>{





const [startDate, setStartDate] = useState(new Date());

const {id} = useParams()
const navigate = useNavigate()

const setDateCall =()=>{

    const dateToSend = startDate.getTime()

    fetch('http://localhost:3001/set_date',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
         body:JSON.stringify({
            id: id,
            startDate:dateToSend
        })
    })
    .then(result=>{
        return result.json()
    })
    .then(result=>{
        console.log(result);

        if(result.startDate!==0){
         
            navigate('/')
        }else{
        console.log('check mail to set date');
        }
    })
    .catch(err=>{console.log(err);})
}


    return(<div className="ActivateAccount">

 <div className="centeredDiv">
             <h1>Select a starting date</h1>
 <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  
  <button onClick={()=>{setDateCall()}} className="setDateButton">Set starting date</button>

 </div>
    </div>)
}


export default Activate_account