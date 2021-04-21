import { Formik } from 'formik';
import * as Yup from 'yup';
import {CContainer, CRow, CCol, CForm, CButton, CLabel, CInput} from "@coreui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Form = () => (


    <Formik
        initialValues={{ name: "",  email: "", phone: "", password: "", confirmPassword: ""}}

        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              alert("Dados enviados! Obrigado!");
              setSubmitting(false);
            }, 400);
          }}

        validationSchema={Yup.object().shape({
            name: Yup.string().min(6, 'Pelo menos 6 caracteres.').required('Preencher nome.'),
            email: Yup.string().email('E-mail inválido.').required('Preencher e-mail.'),
            phone: Yup.string().matches(/^\(?\d{2}\)?\s?\d{8,9}$/gi, 'Número inválido.'),
            password: Yup.string().min(8, 'Pelo menos 8 caracteres.').required('Preencher senha.').matches(/^[a-zA-Z]+$/, 'Somente letras.'),
            confirmPassword: Yup.string().required('Preencher senha.').oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais.'),
        })}

    >
        {props => {
            const {
                values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
            } = props;

            return (
                
                <CContainer>
                <CForm onSubmit={handleSubmit}>
                    <CRow className="form-left">
                     <CCol md="6" sm="12">
                                <CLabel htmlFor="name">Nome</CLabel>
                                <CInput
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
                                    className={
                                        errors.name && touched.name
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                

                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}
                               
                               <CLabel htmlFor="email">E-mail</CLabel>
                                <CInput
                                    name="email"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={
                                        errors.email && touched.email
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                

                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}

                                <CLabel htmlFor="phone">Número de telefone</CLabel>
                                <CInput
                                    name="phone"
                                    type="tel"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    autoComplete="tel"
                                    className={
                                        errors.phone && touched.phone
                                            ? "text-input error"
                                            : "text-input"
                                    } 
                                />
                                
                                
                                {errors.phone && touched.phone && (
                                    <div className="input-feedback">{errors.phone}</div>
                                )}

</CCol>

                                <CCol md="6" sm="12">
                                <CLabel htmlFor="password">Senha</CLabel>
                                <CInput
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    autoComplete="new-password"
                                    className={
                                        errors.password && touched.password
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}

                                <CLabel htmlFor="confirmPassword">Confirme sua senha</CLabel>
                                <CInput
                                    name="confirmPassword"
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    autoComplete="new-password"
                                    className={
                                        errors.confirmPassword && touched.confirmPassword
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                

                                {errors.confirmPassword && touched.confirmPassword && (
                                    <div className="input-feedback">{errors.confirmPassword}</div>
                                )}
                                    
                            <CButton className="salvar" type="submit" disabled={isSubmitting} onSubmit={handleSubmit}>
                                Enviar
                                </CButton>
                                 </CCol>
                                 </CRow>
                </CForm>
                </CContainer>
                
            );
        }}




    </Formik>
   
      
    

)



export default Form;