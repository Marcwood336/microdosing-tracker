import './App.scss';
import Calendar from './components/Calendar/Calendar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import {Route,Routes} from 'react-router-dom';
import { useState } from 'react';



const App=()=>{ 
    


// const [user,setUser] =useState({
//   name:'Genoveffo',
//   startingDate:1647457438499,
//   routineDay:0
// })

const [user,setUser] =useState({
  name:'',
  startingDate:0,
  routineDay:0
})



return <div className='App'>

    <Routes>

        if(1){
          //logica per il routing dinamico
        }

        {/* 1 User arriva per la prima volta per registrarsi */}
         {/* 2 User e'registrato ma deve loggare */}
          {/* user e'loggato ma non ho impostato una data di partenza */}
          {/* user e'loggato ed ha scelto una data di partenza */}

        <Route path='/register' element={<Register/>}/>




         <Route path='/' element={<Login/>}/>

 

         <Route path='/home' element={<Calendar/>}/>


          <Route path='/check_mail' element={<p>Check your email adresso to activate your account</p>}/>
            



    


    </Routes>


</div>
}

export default App;








