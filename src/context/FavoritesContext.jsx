'use client'

import { createContext , useState , useContext } from 'react'



const FavoritesContext = createContext()



export const FavoritesProvider = ({children}) => {

    const [favorites , setFavorites] = useState([])

    const addToFavorites = (country) => {
        setFavorites(prev => [...prev , country])
    }

    return (
        <FavoritesContext.Provider value={{addToFavorites , favorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}   



export const useFavorites = () => useContext(FavoritesContext)