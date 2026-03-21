import { useState } from "react";

const CounterComponent =()=>{
    const [count, setCount] = useState(15);

    return (
        <div>
            <p>count of component - {count}</p>
            <h6>Number is {count %2 == 0 ? 'Even': 'Odd'}</h6>


            <button onClick={()=> setCount(count+1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default CounterComponent; 