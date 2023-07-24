import { Navbar, Welcome, Transactions, Services, Footer, Learning } from './components';

const App = () => {

  return (
    <>
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Welcome />
        </div>
        <Transactions />
        <Services />
        <Learning />
        <Footer />
      </div>
    </>
  )
}

export default App
