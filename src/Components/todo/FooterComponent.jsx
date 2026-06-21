import { useContext } from 'react';
import { AuthContext } from './security/AuthContext';

function FooterComponent() {

    const authContext = useContext(AuthContext);
    console.log(`FooterComponent: ${authContext.number}`);

    return (
        <footer className="FooterComponent">
            <div className="container">
                <hr/>Footer
                </div>
        </footer>
    )
}

export default FooterComponent;