export const ProductCard = () => {
    return (
        <li className="bg-white border border-solid border-[#E4E4E4] rounded-lg h-min shadow-md p-4">
            <h3 className="text-base font-semibold">Echo Dot (8ª Geração)</h3>
            <div className="">
                <p>Imagem</p>
                {/* <img src= alt= /> */}
            </div>
            <div className="">
                <h4 className="text-sm font-light">Amazon</h4>
                <p className="text-2xl font-light">R$ 700,99</p>
            </div>
        </li>
      );
}