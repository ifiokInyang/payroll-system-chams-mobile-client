import React from "react";
export interface ButtonAttributes {
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick: () => void | undefined;
  buttonText?: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    salary: string;
    status: string;
    isActiveStaff: boolean;
    createdAt: Date;
}

export interface DisplayedUser {
    id: string,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    company: string,
    salary: string,
    status: string,
    isActiveStaff: string,
    createdAt: string
}

export const userDetails: DisplayedUser = {
    id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    salary: "",
    status: "",
    isActiveStaff: "",
    createdAt: ""
}

export interface FormProps {
    open: boolean, 
    handleClose: () => void, 
    handleOpen: () => void,
    input: FormData,
    setInput: React.Dispatch<React.SetStateAction<FormData>> | any,
    isUpdate: boolean
  }

export interface FormData{
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    company: string,
    salary: string,
    status: string,
    isActiveStaff: boolean,
    createdAt?: Date
}
export const formDetails: FormData = {
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    company: "",
    salary: "",
    status: "",
    isActiveStaff: true,
    
}