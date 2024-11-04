import candyBackground from '../assets/candy.webp'

const Header: React.FC = () => {
    return (
        <div style={{
            backgroundImage: `url(${candyBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px"
        }}>
        </div>
    )
}

export default Header;