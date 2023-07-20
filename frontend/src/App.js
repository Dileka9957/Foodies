import MainRoutes from "./routes/MainRoutes";
import './App.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <RouterProvider router={MainRoutes} />
    </div>
  );
}

export default App;
