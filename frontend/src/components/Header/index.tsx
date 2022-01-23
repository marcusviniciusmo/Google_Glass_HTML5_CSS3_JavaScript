import GlassIcon from 'assets/img/glass-oculos-preto-peq.png';

function Header() {
    return (
        <header className="cabecalho">
            <hgroup>
                <h1>Google Glass</h1>
                <h2>A revolução do Google está chegando</h2>
            </hgroup>

            <img src={GlassIcon} alt="Óculos do Google Glass" />

            Menu Principal
            - Home
            - Especificações
            - Fotos
            - Multimídia
            - Fale conosco
        </header>
    );
};

export default Header;