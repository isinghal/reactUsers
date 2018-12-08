import React from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/actions/loginActions';
class RegisterComponent extends React.Component {
    state = {
        userName: '',
        password: '',
        gender: "MALE"
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

    handleOptionChange = (changeEvent)=> {
        this.setState({
          gender: changeEvent.target.value
        });
    }

    register = () => {
        this.props.register(this.state);
    }

    render=() => (
    <div>
        <div>    
            <input value={this.state.userName} onChange={this.onChangeUserName} />
            <input type='password' value={this.state.password} onChange={this.onChangePassword} />
            <label>
                <input type="radio" value="MALE" 
                    checked={this.state.gender === 'MALE'} 
                    onChange={this.handleOptionChange} />
                    MALE
            </label>
            <label>
                <input type="radio" value="FEMALE" 
                    checked={this.state.gender === 'FEMALE'} 
                    onChange={this.handleOptionChange} />
                FEMALE
            </label>
            <button onClick={this.register}>register</button>
        </div>
    </div>
    );
}

export default connect(null,{ register })(RegisterComponent);