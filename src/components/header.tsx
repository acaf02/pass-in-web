import nlwIcon from './assets/nlw-icon.svg'

export function Header(){
    return (
        <div className='flex itens-center gap-5 py-2'>
          <img src={nlwIcon} />

          <nav className='flex itens-center gap-5'>
            <a href="" className='font-medium text-sm text-zinc-300'>Eventos</a>
            <a href="" className='font-medium text-sm'>Participantes</a>
          </nav>
        </div>
    )
}