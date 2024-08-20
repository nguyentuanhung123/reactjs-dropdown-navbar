const NavbarLinks = () => {
    const links = [{ name: "Men"}, { name: "Women"}, { name: "Kid's"}]

    return (
        <>
            {
                links.map((link) => (
                    <div key={link.name}>
                        <div className="px-3 text-left md:cursor-pointer">
                            <h1 className="py-7">{link.name}</h1>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NavbarLinks