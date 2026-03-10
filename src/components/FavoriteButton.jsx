'use client'

import { useFavorites } from "@/context/FavoritesContext"

const FavoriteButton = ({selectedCountry}) => {

const { favorites , addToFavorites } = useFavorites()
  

  const isFavorite = favorites.includes(selectedCountry) // true or false

  return (
    <button
        disabled={isFavorite}
        onClick={() => addToFavorites(selectedCountry)}
        className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
    >
       {isFavorite ? 'Added ✅' : 'Add to Favorites'} 
    </button>
  )
}

export default FavoriteButton