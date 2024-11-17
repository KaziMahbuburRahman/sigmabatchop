import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("Mahbub")
  const [form, setForm] = useState({name:"",phone:""})
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
    <input type="text" name="email" value={form.email} onChange={handleChange} id="" />
    <input type="text" name="phone" value={form.phone} onChange={handleChange} id="" />
    </>
  )
}

export default App
