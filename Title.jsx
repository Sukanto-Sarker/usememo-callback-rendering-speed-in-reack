import { memo } from 'react';

const Title = memo(() => {
  console.log('This is Title page');

  return <h1>This is Title Component</h1>;
});

export default Title;
