import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { saveToken } = useContext(AuthContext);
    const navigate = useNavigate();
  
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault;
      console.log(formData);
      saveToken(formData.email);
      navigate("../produtos");
    }
  
    return (
      <div className="min-h-screen min-w-full bg-yellow05 flex justify-center items-center font-poppins">
        <div className="w-4/12 bg-white border-solid border border-[#D8D8D8] rounded-xl h-min shadow-md p-10">
          <h2 className="text-center text-xl font-bold text-[#353535] mb-5">Login</h2>
          <p className="text-base font-light mb-5">
          Entre com seus dados corretamente para acessar o sistema.
          </p>
          <form className="flex flex-col gap-6">
            <input
              type="email"
              value={formData.email}
              className="border-solid border border-[#D1D1D1] bg-[#f5f5f5] rounded-lg py-2.5 px-4 placeholder-[#767676]"
              placeholder="Digite seu email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              value={formData.password}
              className="border-solid border border-[#D1D1D1] bg-[#f5f5f5] rounded-lg py-2.5 px-4 placeholder-[#767676]"
              placeholder="Digite sua senha"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button className="bg-yellow05 rounded-lg p-2.5 text-base text-black" onClick={(e) => handleSubmit(e)}>Entrar</button>
          </form>
        </div>
      </div>
    );}