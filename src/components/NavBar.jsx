

function NavBar(){
const username = "kayla"

    return(
        <nav className="mt-5" onClick={() => alert("clicked")} style={styles} >
            <a href="#" className="some-class">Home</a>
            <a href="#">About</a>

            <div>Welcome, {username.toUpperCase()} cart {50 + 67}</div>
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}
export default NavBar;