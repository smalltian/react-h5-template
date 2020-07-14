import React from 'react'
import ReactDOM from 'react-dom'
import styles from './login.less'

interface LoginProps {

}

interface LoginState {
    show?: boolean;
}


class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props)
        this.state = {
            show: false,
        }
    }

    show() {
        this.setState({ show: true })
    }

    hide() {
        this.setState({ show: false })
    }

    render() {
        const { show } = this.state
        return (
            <div className={`flex flex-d-c a-c j-c ${styles.login_wrap}`} style={{ display: show ? 'flex' : 'none' }}>
                <div className={`flex flex-d-c a-c ${styles.wrapper}`}>
                    login
                </div>
            </div>
        )
    }
}


let div = document.createElement('div')
let props: any = {}
document.body.appendChild(div)

let LoginCom = ReactDOM.render(React.createElement(Login, props), div)

export default LoginCom
