import React from "react";
import ReactDOM from "react-dom/client"

function App () {

    function signUp(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        // for checkbox - get all that are checked
        const diet = formData.getAll("diet")

        // Object Property in JS to grab all form data instead of doing indivually
        const data = Object.fromEntries(formData)
        // Can't get all checkbox values in data property
        const allData = {
            ...data, 
            diet
        }

        console.log(email)
        console.log(password)
        console.log(diet)
        console.log(Object.fromEntries(formData))
        console.log(allData)
    }

    return (
        <section>
            {/* Diff input types */}
            <h1>SignUp Form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email: </label>
                <input id="email" defaultValue="joedoe@mail.com" type="email" name="email" placeholder="joedoe@mail.com"/>
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" defaultValue="password123" type="password" name="password" />  
                <br />
                
                <label htmlFor="desciption">Description</label>
                <textarea id="description" name="description"></textarea>

                {/* Radio button */}
                <fieldset>
                    <legend>Status:</legend>
                    <label>
                        <input type="radio" name="status" value="Label"/>
                        Label Text
                    </label>
                    <label>
                        <input type="radio" name="status" value="Text"/>
                        Label Text
                    </label>
                    <label>
                        <input type="radio" name="status" defaultChecked={true} value="Status"/>
                        Label Text
                    </label>
                </fieldset>

                {/* Checkbox */}
                <fieldset>
                    <legend>Diet:</legend>
                    <label>
                        <input type="checkbox" name="diet" value="Vegan"/>
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="diet" defaultChecked={true} value="Veg"/>
                        Veg
                    </label>
                    <label>
                        <input type="checkbox" name="diet" defaultChecked={true} value="Non-veg"/>
                        Non-veg
                    </label>
                </fieldset>

                {/* Selection */}
                <label htmlFor="favColor">What is your fav color?</label>
                <select id="favColor" name="favColor" required>
                    <option value="" disabled>Choose a color</option>
                    <option value="Red">Red</option>
                    <option value="Pink">Pink</option>
                    <option value="Blue">Blue</option>
                </select>

                <input type="submit" value="Click"/>

            </form>
        </section>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />)