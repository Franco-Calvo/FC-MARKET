import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react'

function App(){
    return(
       <Provider>
        <RouterProvider/>
       </Provider> 
    )
}

export default App;
