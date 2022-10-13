import React, { useEffect, useState } from 'react';
import { Message } from '@evaluator/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default App;
