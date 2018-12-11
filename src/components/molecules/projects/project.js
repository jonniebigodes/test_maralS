import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import Modal from '../../Modal'
class Project extends Component {
  state = {
    opened: false,
  }

  // instead of a actual function i've changed the code to a fat arrow function
  // also taking advantage of the prevstate callback parameter documented here
  // https://www.freecodecamp.org/forum/t/react-prevstate/86495/2
  _toggleModal = () => {
    this.setState(prevstate => ({
      opened: !prevstate.opened,
    }))
  }

  render() {
    const { title, category, image, logo, children, website } = this.props
    const { opened } = this.state
    return (
      <div className="project__container">
        <div className="project__preview">
          <button onClick={this._toggleModal}>
            {logo ? <img className="logo" src={logo.src} alt={title} /> : null}
            <h2>
              {title} <span className="category">{category}</span>
            </h2>
          </button>
        </div>
        <div className="project__details">
          <CSSTransition
            in={opened}
            timeout={800}
            classNames="fade"
            unmountOnExit>
            {state => (
              <Modal show={opened}>
                {image ? (
                  <a href={website} title={title}>
                    <img src={image.src} alt={title} />
                  </a>
                ) : null}
                <h3>
                  {title} <span className="category">{category}</span>
                </h3>
                {children}
                {website ? <a href={website}>Voir le site</a> : null}
              </Modal>
            )}
          </CSSTransition>
        </div>
      </div>
    )
  }
}
export default Project

Project.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  website: PropTypes.string,
}

Project.defaultProps = {
  title: 'Nom du projet',
  image: null,
  logo: null,
  children: 'Texte introductif du projet. Il fourni les éléments clés',
  website: null,
}
