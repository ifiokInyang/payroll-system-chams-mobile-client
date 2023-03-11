import React from 'react';
import Button from '../Button/Button';
import "./Form.css"


const Form = () => {
  return (
  <div>
      <div>
          <h1>Employee Payroll Dashboard</h1>
      </div>
      <form className='formContainer'>
      <div>
              <label htmlFor='email'>Email</label>
              <input 
              type="text"
              value=""
              placeholder='enter your email..'
              />
        </div>
        <div>
              <label htmlFor='first_name'>First Name</label>
              <input 
              type="text"
              value=""
              placeholder='enter your first name...'
              />
        </div>
        <div>
              <label htmlFor='last_name'>Last Name</label>
              <input 
              type="text"
              value=""
              placeholder='enter your last name...'
              />
        </div>
        <div>
              <label htmlFor='username'>username</label>
              <input 
              type="text"
              value=""
              placeholder='enter your username...'
              />
        </div>
        <div>
              <label htmlFor='company'>Company</label>
              <input 
              type="text"
              value=""
              placeholder='enter your company..'
              />
        </div>
        <div>
              <label htmlFor='salary'>Salary</label>
              <input 
              type="text"
              value=""
              placeholder='enter your salary..'
              />
        </div>
      </form>
      <Button type='submit' buttonText='Submit' className='createEmployee'/>
  </div>
  )
}

export default Form
