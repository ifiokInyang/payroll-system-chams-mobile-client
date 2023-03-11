export interface ButtonAttributes {
    className?: string, 
    type?: "submit" | "reset" | "button", 
    onClick?: () => void, 
    buttonText?: string
}