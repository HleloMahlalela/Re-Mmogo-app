import "./styles/global.css";
import Navbar from "./components/Navbar";

// Import pages
import Register from "./pages/Register";
import Balances from "./pages/Balances";
import Contributions from "./pages/Contributions";
import Enroll from "./pages/Enroll";
import Loans from "./pages/Loans";
import Reports from "./pages/Reports";

function App() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Main app content */}
      <main className="main-container">
        <Enroll />
      </main>
    </>
  );
}

export default App;