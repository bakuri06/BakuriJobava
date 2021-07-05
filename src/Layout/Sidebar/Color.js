import './Color.css'
import { Box } from '@material-ui/core';

const Color = () => {
    return (
        <Box class="btn-group btn-group-toggle btn-color-group d-block mt-n2 ml-n2">
            <label class="btn rounded-circle white border-inset-grey ">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle grey p-3 m-2 ">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle black p-3 m-2 ">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle green p-3 m-2">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle blue p-3 m-2 ">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle purple p-3 m-2 ">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle yellow p-3 m-2">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle indigo p-3 m-2">
                <input type="checkbox" checked="" autocomplete="off" />
            </label>
            <label class="btn rounded-circle red p-3 m-2">
                <input type="checkbox" autocomplete="off" />
            </label>
            <label class="btn rounded-circle orange p-3 m-2">
                <input type="checkbox" autocomplete="off" />
            </label>
        </Box>
    )
}

export default Color;