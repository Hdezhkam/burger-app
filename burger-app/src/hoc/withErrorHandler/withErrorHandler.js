import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'


const withErrorHandler = (WrappedComponent, Axios) => {

    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {

            this.reqInterceptor = Axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })

            this.resInterceptor = Axios.interceptors.request.use(res => {
                Axios.interceptors.response.use(res => res, error => {
                    this.setState({ error: error })
                })
            })
        }

        // componentWillUnmount() {
        //     Axios.interceptors.request.ejecet(this.reqInterceptor)
        //     Axios.interceptors.request.ejecet(this.resInterceptor)
        // }

        errorConfirmHandler = () => {
            this.setState({ error: null })
            console.log('j');
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )

        }
    }
}


export default withErrorHandler
