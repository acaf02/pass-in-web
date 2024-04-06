import nlwIcon from '../assets/nlw-icon.svg'
import { NavLink } from './nav-link'

export function Header(){
    return (
        <div className='flex itens-center gap-5 py-2'>
          <img src={nlwIcon} />

          <nav className='flex itens-center gap-5'>
            <NavLink href="/eventos">Eventos</NavLink>
            <NavLink href="/participates">Participantes</NavLink> 
          </nav>
        </div>
    )
}