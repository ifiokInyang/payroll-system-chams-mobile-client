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
