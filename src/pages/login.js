import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/loginActions';
import RegisterComponent from './register';
import './login.css';
class LoginComponent extends React.Component {
    state = {
        userName: '',
        password: ''
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.token) {
            this.props.history.push('/users');
        }
    }   

    componentDidMount() {
        if(this.props.token) {
            this.props.history.push('/users');
        }
    }

    onChangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        });
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    onSubmit = (event) => {
        console.log('submit', this.state);
        this.props.login(this.state);
    }

    render=() => (
    <div>
        <div className='loginContainer'>    
            <input value={this.state.userName} onChange={this.onChangeUserName} />
            <input type='password' value={this.state.password} onChange={this.onChangePassword} />
            <button onClick={this.onSubmit}>Login</button>
        </div>
        <RegisterComponent />
    </div>
    );
}

const mapStateToProps = (state) => ({
    token: state.users.token
});

export default connect(mapStateToProps, { login })(LoginComponent);