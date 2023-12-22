

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <img className='w-20' src="https://i.ibb.co/2ysLFNj/logo.jpg" alt="" />
                    <h3>Copyright © 2023 - All right reserved</h3>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/profile.php?id=100092320843338"><i className="fa-brands fa-facebook text-2xl cursor-pointer"></i></a>
                        <a href="https://www.linkedin.com/in/liton-mia-3212522a5/"><i className="fa-brands fa-linkedin text-2xl cursor-pointer"></i></a>
                        <a href="https://github.com/liton61"><i className="fa-brands fa-github text-2xl"></i></a>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">Address: 123 Main Street, New York, USA</a>
                    <a className="link link-hover">Phone: 555-555-5555</a>
                    <a className="link link-hover">Email: mdabirahmedsl7162@gmail.com
                        .com</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;