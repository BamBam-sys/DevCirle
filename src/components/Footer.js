import '../index.css'
import { FiMail } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    return (
        <div className='footer'>
            <div className='logo'>&copy;DevCircle {thisYear}</div>
            <div className='footerLinks'>
                <a href='/about'>About</a>
                <span>Contact us :</span>
                <a href='#'><FiMail /></a>
                <a href='#'><FaFacebookF /></a>
                <a href='#'><FaLinkedinIn /></a>
            </div>
        </div>
    )
}

export default Footer
