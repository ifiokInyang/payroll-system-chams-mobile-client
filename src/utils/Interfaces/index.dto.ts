export interface ButtonAttributes {
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
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
    handleOpen: () => void
  }

export interface FormData{
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    company: string,
    salary: string
}
export const formDetails: FormData = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    company: "",
    salary: ""
}