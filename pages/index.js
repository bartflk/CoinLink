import {useState} from 'react'
import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import bootstrap from "bootstrap/dist/css/bootstrap.css";

{/* Dit is de front page */}
{/* Hieronder heb je functie om alle filteredCoins met de search bar te filteren (hoeft niet voor de opdracht maar heb ik toch gedaan)*/}
{/* Ik call van de API 50 crypro projecten per pagina, dus een search functie die werkt is nice */}

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleChange = e => {
      e.preventDefault()

      setSearch(e.target.value.toLowerCase())
    }

  {/* Hieronder heb ik de componenten Searchbar en CoinList onder elkaar in een div om het te centeren */}
  {/* Ik heb een layout gemaakt die zit in '../components/Layout' zodat het wat netter is*/}
  return (
    <Layout>
      <div className='coin_app'>
      <SearchBar type="text" placeholder="Search" onChange={handleChange}/>
      <CoinList  filteredCoins={allCoins} />  
      </div>
    </Layout>
  );
}

{/* Hier heb je functie om de coins op te halen en het haalt alle info wanneer de prijzen updaten  */}
{/* Ik gebruik getServerSideProps omdat het om crypto gaat, de prijzen veranderen veel dus het leek me normaal om dat te doen  */}
export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  );

  const filteredCoins = await res.json()
  
  return {
    props: {
      filteredCoins
    }
  }
};