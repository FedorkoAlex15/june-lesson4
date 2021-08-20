import {createRef, useState} from "react";

export default function SuperForm() {


 let [formSate, setFormState] = useState({username: '', email: ''})

    // let onUsernameChange = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     setUsernme(e.target.value)
    // }
    //
    //
    // let onEmailChange = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    //
    //
    // }





let onFormInputChange = (e) => {
        console.log(e.target.name)
        // let x = {[e.target.name]: e.target.value } // динамічний ключ. буде або username або email
        setFormState({...formSate, [e.target.name] : e.target.value })

 }

//
 let  save = (e) => {
     e.preventDefault()
     console.log(formSate)
     console.log(refObject.current.username.value)
     console.log(refObject.current.email.value)
 }


let refObject = createRef()


    return (
        <div>
            <form onSubmit={save} ref={refObject}>
                <input type="text " name={'username'} value={formSate.username} onChange={onFormInputChange}/>
                <input type={'text'} name={'email'} value={formSate.email} onChange={onFormInputChange}/>
                <input type="submit"/>

            </form>

        </div>
    )
}
