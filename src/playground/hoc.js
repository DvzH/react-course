import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>The info is:{props.info}</p>
    </div>
);

const withAdminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAdmin &&
                <p> Adim info keep it private</p>
            }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAdmin ? (<div><p>Welcome you have logged in as admin</p><WrappedComponent {...props} /></div>) 
                : (<p>Please log in</p>)
            }
        </div>

        );
}

//const AdminInfo = withAdminInfo(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
    <AuthInfo isAdmin={false} info="This is information" />,
    document.getElementById('app')
);
