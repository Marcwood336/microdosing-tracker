import { useState,useEffect } from 'react';
import './Calendar.scss';
import settingIcon from '../../assets/setting_icon.png';
import Spinner from '../Spinner/Spinner';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';


const Calendar=(props)=>{


//3 states:
// pending = id is undefined
//logged = id is defined
//not logged = user is not logged



const navigate = useNavigate()

let calendar = []
let routineDay

const [user,setUser] =useState({
  id:0,
  name:undefined,
  startingDate:undefined,
  routineDay:0,
  isLogged:undefined
 
})


useEffect(()=>{

fetch('http://localhost:3001/get_user',{
  credentials:'include'
})
.then(result=>{


return result.json()

})
.then(result=>{



if(result.user.isLogged===false){



navigate('/')
}else{

console.log(result.user);

const {username,_id,startDate} = result.user

setUser((user)=>({...user,id:_id,name:username,startingDate:startDate}))

}






})
.catch(err=>console.log(err))



},[])





// 1649838915000
// 1650711198000
// 1648464872000


const now = new Date()
const startingDateMS =  user.startingDate


const oneDayMS = 1000*60*60*24;


let daysMS = 0

for(let i =0; i<=27; i++){

let fromStartingDay = new Date(startingDateMS+daysMS);
let todayDate = new Date(now);
daysMS+=oneDayMS;
let microdosingDay = (n)=>{
  return n===1 || n===4 ||n===7| n===10 ||n===13||n===16||n===19||n===22||n===25||n===28?
 'yes':'no'}

if(fromStartingDay.getTime() < todayDate.getTime()){

  calendar.push({type:'past_day',nth:i+1,date:fromStartingDay,microdosing_day:microdosingDay(i+1)})
}



if(fromStartingDay.toString().substring(0,10)===todayDate.toString().substring(0,10)){
   routineDay = i+1
   calendar.push({type:'today',nth:i+1,date:fromStartingDay,microdosing_day:microdosingDay(i+1)})
}

if(fromStartingDay.getTime() > todayDate.getTime()  && fromStartingDay.toString().substring(0,10)!==todayDate.toString().substring(0,10) ){

  calendar.push({type:'future_day',nth:i+1,date:fromStartingDay,microdosing_day:microdosingDay(i+1)})
}



}



const calendarToRender = ( <div>
<div className='topSideCalendar' >
  <div>
  <h1>{user.name}'s Routine</h1>
  <h3>Microdosing</h3>
  </div>
  <img src={settingIcon}/>
</div>

<div className='blockContainer'>


  {calendar.map((m,i)=>{

    if(m.type==='today'){
      return  <div key={i}  className='today'><p>{m.microdosing_day==='yes'?'m':<span>{m.date.toString().substring(7,10)}</span>}</p></div>
    }




    return  m.type==='past_day'? 
      <div key={i} className='pastDay'><p>{m.date.toString().substring(7,10)}</p></div>:
      <div key={i} className='futureDay'>
        <p>{m.microdosing_day==='yes'?'m':''}</p>
      </div>


   
 
  })}

  
  </div>

<div className='bottomSideCalendar' >

<div className='nextMicrodosingDaysWrapper'>
  <h2>Your next microdosing days:</h2>
 <div>{calendar.map((m,i)=>{
     
     if(m.microdosing_day==='yes' && m.type==='future_day'){
  return <div key={i+100}>•  <p><b>{ m.date.toString().substring(4,15)}</b> </p> <p>  ---<b> { m.nth}th routine day </b></p> </div>
     }})


   }
   </div>

</div>


<div className='routineDayWrapper'>
   <p>{routineDay}th</p>
   <div>
    <p>Day of your routine</p>
   </div> 

   <button>Add note</button>
  </div>

</div>


</div>)




return(<div className="Calendar">
  <button onClick={()=>{props.logout()}}>logout</button>



{user.name!==undefined? calendarToRender: <Spinner/>}




</div>)




}


export default Calendar;