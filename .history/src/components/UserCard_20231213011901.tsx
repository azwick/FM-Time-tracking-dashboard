import React from 'react';
import styles from '../styles/UserCard.module.scss';

interface UserCardInterface {
    timeFilter: string;
    handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const UserCard = ({timeFilter, handleClick}: UserCardInterface): React.ReactElement => {
    return (
        <section className={styles.userCard}>
            <article className={styles['userCard-content']}>
                <img className={styles['userCard-content-userImg']} src="/img-jeremy.png" alt="Jeremy Robsen"/>
                <p className={styles['userCard-content-description']}>Report for</p>
                <h1 className={styles['userCard-content-userName']}>Jeremy Robsen</h1>
            </article>
            <nav className={styles['userCard-nav']}>
            <ul className={styles['userCard-nav-list']}>
                <li className={`${styles['userCard-nav-list-item']} ${timeFilter === 'daily' ? styles.active : ''}`} onClick={handleClick}>Daily</li>
                <li className={timeFilter === "weekly" ? styles.active : ''} onClick={handleClick}>Weekly</li>
                <li className={timeFilter === "monthly" ? styles.active : ''} onClick={handleClick}>Monthly</li>
            </ul>
            </nav>
        </section> 
    )    
}

export default UserCard;