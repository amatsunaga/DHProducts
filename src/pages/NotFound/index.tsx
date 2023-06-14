import { Link } from "react-router-dom"
import facebookIcon from "../../assets/facebookIcon.svg"
import linkedinIcon from "../../assets/linkedinIcon.svg"

export const NotFound = () => {
    return (
        <div className="min-h-screen font-poppins flex">
            <aside className="w-1/3 px-16 bg-yellow05 flex items-center justify-center">
                <h1 className="text-4xl font-semibold">Ooooopss.</h1>
            </aside>
            <article className="py-16 pl-20 pr-36 text-xl relative flex flex-col gap-48">
                <h2 className="font-semibold mb-4">Página não encontrada</h2>
                <div>
                    <p className="font-light mb-10">Não encontramos essa página em nosso sistema. Verifique se você inseriu a URL corretamente.</p>                    
                    <p className="font-medium text-center">Clique <span className="hover:text-blue-700 hover:font-bold"><Link to="../produtos">aqui</Link></span> para voltar a página inicial</p>                    
                </div>
                <div className="flex gap-9 absolute bottom-36 left-1/2 -translate-x-1/2">
                    <Link to="https://facebook.com" target="_blank">
                        <img src={facebookIcon} alt="" className="hover:scale-110 active:opacity-50" />                    
                    </Link>
                    <Link to="https://linkedin.com" target="_blank">
                        <img src={linkedinIcon} alt="" className="hover:scale-110 active:opacity-50" />                    
                    </Link>
                </div>
            </article>      
        </div>
    )
}