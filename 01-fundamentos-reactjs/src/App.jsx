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
      avatar_url: 'https://scontent.fcnf1-1.fna.fbcdn.net/v/t39.30808-6/333536586_912718119916195_9180262128798549654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=xGyNZJ6fshsAX-0TlVD&_nc_ht=scontent.fcnf1-1.fna&oh=00_AfAT_KsNumTUn5cWeHn_Ar1rFyyo6dx7B9be_qKCMUJAdw&oe=65DED2E7',
      name: 'Anderson Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-02-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://scontent.fcnf1-1.fna.fbcdn.net/v/t39.30808-6/333536586_912718119916195_9180262128798549654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=xGyNZJ6fshsAX-0TlVD&_nc_ht=scontent.fcnf1-1.fna&oh=00_AfAT_KsNumTUn5cWeHn_Ar1rFyyo6dx7B9be_qKCMUJAdw&oe=65DED2E7',
      name: 'Mayke Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-02-10 20:00:00'),
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


