import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw", 
      height: "100vh",
      backgroundColor: "red",
      color: "white",
      fontSize: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      zIndex: 9999
    }}>
      NURI WORKS!
    </div>
  );
}

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
