import PerScholasLogo from "./PerScholasLogo";

function NavBar(){
const username = "kayla"
// const userInfo = { 
//     username: "kayla"
// }

    return(
        <nav className="mt-5" onClick={() => alert("clicked")} style={styles} >
            <PerScholasLogo />
            <a href="#" className="some-class">Home</a>
            <a href="#">About</a>

            <div>Welcome, {username.toUpperCase()} cart {50 + 67}</div>
            {/* <div>
                welcome, {userInfo.username}
            </div> */}
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}
export default NavBar;