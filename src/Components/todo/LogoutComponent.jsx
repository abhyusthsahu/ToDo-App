import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutComponent() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login', { replace: true });
    }, [navigate]);

    return (
        <div className="LogoutComponent">
            <h1>Signing out...</h1>
            <div>Redirecting you to the login page.</div>
        </div>
    )
}

export default LogoutComponent;