import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img
                src="https://scontent.fcnf1-1.fna.fbcdn.net/v/t39.30808-6/333536586_912718119916195_9180262128798549654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHBvrH1IXTCgCgeB7V5ljwZ57b4ipGj4sHntviKkaPiwV34xSCdjgF6aV2Rlazx_inUBeK6gQwmbozpF3fDOUwn&_nc_ohc=XV0xmVV80QQAX84S9WF&_nc_ht=scontent.fcnf1-1.fna&oh=00_AfBp0j579TQQLsLiBXNhtIH8dkDqyY36ShY-wWx8kVqk8A&oe=65D0FB27"
                alt=""
            />

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