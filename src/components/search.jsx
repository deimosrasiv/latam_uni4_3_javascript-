import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Search = ({ Colour }) => {
    // console.log(Colour);
    
    return (
        <Formik
        initialValues={{
            nombre: '',
            
        }}
            
                validate={(valores) => {
                    let errores = {};
                   
                   
                   
                //validacion de nombre con expresiones regulares de texto
                    if (!valores.nombre) {
                         console.log("ingresas nombre");
                        errores.nombre = "Por favor ingrese un Nombre"
                            
                    } else if ( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = "El nombre solo puede contener letras y espacios"
                    }
                    return errores;
                }}
            
            onSubmit={(valores) => {
                console.log(valores.nombre);
            }}
        >

            
                {/* eliminamos el handleSubmit, para trabajar con el componente Form de Formik */}
                {/* {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => ( */}

                {({ errors, touched}) => (
                    <div className="container">
                        <Form>
                            <nav className={`navbar navbar-dark ${Colour} rounded mt-3 mb-5`}>
                                <div className="container-fluid">
                                    <a htmlFor="nombre" className="navbar-brand">Buscador</a>
                                        {/* <form className="d-flex" role="search"> */}
                                        
                                            <Field    
                                                className="form-control my-2 mx-2"
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="John Doe"

                                                    // eliminado para trabajar con Field
                                                    // defaultValue={values.nombre}
                                                    // onChange={handleChange}
                                                    // onBlur={handleBlur} 
                                            />
                                 {touched.nombre && errors.nombre && <div  style={{color:"white"}} className="error" >{errors.nombre}</div>}
                        {/* |               </form> */}
                                </div>
                            </nav>
                        </Form>
                    </div>
                    
                )}
            </Formik>

         );
}
export default Search;
    