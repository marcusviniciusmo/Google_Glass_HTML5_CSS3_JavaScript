import Header from "components/Header";
import PhotosIcon from 'assets/img/fotos.png';
import Footer from "components/Footer";

function Fotos() {
    return (
        <div className="interface">
            <Header defaultIconMenu={PhotosIcon} />

            Glass &gt; Fotos
            Galeria de Imagens do Google Glass
            por Gustavo Guanabara
            Atualizado em 01/Maio/2013

            Veja na nossa galeria de fotos várias belas imagens que mostram algumas das principais características do Google Glass, como recursos e propriedades que estão impressionando o mundo inteiro. Basta passar o mouse sobre uma das fotos para ver uma versão ampliada e com uma breve descrição.

            - Agenda e lembretes
            - Sergey Brin usando o Glass
            - Leve e compacto
            - Sensação de uma tela de 50"
            - Vários tipos de lente
            - Informações importantes

            <Footer />
        </div>
    );
};

export default Fotos;