import React, { useState, useEffect } from 'react'
import { dateFormatter } from '../../services/Methods/DateFormatter'
import numberFormatter from '../../services/Methods/NumberFormatter'
import CircularProgress from '@material-ui/core/CircularProgress'

import { PageHeader } from '../../interfaces/PageHeader'

import './styles.sass'

const Header: React.FC<PageHeader> = (props) => {
  const [brazilCases, setBrazilCases] = useState(props)
  const {
    mainTitle,
    casesTitle,
    deathsTitle,
    confirmedTitle,
    recoveredTitle,
    updatedAtTitle,
    mainData,
  } = brazilCases

  useEffect(() => {
    setBrazilCases(props)
  }, [props])

  return (
    <header className="main-header">
      <h1>{mainTitle}</h1>
      <div className="main-data">
        <div className="main-data-item">
          <h2>
            {confirmedTitle}:{' '}
            <div>
              <b>{numberFormatter(mainData?.confirmed, 0, '', '.')}</b>
            </div>
          </h2>
        </div>
        <div className="main-data-item">
          <h2>
            {casesTitle}:{' '}
            <div>
              <b>{numberFormatter(mainData?.cases, 0, '', '.')}</b>
            </div>
          </h2>
        </div>
        <div className="main-data-item">
          <h2>
            {recoveredTitle}:{' '}
            <div>
              <b>{numberFormatter(mainData?.recovered, 0, '', '.')}</b>
            </div>
          </h2>
        </div>
        <div className="main-data-item">
          <h2>
            {deathsTitle}:{' '}
            <div>
              <b>{numberFormatter(mainData?.deaths, 0, '', '.')}</b>
            </div>
          </h2>
        </div>
      </div>
      <div className="main-updated-at">
        {props.isLoaded ? (
          mainData ? (
            dateFormatter(updatedAtTitle, mainData?.updated_at)
          ) : null
        ) : (
          <CircularProgress />
        )}
      </div>
    </header>
  )
}

export default Header
