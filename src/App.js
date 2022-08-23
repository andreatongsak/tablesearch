import { useEffect, useState } from "react";
import { Users } from "./users";
import './App.css';
import Table from "./Table";

/// API SEARCH
// Connect to Active Directory

function App() {
  const [query, setQuery] = useState("");
  const keys = ["status", "lastName", "firstName", "idsid", "wwid", "member", "fullName"]

  // A function that filters the items
  const search = (data) => {
    // problem: need to connect to active directory groups.
    // how to do that?
    return data.filter(item => item.firstName.toLowerCase().includes(query) || item.lastName.toLowerCase().includes(query));
  };

  return (
    <div className="App">
      <input 
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={search(Users)} />}
    </div>
  );
}

export default App;
