import CountryCard from "@/components/CountryCard"

async function getCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,cca3')
    return response.json()
}


const CountriesPage = async () => {

    const countries = await getCountries()
    return (
        <div className="grid md:grid-cols-4 gap-6 p-10">
            {
                countries.map(country => (
                    <CountryCard key={country.name.common}  country={country}/>
                ))
            }
        </div>
    )
}


export default CountriesPage