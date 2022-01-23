import Menu from "components/Menu";
import './styles.css';

type Props = {
    defaultIconMenu: string;
}

function Header({ defaultIconMenu }: Props) {
    return (
        <header className="cabecalho">
            <hgroup>
                <h1>Google Glass</h1>
                <h2>A revolução do Google está chegando</h2>
            </hgroup>

            <Menu defaultIcon={defaultIconMenu} />
        </header>
    );
};

export default Header;