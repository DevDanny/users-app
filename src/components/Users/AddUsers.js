import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal"

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError(
                {
                    title: 'Invalid input!',
                    message: 'Please enter a valid name and age'
                }
            )
            return
        }
        if(+enteredAge < 1){
            setError(
                {
                    title: 'Invalid age!',
                    message: 'Please enter a valid age above 0'
                }
            )
            return
        }
        console.log("addUserHandler called")
        props.onAddUser(enteredUsername, enteredAge)
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
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}           
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input value={enteredUsername} onChange={userNameChangeHandler} type="text" id="username" />
                    <label htmlFor="age">Age (years)</label>
                    <input value={enteredAge} onChange={ageChangeHandler} type="number" id="age" />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser