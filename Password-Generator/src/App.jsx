import { useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false); // State to manage icon feedback
  const copyTimerRef = useRef(null); // 2. Create a reference to hold our timer ID

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    return pass;
  };

  const handleCopy = () => {
    if (generatePassword) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      // Clear any existing timer if the user clicks rapidly
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }

      // Set the fresh single-run alarm clock
      copyTimerRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  return (
    <div className="min-h-screen bg-[#FFF0E4] flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#24B1B1] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFE0C5] rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#24B1B1]/15 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#007979]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V8a5 5 0 00-10 0v3H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-[#007979]">
              Password Generator
            </h1>
            <p className="text-gray-500">Create strong passwords in seconds</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <label className="block text-[#007979] font-semibold mb-3">
            Generated Password
          </label>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Password"
              value={password}
              readOnly
              className="flex-1 h-16 px-5 text-lg rounded-xl border border-gray-200 bg-gray-50 text-[#007979] outline-none"
            />

            <button
              onClick={handleCopy}
              disabled={!password}
              className={`w-16 h-16 rounded-xl border transition flex items-center justify-center cursor-pointer ${
                password
                  ? copied
                    ? "bg-green-50 border-green-200 text-green-600"
                    : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-[#007979]"
                  : "bg-red-100 border-red-200"
              }`}
              title="Copy to clipboard"
            >
              {copied ? (
                // Success Checkmark Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                // Modern Clipboard Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => {
                setPassword(generatePassword);
              }}
              className="w-16 h-16 rounded-xl bg-[#007979] text-white hover:bg-[#24B1B1] transition"
              title="Generate new password"
            >
              ↻
            </button>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#007979]">Strong</span>
              <span className="text-sm text-gray-500">100%</span>
            </div>

            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-[#007979] to-[#24B1B1]"></div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <label className="font-semibold text-[#007979]">
                Password Length
              </label>

              <span className="px-3 py-1 rounded-lg bg-[#24B1B1]/15 text-[#007979] font-bold">
                {length}
              </span>
            </div>

            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="slider w-full h-2 rounded-full bg-[#FFE0C5] accent-[#007979]"
            />

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>8</span>
              <span>32</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <label className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#24B1B1]/40 transition cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-5 h-5 accent-[#007979]"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[#007979]">
                  Include Characters
                </h3>
                <p className="text-sm text-gray-500">
                  Add uppercase and lowercase letters
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#24B1B1]/15 flex items-center justify-center text-[#007979] font-bold">
                @#
              </div>
            </label>

            <label className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#24B1B1]/40 transition cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-5 h-5 accent-[#007979]"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[#007979]">
                  Include Numbers
                </h3>
                <p className="text-sm text-gray-500">
                  Add numeric digits (0-9)
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#24B1B1]/15 flex items-center justify-center text-[#007979] font-bold">
                123
              </div>
            </label>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-[#FFE0C5]/50 border border-[#FFE0C5]">
          <p className="text-[#007979] font-medium">
            💡 Use at least 12 characters for stronger security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
