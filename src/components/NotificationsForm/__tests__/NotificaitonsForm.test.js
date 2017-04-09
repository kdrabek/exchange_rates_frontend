import React from 'react';
import ReactDOM from 'react-dom';
import NotificationsForm from '../NotificationsForm';
import renderer from 'react-test-renderer';

describe('Tagline component', () => {

  it('matches the snapshot', () => {
    const currencies = [
      {
        code: "ABC",
        name: "awesome currency",
        country: "country",
        table_type: "A"
      }, 
      {
        code: "CDE",
        name: "moar awesome currency",
        country: "totally different country",
        table_type: "A"
      }
    ];
    const component = renderer.create(
      <NotificationsForm currencies={currencies} submitForm={() => {}}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});