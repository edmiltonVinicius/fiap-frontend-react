import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import Effects from './pages/Effects'
import BookDetails from './pages/BookDetails'
import Books from './pages/Books'
import Login from './pages/Login'

/**
 * COMPONENTES
 *  .jsx = javascript + html
 *  Todo componente tem que ter letra maiuscula
 *  Todo componente react é uma função que retorna html + javascript
 *  <NomeComponente></NomeComponente>
 *  <NomeComponente />
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'efeitos',
        element: <Effects />,
      },
      {
        path: 'livros/:bookId',
        element: <BookDetails />
      },
      {
        path: 'livros',
        element: <Books />
      }
    ]
  },
  {
    path: 'auth',
    element: <Login />
  }
])

/**
 * 
 * <Root>
 *  <Effects />
 * </Root>
 */
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
