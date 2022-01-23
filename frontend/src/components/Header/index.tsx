import Menu from "components/Menu";
import './styles.css';

function Header() {
    return (
        <header className="cabecalho">
            <hgroup>
                <h1>Google Glass</h1>
                <h2>A revolução do Google está chegando</h2>
            </hgroup>

            <Menu />
        </header>
    );
};

export default Header;