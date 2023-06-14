import { Header } from "../../components/Header"
import editIcon from "../../assets/editIcon.svg"
import trashIcon from "../../assets/trashIcon.svg"
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext"
import { EditProductModal } from "../../components/EditProductModal";
import { DeleteProductModal } from "../../components/DeleteProductModal";

export const ProductDetail = () => {
    const {setEditProductOpen, setDeleteProductOpen} = useContext(ModalContext);

    return (
        <div className="min-h-screen font-poppins">
            <Header />
            <EditProductModal />
            <DeleteProductModal />
            <section className="px-20 py-9">
                <div className="flex gap-2 justify-end mb-2.5">
                    <img
                        src={editIcon}
                        alt=""
                        className="border border-yellow05 rounded-full p-2.5 shadow-md"
                        onClick={() => setEditProductOpen(true)}
                    />
                    <img
                        src={trashIcon}
                        alt=""
                        className="bg-yellow05 rounded-full p-2.5 shadow-md"
                        onClick={() => setDeleteProductOpen(true)} 
                    />
                </div>
                <div>
                    {/* <img src="" alt="" /> */}
                </div>
                <div>
                    <div>
                        <h2 className="text-2xl font-semibold">Echo Dot (8ª Geração)</h2>
                        <p className="text-sm font-light">638741b80ee1ee0008ff71bc</p>
                    </div>
                    <h3 className="text-3xl font-semibold mt-9 mb-5">R$ 4500,00</h3>
                    <div className="text-base font-light">
                        <h4>Acer</h4>
                        <p>Processador Intel Core i5-10300H - Quad Core – 10ª Geração Tecnologia DTS X: Ultra Áudio Teclado retroiluminado na cor vermelha Tecla Nitro Sense Habilitado para upgrade Tela de 15,6” IPS com resolução Full HD Nome da marca do produto: Acer NVIDIA GeForce GTX 1650 com 4 GB de memória dedicada GDDR6</p>
                    </div>
                </div>
            </section>
        </div>
    )
}