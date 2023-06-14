import { useState } from "react"
import { createContext } from "react";

interface ModalContextData {
    isAddProductOpen: boolean;
    setAddProductOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isEditProductOpen: boolean;
    setEditProductOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isDeleteProductOpen: boolean;
    setDeleteProductOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  interface Props {
    children: React.ReactNode;
  }

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider: React.FC<Props> = ({children}) => {
    const [isAddProductOpen, setAddProductOpen] = useState<boolean>(false);
    const [isEditProductOpen, setEditProductOpen] = useState<boolean>(false);
    const [isDeleteProductOpen, setDeleteProductOpen] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{isAddProductOpen, setAddProductOpen, isEditProductOpen, setEditProductOpen, isDeleteProductOpen, setDeleteProductOpen}}>
            {children}
        </ModalContext.Provider>
    )
}