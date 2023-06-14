import {useContext} from "react";
import { Link } from "react-router-dom"
import { ProductCard } from "../../components/ProductCard"
import { Header } from "../../components/Header"
import plusIcon from "../../assets/plusIcon.svg"
import { AddProductModal } from "../../components/AddProductModal"
import { ModalContext } from "../../contexts/ModalContext"

export const Products = () => {
    const {setAddProductOpen} = useContext(ModalContext);

    return (
        <div className="min-h-screen font-poppins">
            <Header />
            <AddProductModal />
            <section className="px-16 py-11">
                <h2 className="text-xl font-semibold mb-5">Produtos</h2>
                <ul className="grid grid-cols-5 gap-y-9 gap-x-8">
                    <Link to={`1`}>
                        <ProductCard />                
                    </Link>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ul>
                <button 
                    className="bg-yellow05 fixed right-10 bottom-9 p-8 font-bold rounded-[50%] shadow-lg"
                    onClick={() => setAddProductOpen(true)}    
                >
                    <img src={plusIcon} alt="" />
                </button>
            </section>
        </div>
    )
}