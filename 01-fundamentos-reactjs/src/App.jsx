import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/SideBar';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',
      name: 'Anderson Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Mayke Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-10 20:00:00'),
  },
];

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


