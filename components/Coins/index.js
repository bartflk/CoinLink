import styles from './Coins.module.css';

{/* Hier heb je van de CoinList, alle variables die ik ga gebruiken om alles te laten zien */}
const Coins = ({ 
    name,price, symbol, marketcap, volume, image, priceChange, id,  
}) => {
     {/* Hier zijn alle divs die laten naam,prijs,symbol, market cap, volume en percentage zien */}
    return (
    <div className={styles.coin_container}>
        <div className={styles.coin_row}>
            <div className={styles.coin}>
                 {/* Hier heb je de afbeelding van de crypto, als die niet beshikbaar is, dan krijg je de naam */}
                <img src={image} alt="{name}" className={styles.coin_img}/>
                <h1 className={styles.coin_h1}>{name}</h1>
                <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
                <p className={styles.coin_price}>${price}</p>
                <p className={styles.coin_volume}>${volume.toLocaleString()} </p>

                {/* Hieronder wanneer de percentage verandert (0 +/-) dan kleurt het naar rood(-0) of groen(+0), het haalt andere css class op */}
                {priceChange < 0 ? 
                (<p className={styles.coin_percent, styles.red}>
                        {priceChange.toFixed(2)}%</p>
                        ): 
                (<p className={styles.coin_percent, styles.green}>
                        {priceChange.toFixed(2)}%</p>
                        )}
                <p className={styles.coin_marketcap}>
                    Market cap: ${marketcap.toLocaleString()}
                </p> 
            </div>
        </div>
    </div>
    );
};

export default Coins;