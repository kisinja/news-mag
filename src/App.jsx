import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import Copywrite from "./components/Copywrite";
import "./App.css"

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Copywrite/>
    </div>
  )
}

export default App
