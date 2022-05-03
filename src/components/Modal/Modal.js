
import './Modal.scss';
import closeIcon from '../../assets/setting_icon.png';
import { useNavigate } from 'react-router-dom';



const Modal = (props)=>{

const navigate = useNavigate();

    const closeModal = ()=>{
        navigate('/home')
        
    }





const changePassCall=()=>{
    fetch('http://localhost:3001/set_date',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
         body:JSON.stringify({
            id: props.user_id,
            
        })
    }).then(result=>{
        return result.json()
    })
    .then(result=>{
        console.log(result);
    })


}

    return <div className='Modal_container'>

        <img src={closeIcon} className='closeIcon' onClick={()=>{closeModal()}}  />

            <div>

                <p onClick={()=>{navigate('/change_start')}}>Change starting date</p>
                // to be implemented



            
                <p onClick={()=>{props.logout()}} >logout</p>
              
               
            </div>
         

    </div>
}


export default Modal