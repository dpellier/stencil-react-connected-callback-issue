import React, { type ReactElement } from 'react';
import MyComponent from 'react-library/my-component';
import styles from './app.scss';

function App(): ReactElement {
  return (
    <div className={ styles.app }>
      <MyComponent myProp="jsx case"
                   my-prop="html case" />
    </div>
  );
}

export { App };
