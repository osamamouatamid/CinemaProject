import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { testService } from '../../services/api'

function TestFB2() {

    const {id} = useParams()
    const [userr,setUser] = useState('')

    useEffect( ()=>{
        const fetchdata = async () =>{
            try{
                 const found = await testService.gettest(id)
        setUser(found)    
            }
            catch(err){
                console.log(err)
            }
            
        } 
 fetchdata() 
    },[id])
    return (
        <div className='flex flex-col justify-center items-center text-4xl h-screen'>
            <h1>Name  : <strong> {userr?.username}</strong ></h1>
           
            <h2> age : <strong> {userr?.age}</strong ></h2>
        </div>
    )
}

export default TestFB2
