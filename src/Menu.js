import logo from './logo.png';

const menuItems = [
    {name: 'About me', link: '#About-Me'},
    {name: 'Studies', link: '#Studies'},
    {name: 'Projects', link: '#Projects'},
    {name: 'Find me', link: '#Find-Me'}
];

const menu = menuItems.map((menuItem) => <a href={menuItem.link}>{menuItem.name}</a>);

function Menu() {
    return (
        <div className="menu">
            <img src={logo} alt="Logo" />
            {[...menu]}
        </div>
    );
}

export default Menu;