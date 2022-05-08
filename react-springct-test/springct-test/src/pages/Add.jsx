import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Add = ({addUser}) => {
  const navigate= useNavigate()
  const initialValues={
    userName:'',
    email:'',
   
    hobbies:'',
    term:false

    
  }
  const onSubmit =(value)=>{
    console.log(value);
    addUser(value)
    // sessionStorage.setItem("student", JSON.stringify(value));
navigate('/view')
  }
  return (

    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    >

{({values})=>(
      <div className='form_container'>
     
          
      <Form className='form_content'>
      <div>
      <label htmlFor="userName">User Name</label>
      <Field id="userName" name="userName" placeholder="Sonam" className="input_style"/>
      </div>
     
<div>
<label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
        className="input_style"
      />
</div>

<div>
<label htmlFor="email">Favorites Color</label>

<Field as="select" name="hobbies"  className="input_style">
           <option value="">select..</option>
           <option value="cooking">Cooking</option>

           <option value="cycling">Cycling</option>
           <option value="blogging">Blogging</option>
         </Field>

        
</div>
<div style={{display:'flex', gap:'10px'}}>
<Field type='checkbox' name='term'/> 
<label htmlFor="email">I agree with the terms & conditions</label>

</div>

     
     
      <button type="submit" className='submit_btn'>Submit</button>
    </Form>
     
     
      </div>
)}
    </Formik>
  )
}

export default Add