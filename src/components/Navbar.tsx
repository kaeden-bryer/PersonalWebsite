// note for future self:
// I'm suspect of this working correctly
// when using the about and contact links from home, it should scroll down
// but when using them from another page, it should navigate to home and then scroll down
// I think this will require some javascript to check if the current page is home or not
// and then either scroll or navigate and then scroll
function Navbar() {
    return (
        <>
            <div className="w-screen h-16 bg-blue-500 flex flex-row items-center justify-center">
                <ul className="flex flex-row list-none justify-evenly w-screen">
                    <li className="text-white px-4 hover:underline"><a href="https://www.grizzhacks.org">Home</a></li>
                    <li className="text-white px-4 hover:underline"><a href="/blog">Blog</a></li>
                    <li className="text-white px-4 hover:underline">About</li>
                    <li className="text-white px-4 hover:underline">Contact</li>
                </ul>
            </div>
        </>
    )
} export default Navbar