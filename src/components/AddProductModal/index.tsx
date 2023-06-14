import { useState, useContext } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../../contexts/ModalContext";

ReactModal.setAppElement("#root");

export const AddProductModal = () => {
    const { isAddProductOpen, setAddProductOpen } = useContext(ModalContext);
    const [formData, setFormData] = useState({})
 
    return (
        <ReactModal
            isOpen={isAddProductOpen}
            onRequestClose={() => setAddProductOpen(false)}
            style={{
                overlay: {
                    background: "rgba(43, 43, 43, 0.61)"
                },
                content: {
                    width: "40%",
                    height: "70%",
                    padding: "40px",
                    border: "1px solid #D8D8D8",
                    borderRadius: "12px",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    translate: "-50% -50%",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                }
            }}
        >
            <h2 className="text-center text-xl font-semibold mb-8 font-poppins">Cadastrar Produto</h2>
            <form className="flex flex-col gap-6 font-poppins">
                <input
                type="text"
                value={formData.email}
                className="border-solid border border-[#D1D1D1] bg-[#f5f5f5] rounded-lg py-2.5 px-4 placeholder-[#767676]"
                placeholder="Nome do Produto"
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
                />
                <div className="flex gap-2.5">
                    <input
                    type="text"
                    value={formData.password}
                    className="w-1/2 border-solid border border-[#D1D1D1] bg-[#f5f5f5] rounded-lg py-2.5 px-4 placeholder-[#767676]"
                    placeholder="Nome do Produto"
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                    />
                    <select
                        name=""
                        id=""
                        placeholder="Fornecedor"
                        className="w-1/2 border-solid border border-[#D1D1D1] bg-[#f5f5f5] rounded-lg py-2.5 px-4 text-[#767676]">
                            <option value="" disabled hidden>Fornecedor</option>
                    </select>
                </div>
                <input 
                    type="text"
                    placeholder="Url da imagem"
                    className="border-solid border border-[#D1D1D1] bg-[#f5f5f5] rounded-lg py-2.5 px-4 placeholder-[#767676]"    
                />
                <textarea
                    name=""
                    id=""
                    placeholder="Descrição"
                    className="h-28 border-solid border border-[#D1D1D1] bg-[#f5f5f5] rounded-lg py-2.5 px-4 placeholder-[#767676]">
                </textarea>

                <div className="flex items-center justify-center gap-1">
                    <button
                        className="w-1/3 bg-yellow05 rounded-lg p-2.5 text-base text-black"
                        onClick={(e) => handleSubmit(e)}
                        >Salvar
                    </button>
                    <button
                        className="w-1/3 border border-yellow05 text-yellow05 rounded-lg p-2.5 text-base"
                        >Cancelar
                    </button>
                </div>
            </form>
        </ReactModal>
    )
}