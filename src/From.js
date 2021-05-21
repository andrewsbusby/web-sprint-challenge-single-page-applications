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

const FormStyle = Styled.div`
    diplay:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    background-color:  #b4c9d6;
    color: #313233;
`;


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

    return (
        <div>
            <div className='errorName'>
                {error.name}<br />
            </div>
            <div className='Header'>
                <div className='headerContainer'>
                    <h1>Lambda Eats</h1>
                </div>
                <Link to='/'>Home</Link>
                <Link to ='/Pizza'>Pizza</Link>
            </div>
            <FormStyle>
            <form>
                <div>
                    <label>Name:
                        <input onChange={change} value={form.name} type='text' name='name'/>
                    </label>
                </div>
                <div>
                    <label>Size Selection
                        <select onChange={change} value={form.size} name='size'>
                            <option value=''>Select Size</option>
                            <option value='1'>Personal Pan: 1 person 4 slices</option>
                            <option value='2'>Small: 12 in, 6 slices</option>
                            <option value='3'>Medium: 14 in, 8 slices</option>
                            <option value="4">Large: 16 in, 10 slices</option>
                            <option value='5'>Extra large: 18 in, 12 slices</option>
                        </select>
                    </label>
                </div>
                <dis>
                    <h3>Toppings</h3>
                    <label>Pepperoni:
                        <input onChange={change} checked={form.pepperoni} name='Pepperoni' type='checkbox' />
                    </label>
                    <label>Mushrooms:
                        <input onChange={change} checked={form.mushrooms} name='Mushrooms' type='checkbox' />
                    </label>
                    <label>Sausage:
                        <input onChange={change} checked={form.sausage} name='Sausage' type ='checkbox' />
                    </label>
                    <label>Jalapenos:
                        <input onChange={change} checked={form.jalapenos} name='Jalapenos' type='checkbox' />
                    </label>
                </dis>
                <div>
                    <label>
                        Special Instructions:
                        <input onChange={change} value={form.specialInstruction} name='specialIntructions' type='text' />
                    </label>
                </div>
                <button name='button'>Add to Order</button>
            </form>
            </FormStyle>
            </div>
    )
}

export default Form;