import {saveUser} from "../services/user.api.server";

export default function UncontrolledForm(){


    const onFormSubmit = (e) => {
        e.preventDefault()


        let userToSave = {username: e.target.username.value, email: e.target.email.value }
        console.log(userToSave)
        saveUser(userToSave)
    }


    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" name={'username'}/>
                <input type="email" name={'email'}/>
                <button>save</button>
            </form>

        </div>
    )
}