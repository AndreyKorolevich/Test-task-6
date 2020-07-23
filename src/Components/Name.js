import React from "react";

export const Name = ({employees, deleteName}) => {
    return(
        <ul className='list-group'>
            {employees.map(empl => (
                <li className='list-group-item name' key={empl.id}>
                    {empl['first_name']} {empl['last_name']}
                    <button onClick={() => {
                        deleteName(empl.id)
                    }} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            ))}
        </ul>
    )
}