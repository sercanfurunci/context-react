import Header from "./Header";
import Footer from "./Footer";
import {useAuth} from "./context";


export default function Home() {

    const {user} = useAuth()

    return (
        <>
            <Header/>
            APP
            {user && (
                <div style={{padding: 10, border: '1px solid red'}}>
                    bu alan sadece user login olunca gözükür
                </div>
            )}
            <hr/>
            <Footer/>
        </>
    )
}