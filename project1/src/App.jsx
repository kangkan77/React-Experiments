import { MainSection } from './components/MainSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen w-full bg-blue-200 flex p-10'>
      <div className='w-full'>
       <Navbar />
        <MainSection />
      </div>
    </div>
  )
}

export default App