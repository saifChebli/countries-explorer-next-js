"use client";

import { useFavorites } from "@/context/FavoritesContext";
import Image from "next/image";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Favorite Countries</h1>

      {favorites.length === 0 && <p>No favorites added yet.</p>}
      <div className="grid md:grid-cols-3 gap-4">
        {favorites.map((country) => (
          <div className="space-y-4 p-4 border border-gray-200 shadow-lg">
            <h1>{country.name.common}</h1>
            <Image
              src={country.flags.png}
              alt={country.flags.alt}
              width={200}
              height={120}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
