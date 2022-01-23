import Header from "components/Header";
import SpecificationsIcon from 'assets/img/especificacoes.png';
import Footer from "components/Footer";

function Especificacoes() {
    return (
        <div className="interface">
            <Header defaultIconMenu={SpecificationsIcon} />

            Glass &gt; Especificações
            Raio-X no Google Glass
            por Gustavo Guanabara
            Atualizado em 01/Maio/2013

            Clique em qualquer área destacada da imagem para ter mais informações sobre os recursos do Google Glass. Qualquer ponto vermelho vai te levar a um lugar cheio de novas informações.

            [AQUI ENTRA UMA IMAGEM]

            <Footer />
        </div>
    );
};

export default Especificacoes;