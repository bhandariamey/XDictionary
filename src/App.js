import { useState } from "react";

function App() {

  const [userWord, setUserWord] = useState("")
  const [searchedData, setSearchedData] = useState([{'a':''}])

  const data = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

  const handleSearch = () => {
    setSearchedData(data.filter((ele)=>
      ele.word.toLowerCase() === userWord.toLowerCase()
    ))
  }

  return (
    <>

      <h1>Dictionary App</h1>
      <input onChange={(e)=>{setUserWord(e.target.value)}} type='text' placeholder='Search for a word...' value={userWord} />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      {Object.keys(searchedData).length!==1 ? <p >Word not found in the dictionary.</p> : <p>{searchedData[0].meaning}</p>}
    </>
  );
}

export default App;
