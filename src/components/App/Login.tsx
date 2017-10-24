import * as React from 'react';
import { Button, Form } from 'semantic-ui-react';

interface LoginProps {
  onSubmit: (username: string, password: string) => void;
}

interface LoginState {
  username: string;
  password: string;
}

class Login extends React.Component<LoginProps, LoginState> {

  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmit(e: React.FormEvent<HTMLInputElement>) {
    debugger
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {

    const onSubmit = this.onSubmit.bind(this);

    // const setUsername = (username: string): void => this.setState({ username });
    // const setPassword = (e: React.FormEvent<HTMLInputElement>): void => this.setState({ password: e.target.value });

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>username</label>
          <input placeholder="username"/>
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input placeholder="password"/>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Login;