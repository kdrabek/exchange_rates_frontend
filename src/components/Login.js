import React from 'react';
import { Link } from 'react-router';

import { Column, Colors, Link as ButtonLink, Row } from 'react-foundation';

class Login extends React.Component {
  render() {
    return (
      <Row>
        <Column large={6} offsetOnLarge={3}>
          <h4 class="subheader">Zaloguj się:</h4>

          <form>
            <label>
              Email:
              <input type="email" placeholder="email" />
            </label>
            <label>
              Hasło:
              <input type="password" placeholder="hasło" />
            </label>

            <ButtonLink color={Colors.PRIMARY} isExpanded>Zaloguj się</ButtonLink>

            <Link to="register">
              <a>Nie masz konta? Zarejestruj się.</a>
            </Link>
          </form>
        </Column>
      </Row>
    );
  }
}

export default Login;
