import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachList => ({
      id: eachList.id,
      currencyLogo: eachList.currency_logo,
      currencyName: eachList.currency_name,
      euroValue: eachList.euro_value,
      usdValue: eachList.usd_value,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-tracker-container">
            <h1 className="tracker-heading">Cryptocurrency Tracker</h1>
            <img
              className="cryptocurrency-logo"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="crypto-list-container">
              <div className="header">
                <p className="header-text">Coin Type</p>
                <div className="currency-type-container">
                  <p className="currency-type">USD</p>
                  <p className="currency-type">EURO</p>
                </div>
              </div>
              <ul className="list-conatiner">
                {cryptoList.map(eachList => (
                  <CryptocurrencyItem eachList={eachList} key={eachList.id} />
                ))}
              </ul>
              )
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
