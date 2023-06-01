import './index.css'

const CryptocurrencyItem = props => {
  const {eachList} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachList

  return (
    <li className="body">
      <div className="logo-name-container">
        <img className="crypto-image" src={currencyLogo} alt={currencyName} />
        <p className="crypto-name">{currencyName}</p>
      </div>
      <div className="currency-in-usd-euro-container">
        <p className="currency-in-usd">{usdValue}</p>
        <p className="currency-in-euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
