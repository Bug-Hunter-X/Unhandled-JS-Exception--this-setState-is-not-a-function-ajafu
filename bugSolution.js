The solution involves using React Hooks (useState and useEffect) to manage state within functional components.

```javascript
// bugSolution.js
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
}
```
Using Hooks provides a cleaner and more concise way to manage state and side effects in functional components, aligning with modern React best practices.