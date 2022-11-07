import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import {useAuth} from "./context/AuthContext";

export default function Header() {


    const {user, dispatch} = useAuth()


    const login = () => {
        dispatch({
            type: "LOGIN",
            payload: {
                name: 'sercan',
                id: 1
            }
        })
    }
    const logout = () => {
        dispatch({
            type:"LOGOUT",

        })
    }
    return (
        <header>
            {user && <button onClick={logout}> Çıkış Yap</button> || <button onClick={login}>Giriş yap</button>}
            <hr/>
            <SwitchTheme/>
            <br/>
            <SwitchLanguage/>
            <hr/>
        </header>
    )
}