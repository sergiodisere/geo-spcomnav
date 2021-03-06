import React, {useState, useEffect} from 'react';
import {
  Card,
  InputGroupText,
  FormGroup,
  Input,
  Button,
  Modal,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas);
library.add(fab);

import Router from "next/router";

import { loginWithEmail, onAuthStateChanged, addUserName } from '../../firebase/client'

const SignUp = ({modalSignUp, setModalSignUp, setModalLogin, setUser}) => {
  const [email, setEmail] = useState(undefined)
  const [username, setUsername] = useState(undefined)
  const [pass, setPass] = useState(undefined)

  const toggle = () => setModalSignUp(!modalSignUp);

  const btnHaveAccount = () => {
    setModalSignUp(!modalSignUp);
    setModalLogin(true);
  }

  const SignUp = () => {
    loginWithEmail(email, pass, username).then((user)=>{console.log(user); setUser(user); Router.reload("/")})
  }
  return (
    <>
      
      <Modal zIndex={2000} centered isOpen={modalSignUp} toggle={toggle}>
        <div>
          <Card>
            <div className="card-body px-lg-5 py-lg-5 bg-white">
              <div className="text-center text-muted mb-4 mt-n2">
                <small>Sign up with credentials</small>
              </div>
              <form>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Email" type="email"value={email} onChange={event => setEmail(event.target.value)} />
                  </div>
                </div>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Password" type="password" value={pass} onChange={event => setPass(event.target.value)}/>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'user']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Username" type="text" value={username} onChange={event => setUsername(event.target.value)} />
                  </div>
                </FormGroup>
                <Button className="btn btn-light btn-sm" onClick={btnHaveAccount}> I already have an account</Button>
                
                <div className="text-center">
                  <Button color="secondary" className="mt-4 shadow-lg" onClick={SignUp}>
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </Modal>
    </>
  )
}

export default SignUp
