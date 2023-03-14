import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formDetails, User } from '../../utils/Interfaces/index.dto';
import "./Table.css";
import { getEmployeesAsync, showEmployee, deleteEmployeesAsync } from './TableSlice';
import Button from '../../Components/Button/Button';
import Form from '../Form/Form';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';


const Table = () => {
    const employees = useSelector(showEmployee)
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(formDetails);
    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    const handleClose = () => {
        setOpen(false);
        setInput({...formDetails})
    }
    const handleOpen = () => {
        setIsUpdate(false)
        setOpen(true);
    }

    const getMonthName = (monthNumber: any) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
    
        return date.toLocaleString("en-US", { month: "long" });
      }

      const handleUpdateClick = (employee: User) => {
        handleOpen()
        setInput({...employee})
        setIsUpdate(true)
      }

      const handleDelete = (id: string): void | undefined => {
        Swal.fire({
            title: 'This action will permanently delete this record',
            text: 'Do you want to continue?',
            icon: 'warning',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            // cancelButtonColor: '#3085d6',
            confirmButtonColor: '#2a1e15',
            // color: "brown"                        
        }).then((data: any) => {
            if(data.isConfirmed)
            dispatch(deleteEmployeesAsync(id) as any)
        }).catch((error: any) => {
            toast.error("Something went wrong")
            throw new Error(error)
        } )
    }


     useEffect(() => {
        return () => {
            dispatch(getEmployeesAsync() as any);
        } 
    }, [dispatch])
   

  return (
    
    <div className='tableContainer'>
         <div className='addButtonContainer'>
            <Button buttonText='Add Employee' className='addButton' onClick={handleOpen}/>
        </div>
        <div className='tableSubContainer'>
            
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
                <td>{employee.email}</td>
                <td>{employee.status === null ? "null" : employee.status}</td>
                <td>{employee.isActiveStaff ? "true" : "false"}</td>
                
           

            </tr>
           
            </table>
            <div className='updateAndEditButtons'>
                <Button type='button' buttonText='Update' className='updateButton' onClick={() => handleUpdateClick(employee)}/>
                <Button buttonText='Delete' className='deleteButton' onClick={() => handleDelete(employee.id)}/>
            </div>
        </div>
        ))}
        </div>

       
        <Form open={open} 
        handleClose={handleClose} 
        handleOpen={handleOpen} 
        input={input} 
        setInput={setInput}
        isUpdate={isUpdate}
        />
    </div>
  )
}

export default Table
