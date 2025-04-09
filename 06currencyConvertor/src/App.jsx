import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isToDisabled, setIsToDisabled] = useState(true);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const prevFrom = from;
    const prevTo = to;

    setFrom(prevTo);
    setTo(prevFrom);
    setAmount(convertedAmount);
    setConvertedAmount(amount);

    if (prevTo.toLowerCase() === "usd") {
      setTo("inr");
      setIsToDisabled(true);
    } else {
      setIsToDisabled(false);
    }
  };

  const convert = () => {
    const rate = currencyInfo[to.toUpperCase()];
  
    if (!rate) {
      alert(`Conversion rate not found for ${from} to ${to}`);
      return;
    }
  
    setConvertedAmount((amount * rate).toFixed(2));
  };
  

  const handleFromChange = (currency) => {
    setFrom(currency);
    if (currency.toLowerCase() === "usd") {
      setTo("inr");
      setIsToDisabled(true);
    } else {
      setIsToDisabled(false);
    }
  };

  return (
    <div
      className="w-full h-screen flex bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Left Image Panel */}
      <div className="w-1/2 hidden md:flex justify-center items-center p-4">
        <img
          src="https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Coding"
          className="max-h-[100%] max-w-[90%] rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Right Conversion Panel */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center 
      backdrop-blur bg-black/30">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-6 shadow-lg bg-white/80 space-y-4">
          {/* From Amount Box */}
          <InputBox
            label="Amount"
            amount={amount}
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={handleFromChange}
            currencyOptions={options}
            selectCurrency={from}
            amountDisable={false}
            currencyDisable={false}
          />

          {/* Swap Button */}
          <div className="relative w-full">
            <div className="w-full h-0.5 bg-gray-300 my-2"></div>
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Amount Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-4"
          >
            <InputBox
              label="Converted To"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={options}
              selectCurrency={to}
              amountDisable={true}
              currencyDisable={isToDisabled}
              isToCurrencyBox={true}
              fromCurrency={from}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
