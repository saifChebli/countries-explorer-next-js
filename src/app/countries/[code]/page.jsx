import FavoriteButton from "@/components/FavoriteButton"


async function getCountryByCode(code){
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await response.json()
    return data[0]
}



const CountryDetails = async ({ params }) => {

    const { code } = await params
    
    const country = await getCountryByCode(code)
    return (
        <div className="p-10">
            <img className="w-1/2" src={country.flags.png} alt={country.flags.alt} />

            <h1 className="text-3xl font-bold mt-4">
                {country.name.common}
            </h1>

            <p className="text-gray-600 font-semibold">Population : {country.population}</p>
            <p className="text-gray-600 font-semibold">Region : {country.region}</p>
            <p className="text-gray-600 font-semibold">Capital : {country.capital}</p>
            <div className="mt-4">
                <FavoriteButton />
            </div>
        </div>
    )
}

export default CountryDetails