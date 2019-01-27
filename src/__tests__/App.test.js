import React from 'react'
import ReactDOM from 'react-dom'
import axiosMock from 'axios'

import { render, wait } from 'react-testing-library'
import missionsMock from './missionsMock.json'
import App from '../App'

/**
 * Factory function to create DOM Nodes for App
 * @function setup
 * @param {object} props
 * @returns {DOMNode}
 */
const setupComponent = props => render(<App {...props} />)

describe('Missions Grid Test', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('fetch missions and display them with mission name, rocket name, launch site and launch year', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: missionsMock })
    const { getByText } = setupComponent()

    await wait()

    expect(axiosMock.get).toHaveBeenCalled()
    const missionMock = missionsMock[0]
    const {
      mission_name: missionName,
      rocket,
      launch_year: launchYear,
      launch_site: launchSite,
    } = missionMock
    // expect isn't necessary here, because getByText would throw away an error anyway if the text is not found.
    getByText(missionName)
    getByText(rocket.rocket_name)
    getByText(launchSite.site_name)
    getByText(launchYear)
  })

  test('Display "No Mission Found" message when there is no mission', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: [] })
    const { getByText } = setupComponent()

    await wait()

    expect(axiosMock.get).toHaveBeenCalled()
    expect(getByText(/No mission found/i).textContent).toMatch(/no mission found/i)
  })

  test('Show loader when fetching data and hide it when data is fetched', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: missionsMock })
    const { getByText, queryByText } = setupComponent()
    getByText(/loading.../i)
    await wait()
    expect(queryByText(/loading.../i)).toBeNull()
  })
})
