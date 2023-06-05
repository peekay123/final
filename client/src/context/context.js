import React, {useState, createContext} from "react";

export const PetifyContext = createContext();

export const PetifyContextProvider = props => {
    const [pets, setPets] = useState([]);
    const [message, setMessage] = useState([]);
    const addPets = (pet) => {
        setPets([...pets, pet])
    }

    const addMessage = (message) => {
        setMessage([...message, message])
    }

    return (
        <PetifyContext.Provider value={{pets, setPets, addPets, message, setMessage, addMessage}}>
            {props.children}
        </PetifyContext.Provider>
    )
}