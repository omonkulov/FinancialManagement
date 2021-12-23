import ThemeToggle from "./components/ThemeToggle";
import TodayDate from "./components/TodayDate";

function App() {
  return (
    <div className="min-h-bg-white dark:bg-black h-screen">
      <TodayDate></TodayDate>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default App;
