import React from 'react';
import logo from './logo.svg';
import { GuacService } from '../../api/guac.service'

const Logout: React.FC = () => {

  GuacService().logout().then(data => {
    console.log('log successful');
    window.location.replace('/');
  });

  return (
    <div>Logging out...</div>
  );
}

export default Logout;
