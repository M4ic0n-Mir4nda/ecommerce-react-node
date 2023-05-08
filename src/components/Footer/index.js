import './style.css'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='footer'>
            <div className='test'>
            <h2>Redes Sociais</h2>
                <ul className='social_list'>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaFacebookSquare />
                    </li>
                    <li>
                        <FaTwitterSquare />
                    </li>
                </ul>
            <h2>Formas de Pagamento</h2>
                <ul className='social_list'>
                    <li>
                        <FaCcVisa />
                    </li>
                    <li>
                        <FaCcMastercard />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;