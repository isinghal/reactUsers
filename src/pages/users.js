import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/loginActions';

class UserComponent extends React.Component {
    componentDidMount() {
        if(!this.props.token) {
            this.props.history.push('/login');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.token) {
            this.props.history.push('/login');
        }
    }

    logout = () => {
        this.props.logOut();
    }

    render=() => (
        <div>
            Users 
           <button onClick={this.logout}>Logout</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    token: state.users.token
});

export default connect(mapStateToProps, { logOut })(UserComponent);