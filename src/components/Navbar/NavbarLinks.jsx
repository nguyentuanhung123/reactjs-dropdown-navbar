const NavbarLinks = () => {
    const links = [{ name: "Men"}, { name: "Women"}, { name: "Kid's"}]

    return (
        <>
            {
                links.map((link) => (
                    <div key={link.name}>
                        <div>
                            <h1>
                                {link.name}
                            </h1>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NavbarLinks