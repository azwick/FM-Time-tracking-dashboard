import React from 'react';
import styles from '../styles/WorkingCard.module.scss';

interface WorkingCardInterface {
    title: string;
    theme: string;

    timeFilter: string;
    timeDailyCurrent: number;
    timeWeeklyCurrent: number;
    timeMonthlyCurrent: number;

    timeDailyPrevious: number;
    timeWeeklyPrevious: number;
    timeMonthlyPrevious: number;
}

const WorkingCard = ({title, theme, timeFilter, timeDailyCurrent, timeWeeklyCurrent, timeMonthlyCurrent, timeDailyPrevious, timeWeeklyPrevious, timeMonthlyPrevious}: WorkingCardInterface): React.ReactElement => {
    return (
      <section className={theme.split(' ').map(className => styles[className]).join(' ')}>
        <article className={styles['workingCard-content']}>
          <h2 className={styles['workingCard-content-title']}>{title}</h2>
          <nav className={styles['workingCard-content-menu']}>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/></svg>
          </nav>
          <h3 className={styles['workingCard-content-currentTime']}>{
                timeFilter === "daily" 
                ? timeDailyCurrent
                : timeFilter === "weekly"
                ? timeWeeklyCurrent
                : timeFilter === "monthly"
                ? timeMonthlyCurrent
                : timeDailyCurrent
                }hrs</h3>
          <p className={styles['workingCard-content-pastTime']}>Last week - {
                timeFilter === "daily" 
                ? timeDailyPrevious
                : timeFilter === "weekly"
                ? timeWeeklyPrevious
                : timeFilter === "monthly"
                ? timeMonthlyPrevious
                : timeDailyPrevious
                }hrs</p>
        </article>
      </section>
    )
}

export default WorkingCard;