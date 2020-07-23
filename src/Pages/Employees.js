import React, {Fragment, useEffect, useState} from "react";
import {Form} from "../Components/Form";
import {Name} from "../Components/Name";
import {Loader} from "../Components/Loader";

export const Employees = () => {

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      fetch('https://reqres.in/api/users?per_page=12')
          .then(res => res.json())
          .then(
              (res) => {
                  setLoading(false)
                  setEmployees(res.data)
              }
          )
    }, [])

    const addName = (firstName, lastName) => {
        setEmployees(
            [...employees,{
                id: employees.length + 1,
                first_name: firstName,
                last_name: lastName,
            }]
        )
    }

    const deleteName = (indexName) => {
        setEmployees(
            employees.filter(empl => empl.id !== indexName)
        )
    }


    return (
        <Fragment>
            <Form addName={addName}/>
            <hr/>
            {loading
                ? <Loader />
                : <Name employees={employees} deleteName={deleteName}/>
            }

        </Fragment>
    )
}