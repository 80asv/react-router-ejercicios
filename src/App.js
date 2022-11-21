import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="App">
        <h1>React Router</h1>
        <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer">React Router Documentation</a>
        <hr />
        {/* <ConceptosBasicos/> */}
        <hr />
        {/* <CrudApi/> */}
        <hr />
        <SongSearch/>
    </div>
  );
}

export default App;
