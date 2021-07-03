import './Sidebar.css'
import { Box } from '@material-ui/core';

const Sidebar = () => {
    return (
        <Box>

            < h5>Subcategories</h5>

            <div className="text-muted small">
                <p mb={3}>Return to <a className='smth' href="#!"><strong>Clothing, Shoes,
                    Accessories</strong></a></p>

                <p mb={3}><a className='smth' href="#!" >Tops, Tees &amp; Blouses</a></p>
                <p mb={3}><a className='smth' href="#!" >Sweaters</a></p>
                <p mb={3}><a className='smth' href="#!" >Fashion Hoodies &amp; Sweatshirts</a></p>
                <p mb={3}><a className='smth' href="#!" >Jeans</a></p>
            </div>

        </Box>
    )
}

export default Sidebar;
