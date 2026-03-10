import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CountryCard = ({country}) => {
  return (
    <Link href={`/countries/${country.cca3}`}>
        <div className="shadow-2xl p-4 rounded-xl cursor-pointer">
            <Image 
              className='h-48 object-cover' 
              src={country.flags.png} 
              alt={country.flags.alt} 
              width={250}
              height={120}
            />
            <h2 className='font-bold mt-2'>
                {country.name.common}
            </h2>
        </div>
    </Link>
  )
}

export default CountryCard