import Header from "components/Header";
import MultimidiaIcon from 'assets/img/multimidia.png';
import Footer from "components/Footer";

function Multimidia() {
    return (
        <div className="interface">
            <Header defaultIconMenu={MultimidiaIcon} />

            Glass &gt; Multimídia
            Sons e Vídeos
            por Gustavo Guanabara
            Atualizado em 01/Maio/2013


            Áudio e Vídeo

            [AQUI ENTRA UM VÍDEO]
            [AQUI ENTRA UM ÁUDIO]

            <Footer />
        </div>
    );
};

export default Multimidia;