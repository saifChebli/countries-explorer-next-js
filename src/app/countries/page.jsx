import CountriesList from "@/components/CountriesList"
import CountryCard from "@/components/CountryCard"

async function getCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,cca3,region')
    return response.json()
}


const CountriesPage = async () => {

    const countries = await getCountries()
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Countries Explorer</h1>
           <CountriesList countries={countries} />
        </div>
    )
}


export default CountriesPage