import './Sidebar.css'
import { Box } from '@material-ui/core';
import FirstContent from './FirstContent'
import Filter from '../Sidebar/Filter';
import Condition from '../Sidebar/Condition';
import Ratings from '../Sidebar/Ratings';
import MinMax from '../Sidebar/MinMax';
import PriceSlider from '../Sidebar/PriceSlider';

const Sidebar = () => {
    return (
        <Box>
            <FirstContent />
            <Filter />
            <Condition />
            <Ratings />
            <MinMax />
            <PriceSlider />
        </Box>
    )
}

export default Sidebar;
