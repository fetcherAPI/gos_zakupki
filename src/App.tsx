import "./App.css";
import { Link } from "react-router-dom";
import { URLS_PTH } from "./typescript/urlPath/urlsPath";

function App() {
  return (
    <div className='App'>
      <Link to={URLS_PTH.LOGIN}>Войти</Link>
    </div>
  );
}

export default App;
