import { Box } from "@material-ui/core"
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import './Footer.css'


const Footer = () => {
    return (
        <Grid container justify='space-around' className='black'>
            <Grid item xl={3} md={3}>
                    <h5>About me</h5>
                    <p className="foot-desc mb-0">Here you can use rows and columns to organize your footer content. Lorem
                        ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.
                    </p>
            </Grid>
            <Grid item xl={2} md={2}>
                    <h5>Products</h5>

                    <ul className="list-unstyled foot-desc">
                        <li className="mb-2">
                            <a className="blacked" href="#!">MDBootstrap</a>
                        </li>
                        <li className="mb-2">
                            <a className="blacked" href="#!">MDWordPress</a>
                        </li>
                        <li className="mb-2">
                            <a className="blacked" href="#!">BrandFlow</a>
                        </li>
                        <li className="mb-2">
                            <a className="blacked" href="#!">Bootstrap Angular</a>
                        </li>
                    </ul>
            </Grid>

            <Grid item xl={2} md={2}>
                    <h5>Useful links</h5>

                    <ul>
                        <li>
                            <a className="blacked" href="#!">Your Account</a>
                        </li>
                        <li >
                            <a className="blacked" href="#!">Become an Affiliate</a>
                        </li>
                        <li >
                            <a className="blacked" href="#!">Shipping Rates</a>
                        </li>
                        <li >
                            <a className="blacked" href="#!">Help</a>
                        </li>
                    </ul>
            </Grid>

            <Grid item xl={2} md={2}>
                    <h5>Contacts</h5>

                    <ul>
                        <li ><span className="fa-li"><i className="far fa-map"></i></span>New York, Avenue Street 10
                        </li>
                        <li ><span className="fa-li"><i className="fas fa-phone-alt"></i></span>042 876 836 908</li>
                        <li ><span className="fa-li"><i className="far fa-envelope"></i></span>company@example.com</li>
                        <li><span className="fa-li"><i className="far fa-clock"></i></span>Monday - Friday: 10-17</li>
                    </ul>
            </Grid>

        </Grid>
    )
}

export default Footer;