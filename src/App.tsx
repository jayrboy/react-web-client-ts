import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Product from './models/Product'
import ProductList from './components/ProductList'

function App(): JSX.Element {
  const [data, setData] = useState<Product[] | string>('')

  const getData = async () => {
    const url = 'http://localhost:5000/product'

    try {
      const resp = await fetch(url)
      const json: Product[] = await resp.json()
      setData(json)
    } catch (err: any) {
      setData(err.message)
    }
  }

  useEffect(() => {
    getData()
  }, [data])

  return (
    <div className="App">
      <header>
        <img src={reactLogo} className="logo" alt="React Logo" />
        <img src={viteLogo} className="logo" alt="Vite Logo" />
        <h1>Product List</h1>
      </header>
      <ProductList data={data} />
    </div>
  )
}

export default App
