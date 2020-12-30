import React from 'react';
import { Button, Form} from 'reactstrap';
import InputForm from './inputText'
import '../style/loginForm.css'

const Example = (props) => {
  return (
    <div className="form flex-center">
    <Form>
        <InputForm
          type="text" name="userId" id="userId" placeholder="Your ID">
          Your ID
        </InputForm>
        <InputForm
          type="password" name="password" id="password" placeholder="Your Password">
          Your Password
        </InputForm>
     
      <Button className="submitBtn">Login</Button>
    </Form>
    </div>
  );
}

export default Example;