import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        // Ensure all keys are in uppercase
        const upperCasedRates = {};
        for (const [key, value] of Object.entries(res.rates)) {
          upperCasedRates[key.toUpperCase()] = value;
        }
        setData(upperCasedRates);
      })
      .catch((err) => console.error("API error:", err));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
