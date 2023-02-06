import { SkeletonTheme } from "react-loading-skeleton"
import { GithubProvider } from "./context/GithubContext"
import { Home } from "./pages/Home"

function App() {
  return (
    <SkeletonTheme baseColor="#081726" highlightColor="#0e1f30">
      <GithubProvider>
        <Home />
      </GithubProvider>
    </SkeletonTheme>
  )
}

export default App
