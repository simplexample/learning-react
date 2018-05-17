import React, { Component } from 'react'
import { FaTrash, FaPencil, FaFloppyO, FaTimesCircle } from 'react-icons/lib/fa'

class Note extends Component {

  constructor (props) {

    super (props)

    this.state = {
      newNoteText: '',
      noteText: 'Learn React',
      editing: false
    }

    this.edit = this.edit.bind(this)
    this.cancel = this.cancel.bind(this)
    this.save = this.save.bind(this)
    this.remove = this.remove.bind(this)
    this.updateNoteText = this.updateNoteText.bind(this)
    this.renderInput = this.renderInput.bind(this)
    this.renderText = this.renderText.bind(this)
    this.render = this.render.bind(this)

  }

  edit () {
    this.setState({
      editing: true
    })
    console.log('edit on')
  }
  updateNoteText (e) {
    this.setState({
      newNoteText: e.target.value
    })
  }
  cancel () {
    this.setState({
      editing: false,
      newNoteText: ''
    })
    console.log('edit off')
  }
  save () {
    const newNote = this.state.newNoteText
    this.setState({
      editing: false,
      noteText: newNote,
      newNoteText: ''
    })
  }
  remove () {
    console.log('remove note')
  }

  renderInput () {
    return (
      <input
        className="note__text"
        defaultValue={this.state.noteText}
        onChange={this.updateNoteText} />
    )
  }

  renderText () {
    return <p className="note__text">{ this.state.noteText }</p>
  }

  renderButtons () {
    if (this.state.editing) {
      return (
        <span>
          <button
            id="save"
            className="note__button"
            onClick={this.save}>
            <FaFloppyO />
          </button>
          <button
            id="cancel"
            className="note__button"
            onClick={this.cancel}>
            <FaTimesCircle />
          </button>
        </span>
      )
    } else {
      return (
        <span>
          <button
            id="edit"
            className="note__button"
            onClick={this.edit}>
            <FaPencil />
          </button>
          <button
            id="remove"
            className="note__button"
            onClick={this.remove}>
            <FaTrash />
          </button>
        </span>
      )
    }
  }

  render () {
    const NoteText = this.state.editing ? this.renderInput() : this.renderText()
    const Buttons = this.renderButtons()

    return (
      <div className="note">
        {NoteText}
        {Buttons}
      </div>
    )
  }
}

export default Note
