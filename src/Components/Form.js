import React, {useState, useContext} from "react";
import {AlertContext} from "../Context/Alert/alertContext";

export const Form = ({addName}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const alert = useContext(AlertContext)
    const submitHandler = event => {
        event.preventDefault()
        if (firstName.trim() && lastName.trim()) {
            alert.show('Name has added', 'success');
            addName(firstName, lastName);
            setFirstName('');
            setLastName('')
        } else {
            alert.show('Text name')
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-row">
                <div className='col form-group'>
                    <input type="text" className="form-control" placeholder='Text First name'
                           value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className='col form-group'>
                    <input type="text" className="form-control" placeholder='Text Last name'
                           value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </div>
        </form>
    )
}