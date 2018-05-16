import React, { Component } from 'react'
import { FaTrash, FaPencil } from 'react-icons/lib/fa'

class Note extends Component {
  render() {
    return (
      <div className="note">
        <p className="note__text">Learn React</p>
        <span>
          <button className="note__button"><FaPencil /></button>
          <button className="note__button"><FaTrash /></button>
        </span>
      </div>
    );
  }
}

export default Note
