import {useSite} from "./context";

export default function SwitchLanguage() {

    const {language, dispatch} = useSite()

    const toggleLanguage = () => {
        dispatch({
            type: 'TOGGLE_LANGUAGE',
        })
    }

    return (
        <>
            Mevcut Dil => {language} <br/>
            <button onClick={toggleLanguage}>Dili değiştir</button>
        </>
    )
}