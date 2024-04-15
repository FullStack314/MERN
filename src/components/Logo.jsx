import reactLogo from '/src/assets/react.svg'
import viteLogo from '/src/assets/vite.svg'

const Logo = ()=>{
  return(
    <>
      <div>
        <a href="#" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /></a>
        <a href="#" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /></a>
      </div>
      <h1>Notes</h1>
    </>
  )
}

export default Logo