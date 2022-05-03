import './App.scss';
import Calendar from './components/Calendar/Calendar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Modal from './components/Modal/Modal';
import Activate_account from './components/Activate_account/Activate_account'
import {Route,Routes,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';





const App=()=>{ 





  const navigate = useNavigate()

  const [user,setUser] =useState({
  id:0,  
  username:'',
  startingDate:0,
  routineDay:0,
  isLogged:undefined
})

  useEffect(()=>{

fetch('http://localhost:3001/get_user',{
  credentials:'include'
})
.then(result=>{
return result.json()

},[0])
.then(result=>{


const {username,_id} = result.user

 setUser(()=>({...user,id:_id,username:username }))

})
.catch(err=>console.log(err))


},[])
    


// const [user,setUser] =useState({
//   name:'Genoveffo',
//   startingDate:1647457438499,
//   routineDay:0
// })




const logoutCall= ()=>{

console.log('fired logout');

fetch('http://localhost:3001/logout',{
  credentials:'include'
})
.then(result=>{



   return result.json()
})
.then(result=>{

if(result.success ===true){

navigate('/')

}
  
})
.catch(err=>{console.log(err)})

}



return <div className='App'>

    <Routes>




        <Route path='/register' element={<Register/>}/>




         <Route path='/' element={<Login/>}/>

          <Route path='/setting' element={<Modal logout={logoutCall}  user_id={user.id}/>}/>

 

         <Route path='/home' element={<Calendar user={user} />}/>


          <Route path='/check_mail' element={<p>Check your email adresso to activate your account</p>}/>

          <Route path='/activate_user/:id' element={<Activate_account/>}/>

          <Route path='/change_start'  element={<Activate_account user_id={user.id}/>}/>
            



    


    </Routes>


</div>
}

export default App;








