import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://scontent.fcnf1-1.fna.fbcdn.net/v/t39.30808-6/333536586_912718119916195_9180262128798549654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=xGyNZJ6fshsAX-0TlVD&_nc_ht=scontent.fcnf1-1.fna&oh=00_AfAT_KsNumTUn5cWeHn_Ar1rFyyo6dx7B9be_qKCMUJAdw&oe=65DED2E7" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anderson Fernandes</strong>
                            <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}