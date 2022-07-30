import { useFormik } from 'formik'
import React from 'react'
import { required } from '../constas'
import * as Yup from 'yup'

export const FormikDemo2 = () => {

    const initialValues ={
        name:'',
        email:'',
    }

    const validationSchema = Yup.object({
        name:Yup.string().required(required),
        email:Yup.string().email("Invalid email").required(required),
    })
    const validate =(data)=>{
        let errors = {}
                if(!data.name){
                    errors.name = required
                }
                if(data.email.length < 5){
                    errors.email = "*Email should be atleast 5 characters long"
                }

                return errors
        
    }

    const formik = useFormik(
        {
            initialValues: initialValues,

            onSubmit:(data)=>{
                console.log("form data",data)
            },
            validationSchema:validationSchema,
            

        }
    );
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    
                    {
                        formik.errors.name ? <div>{formik.errors.name}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input type='text' id='name' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {
                            formik.errors.email ? <div>{formik.errors.email}</div> : null
                    }
                </div>
                <div>
                    <input type='submit' value="submit" />
                </div>
            </form>

        </div>
    )
}