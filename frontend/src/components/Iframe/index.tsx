import Mao from 'assets/img/mao.png';
import DetalhesTela from 'assets/img/det-tela.jpg';
import DetalhesCamera from 'assets/img/det-camera.jpg';
import DetalhesSensores from 'assets/img/det-touch.jpg';
import DetalhesBateria from 'assets/img/det-bateria.jpg';
import './styles.css';

function Iframe() {
    return (
        <div className="bodyIframe">
            <article className="topo">
                <header>
                    <h2>Clique sobre as áreas destacadas em vermelho</h2>
                </header>
                <img src={Mao} alt="Mão apontando para a esquerda" />
            </article>

            <article className="tela">
                <header>
                    <h1>Tela</h1>
                    <h2>Como o mundo vai aparecer</h2>
                </header>
                <p>
                    De acordo com fontes próximas do Google, os óculos vão contar com uma pequena
                    tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com
                    o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções
                    com o movimento da cabeça.
                </p>
                <img src={DetalhesTela} alt="Tela do Google Glass" />
            </article>

            <article className="camera">
                <header>
                    <h1>Câmera</h1>
                    <h2>Filme e fotografe a qualquer momento</h2>
                </header>
                <p>
                    <img src={DetalhesCamera} className="imagemDireita" alt="Câmera do Google Glass" />
                    Com o Google Glass será possível tirar fotos com até 5 megapixels e gravar vídeos
                    com 720 linhas de resolução. Os primeiros vídeos e fotos capturados com o aparelho
                    já começaram a circular pela rede, mas até agora ninguém tem muitas informações técnicas.
                </p>
            </article>

            <article className="sensores">
                <header>
                    <h1>Sensores</h1>
                    <h2>A sensibilidade de um simples óculos</h2>
                </header>
                <p>
                    Quem pensa que para comandar o Google Glass vai precisar de teclado e mouse, se engana
                    redondamente. O dispositivo vem com vários tipos de sensores e microfones embutidos.
                    Assim, para dar um comando, basta falar ou passar o dedo na lateral do óculos.
                </p>
                <img src={DetalhesSensores} alt="Sensores do Google Glass" />
            </article>

            <article className="gadgets">
                <header>
                    <h1>Bateria e Gadgets</h1>
                    <h2>Quais são os dispositivos que complementam o Glass</h2>
                </header>
                <img src={DetalhesBateria} className="imagemDireita" alt="Bateria e Gadgets do Google Glass" />
                <p>
                    Segundo a própria Google, o Glass virá com uma bateria que tem autonomia suficiente para
                    durar um dia inteiro. Apenas algumas atividades como videoconferências e longas filmagens
                    vão exigir um pouco mais. Além disso ele vem com WiFi, Bluetooth, 3G/4G e muito mais.
                </p>
            </article>
        </div>
    );
};

export default Iframe;