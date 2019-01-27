import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { getValuesByProperty, toKebabCase } from '../utils/utils'
import '../styles/missionsFilter.css'

function RenderListItem({ name, onFilter, value, children }) {
  return (
    <li data-testid={`filter-item-${value ? toKebabCase(value) : 'all'}`}>
      <div
        tabIndex={0}
        aria-haspopup="true"
        role="button"
        name={name}
        onClick={onFilter.bind(this, value)}
        onKeyPress={onFilter.bind(this, value)}
      >
        {children}
      </div>
    </li>
  )
}

RenderListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
  children: PropTypes.node.isRequired,
}

RenderListItem.defaultProps = {
  value: null,
}

function RenderList({ title, children, active }) {
  return (
    <li className={active ? 'filter-active' : null}>
      <a href="#/" aria-haspopup="true">
        {title}
      </a>
      {children}
    </li>
  )
}

RenderList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
}

RenderList.defaultProps = {
  active: null,
}

function MissionsFilter({ missions, onFilter, filters }) {
  const missionsRockets = missions.map(mission => mission.rocket)
  const missionsLauchSites = missions.map(mission => mission.launch_site)

  const rockets = getValuesByProperty(missionsRockets, 'rocket_name')
  const lauchSites = getValuesByProperty(missionsLauchSites, 'site_name')
  const lauchYears = getValuesByProperty(missions, 'launch_year')
  return (
    <section className="">
      <form className="form">
        <nav role="navigation">
          <ul>
            <RenderList
              title={
                filters && filters.filterByMissionLaunchSite
                  ? filters.filterByMissionLaunchSite
                  : 'Launch Sites'
              }
              active={filters && filters.filterByMissionLaunchSite}
            >
              <ul className="dropdown" aria-label="submenu">
                <RenderListItem
                  name="filterByMissionLaunchSite"
                  onFilter={onFilter}
                  value={null}
                  displayValue="All"
                  key="all"
                >
                  All
                </RenderListItem>
                {lauchSites.map(site => (
                  <RenderListItem
                    name="filterByMissionLaunchSite"
                    onFilter={onFilter}
                    value={site}
                    key={site}
                  >
                    {site}
                  </RenderListItem>
                ))}
              </ul>
            </RenderList>
            <RenderList
              title={
                filters && filters.filterByMissionRocket ? filters.filterByMissionRocket : 'Rockets'
              }
              active={filters && filters.filterByMissionRocket}
            >
              <ul className="dropdown" aria-label="submenu">
                <RenderListItem
                  name="filterByMissionRocket"
                  onFilter={onFilter}
                  value={null}
                  displayValue="All"
                  key="all"
                >
                  All
                </RenderListItem>
                {rockets.map(rocket => (
                  <RenderListItem
                    name="filterByMissionRocket"
                    onFilter={onFilter}
                    value={rocket}
                    key={rocket}
                  >
                    {rocket}
                  </RenderListItem>
                ))}
              </ul>
            </RenderList>
            <RenderList
              title={
                filters && filters.filterByMissionLauchYear
                  ? filters.filterByMissionLauchYear
                  : 'Launch Years'
              }
              active={filters && filters.filterByMissionLauchYear}
            >
              <ul className="dropdown" aria-label="submenu">
                <RenderListItem
                  name="filterByMissionLauchYear"
                  onFilter={onFilter}
                  value={null}
                  displayValue="All"
                  key="all"
                >
                  All
                </RenderListItem>
                {lauchYears.map(year => (
                  <RenderListItem
                    name="filterByMissionLauchYear"
                    onFilter={onFilter}
                    value={year}
                    key={year}
                  >
                    {year}
                  </RenderListItem>
                ))}
              </ul>
            </RenderList>
          </ul>
        </nav>
      </form>
    </section>
  )
}

MissionsFilter.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    filterByMissionLaunchSite: PropTypes.string,
    filterByMissionRocket: PropTypes.string,
    filterByMissionLauchYear: PropTypes.string,
  }).isRequired,
}

export default memo(MissionsFilter)
