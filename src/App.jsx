import {Outlet} from 'react-router-dom';
import "./app.scss"
function App(){
  return (
    <>
      <div className='mainBg'>
        <div className='container p-2'>
          <h1 className='title d-flex justify-content-center'>Welcom to Weather App</h1>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App