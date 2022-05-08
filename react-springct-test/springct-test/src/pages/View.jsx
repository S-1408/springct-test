import React from 'react'

const View = ({data}) => {
 
  return (
    <div>
      {
        data?.map((user,i)=>{
          return (
            <>
            <div key={i} style={{marginBottom:'10px'}}>
            <div className='userCard'  >
<p>Name : <span> {user.userName}</span></p>
<p>Email: <span>{user.email}</span></p>
<p>Hobby: <span>{user.hobbies}</span></p>

           </div>
            </div>
       
            </>
          
          )
        })
      }
    </div>
  )
}

export default View