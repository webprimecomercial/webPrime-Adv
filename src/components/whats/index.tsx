import { Whats } from './styles'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsApp() {
  return (
    <Whats>
      <a href="#" target="_blank" rel="noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </Whats>
  )
}
