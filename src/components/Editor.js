import React, { Component } from 'react'

class Editor extends Component {
  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    updateEntity: this.props.updateEntity
  }
  render () {
    return (
      <div className="ui form">
        <div className="field">
          <textarea name="" id="" cols="30" rows="5" placeholder="写点东西..."
            defaultValue={this.state.body}
            onInput={ this.state.updateEntity }
          ></textarea>
        </div>
      </div>
    )
  }
}

export default Editor