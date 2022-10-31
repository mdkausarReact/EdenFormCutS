import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import user from '../Asset/user.png'
import ugroup from '../Asset/ugroup.png'



const Thirdpage = () => {
    const [selected, setSelected] = useState();
    const [isActive, setIsActive] = useState(false);


    const handleClick = () => {
        setIsActive(!false);
        console.log(isActive);
        alert("selected")
    }

    return (

        <div className='thirdpage-container'>
            <div className='row'>
                <div className='col'>

                    <div className="card" onClick={handleClick} style={{ border: isActive ? '1px solid blue ' : '' }}>
                        <div className="card-body" >
                            <img className='user' src={user} />
                            <h6 className="card-subtitle mb-2 text-muted">For myself</h6>
                            <p className="card-text"> Write better. Think more clearly. Stay organized
                            </p>
                        </div>
                    </div>
                </div>

                {/* onClick={() =>
                        this.selectCard(Offer.OfferId) */}


                <div className='col'>
                    <div className="card" >
                        <div className="card-body">
                            <img className='ugroup' src={ugroup} />
                            <h6 className="card-subtitle mb-2 text-muted">With my team</h6>
                            <p className="card-text">
                                Wikis,docs,tasks & projects all in one place
                            </p>
                        </div>
                    </div>


                </div>

            </div>


        </div>
        //     <div className="card" style={{width:'18rem'}}>
        //     <div className="card-body">
        //       <h5 className="card-title">Card title</h5>
        //       <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        //       <p className="card-text">
        //         Some quick example text to 
        //         </p>

        //     </div>
        //   </div>
    )
}

export default Thirdpage