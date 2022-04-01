
import Logo from '../../assets/logo.svg';
import './Register.scss';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const Register = ()=>{

const [state,setState] = useState({
    
    username:'',
    password:'',
    password2:'',
    email:'',
    termsAndConditions:false,
    message:''

})

console.log(state);

const inputReader=(event)=>{



switch(event.target.name){
    case 'username_input':{
        setState(()=>({...state,username:event.target.value}))
    }
    break;

        case 'email_input':{
        setState(()=>({...state,email:event.target.value}))
    }
    break;

        case 'password_input':{
        setState(()=>({...state,password:event.target.value}))
    }
    break;

            case 'password2_input':{
        setState(()=>({...state,password2:event.target.value}))
    }
    break;

                case 'terms_input':{
        setState((prev)=>({...state,termsAndConditions:!prev.termsAndConditions}))
    }
    break;

}


}

let navigate = useNavigate()

const registerCall=()=>{



 

    if(state.username && state.email && state.password &&state.password2&&state.termsAndConditions){
        
        if(state.password===state.password2){

            fetch('http://localhost:3001/register',{
                method:'POST',
                  headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                            },
                    body:JSON.stringify({
                    username:state.username,
                    email:state.email,
                    password:state.password
                })
            })
            .then(result=>{
                console.log(result);
            })

        }else{
            setState((state)=>({...state,message:'password must coincide'}))
        }

    }


// navigate('/check_mail')

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
               <div className='input'><label htmlFor='username_input'>User</label> <input onChange={(event)=>{inputReader(event)}} name='username_input' type='text' /> </div>
               <div className='input'><label htmlFor='email_input_input'>Email</label> <input onChange={(event)=>{inputReader(event)}} name='email_input' type='text' /> </div>
               <div className='input'><label htmlFor='password_input'>Password</label> <input onChange={(event)=>{inputReader(event)}} name='password_input' type='password' /> </div>
                <div className='input'><label htmlFor='name_input'>password</label> <input onChange={(event)=>{inputReader(event)}} name='password2_input' type='password' /> </div>
                <div className='input termsAndConditions'> <input onChange={(event)=>{inputReader(event)}} name='terms_input' type='checkbox' /> <label htmlFor='terms_input'>I accept terms&Conditions</label></div>
          
                </div>

            </div>
            <div className='banner_bottom'>
                
                <button onClick={()=>{registerCall()}}>Register</button>

            </div>
         </div>
         </div>)
}


export default Register




//    return<div className='Register'>
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

//             <div className='inputWrapper'>
//                 <label>Email</label>
//                 <input onChange={(event)=>{inputReader(event)}}
//                   type='text'  name='email' >
//                       </input>
//             </div> 

//            <div className={state.password==state.password2? 'inputWrapper':'inputWrapper password' }>
//                 <label>Password</label>
//                 <input onChange={(event)=>{inputReader(event)}} 
//                  type='text'  name='password' >
//                      </input>
//             </div> 

//             {/* <div className='inputWrapper password'> */}
//             <div className={state.password==state.password2? 'inputWrapper':'inputWrapper password' }>
//                 <label>Repeat password</label>
//                 <input className='password' onChange={(event)=>{inputReader(event)}}
//                   type='text'  name='password2' >
//                       </input>
//             </div>

//             <div className='termsAndConditions'><input onChange={(event)=>{inputReader(event)}} name='terms' type='checkbox'/><span ><b>I accept Terms&Conditions</b></span></div>

//             <button onClick={()=>{registerCall()}} >register</button>
//          </div>

//          </div>