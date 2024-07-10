import React from 'react';
import Table from '../../components/table'
import { data, headers } from '../../mocks/topScorers';
import './dashboard.scss';

const TopScorers = () => {
  return (
    <>
    <h3 className='topScorer__heading'>Top Scoring Teachers</h3>
    <Table tableHeaders={headers} tableData={data}>
        {(row) => (
          <>
            <td>{row.teacher}</td>
            <td>{row.level}</td>
            <td>{row.class}</td>
            <td>{row.course}</td>
            <td>{row.totalScore}</td>
          </>
        )}
    </Table>
    </>
  )
}

export default TopScorers