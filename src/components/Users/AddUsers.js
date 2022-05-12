import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"
import classes from "./AddUser.module.css"

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim() === 0 || enteredAge.trim() === 0){
            return
        }
        if(+enteredAge < 1){
            return
        }
        console.log("addUserHandler called")
        console.log(enteredUsername, enteredAge)
        clearInputs();
    }

    const userNameChangeHandler = (event) => {
        const userInput = event.target.value;
        setEnteredUsername(userInput)
    }

    const ageChangeHandler = (event) => {
        const userInput = event.target.value;
        setEnteredAge(userInput)
    }

    const clearInputs = () => {
        setEnteredUsername('');
        setEnteredAge('')
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={enteredUsername} onChange={userNameChangeHandler} type="text" id="username" />
                <label htmlFor="age">Age (years)</label>
                <input value={enteredAge} onChange={ageChangeHandler} type="number" id="age" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser