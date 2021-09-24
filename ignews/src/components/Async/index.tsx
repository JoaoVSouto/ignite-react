import * as React from 'react';

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello world</div>

      {isButtonVisible && <button type="button">Click me</button>}
    </div>
  );
}
