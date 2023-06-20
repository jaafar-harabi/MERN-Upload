import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'





function Home() {
    

    const [dataDb,setData]=useState([])

    const fetchData =async()=>{
        await axios.get("http://127.0.0.1:3000/user/").then((res)=>{setData(res.data)}).catch((err)=>{console.log(err)})
    }

    

    const del = async(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:3000/user/${id}`)
                fetchData()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            
          })
        
        
    }
    useEffect(()=>{
        fetchData()

    },[])
    
    
  return (
  
   <div className='container mt-5'>
        <div className='row'>
            
            {dataDb.map((data)=>(
        
            <div key={data._id} className='col-lg-4 col-md-6 col-sm-12'>
                <div className="card mt-2" >
                    <img src={`http://127.0.0.1:3000/uploads/${data.img}`} className="card-img-top w-50 mx-auto mt-2" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center"> {data.name} </h5>
                        <p className="card-text text-center"> {data.date} </p>
                        <div className='text-center'>
                            <button className='btn btn-outline-danger mx-auto' onClick={()=>{del(data._id)} }> delete </button>

                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>

        
        ))}
        </div>
        
    </div>
      
        
    
   

    
        
    
  )
}

export default Home