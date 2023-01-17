import Buttons from "./buttons";
import React, { useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Lister from './lister';
import Colaboradores from '../data';
import Search from "./search";

const Forms = () => {
   
    
    const [newData, setNewData] = useState(Colaboradores);
    
    const [formSend, changeFormSend] = useState(false);
    return ( 
        <>
            <Formik
                   initialValues={{
                    nombre: '',
                    correo: ''
                    
                }}
                
                validate={(valores) => {
                    let errores = {};
                    //validacion de nombre con expresiones regulares de texto
                    if (!valores.nombre) {
                        // console.log("ingresas nombre");
                        errores.nombre = "Por favor ingrese un Nombre"
                            
                    } else if ( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = "El nombre solo puede contener letras y espacios"
                    }
                    // validacion Correo con expresiones regulares de correo
                    if (!valores.correo) {
                        // console.log("ingresas nombre");
                        errores.correo = "Por favor ingrese un Correo Electronico"
                            
                    } else if ( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = "El correo solo puede contener letras y espacios"
                    }
                    return errores;

                }}

                
                onSubmit={(valores, { resetForm }) => {
                    resetForm();  //resetemos el formulario
                    const setArrayData = {
                            id: Date.now(),
                            nombre: valores.nombre,
                            correo: valores.correo,
                    }
                    
                     setNewData([...newData, setArrayData]);

                    console.log("formulario enviado");
                    changeFormSend(true);
                    setTimeout(() => changeFormSend(false), 5000); // tiempo de 5 seg. para que desaparesca msg de formulario enviado con exito
                }}


                
            >
                {/* eliminamos el handleSubmit, para trabajar con el componente Form de Formik */}
                {/* {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => ( */}

                {({  errors, touched}) => (
                    <div className="container">

                        <div className='container mt-3'>
                            <Search Colaborador={Search} Colour="bg-dark" />
                            {/* {console.log(searchNewData) } */}
                        </div>

                        <Form className="formulario">
                        
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                {/* eliminamos el input para trabajar con el componente Field de Formik */}
                                {/* <input */} 
                                <Field    
                                    className="form-control"
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="John Doe"

                                        // eliminado para trabajar con Field
                                        // defaultValue={values.nombre}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur} 
                                    
                                />
                                {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                            </div>
                            
                           
                            <div>
                                <label htmlFor="correo">Correo</label>
                                {/* eliminamos el input para trabajar con el componente Field de Formik */}
                                {/* <input */} 
                                <Field
                                    className="form-control"
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    placeholder="correo@correo.com"
                                    
                                        // eliminado para trabajar con Field
                                        // defaultValue={values.correo}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                    
                                />
                                {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                            </div>
                        
                            <Buttons colours="btn-primary" title="Agregars" size="" type="submit"  />
                            {formSend && <p className="exito"><strong>Formulario enviado con Exito!</strong></p>}
                            
                        </Form>
                    </div>
                    
                )}
            </Formik>

            <Lister Colaborador={newData} />
        </>
     );
}
export default Forms;