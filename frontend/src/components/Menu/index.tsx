import GlassIcon from 'assets/img/glass-oculos-preto-peq.png';

function Menu() {
    return (
        <>
            <img src={GlassIcon} alt="Óculos do Google Glass" />

            <nav>
                <h1>Menu Principal</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/especificacoes">Especificações</a></li>
                    <li><a href="/fotos">Fotos</a></li>
                    <li><a href="/multimidia">Multimídia</a></li>
                    <li><a href="/faleConosco">Fale conosco</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;