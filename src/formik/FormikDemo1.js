import { useFormik } from 'formik'
import React from 'react'

export const FormikDemo1 = () => {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
        },
        onSubmit: data =>{
            console.log("form data",data)
        },
        validate:values=>{
            let errors = {}
            if(!values.name){
                errors.name = "Required "
            }

            return errors
        }
    })
    console.log('form values',formik.errors)
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name' >name</label>
            <input type='text' id='name' name = 'name' onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}/>
            {
                
                formik.errors.name ? <div>{formik.errors.name}</div> : null
                
            }

            <label htmlFor='email' >Email</label>
            <input type='text' id='email' name = 'email' onChange={formik.handleChange} value = {formik.values.email}/>

            <input type='submit' value="submit"/>
        </form>
    </div>
  )
}
