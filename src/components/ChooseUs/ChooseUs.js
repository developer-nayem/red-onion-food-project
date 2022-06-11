import React from 'react';
import './ChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faBell, faCar, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import fastDeliveryImg from '../../images/fast-delivery.png';
import goodResponderImg from '../../images/good-responder.png';
import homeDeliveryImg from '../../images/home-delivery.png';


const ChooseUs = () => {
    return (
        <div className='container'>
        <div>
            <div className='choose-text-area'>
                <h3>Why you choose us</h3>
                <p>This card has supporting text below as a natural lead-in to additional content.
                   This card has supporting text below as a natural lead-in to additional content.
                </p>
            </div> 
            <div className="card-area card-deck">
                <div className="card-item card">
                    <img className="card-img-top" src={fastDeliveryImg} alt='...'/>
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className='card-icon' icon={faCar} /> Fast Delivery</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">see more <FontAwesomeIcon className='see-more-icon' icon={faArrowRight} /></small></p>
                    </div>
                </div>
                <div className="card-item card">
                    <img className="card-img-top" src={goodResponderImg} alt='...'/>
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className='card-icon' icon={faBell} /> A Good Auto Responder</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">see more <FontAwesomeIcon className='see-more-icon' icon={faArrowRight} /></small></p>
                    </div>
                </div>
                <div className="card-item card">
                    <img className="card-img-top" src={homeDeliveryImg} alt='...'/>
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className='card-icon' icon={faCarSide} /> Home Delivery</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">see more <FontAwesomeIcon className='see-more-icon' icon={faArrowRight} /></small></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;