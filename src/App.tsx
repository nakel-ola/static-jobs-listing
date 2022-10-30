import Cards from "./components/Cards"
import FilterCard from "./components/FilterCard"
import Navbar from "./components/Navbar"
import { useState } from "react";


function App() {

  const [filter, setFilter] = useState<string[]>([])

  return (
    <div className="bg-neutral-light-grayish-cyan min-h-screen">
      <Navbar />
      {filter.length > 0 && (
        <FilterCard setFilter={setFilter} filter={filter} />

      )}
      <Cards setFilter={setFilter} filter={filter} />
    </div>
  )
}

export default App
