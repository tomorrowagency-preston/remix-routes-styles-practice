const Login = () => <h1>Login Page</h1>

export default Login;

/*
using an underscore at the start of '_auth' makes it "pathless".
the URL would not be /auth/login. It would be /login.
this gives us the ability to group related paths, like:
_auth.logout
_auth.register

this is called "Nested Laoyouts". "_auth" is the "layout".
*/