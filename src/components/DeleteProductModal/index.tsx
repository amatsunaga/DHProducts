import { useContext } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../../contexts/ModalContext";

// ReactModal.setAppElement("#root");

export const DeleteProductModal = () => {
    const { isDeleteProductOpen, setDeleteProductOpen } = useContext(ModalContext);
 
    return (
        <ReactModal
            isOpen={isDeleteProductOpen}
            onRequestClose={() => setDeleteProductOpen(false)}
            style={{
                overlay: {
                    background: "rgba(43, 43, 43, 0.61)"
                },
                content: {
                    width: "40%",
                    height: "32%",
                    padding: "30px",
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
            <h2 className="text-center text-xl font-semibold mb-8 font-poppins">Excluir Produto</h2>
            <p className="text-xl font-light text-center mb-12 font-poppins">Deseja realmente excluir o item?</p>
            <div className="flex items-center justify-center gap-1 font-poppins">
                    <button
                        className="w-1/3 bg-yellow05 rounded-lg p-2.5 text-base text-black"
                        onClick={(e) => handleSubmit(e)}
                        >Sim
                    </button>
                    <button
                        className="w-1/3 border border-yellow05 text-yellow05 rounded-lg p-2.5 text-base"
                        >Não
                    </button>
                </div>
        </ReactModal>
    )
}