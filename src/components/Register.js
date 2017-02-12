import React from 'react';
import { Link } from 'react-router';

import { Column, Colors, Link as ButtonLink, Row } from 'react-foundation';

class Register extends React.Component {
  render() {
    return (
      <Row>
        <Column large={6} offsetOnLarge={3}>
          <h4 class="subheader">Zarejestruj się:</h4>

          <form>
            <label>
              Email:
              <input type="email" placeholder="email" />
            </label>
            <label>
              Hasło:
              <input type="password" placeholder="hasło" />
            </label>
            <label>
              Powtórz hasło:
              <input type="password" placeholder="powtórz hasło" />
            </label>

            <ButtonLink color={Colors.PRIMARY} isExpanded>Zarejestruj się</ButtonLink>

            <Link to="login">
              <a>Masz już konto? Zaloguj się.</a>
            </Link>
          </form>
        </Column>
      </Row>
    );
  }
}

export default Register;
