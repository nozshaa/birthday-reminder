import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} age="3" />
        <button onClick={() => console.log("you clicked on me!")}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
