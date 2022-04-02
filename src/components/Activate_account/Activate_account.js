import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Activate_account =()=>{

const {id} = useParams()
console.log('id:', id);

//TO DO

//manda id a back-end per verifica
//ricevi status di success/ chiedi data di inizio
//P.S - register comp must refresh after button is pushed

//bravo marc

    useEffect(()=>{

        fetch('http://localhost/3001/activate_user:')
    })


    return(<div>
        your account has been activated!
        <p>set a starting date</p>
    </div>)
}


export default Activate_account