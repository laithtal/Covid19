import Home from "./pages/home/Home";
import { languageChange } from "./Helper/TranslateMethod.Helper";

// Main app which holds the start point of the app!
function App() {
  useEffect(() => {
    languageChange('en');
  }, []);
  return <>
  <Home/>
  </>;
}

export default App;
