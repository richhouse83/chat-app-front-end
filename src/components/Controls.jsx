import React from 'react';
import { Link } from '@reach/router';

export default function Controls() {
  return (
    <nav>
      <h2>Controls Go Here</h2>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}
