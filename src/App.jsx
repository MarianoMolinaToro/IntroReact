import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';


function App() {
  return (

    <>
      <header className='titulo'>
        <Header titulo={'Adopta un perrito'} />
      </header>

      <main className='galeria'>
        <MyCard 
        image="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
        name="Firulais"
        descripcion="Lleno de energía y listo para jugar. ¡Dale Firulais el hogar amoroso que se merece!"
        tagText="Kiltro"
        tagColor="success"
        />
        <MyCard 
        image="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg"
        name="Cachupín"
        descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Cachupín parte de tu familia hoy mismo!"
        tagText="Kiltro"
        tagColor="primary"
        />
        <MyCard 
        image="https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_1280.jpg"
        name="Manchas"
        descripcion="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Manchas y experimenta un amor incondicional!"
        tagText="Kiltro"
        tagColor="danger"
        
        />
        <MyCard 
        image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
        name="Pelusa"
        descripcion="Es una compañera leal y cariñosa que adora los mimos y los abraos. ¡Ayuda a Princesa a encontrar su final feliz!"
        tagText="Kiltro"
        tagColor="warning"
        />  
      </main>

      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
