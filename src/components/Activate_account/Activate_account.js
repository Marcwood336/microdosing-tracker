import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import  DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import './Activate_account.scss';
import { useNavigate } from "react-router-dom";

const Activate_account =(props)=>{





const [startDate, setStartDate] = useState(new Date());

  const {id_url} = useParams()

console.log(id_url);

const id_finder=()=>{

  
    if(id_url!== undefined){
        return id_url
    }else{
        return props.user_id
    }

}


console.log(id_finder());


const navigate = useNavigate()

const setDateCall =()=>{

    const dateToSend = startDate.getTime()

    fetch('https://safe-chamber-03142.herokuapp.com/set_date',{
        method:'POST',
        credentials:"include",
        headers:{'Content-Type': 'application/json'},
         body:JSON.stringify({
            id: id_finder(),
            startDate:dateToSend
        })
    })
    .then(result=>{
        return result.json()
    })
    .then(result=>{
        console.log(new Date(result.startDate));

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