import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniq: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'ghouse',
    role: 'Software Engineer',
  },
  {
    uniq: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'aazam',
    role: 'Software Engineer',
  },
  {
    uniq: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'aleem',
    role: 'Software Engineer',
  },
  {
    uniq: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'aadil',
    role: 'Software Engineer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniq} />
      ))}
    </ul>
  </div>
)

export default App
