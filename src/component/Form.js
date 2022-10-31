import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstpage from './Firstpage/Firstpage';
import SecondPage from './Secondpage/SecondPage';
import Thirdpage from './Thirdpage/Thirdpage';
import Finalpage from './Finalpage/Finalpage';
import StepProgessbar from './Progressbar/StepProgessbar';
import logo from '../component/Asset/logo.png'

const Form = () => {
    const [page, setPage] = useState(0);

    const fTitle = ["Welcome! First thing first", "Let's setup a home for all your work", "How are you planning to use Eden?"]
    const pTitle = ["You can always change them later", "You can always create another workspace later", "we'll streamline your setup experience accordingly."]
    console.log(page);
    const Next = () => {
        setPage(Currpage => Currpage + 1);
        // setIndex(prevIndex => prevIndex + 1);

        console.log(page);

    }

    const DisplayComp = () => {
        if (page === 0) {
            return <Firstpage />
        }
        else if (page === 1) {
            return <SecondPage />
        }
        else if (page === 2) {
            return <Thirdpage />
        }
        else {
            return <Finalpage />
        }

    }



    return (
        <div className='main'>
            <div className='logo'>

                <img src={logo} />
                <span>Eden</span>
            </div>

            <div className='p-bar'>
                <StepProgessbar step={page} />
            </div>
            <div className='header'>
                <h2>{fTitle[page]}</h2>
                <p>{pTitle[page]}</p>


            </div>
            <div className='f-container'>

                {DisplayComp()}

                <button onClick={Next} className="btn btn-primary  butn">{page == 3 ? 'Launch Eden' : "Create Workspace"}</button>
            </div>
        </div>
    )
}

export default Form