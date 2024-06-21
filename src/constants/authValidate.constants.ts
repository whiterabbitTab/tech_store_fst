import { toast } from "react-toastify"

// registration
export const userExist = () => toast.error("A user with such an email already exists")
export const differentPass = () => toast.error("Password don't match")
export const occupiedUsername = () => toast.error("This username is occupied")
export const emptyFields = () => toast.error("Fill in all required fields")

// login
export const emailnotexist = () => toast.error("This email is not registered")
export const wrongpassword = () => toast.error("The wrong password was entered")

// changeUserData
export const samedata = () => toast.error("You haven't changed anything.")