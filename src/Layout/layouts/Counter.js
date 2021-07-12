import { Box } from "@material-ui/core"
import { Icon } from "@material-ui/core"
import { useState } from "react"
import "./Counter.css"

const Counter = () => {
    let [data, setData] = useState(0);
    const minusCounter = () => {
        // setData([data--]);
        let smth = data;
        setData(--smth);
        if (data < 0) {
            return 0;
        }
    }
    const plusCounter = () => {
        // setData([data--]);
        let smth = data;
        setData(++smth);
    }

    return (
        <div>
            <p>Quantity</p>
            <Box component='div' className='quantity' display='flex'>
                <Icon className="fa fa-minus-circle" onClick={minusCounter} />
                <Box component='div'>{data}</Box>
                <Icon className="fa fa-plus-circle" onClick={plusCounter} />
            </Box>
        </div>
    )
}

export default Counter;
