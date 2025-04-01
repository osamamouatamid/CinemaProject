import { useEffect, useState,useParams } from "react"
import { testService } from "../../services/api"
import axios from "axios"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
function TestFB() {
    //declarations
    const [user, setUser] = useState([])
    const [current, setCurrent] = useState("")
    const [hiddenE, sethiddenE] = useState(true)
    const [newuser, setnewUser] = useState({username:'',age:''})
    
   
    //functions

    useEffect(()=>{
        const fetchdata = async () =>{
            try{
                const response = await testService.getalltests();
                setUser(response)
            }
            catch(err) {
                console.log("error :" + err)
            }
        }
        fetchdata()
},[])

const handlesubmit = async (e) =>{
    e.preventDefault();
    if(newuser.username == '' || newuser.age == ''){
        showalertFillerror()
        return
    }
    try{
         await testService.posttest(newuser.username,newuser.age)
         const response = await testService.getalltests();
         setUser(response);
    }
    catch(err){
    console.log("error : " + err)
    }
    setnewUser({username:'',age:''})

    showalert();

}

const deleted = async (_id) => {
    try{
         await testService.deletetest(_id)
        const response = await testService.getalltests();
        setUser(response);
        showalertdelete()
    }
    catch(err){
        console.log(err)
    }
}
useEffect(()=>{
 sethiddenE(true)
},[])
useEffect(()=>{
    sethiddenE(true)
   },[user])
const editt =  (id, name, age) => {
    setCurrent(id);
    console.log("Selected ID:", id); // Log the ID directly
    setnewUser({username:name,age:age})
    sethiddenE(false)
    
};

const updated = async (id) => {
    try{

     await testService.updated(id, newuser);
    showalertM()
    sethiddenE(true)
    setnewUser({username:'',age:''})
    // setTimeout(() => {
    //     window.location.reload(); 
    // }, 2000);
   

    }
    catch(err){
        console.log(err)
    }
}

function showalert(){
    Swal.fire({
        title: "Success!",
        text: "User added",
        icon: "success"
      });
}
function showalertM(){
    Swal.fire({
        title: "Success!",
        text: "User successfully edited",
        icon: "success"
      });
}
function showalertdelete(){
    Swal.fire({
        title: "Success!",
        text: "User has been deleted successfully",
        icon: "success"
      });
}
function showalertFillerror(){
    Swal.fire({
        title: "Unfillable!",
        text: "Please fill the form first",
        icon: "error"
      });
}
    
    return (
      
        
        <div className="flex flex-col items-center h-screen justify-center ">
              <table className="table-auto px-4 py-4 border-collapse border border-gray-700 w-64 text-center">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">username</th>
                    <th className="border border-gray-300 px-4 py-2">age</th>
                    <th className="border border-gray-300 px-4 py-2" colSpan={2}>actions</th>
                </tr>
            </thead>
            <tbody>
                {user.map(e=>(
                   <tr key={e._id}>
                   <td className="border border-gray-300 px-4 py-2"><Link to={`/test/${e._id}`}> {e.username}</Link></td>
                    <td className="border border-gray-300 px-4 py-2">{e.age}</td>
                    <td className="border border-gray-300 px-4 py-2"><button onClick={()=>deleted(e._id)} className="p-2 rounded border border-gray-500 bg-red-600 text-gray-100 text-center hover:bg-blue-400 hover:text-gray-900">Delete</button> </td>
                    <td  className="border border-gray-300 px-4 py-2"><button onClick={()=>editt(e._id, e.username,e.age)} className="p-2 rounded border border-gray-500 bg-yellow-500 text-gray-100 text-center hover:bg-blue-400 hover:text-gray-900">Edit</button> </td>

                                   </tr> 
                ))}
                
             </tbody>
            </table>
    
            <form onSubmit={handlesubmit} className="flex flex-col"> 
                <label className="w-64 py-4 px-4" > username : 
                <input 
                type="text" 
                value={newuser.username} 
                placeholder="Enter your username..."
                 onChange={(e)=> setnewUser({...newuser,username:e.target.value})} />
                </label>
                <label  className="w-64 py-4 px-4" > age : 
                <input  className="w-64"
                type="text"
                value={newuser.age} 
                placeholder="Enter your age..." 
                onChange={(e)=> setnewUser({...newuser,age:e.target.value})} />
                </label>
                <button type="submit"   className="w-64 py-4 px-4 rounded border border-gray-500 bg-blue-600 text-gray-100 text-center hover:bg-blue-400 hover:text-gray-900" >Submit an user</button>
                
            </form>
    
{
        hiddenE? <h1></h1> : <button type="submit" onClick={()=>updated(current)}   className="w-64 py-4 px-4 rounded border border-gray-500 bg-blue-600 text-gray-100 text-center hover:bg-blue-400 hover:text-gray-900" >Edit an user</button>
}           

        </div>
    )
}

export default TestFB
