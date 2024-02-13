import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda alias quas eveniet aspernatur. Esse laboriosam doloribus a! Quo placeat facere amet vel ipsam quasi itaque cumque quas. Ea, sapiente inventore." 
      />

      <Post 
        author="Gabriel Buzi" 
        content="Novo post muito legal." 
      />
    </div>
  )
}


