import { Link } from "react-router-dom"
import { links } from "./Mylinks"
import { useState } from "react"

const NavLinks = () => {

    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")

    return (
        <>
            {
                links.map((link) => (
                    <div key={link.name}>
                        <div className="px-3 text-left md:cursor-pointer group">
                            {/* 
                              * Cập nhật lại state của heading khi click 
                              * Nếu heading trước đó khác với heading hiện tại thì cập nhật heading bằng link hiện tại đang được truyền vào
                              * Nếu heading trước đó giống với heading hiện tại thì cập nhật heading bằng rỗng (Tức đóng các thẻ Sublinks)
                              * 
                            */}
                            <h1 
                                className="py-7 flex justify-between items-center md:pr-0 pr-5 group" 
                                onClick={() => {
                                    heading !== link.name ? setHeading(link.name) : setHeading("");
                                    setSubHeading("")
                                }}
                            >
                                {link.name}
                                {/* Xem ở dạng mobile */}
                                <span className="text-xl md:hidden inline">
                                    <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                </span>
                                {/* Xem ở dạng desktop */}
                                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                    <ion-icon name="chevron-down"></ion-icon>
                                </span>
                            </h1>
                            {link.submenu && (
                                <div>
                                    <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                        <div className="py-3">
                                            <div className="w-4 h-4 absolute left-3 mt-1 bg-[#fff] rotate-45"></div>
                                        </div>
                                        <div className="bg-[#fff] p-3.5 grid grid-cols-3 gap-10">
                                            { link.sublinks.map((mysublinks, index) => (
                                                <div key={index}>
                                                    <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                                                    {
                                                        mysublinks.sublink.map((slink, index) => (
                                                            <li key={index} className="text-sm text-gray-600 my-2.5">
                                                                <Link 
                                                                    to={slink.link} 
                                                                    className="hover:text-primary"
                                                                >
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                            )) }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Mobile menus */}
                        <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
                            {/* sublinks */}
                            {
                                link.sublinks.map((slinks, index) => (
                                    <div key={index}>
                                        <div>
                                            <h1 
                                                onClick={() => 
                                                    subHeading !== slinks.Head 
                                                        ? setSubHeading(slinks.Head) 
                                                        : setSubHeading("")
                                                } 
                                                className="py-3 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                                            >
                                                {slinks.Head}
                                                <span className="text-xl md:mt-1 md:ml-2 inline">
                                                    <ion-icon name={`${
                                                        subHeading === slinks.Head 
                                                            ? "chevron-up" 
                                                            : "chevron-down"
                                                        }`}>
                                                    </ion-icon>
                                                </span>
                                            </h1>
                                            <div className={
                                                subHeading === slinks.Head
                                                    ? "md:hidden"
                                                    : "hidden"
                                            }>
                                                {slinks.sublink.map((slink, index) => (
                                                    <li key={index} className="py-3 pl-14">
                                                        <Link to={slink.link} className="hover:text-primary">
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NavLinks