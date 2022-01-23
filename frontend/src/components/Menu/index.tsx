import GlassIcon from 'assets/img/glass-oculos-preto-peq.png';
import HomeIcon from 'assets/img/home.png';
import SpecificationsIcon from 'assets/img/especificacoes.png';
import PhotosIcon from 'assets/img/fotos.png';
import MultimidiaIcon from 'assets/img/multimidia.png';
import ContactIcon from 'assets/img/contato.png';
import { useState } from 'react';
import './styles.css';

type Props = {
    defaultIcon: string;
};

function Menu({ defaultIcon }: Props) {

    const [iconMenu, setIconMenu] = useState(defaultIcon);

    const handleIconMenu = (icon: string) => {
        setIconMenu(icon);
    };

    return (
        <>
            <img className="icone" src={iconMenu} alt="Óculos do Google Glass" />

            <nav className="menu">
                <h1>Menu Principal</h1>
                <ul>
                    <li onMouseEnter={() => handleIconMenu(HomeIcon)}
                        onMouseLeave={() => handleIconMenu(defaultIcon)}>
                            <a href="/">Home</a></li>
                    <li onMouseEnter={() => handleIconMenu(SpecificationsIcon)}
                        onMouseLeave={() => handleIconMenu(defaultIcon)}>
                            <a href="/especificacoes">Especificações</a></li>
                    <li onMouseEnter={() => handleIconMenu(PhotosIcon)}
                        onMouseLeave={() => handleIconMenu(defaultIcon)}>
                            <a href="/fotos">Fotos</a></li>
                    <li onMouseEnter={() => handleIconMenu(MultimidiaIcon)}
                        onMouseLeave={() => handleIconMenu(defaultIcon)}>
                            <a href="/multimidia">Multimídia</a></li>
                    <li onMouseEnter={() => handleIconMenu(ContactIcon)}
                        onMouseLeave={() => handleIconMenu(defaultIcon)}>
                            <a href="/faleConosco">Fale conosco</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;