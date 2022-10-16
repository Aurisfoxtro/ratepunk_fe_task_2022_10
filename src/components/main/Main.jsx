import Header from "../header/Header"
import Panel from "../panel/Panel"

const Main = () => {
    return(
        <>
        <Header />
        <div className="main_container">
            <div className="content">
                <Panel />
                <div className="right_content">
                    <div className="step">
                        <div className="step_left">
                            <img className="step_image"></img>
                        </div>
                        <div className="step_right">
                            <p className="step_label">Step 1</p>
                            <h2>Invite Friends</h2>
                            <p className="step_text">Refer friends with your unique referral link.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step_left">
                            <img className="step_image"></img>
                        </div>
                        <div className="step_right">
                            <p className="step_label">Step 2</p>
                            <h2>Invite Friends</h2>
                            <p className="step_text">Get 1 coin for each friend that installs our extension using your referral link.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step_left">
                            <img className="step_image" alt=""></img>
                        </div>
                        <div className="step_right">
                            <p className="step_label">Step 3</p>
                            <h2>Invite Friends</h2>
                            <p className="step_text">Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
                        </div>
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>
        </div>
        </>
    )

}

export default Main