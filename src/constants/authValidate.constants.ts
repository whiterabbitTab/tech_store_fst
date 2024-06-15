import { toast } from "react-toastify"

export const userExist = () => toast.error("A user with such an email already exists")
export const differentPass = () => toast.error("Password don't match")
export const occupiedUsername = () => toast.error("This username is occupied")
export const emptyFields = () => toast.error("Fill in all required fields")