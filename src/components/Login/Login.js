import './Login.scss';
import Logo from '../../assets/logo2.svg'
import { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Login =()=>{

    const [state,setState] = useState({
    
    email:'',
    password:'',
})

const navigate = useNavigate()





useEffect(()=>{

fetch('http://localhost:3001/get_user',{
  credentials:'include'
})
.then(result=>{


return result.json()

})
.then(result=>{

if(result.isLogged===true){
    navigate('/home')
}





})
.catch(err=>console.log(err))



},[])





const loginCall=()=>{

    fetch('http://localhost:3001/login',{
        method:'POST',
        
        credentials:'include',
        
          headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    
                    

                            },
        body:JSON.stringify({
            email:state.email,
            password:state.password
        })
    })
    .then(result=>{
  
        return result.json()})
    .then(result=>{

console.log(result);

        if(result.success===true){
            navigate('/home')
        }else{
            console.log(result.message);
            setState((state)=>({...state,message:result.message}));
        }

    })
    .catch(err=>{console.log(err);})




}

const inputReader=(event)=>{





switch(event.target.name){
    case 'email':{
        setState(()=>({...state,email:event.target.value}))
    }
    break;



        case 'password':{
        setState(()=>({...state,password:event.target.value}))
    }
    break;

}


}


    return(<div className='Register'>

        <div className='banner_wrapper'>
            <div className='banner_top'>
               <div> 
                <p className='main_title_register'>Microdosing</p>
                <p className='sub_title_register'>Tracker</p>
               </div> 
                <img className='logo_register' src={Logo} />

            </div>
            <div className='banner_middle'>
                <div className='input_wrapper'>
               <div className='input'><label htmlFor='email'>email</label> <input value={state.email} onChange={(event)=>{inputReader(event)}} name='email' type='text' /> </div>
               <div className='input'><label htmlFor='password'>password</label> <input value={state.password} onChange={(event)=>{inputReader(event)}} name='password' type='text' /> </div>

          
                </div>

            </div>
            <div className='banner_bottom'>
                
                <button onClick={()=>{loginCall()}} >Sign-in</button>
<Link to='/register'><p className='registerLink' >Not a member? Click here to register</p></Link>
            </div>
         </div>
              
         </div>)
}



export default Login;



// (<div className='Register'>
//         <div className='RegisterTop'>
//             <div>
//             <h1 className='logoMainLine'>Microdosing</h1>
//             <h3 className='logoSecondLine'>Tracker</h3>
//             </div>
//             <img className='logoImg' src={Logo} />
//          </div>


//          <div className='registerBody'>

//             <div className='inputWrapper'>
//                 <label>Username</label>
//                 <input onChange={(event)=>{inputReader(event)}}
//                  type='text' name='username' >
//                      </input>
//             </div> 

    

//            <div className='inputWrapper'>
//                 <label>Password</label>
//                 <input onChange={(event)=>{inputReader(event)}} 
//                  type='text'  name='password' >
//                      </input>
//             </div> 

  
       


//             <button onClick={()=>{loginCall()}}>Sign-in</button>
//             <Link to='/register'><p className='registerLink' >Not a member? Click here to register</p></Link>
//          </div>

//          </div>)