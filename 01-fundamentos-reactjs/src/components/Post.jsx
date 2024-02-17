import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://scontent.fcnf1-1.fna.fbcdn.net/v/t39.30808-6/333536586_912718119916195_9180262128798549654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHBvrH1IXTCgCgeB7V5ljwZ57b4ipGj4sHntviKkaPiwV34xSCdjgF6aV2Rlazx_inUBeK6gQwmbozpF3fDOUwn&_nc_ohc=XV0xmVV80QQAX84S9WF&_nc_ht=scontent.fcnf1-1.fna&oh=00_AfBp0j579TQQLsLiBXNhtIH8dkDqyY36ShY-wWx8kVqk8A&oe=65D0FB27" />
                    <div className={styles.authorInfo}>
                        <strong>Anderson Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:38">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}