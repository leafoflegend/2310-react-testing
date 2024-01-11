import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>How Many Clicks?</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
        </div>
    );
}

export default App
