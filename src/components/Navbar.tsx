// note for future self:
// I'm suspect of this working correctly
// when using the about and contact links from home, it should scroll down
// but when using them from another page, it should navigate to home and then scroll down
// I think this will require some javascript to check if the current page is home or not
// and then either scroll or navigate and then scroll
function Navbar() {
    return (
        <>
            <div className="w-screen h-16 bg-purple-950 flex flex-row items-center justify-center">
                <ul className="flex flex-row list-none justify-evenly w-screen">
                    <li className="text-gray-500 px-4 text-lg hover:text-gray-300"><a href="/">Home</a></li>
                    <li className="text-gray-400 px-4 text-lg hover:text-gray-300"><a href="/blog">Blog</a></li>
                    <li className="text-gray-400 px-4 text-lg hover:text-gray-300"><a href="#about">About</a></li>
                    <li className="text-gray-400 px-4 text-lg hover:text-gray-300"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
} export default Navbar