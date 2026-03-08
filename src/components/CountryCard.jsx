import Link from 'next/link'
import React from 'react'

const CountryCard = ({country}) => {
  return (
    <Link href={`/countries/${country.cca3}`}>
        <div className="shadow-2xl p-4 rounded-xl cursor-pointer">
            <img className='h-48 object-cover' src={country.flags.png} alt={country.flags.alt} />
            <h2 className='font-bold mt-2'>
                {country.name.common}
            </h2>
        </div>
    </Link>
  )
}

export default CountryCard