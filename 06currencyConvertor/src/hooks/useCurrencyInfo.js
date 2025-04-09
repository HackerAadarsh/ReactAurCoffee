import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/785869a6cc5d522fa0020bcf/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.conversion_rates) {
          setData(res.conversion_rates);
        }
      })
      .catch((error) => console.error("Failed to fetch exchange rates:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
