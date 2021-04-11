import Coins from "./Coins";

{/* In deze component parseer ik alle variabels van de api id,symbol,naam ect.*/}
export default function CoinList({ filteredCoins }) {
    return (
        <>
        {filteredCoins.map(coin => {
            return (
            <Coins 
                id={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                key={coin.id}
                volume={coin.total_volume}
                price={coin.current_price}
                marketcap={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
     </>
    );
}