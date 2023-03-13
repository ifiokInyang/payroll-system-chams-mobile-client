import React, { ChangeEvent, useState } from "react";
import { addEmployeesAsync, updateEmployeeAsync } from '../Table/TableSlice';
import Modal from 'react-bootstrap/Modal';
import { formDetails, FormProps } from "../../utils/Interfaces/index.dto";
import { useDispatch } from "react-redux";

const Form = ({open, handleClose, input, setInput, isUpdate}: FormProps) => {
     const [isClicked, setIsClicked] = useState(true)

     const dispatch = useDispatch()

     const handleFormChange = (event: ChangeEvent<HTMLInputElement> |
      ChangeEvent<HTMLSelectElement>) => {
        setIsClicked(true)
        const { name, value } = event.target;
        setInput({
          ...input, [name]: value
        })
     }

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setIsClicked(false);
        handleClose();
        setInput(formDetails)
        dispatch(addEmployeesAsync(input) as any)
    };

    const handleUpdate = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      setIsClicked(false);
      handleClose();
      setInput(formDetails)
      dispatch(updateEmployeeAsync(input) as any)

    }

    return (
        <>
            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    {!isUpdate && <Modal.Title>Create Employee</Modal.Title>}
                    {isUpdate && <Modal.Title>Update Employee</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label form-label-c">Email address</label>
                        <input type="email" className="form-control form-control-c" id="username" 
                        value={input.email} onChange={handleFormChange}
                        name="email" placeholder="name@companyemail.com"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label form-label-c">First Name</label>
                      <input type="text" className="form-control form-control-c" 
                      value={input.firstName} name="firstName" 
                      onChange={handleFormChange} placeholder="enter first name..." />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label form-label-c">Last Name</label>
                      <input type="text" className="form-control form-control-c" 
                      value={input.lastName} name="lastName" 
                      onChange={handleFormChange} placeholder="enter last name..." />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label form-label-c">Username</label>
                      <input type="text" className="form-control form-control-c" 
                      value={input.username} name="username" onChange={handleFormChange}
                      placeholder="choose a username..." />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="company" className="form-label form-label-c">Company</label>
                      <input type="text" className="form-control form-control-c" 
                      value={input.company} name="company" onChange={handleFormChange}
                      placeholder="enter company name...." />
                    </div>
                   
                    <div className="mb-3">
                      <label htmlFor="salary" className="form-label form-label-c">Salary(&#x20A6;)</label>
                      <input type="text" className="form-control form-control-c" 
                      value={input.salary} name="salary" onChange={handleFormChange}
                      placeholder="enter salary...." />
                    </div>
                  {/* <Button /> */}
                    {!isUpdate && <div className="mb-3 mt-3">
                         <button type="submit" className="btn btn-primary c-submit-button btn-c" style={{cursor: `${isClicked ? "pointer" : "not-allowed"}`}} onClick={handleSubmit}>Submit</button>
                    </div>}
                    {isUpdate && <div className="mb-3 mt-3">
                         <button type="submit" className="btn btn-primary c-submit-button btn-c" style={{cursor: `${isClicked ? "pointer" : "not-allowed"}`}} 
                         onClick={handleUpdate}>Submit</button>
                    </div>}
                  </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Form;