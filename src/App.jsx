import { createContext, useState } from "react"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "./pages/Details"
import Dashboard from "./pages/Dashboard"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Account from "./pages/Account"

export const ThemeContext = createContext()
function App() {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = e => setIsDark(!isDark)
  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>
    <div className={`${isDark ? "dark" : ""}`}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Account />} />
          <Route path='/project-details/:pid' element={<Details />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  </ThemeContext.Provider>
}

export default App