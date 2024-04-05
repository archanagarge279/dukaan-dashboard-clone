import { RevenueCard1 } from './components/RevenueCard1'
import { RevenueCard2 } from './components/RevenueCard2'
import { Sidebar } from './components/Sidebar'
import './App.css'
import { Topbar } from './components/Topbar'

function App() {

  return (
    <div className='flex'>
      <div className='basis-1/6'>
        <Sidebar />
      </div>
      <div className='basis-5/6'>
        <Topbar />
        <br />
        <RevenueCard1 title={"Amount Pending"} amount={"92,312.20"} orderCount={13} bgcolor={"true"} />
        <RevenueCard2 title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
        <RevenueCard2 title={"Amount Pending"} amount={"92,312.20"} />
      </div>
    </div>

  )
}

export default App
