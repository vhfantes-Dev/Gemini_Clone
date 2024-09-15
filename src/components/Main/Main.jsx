import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
const Main = () => {

    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
             <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
         </div>
         <div className="main-container">
            {!showResult
            ? 
            <>
            <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Proejo feito em React</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>O Indiano que fez isso é maluco</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>TEstes automatixados com Jest</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Vou arranjar um emprego melho que a global data</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                </div> 
            </>
            : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                    }
                    
                </div>
            </div>
            }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Digite aqui'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />: null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Toda a Informação que a IA gerou
                    </p>
                </div>
            </div>
         </div>
  )
}

export default Main