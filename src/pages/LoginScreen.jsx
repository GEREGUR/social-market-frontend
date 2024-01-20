import { NavDesktop } from "../components/header/navbar component/nav-desktop";
import { NavMobile } from "../components/header/navbar component/nav-mobile";

function LoginScreen() {
    return (
        <div>
            <NavDesktop/>
            <NavMobile/>
            <h1>Login Screen</h1>
        </div>
    );
}

export default LoginScreen;