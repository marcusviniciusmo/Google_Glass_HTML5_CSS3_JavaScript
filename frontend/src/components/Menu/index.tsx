import GlassIcon from 'assets/img/glass-oculos-preto-peq.png';

function Menu() {
    return (
        <>
            <img src={GlassIcon} alt="Óculos do Google Glass" />

            <nav>
                <h1>Menu Principal</h1>
                <ul>
                    <li>Home</li>
                    <li>Especificações</li>
                    <li>Fotos</li>
                    <li>Multimídia</li>
                    <li>Fale conosco</li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;