import {createContext, useContext, useReducer} from "react";

import reducer from "../reducer/reducer";

const Context = createContext()

export const useSite = () => useContext(Context)
const Provider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        theme: localStorage.getItem('theme') || 'light',
        language: localStorage.getItem('language') || 'tr'
    })

    const data = {
        ...state,
        dispatch
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider
