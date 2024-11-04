import candyBackground from '../assets/candy.webp'

const Header: React.FC = () => {
    return (
        <div style={{
            backgroundImage: `url(${candyBackground})`,
            backgroundSize: "500px",
            backgroundRepeat: "repeat",
            height: "200px"
        }}>
        </div>
    )
}

export default Header;