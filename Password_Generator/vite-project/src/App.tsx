import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [IncludeUpperCase, setIncludeUpperCase] = useState<boolean>(true);
  const [IncludeSpacialChar, setIncludeSpacialChar] = useState<boolean>(false);
  const [IncludeNumber, setIncludeNumber] = useState<boolean>(false);
  const [PasswordLength, setPasswordLength] = useState<number>(15);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Password, setPassword] = useState<string>("");
const SuccesBox = useRef<HTMLDivElement>(null);


  const handelFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const lowerCase:string = "abcdefghijklmnopqrstuvwxyzw"
    const upperCase:string = lowerCase.toUpperCase()
    const Number:string ="0123456789"
    const spicalChar =`!@#$%^&*()_+-=|;":<>./`
    const char:string = lowerCase+ 
    (IncludeNumber? Number:"")+
    (IncludeUpperCase?upperCase:"")+
    (IncludeSpacialChar?spicalChar:"")
    let  pw:string = ""
    for (let index = 0; index < PasswordLength; index++) {
      pw+= char[Math.floor(Math.random()* char.length)]
     setPassword(pw) 
    }
  };
const CopyPasswordToClipbord = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  navigator.clipboard.writeText(Password);
SuccesBox.current?.classList.add("active_success");
setTimeout(() => {
  SuccesBox.current?.classList.remove("active_success");
}, 3000);


};

  return (
    <div className="Password_genrated min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 py-10 px-4">
      <form
        onSubmit={handelFormSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 space-y-5 border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">
          🔐 Password Generator
        </h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Customize your password options below
        </p>

        <label
          htmlFor="IncludeUpper_Case"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <span className="text-gray-700 font-medium">
            IncludUpperCase Letters:
          </span>
          <input
            type="checkbox"
            id="IncludeUpperCase"
            name="IncludeUpperCase"
            checked={IncludeUpperCase}
            onChange={() => {
              setIncludeUpperCase(!IncludeUpperCase);
            }}
            className="w-5 h-5 accent-sky-600 cursor-pointer"
          />
        </label>

        <label
          htmlFor="IncludeSpicalCharcters"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <span className="text-gray-700 font-medium">
            IncludeSpacialChar Letters:
          </span>
          <input
            type="checkbox"
            id="IncludeSpacialChar"
            name="IncludeSpacialChar"
            checked={IncludeSpacialChar}
            onChange={() => {
              setIncludeSpacialChar(!IncludeSpacialChar);
            }}
            className="w-5 h-5 accent-sky-600 cursor-pointer"
          />
        </label>

        <label
          htmlFor="IncludeNumber"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <span className="text-gray-700 font-medium">
            IncludeNumber Letters:
          </span>
          <input
            type="checkbox"
            id="IncludeNumber"
            name="IncludeNumber"
            checked={IncludeNumber}
            onChange={() => {
              setIncludeNumber(!IncludeNumber);
            }}
            className="w-5 h-5 accent-sky-600 cursor-pointer"
          />
        </label>

        <label className="block bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition">
          <span className="text-gray-700 font-medium">Password Length:</span>
          <div className="flex items-center gap-3 mt-2">
            <input
              type="range"
              id="PasswordLength"
              name="PasswordLength"
              value={PasswordLength}
              min={5}
              max={25}
              onChange={(e) => {
                setPasswordLength(parseInt(e.target.value));
              }}
              className="flex-1 cursor-pointer accent-sky-600"
            />
            <div className="pw_length text-gray-700 font-semibold w-8 text-center">
              {PasswordLength}
            </div>
          </div>
        </label>

        <div className="result text-center bg-gray-100 text-gray-800 font-mono text-sm p-3 rounded-lg border border-gray-200">
          {Password || "Your password will appear here"}
        </div>

        <div className="optines flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="submit"
            className="Genrated flex-1 bg-sky-600 text-white py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition shadow-md"
          >
            Genrated
          </button>
          <button
            type="button"
            className="CopyPassword flex-1 bg-gray-200 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition shadow-md"
            onClick={CopyPasswordToClipbord}
          >
            Copy Password
          </button>
        </div>

 <div
  className="sucsess_mass fixed top-5 right-5 opacity-0 translate-y-[-20px] transition-all duration-500 ease-out pointer-events-none
  text-green-700 font-medium bg-green-50 border border-green-300 rounded-lg py-2 px-4 shadow-lg"
  ref={SuccesBox}
>
  <p>succsesfuly Copy To Clipbord ! </p>
</div>

      </form>
    </div>
  );
}

export default App;
