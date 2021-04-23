import React, {useState} from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';
import { boolean } from 'yup/lib/locale';

const formShcema = Yup.object().shape({
    name: Yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long'),
    size: Yup
        .boolean()
        .oneOf([true], 'Must select a size for pizza'),
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


}

export default Form;