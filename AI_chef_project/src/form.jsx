import React from "react";
import ReactDOM from "react-dom/client"

function App () {

    function signUp(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)
        console.log(password)
        formEl.reset()
    }

    return (
        <section>
            <h1>SignUp Form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" placeholder="joedoe@mail.com"/>
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" />  
                <br />

                <input type="submit" value="Click"/>

            </form>
        </section>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />)