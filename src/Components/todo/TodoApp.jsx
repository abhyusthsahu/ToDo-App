import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome/:username" element={<WelcomeComponent />} />
                    <Route path="/todos" element={<ListTodosComponent />} />
                    <Route path="*" element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
 
function LoginComponent() {

    const [username, setUsername] = useState("abhyusth");

    const [password, setPassword] = useState("");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {

        if (username === "abhyusth" && password === "123456") {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }
    }

    return (
        <div className="Login">
            <h1>Sign in</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>UserName</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {

    const { username } = useParams();

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="Error">
            <h1>We are working really hard!</h1>
            <div>Apologies for the 404, please contact system admin</div>
        </div>
    )
}

function ListTodosComponent() {

    const todos = [
        { id: 1, description: "Learn React" },
        { id: 2, description: "Learn AWS" },
        { id: 3, description: "Learn Kafka" }
    ];
    return (
        <div className="ListTodosComponent">
            <h1>Things To Do</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}