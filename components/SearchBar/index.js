import styles from './Search.module.css';

{/* Hier heb ik de search bar met wat css classes aan gesproken */}
 {/* Heel simpel input, niks bijzonders */}
const SearchBar = ({...rest}) => {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} {...rest}/>
        </div>
    )
}

export default SearchBar
