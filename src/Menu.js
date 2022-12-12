import logo from './logo.png';

const menuItems = [
    {name: 'About me', link: '#About-Me'},
    {name: 'Skills', link: '#Skills'},
    {name: 'Projects', link: '#Projects'},
    {name: 'Studies', link: '#Studies'},
    {name: 'Find me', link: '#Find-Me'}
];

const menu = menuItems.map((menuItem) => <a href={menuItem.link}>{menuItem.name}</a>);

function Menu() {
    return (
        <div className="menu">
            <img src={logo} alt="Logo" />
            <div className='menu-name'>
                <span>Eleftherios</span>
                <span>Merkouriou</span>
            </div>
            {[...menu]}
        </div>
    );
}

export default Menu;