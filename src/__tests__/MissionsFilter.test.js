import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import MissionsFilter from '../components/MissionsFilter'
import MockMissions from './missionsMock.json'

describe('Missions Filter Test', () => {
  test('display filters titles', () => {
    const { getByText } = render(<MissionsFilter missions={[]} onFilter={() => {}} filters={{}} />)
    getByText(/launch sites/i)
    getByText(/rocket/i)
    getByText(/launch year/i)
  })

  test('display "launch sites"', () => {
    const { getByText } = render(
      <MissionsFilter missions={MockMissions} onFilter={() => {}} filters={{}} />,
    )
    fireEvent.click(getByText(/launch sites/i))
    getByText(/all/i)
    getByText(/KWAJALEIN ATOLL/i)
    getByText(/CCAFS SLC 40/i)
    getByText(/VAFB SLC 4E/i)
    getByText(/KSC LC 39A/i)
  })
  test('display "rocket"', () => {
    const { getByText } = render(
      <MissionsFilter missions={MockMissions} onFilter={() => {}} filters={{}} />,
    )
    fireEvent.click(getByText(/rockets/i))
    getByText(/all/i)
    getByText(/FALCON 1/i)
    getByText(/FALCON 9/i)
    getByText(/FALCON HEAVY/i)
  })
  test('display "launch year"', () => {
    const { getByText } = render(
      <MissionsFilter missions={MockMissions} onFilter={() => {}} filters={{}} />,
    )
    fireEvent.click(getByText(/launch year/i))
    getByText(/all/i)
    getByText('2006')
    getByText('2007')
    getByText('2008')
    getByText('2009')
    getByText('2010')
    getByText('2012')
    getByText('2013')
    getByText('2014')
    getByText('2015')
    getByText('2016')
    getByText('2017')
    getByText('2018')
  })
})
