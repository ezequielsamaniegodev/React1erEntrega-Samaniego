import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <div>
        <ul>
        <li><a href="">NEW</a></li>
        <li><a href="">MEN</a></li>
        <li><a href="">WOMEN</a></li>
        </ul>
    </div>
    <div>
        <h1>
        Victory Fitness
        </h1>
    </div>
    <div>
        <ul>
        <li><a href="">LOGIN</a></li>
        <li><a href="">SEARCH</a></li>
        <CartWidget></CartWidget>
        </ul>
    </div>
        </nav>
    )
}

export default NavBar