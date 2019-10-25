import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../Ducks/reducer'
import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <div className='Nav'>
                <div className='NavProfile'>
                    <div className='NavImage'></div>
                    <div className='NavUser'></div>
                </div>
                <div className='NavLinks'>
                    <button><Link to='/dashboard'>Home</Link></button>
                    <button><Link to='/post'>New Post</Link></button>
                </div>
                <div className='Logout'>
                    <button><Link to='/'>Logout</Link></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {user} = reduxState;
    return {
        user
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);