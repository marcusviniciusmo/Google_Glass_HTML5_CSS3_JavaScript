import { GetCurrentYear } from 'utils/Functions';
import './styles.css';

function Footer() {
    return (
        <>
            <footer className="rodape">
                <p>
                    Copyright &copy; {GetCurrentYear()} - by Marcus Vinícius <br />
                    <a href="https://github.com/marcusviniciusmo"
                        target={'_blank'} rel="noreferrer">Github</a> | &nbsp;
                    <a href="https://www.linkedin.com/in/marcus-viniciusmo/"
                        target={'_blank'} rel="noreferrer">Linkedin</a> | &nbsp;
                    <a href="https://www.facebook.com/marcus.viniciusmo/"
                        target={'_blank'} rel="noreferrer">Facebook</a> | &nbsp;
                    <a href="https://www.instagram.com/marcus.viniciusmo"
                        target={'_blank'} rel="noreferrer">Instagram</a>
                </p>
            </footer>
        </>
    );
};

export default Footer;