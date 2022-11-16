import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useCookies, withCookies} from 'react-cookie';
import './Login.css'

function FormLogin(props) {
    return (
        <section class="login container">
            <h1>Login</h1>
            <div class="login_form">
                <form onSubmit={props.onSignin}>
                    <div>
                        <label>Email</label>
                        <input class="input" type="text" id="email" autoComplete="off" ref={props.emailRef} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input class="input" type="password" name="password" autoComplete="off" ref={props.passwordRef} />
                    </div>
                    <div class="div_btn">
                        <button class='btn' type="submit" name="login">Login</button>
                    </div>
                </form>
                <a href="" class="mdp_perdu">Forgot password</a>
            </div>

            <div class="div_cree_cpt"> <a href="/register" class="cree_cpt">You don’t have a account ? <br /> Click here</a> </div>
        </section>
    );
}

function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    function disconnect() {
        removeCookie('login');
    }

    async function onSignin(e) {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        try {
            const p = (await axios.post('http://localhost:8000/signin', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }

    if (cookies.login && cookies.login.token) {
        return <button id="disconnect" onClick={disconnect}>disconnect</button>;
    }
    return <FormLogin onSignin={onSignin} emailRef={emailRef} passwordRef={passwordRef}/>
}

function LocalProtectedRoute({children, ...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.email && rest.allCookies.login.token) {
        return (
            React.cloneElement(children, {email: rest.allCookies.login.email, token: rest.allCookies.login.token})
        )
    }
    return <></>
}


/**
 * @return {null}
 */
function LocalProtectedLink({...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.email && rest.allCookies.login.token) {
        return <Link className={rest.className} to={rest.to}>{rest.children}</Link>
    } else {
        return null;
    }
}


function NotLocalProtectedLink({...rest}) {
    if (!(rest.allCookies && rest.allCookies.login && rest.allCookies.login.email && rest.allCookies.login.token)) {
        return <Link className={rest.className} to={rest.to}>{rest.children}</Link>
    } else {
        return null;
    }
}


const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);
const NotProtectedLink = withCookies(NotLocalProtectedLink);

export {ProtectedRoute, ProtectedLink, NotProtectedLink};
export default Login;