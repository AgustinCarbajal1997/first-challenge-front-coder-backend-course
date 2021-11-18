import { ImTwitter, ImYoutube } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-institution">
                <h3>Institucional</h3>
                <h4>Quiénes Somos</h4>
                <h4>Políticas de Privacidad</h4>
                <h4>Protocolos COVID-19</h4>
                <h4>Términos y Condiciones</h4>
                <h4>Defensa del Consumidor</h4>
            </div>
            <div className="footer-help">
                <h3>Ayuda</h3>
                <h4>Preguntas Frecuentes</h4>
                <h4>Sucursales</h4>
                <h4>Pagos</h4>
                <h4>Entregas</h4>
                <h4>Cambios</h4>
                <h4>Nuevo Sitio</h4>
            </div>
            <div className="footer-clientele">
                <h3>Centro de Atención al Cliente</h3>
                <h4>3875411213</h4>
                <h4>Lunes a Viernes de 9 a 20 hs</h4>
                <h4>Sábado de 9 a 17 hs</h4>
                <h4>Contacto</h4>
                <h4>Botón de Arrepentimiento</h4>
            </div>
            <div className="footer-icons">
                <ImTwitter size="2rem" color="#f5f5f5"/>
                <SiInstagram size="2rem" color="#f5f5f5"/>
                <FaFacebookSquare size="2rem" color="#f5f5f5"/>
                <ImYoutube size="2rem" color="#f5f5f5"/>
            </div>
            <div className="footer-name">
                <h5>Desarrollado por Agustín Carbajal - +54 3875411213</h5>
            </div>
        </div>
    )
}

export default Footer
