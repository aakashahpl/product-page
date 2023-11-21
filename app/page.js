import Image from 'next/image'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Options from './components/options'

export default function Home() {
  return (
    <main className="overflow-hidden">
        
      <Navbar/>
      <Landing/>
      <Options/>  
    </main>
  )
}
