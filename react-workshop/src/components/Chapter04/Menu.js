const Menu = ({menu}) => {
    return (
        <ul>
            {
                menu.map(el => <li key={el.text}><a href={el.url}>{el.text}</a></li>)
            }
            {/*<li><a href="/">Strona główna</a></li>*/}
            {/*<li><a href="/blog">Blog </a></li>*/}
            {/*<li><a href="/cennik">Cennik</a></li>*/}
            {/*<li><a href="/kontakt">Kontakt</a></li>*/}
        </ul>
    );
};

export default Menu;
