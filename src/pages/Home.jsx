import Header from '../components/Header'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header
        title={
          <p>
            Taste the World with
            <br /> Foodie<span className='text-pink-600'>Fare!</span>
          </p>
        }
        type='home'
      />
      <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20 md:mx-auto'>
        <Recipes />
      </section>
    </main>
  )
}

export default Home