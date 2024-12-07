import "./App.css";
import "aos/dist/aos.css";
import PageRoute from "./routes";
import { useEffect, useState } from "react";
import AOS from "aos";
import Loading from "./components/loading";
import Index from "./pages";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname !== "/") {
      setIsStart(true);
    }
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    if (isStart === true) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isStart]);

  return (
    <div className="App">
      {!isStart ? (
        <Index onStart={() => setIsStart(true)} />
      ) : (
        <>
          (isLoading ? <></> : <PageRoute />)
          <Loading isLoading={isLoading} />
        </>
      )}
    </div>
  );
}

export default App;
