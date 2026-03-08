'use client'

const FavoriteButton = () => {
  return (
    <button
        onClick={() => console.log('Clicked !')}
        className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
    >
        Add to Favorites
    </button>
  )
}

export default FavoriteButton