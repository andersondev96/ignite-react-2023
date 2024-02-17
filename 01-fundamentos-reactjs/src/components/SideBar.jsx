import { PencilLine } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://scontent.fcnf1-1.fna.fbcdn.net/v/t39.30808-6/333536586_912718119916195_9180262128798549654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHBvrH1IXTCgCgeB7V5ljwZ57b4ipGj4sHntviKkaPiwV34xSCdjgF6aV2Rlazx_inUBeK6gQwmbozpF3fDOUwn&_nc_ohc=XV0xmVV80QQAX84S9WF&_nc_ht=scontent.fcnf1-1.fna&oh=00_AfBp0j579TQQLsLiBXNhtIH8dkDqyY36ShY-wWx8kVqk8A&oe=65D0FB27" />
                <strong>Anderson Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}