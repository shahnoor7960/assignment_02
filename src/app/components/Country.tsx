interface CountryInfo {
    name: string;
    population: number;
    capital: string;
  }
  
  interface CountryDetailsProps {
    CountryInfo?: CountryInfo;
    url: string; 
  }
export default function CountryDetails(data:CountryDetailsProps) {
    return (
     <>
     <div>
       {
        data.CountryInfo ? (
            <div>
                <h1>
                Country Name :{ data.CountryInfo.name}</h1>
               <h1> Country Population :{ data.CountryInfo.population}</h1>
               <h1> Country Capital :{ data.CountryInfo.capital}
                </h1>
            </div>
        ):(
            <div>
                <h1>{data.url} not found</h1>
            </div>
        ) 
       }
  </div>
    </>
    );
  }
  