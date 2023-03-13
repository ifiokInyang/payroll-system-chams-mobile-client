import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formDetails, User } from '../../utils/Interfaces/index.dto';
import "./Table.css";
import { getEmployeesAsync, showEmployee, deleteEmployeesAsync, updateEmployeeAsync} from './TableSlice';
import * as dayjs from 'dayjs';
import Button from '../../Components/Button/Button';
import Form from '../Form/Form';
import { AnyAction } from '@reduxjs/toolkit';
// import Form from '../Form/Form';


const Table = () => {
    const employees = useSelector(showEmployee)
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(formDetails);
    // const [is]

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const getMonthName = (monthNumber: any) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
    
        return date.toLocaleString("en-US", { month: "long" });
      }

      const handleUpdateClick = (employee: User) => {
        handleOpen()
        setInput({...employee})
      }
     useEffect(() => {
        return () => {
            dispatch(getEmployeesAsync() as any);
        } 
    }, [])
  return (
    <div className='tableContainer'>
        <div className='tableSubContainer'>
            <Button buttonText='Add Employee' className='addButton' onClick={handleOpen}/>
        <table>
        <tr className='tableHeadingTh'>
                <th className='tableSerialNumberHeading'>S/N</th>
                <th className='tableNameHeading'>Name</th>
                <th className='tableUsernameHeading'>Username</th>
                <th className='tableCompanyHeading'>Company</th>
                <th className='tableSalaryHeading'>Salary(&#x20A6;)</th>
                <th className='tableMonthHeading'>Month(2023)</th>
                {/* <th>Year</th> */}
                <th className='tableEmailHeading'>Email</th>
                <th className='tableStatusHeading'>Status</th>
                <th className='tableActiveStaffHeading'>isActiveStaff</th>
            </tr>
        </table>
        { employees.map((employee: User, index: number) => (
        <div key={employee.id}>
            <table>
            <tr>
                <td className='tableSerialNumberData'>{1+index++}</td>
                <td className='tableNameData'>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.username}</td>
                <td>{employee.company}</td>
                <td>{employee.salary}</td>
                {getMonthName(
                new Date(employee.createdAt)
                  .toLocaleString("en-NG")
                  .split("/")[1]
              )}
                {/* <td>{"s"}</td> */}
                <td>{employee.email}</td>
                <td>{employee.status === null ? "null" : employee.status}</td>
                <td>{employee.isActiveStaff ? "true" : "false"}</td>
                
            <Button type='button' buttonText='Update' className='updateButton' onClick={() => handleUpdateClick(employee)}/>
            <Button buttonText='Delete' className='deleteButton' onClick={() => dispatch(deleteEmployeesAsync(employee.id) as any)}/>

            </tr>

            </table>
        </div>
        ))}
        </div>
        <Form open={open} handleClose={handleClose} 
        handleOpen={handleOpen} 
        input={input} setInput={setInput}/>
    </div>
  )
}

export default Table
