import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
    useGoat: PropTypes.func,
  }

  freeGoatEvent = (event) => {
    const { freeGoat, goat } = this.props;
    event.preventDefault();
    freeGoat(goat.id);
  }

  useGoatEvent = (event) => {
    const { useGoat, goat } = this.props;
    event.preventDefault();
    useGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card col-4">
        <img src={goat.imgUrl} className="card-img-top" alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          <div className="btn btn-danger" onClick={this.freeGoatEvent}>Free Me</div>
          <div className="btn btn-danger" onClick={this.useGoatEvent}>Use Me</div>
        </div>
      </div>
    );
  }
}

export default Goat;
