import React from 'react';
import "./index.css";

import { auth } from '../../firebase';

const SignOutButton = () =>
<a href="/home"
    onClick={auth.doSignOut}
  >
    Sign Out
  </a>

export default SignOutButton;