import Header from "components/Header";
import PhotosIcon from 'assets/img/fotos.png';
import ArticleHeader from "components/ArticleHeader";
import Footer from "components/Footer";
import './styles.css';

function Fotos() {
    return (
        <div className="interface">
            <Header defaultIconMenu={PhotosIcon} />

            <ArticleHeader
                text="Glass &gt; Fotos"
                title={"Galeria de Imagens do Google Glass"} />

            <p>
                Veja na nossa galeria de fotos várias belas imagens que mostram algumas
                das principais características do Google Glass, como recursos e propriedades
                que estão impressionando o mundo inteiro. Basta passar o mouse sobre uma das
                fotos para ver uma versão ampliada e com uma breve descrição.
            </p>

            <ul className="albumFotos">
                <li id="foto01"><span>Agenda e lembretes</span></li>
                <li id="foto02"><span>Sergey Brin usando o Glass</span></li>
                <li id="foto03"><span>Leve e compacto</span></li>
                <li id="foto04"><span>Sensação de uma tela de 50"</span></li>
                <li id="foto05"><span>Vários tipos de lente</span></li>
                <li id="foto06"><span>Informações importantes</span></li>
            </ul>

            <Footer />
        </div>
    );
};

export default Fotos;