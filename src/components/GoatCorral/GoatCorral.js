import React from 'react';

class GoatCorral extends React.Component {
  render() {
    const myGoats = this.props.goats;
    return (
      <div className="goatCorral">
        Goat Corral
      </div>
    );
  }
}

export default GoatCorral;
