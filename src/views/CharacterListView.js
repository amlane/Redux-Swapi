import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
// import actions
import { getCharacter } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
    } 
    console.log(this.props.error)
    return (
      <div className="CharactersList_wrapper">
        {this.props.error && <h1>{this.props.error}</h1>}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
})

// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getCharacter }
)(CharacterListView);
