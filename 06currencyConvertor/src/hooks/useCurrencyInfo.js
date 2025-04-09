import { useEffect, useState } from "react";



function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(` https://v6.exchangerate-api.com/v6/785869a6cc5d522fa0020bcf/latest/USD/${currency}`)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
