import { Link } from "react-router-dom"
import facebookIcon from "../../assets/facebookIcon.svg"
import linkedinIcon from "../../assets/linkedinIcon.svg"

export const AboutUs = () => {
    return (
        <div className="min-h-screen font-poppins flex">
            <aside className="w-full px-16 bg-yellow05 flex items-center justify-center">
                <h1 className="text-4xl font-semibold">Quem somos</h1>
            </aside>
            <article className="py-16 pl-20 pr-36 text-xl relative">
                <h2 className="font-semibold mb-4">Quem somos</h2>
                <p className="font-light mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, sed molestie mi hendrerit a.</p>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, sed molestie mi hendrerit a. </p>
                <div className="flex gap-9 absolute bottom-36 left-1/2 -translate-x-1/2 pr-36">
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