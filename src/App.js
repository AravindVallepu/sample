import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
//import Pages from "./Pages";
import Home from "./Pages/Home";
//import About from "./Pages/About";
//import Dashboard from "./Pages/Dashboard";

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
