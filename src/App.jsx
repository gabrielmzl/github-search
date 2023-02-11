import { SkeletonTheme } from "react-loading-skeleton"
import { GithubProvider } from "./context/GithubContext"
import { Home } from "./pages/Home"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <SkeletonTheme baseColor="#081726" highlightColor="#0e1f30">
      <GithubProvider>
        <Home />

        <ToastContainer />
      </GithubProvider>
    </SkeletonTheme>
  )
}

export default App
