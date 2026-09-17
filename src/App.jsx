import './App.css'
import UserForm from './components/Users/UserForm'
import FruitList from './components/Fruits/FruitList'
import UserTable, { dummyUsers } from './components/userTable/UserTable'

function App() {
  // here is comment for safe my stack 
  return (
    <div className="container">
      <div className="card">
        <div className="badge">DOM Form</div>
        <h1 className="title">Hello World</h1>
        <p className="subtitle">Submit the form below to add items directly to the DOM.</p>
        <UserForm />
        <FruitList />
        <UserTable users={dummyUsers} />
      </div>
    </div>
  )
}

export default App

