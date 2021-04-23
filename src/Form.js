import React, {useState} from 'react';
import axios from 'axios';
import * as Yup from 'yup';
// import {Link} from 'react-router-dom';
// import Styled from 'styled-components';
import { boolean } from 'yup/lib/locale';

const formShcema = Yup.object().shape({
    name: Yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long'),
    size: Yup
       .string()
       .required('Must select size'),
    pepperoni: Yup
        .boolean(),
    mushrooms: Yup
        .boolean(),
    sausage: Yup
        .boolean(),
    jalapenos: Yup
        .boolean(),
    specialInstruction: Yup
        .string(),
})

const initialFormValue = {
    name: '',
    size: '0',
    pepperoni: false,
    mushrooms: false,
    sausage: false,
    jalapenos: false,
    specialInstruction: '',
}

const initialErrorValue = {
    name: '',
    size: '',
    pepperoni: '',
    mushrooms: '',
    sausage: '',
    jalapenos: '',
    specialInstruction: '',
}


function Form() {
    const [form, setForm] = useState(initialFormValue)
    
    const [error, setError] = useState(initialErrorValue)

    const [user, setUser] = useState({setForm})


    const onSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            name: form.name,
            size: form.size,
            pepperoni: form.pepperoni,
            mushrooms: form.mushrooms,
            sausage: form.sausage,
            jalapenos: form.jalapenos,
            specialInstruction: form.specialInstruction,
        }
    }

    axios.post('https://reqres.in/api/orders')
        .then((res) => {
            setUser({
                name: form.name,
                size: form.size,
                pepperoni: form.pepperoni,
                mushrooms: form.mushrooms,
                sausage: form.sausage,
                jalapenos: form.jalapenos,
                specialInstruction: form.specialInstruction,
            })
            .catch((err) => 
            console.log(err))
        })

    const change = evt => {
        const { checked, value, name, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        setError(name, valueToUse)
        setForm({...form, [name]: valueToUse})
    }
}

export default Form;