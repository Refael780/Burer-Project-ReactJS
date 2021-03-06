import React, { Component } from 'react';
import Classes from './Modal.css';
import Aux from '../../../hoc/Auxliray';
import Backdrop from '../../UI/Backdrop/Backdrop'
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {

        return nextProps.show !== this.props.show;
    }
    render() {
        return (
            <Aux>
                <Backdrop clicked={this.props.modalClosed} show={this.props.showingBacdrop} />
                <div className={Classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? 1 : 0
                    }} >
                    {this.props.children}
                </div>

            </Aux>);

    }
}


export default Modal;




