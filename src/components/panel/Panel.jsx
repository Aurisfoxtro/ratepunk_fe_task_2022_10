
const Panel = () => {
    return(
        <div className="left_panel">
            <h1>Refer Friends and Get Rewards</h1>
            <p className="text">Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
            <p className="error_text">Error State</p>
            <form>
                <input type="text" value="Enter your email address"/>
                <button>Get Referral Link</button>
            </form>
            <p className="sub_text">Limits on max rewards apply.</p>
        </div>
    )
}

export default Panel