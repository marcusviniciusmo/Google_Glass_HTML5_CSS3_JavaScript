import Header from "components/Header";
import MultimidiaIcon from 'assets/img/multimidia.png';
import ArticleHeader from "components/ArticleHeader";
import Poster from 'assets/img/video-mini03.jpg';
import Footer from "components/Footer";

function Multimidia() {
    return (
        <div className="interface">
            <Header defaultIconMenu={MultimidiaIcon} />

            <ArticleHeader
                text="Glass &gt; Multimídia"
                title={"Sons e Vídeos"} />

            <div className="TvRadio">
                <audio id="musica"
                    src={require("assets/media/2009-lovers-carvings-bibio.mp3")} controls />
                <video id="filme03" poster={Poster}
                    src={require("assets/media/getting-started.mp4")} controls />
            </div>

            <Footer />
        </div>
    );
};

export default Multimidia;