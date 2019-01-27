import React, { memo } from 'react'
import PropTypes from 'prop-types'

function MissionModalContent({
  links,
  mission_name: missionName,
  launch_site: launchSite,
  rocket,
  launch_date_local: launchDateLocal,
  details,
}) {
  return (
    <section className="mission__modal" role="dialog">
      <div className="mission__modal_img">
        <img src={links.mission_patch} alt="Mission Patch" />
      </div>
      <div className="mission__modal_details">
        <div className="mission__modal_title">
          <h3>{missionName}</h3>
        </div>
        <div>
          <p>{details}</p>
          <dl className="mission__modal_details-item">
            <dt>Launch Site</dt>
            <dd>{launchSite.site_name_long}</dd>
          </dl>
          <dl className="mission__modal_details-item">
            <dt>Rocket Name</dt>
            <dd>{rocket.rocket_name}</dd>
          </dl>
          <dl className="mission__modal_details-item">
            <dt>Rocket Type</dt>
            <dd>{rocket.rocket_type}</dd>
          </dl>
          <dl className="mission__modal_details-item">
            <dt>Launch Date</dt>
            <dd>{launchDateLocal}</dd>
          </dl>
        </div>
      </div>
    </section>
  )
}

MissionModalContent.propTypes = {
  links: PropTypes.shape({
    mission_patch: PropTypes.string.isRequired,
  }).isRequired,
  mission_name: PropTypes.string.isRequired,
  launch_site: PropTypes.string.isRequired,
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
    rocket_type: PropTypes.string.isRequired,
  }).isRequired,
  launch_date_local: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}

export default memo(MissionModalContent)
