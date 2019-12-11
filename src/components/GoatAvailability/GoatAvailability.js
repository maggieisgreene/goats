import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class GoatAvailability extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  availableGoats = () => {
    const { goats } = this.props;
    return goats.filter((g) => !g.isBusy).length;
  }

  render() {
    return (
      <div className="available-goat-container">
        <p>{this.availableGoats()} goats available!</p>
      </div>
    );
  }
}

export default GoatAvailability;
