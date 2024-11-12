import { useState, useEffect } from 'react';
import './App.css';

const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  INR: 74,
  AUD: 1.25
  
};

function App() {
  const [fromCurrency, SetFromCurrency] = useState('INR');
  const [toCurrency, SetToCurrency] = useState('USD');
  const [amount, SetAmount] = useState(1);
  const [convertedAmount, SetConvertedAmount] = useState(0);
  
  
  const HandleAmountChange = (newAmount) => {
    SetAmount(newAmount);
  };
  
  const HandleFromCurrencyChange = (currency) => {
    SetFromCurrency(currency);
  };
  
  const HandleToCurrencyChange = (currency) => {
    SetToCurrency(currency);
  };

  useEffect(() => {
    if (fromCurrency && toCurrency && amount) {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      SetConvertedAmount((amount * rate).toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency]);

  const SwapCurrency = () => {
    SetFromCurrency(toCurrency);
    SetToCurrency(fromCurrency);
  };

  const currencyOptions = Object.keys(exchangeRates);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-center mb-4">CurrencyConverter</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">From</label>
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={amount}
            onChange={(e) => HandleAmountChange(Number(e.target.value))}
          />
          <select
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={fromCurrency}
            onChange={(e) => HandleFromCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={SwapCurrency}
          >
            Swap
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">To</label>
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={convertedAmount}
            disabled
          />
          <select
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={toCurrency}
            onChange={(e) => HandleToCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
            onClick={() => {}}
          >
            Convert {fromCurrency} to {toCurrency}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
