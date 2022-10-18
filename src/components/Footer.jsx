const date = new Date();
const currentTime = date.getFullYear();


function Footer() {
    return (
        <footer className="footer">
            <p>developer's journal &copy; {currentTime}</p>
        </footer>
        )
}

export default Footer;