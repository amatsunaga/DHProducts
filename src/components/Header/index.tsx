import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
    const { removeToken } = useContext(AuthContext);
      const navigate = useNavigate();

    const logout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault;
        removeToken();
        navigate(".../login");
    };

    return (
        <header className="w-full flex justify-between bg-yellow05 py-5 px-12 shadow-md">
            <Link to={"/"} className="font-bold text-xl text-[#101010]">
                DHProducts
            </Link>
            <div className="flex gap-10">
                <Link
                to={"/produtos"}
                className="font-light text-lg text-[#101010]"
                >
                Produtos
                </Link>
                <Link to={"/quem-somos"} className="font-light text-lg text-[#101010]">
                Quem somos
                </Link>
                <button
                    className="font-light text-lg text-[#101010]"
                    onClick={(e) => logout(e)}
                >
                    Sair
                </button>
            </div>
        </header>
    )
}