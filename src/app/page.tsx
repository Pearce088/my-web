export default function page () {
    return (
        <div className="nav-header">
            <nav className="d-flex">
                <div className="px-5 marketplace-name">
                    <img src="jt-logo.png" alt="jt-logo" />
                </div>
                <div className="ms-auto my-auto">
                    <ul className="menu-buttons px-5">
                        <li><a href="#myCarousel" className="text-decoration-none text-dark fw-bold">Home</a></li>
                        <li><a href="#product" className="text-decoration-none text-dark fw-bold">Product</a></li>
                        <li><a href="#order" className="text-decoration-none text-dark fw-bold">How to Order</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}