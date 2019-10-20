import React, {Component} from 'react'; 
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSideDrawer:true,
        }
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleClickHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render() {
        return(
            <Aux>
                <Toolbar drawerToggleClicked = {this.sideDrawerToggleClickHandler}></Toolbar>
                <SideDrawer closed = {this.sideDrawerCloseHandler} showBackdrop = {this.state.showSideDrawer}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default Layout;