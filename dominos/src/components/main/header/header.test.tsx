/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import store from '../../../store/store';

import Header from './header';
import { ICurrentUser, UserSettings } from '../../../common/types';

const onLoginShow = () => {};
const changeLanguage = () => {};
const currentUserLogin:ICurrentUser = {
  id: '',
  name: '',
  email: '',
  settings: {} as UserSettings,
};

const currentUserProfile:ICurrentUser = {
  id: '620ce14b3776590016820214',
  name: 'test@test.by',
  email: 'test@test.by',
  settings: {} as UserSettings,
};

const renderPizzasLogin = () => {
  render(
    <Provider store={store}>
      <Header
        onLoginShow={onLoginShow}
        currentUser={currentUserLogin}
        changeLanguage={changeLanguage}
      />
    </Provider>,
  );
};

const renderPizzasProfile = () => {
  render(
    <Provider store={store}>
      <Header
        onLoginShow={onLoginShow}
        currentUser={currentUserProfile}
        changeLanguage={changeLanguage}
      />
    </Provider>,
  );
};

describe('Header test', () => {
  it('Login', () => {
    renderPizzasLogin();
    expect(screen.getByText('login')).toBeVisible();
  });
  it('Profile', () => {
    renderPizzasProfile();
    expect(screen.getByText('profile')).toBeVisible();
  });
});
