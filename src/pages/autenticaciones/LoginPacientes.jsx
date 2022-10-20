import { useState } from "react";

function LoginPacientes() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    return<>    <div>
        <h1>Login</h1>
        <form>
            <input type="email" name="email" id="email"/>
            <input type = "password" name="password" id="password"/>
        </form>
     </div>
     </> 
}

export default LoginPacientes;