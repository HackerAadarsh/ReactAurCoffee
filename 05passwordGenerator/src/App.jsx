import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) chars += "0123456789"
    if (charAllowed) chars += "!@#$%^&*-_+=[]{}~`"

    if (chars.length === 0) {
      setPassword("Please enable characters!")
      return
    }

    let pass = Array.from({ length }, () => 
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('')

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-2xl text-center text-white font-semibold mb-4">🔐 Password Generator</h1>

      {/* Output & Copy Button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="w-full px-3 py-2 outline-none text-white"
          placeholder="Generated Password"
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-700 text-white px-4 font-semibold hover:bg-blue-800 transition-all"
        >
          COPY
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center justify-between">
          <label htmlFor="length">Length: {length}</label>
          <input
            id="length"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-1/2 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="numbers">Include Numbers</label>
          <input
            type="checkbox"
            id="numbers"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="characters">Include Special Characters</label>
          <input
            type="checkbox"
            id="characters"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
