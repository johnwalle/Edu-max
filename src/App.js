import {useState, useEffect } from 'react';
import { Header, Navbar, Reminder, Resources, Scheduler } from './Components';
import { Contact, About } from './Footer';
import './App.css';

const App = () => {
const [isPending,setIsPending] = useState(true);
useEffect(()=>{
setTimeout(()=>{
setIsPending(false);
},1000)
},[])

  return (
    <div className='App'>
      <Navbar />
      {isPending && <h1 >Loading...............................................</h1>}

      <Header />
      <Resources />
      <Scheduler />
      <Reminder />
      <Contact />
    </div>
  );
};


export default App;