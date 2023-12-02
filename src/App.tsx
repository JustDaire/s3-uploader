import { FC } from 'react';
import S3Uploader from './Uploader';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>S3 Uploader</h1>
      <p>Start editing to see some magic happen :)</p>
      <S3Uploader />
    </div>
  );
};
