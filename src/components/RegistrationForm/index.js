import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    successRegistration: false,
    firstName: '',
    lastName: '',
    blurFirstName: false,
    blurLastName: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value, blurFirstName: false})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value, blurLastName: false})
  }

  onSubmitRegistration = event => {
    event.preventDefault()
    const validateFirstName = this.validateFirstName()
    const validateLastName = this.validateLastName()

    if (validateFirstName === true && validateLastName === true) {
      this.setState({successRegistration: true})
    } else {
      this.setState({
        blurFirstName: !validateFirstName,
        blurLastName: !validateLastName,
        successRegistration: false,
      })
    }
  }

  checkFirstName = () => {
    const isValidateFirstName = this.validateFirstName()
    this.setState({blurFirstName: !isValidateFirstName})
  }

  checkLastName = () => {
    const isValidateLastName = this.validateLastName()
    this.setState({blurLastName: !isValidateLastName})
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  submitAnotherForm = () => {
    this.setState({successRegistration: false, firstName: '', lastName: ''})
  }

  renderRegistration = () => {
    const {firstName, lastName, blurFirstName, blurLastName} = this.state
    const blurFirst = blurFirstName ? 'blur' : ''
    const blurLast = blurLastName ? 'blur' : ''
    return (
      <form onSubmit={this.onSubmitRegistration} className="form-container">
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          id="firstName"
          placeholder="First Name"
          className={`input ${blurFirst}`}
          value={firstName}
          onBlur={this.checkFirstName}
          onChange={this.onChangeFirstName}
          type="text"
        />
        {blurFirstName && <p className="required">*Required</p>}
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          id="lastName"
          placeholder="Last Name"
          className={`input ${blurLast}`}
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.checkLastName}
          type="text"
        />
        {blurLastName && <p className="required">*Required</p>}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  renderSuccess = () => (
    <div className="form-container">
      <img
        className="success-logo"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success icon"
      />
      <p className="success-paragraph">Submitted Successfully</p>
      <button
        onClick={this.submitAnotherForm}
        className="submit-btn"
        type="button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {successRegistration} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {successRegistration ? this.renderSuccess() : this.renderRegistration()}
      </div>
    )
  }
}
export default RegistrationForm
