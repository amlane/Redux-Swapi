import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action

  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data

    }
    console.log(this.props.characters)
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
})

// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getCharacter }
)(CharacterListView);
