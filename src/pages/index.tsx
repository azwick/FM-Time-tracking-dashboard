import Head from 'next/head'
import React from 'react';
import { useState} from 'react';
import data from '../data.json';
import UserCard from '../components/UserCard';
import WorkingCard from '../components/WorkingCard';
import styles from '../styles/index.module.scss';

const Dashboard = (): React.ReactElement => {
  const [timeFilter, setTimeFilter] = useState<string>('daily')

  function intoCamelCase(str: string) {
    return str.replace(/\s+/g, '').replace(/^(.)/, (match: string) => match.toLowerCase());
  }

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    let textContent = intoCamelCase(event.currentTarget.textContent || 'daily')
    setTimeFilter(textContent)
  }

  return (
    <>
    <Head>
      <title>FM - Time tracking dashboard</title>
      <meta name="description" content="Time tracking dashboard coding challenge on Frontend Mentor" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.page}>
      <div className={styles.dashboard}>
          <UserCard timeFilter={timeFilter} handleClick={handleClick} />

        {data.map(cardContent => {
          const cardTheme = intoCamelCase(cardContent.title + "Theme");
          return (
            <WorkingCard
              key={cardContent.title} 
              title={cardContent.title} 
              theme={"workingCard " + cardTheme}
              timeFilter={timeFilter}
              timeDailyCurrent={cardContent.timeframes.daily.current}
              timeWeeklyCurrent={cardContent.timeframes.weekly.current}
              timeMonthlyCurrent={cardContent.timeframes.monthly.current}
              timeDailyPrevious={cardContent.timeframes.daily.previous}
              timeWeeklyPrevious={cardContent.timeframes.weekly.previous}
              timeMonthlyPrevious={cardContent.timeframes.monthly.previous}
               />
            )
        })}
      </div>
    </main>
    </>
  )
}

export default Dashboard