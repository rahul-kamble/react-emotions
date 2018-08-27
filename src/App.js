import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { Row, Col, Button, ControlLabel } from 'react-bootstrap'
import { css } from 'emotion'

const inputStyle = css`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  text-align: center;
`
const App = ({ onLogin, onNameChange, onPasswordChange, name, password }) => (
  <Row>
    <Col md={6} className={css`margin-left: 35%; margin-top: 60px;`}>
      <ControlLabel className={css`
        margin-left: 63px;
        font-size: 30px;`}
      >
        Enter Your Details
      </ControlLabel>
      <input
        type="text"
        className={inputStyle}
        value={name}
        placeholder="Email ID"
        onChange={(e) => onNameChange(e.target.value)} 
      />
      <input
        type="text"
        className={inputStyle}
        value={password}
        placeholder="Password"
        onChange={(e) => onPasswordChange(e.target.value)} 
      />
      <Button
        className={css`
          width: 400px;
          height: 50px;
          margin-top: 15px;`
        }
        bsSize="large" 
        bsStyle="primary" 
        onClick={onLogin}>
          Login
      </Button>
    </Col>
  </Row>
)

export default compose(
  withState('name', 'onNameChange', ''),
  withState('password', 'onPasswordChange', ''),
  withHandlers({
		onLogin: () => () => {
      alert('Login Successfully');
    }
	}),
)(App)
