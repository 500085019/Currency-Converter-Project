import { useState , useEffect } from 'react'


const useCurrencyConverter = (FromCurrency, toCurrency, amount,exchangeRates,rate) =>  {

    const [convertedAmount, SetConvertedAmount] = useState(0);

    useEffect = () => {
        if (FromCurrency && toCurrency && amount) {
            const rate = exchangeRates[toCurrency] / exchangeRates[FromCurrency];
        } SetConvertedAmount((amount * rate).toFixed(2));
    }, [FromCurrency, toCurrency, amount,exchangeRates,rate]

    return convertedAmount

};


  

export default useCurrencyConverter
