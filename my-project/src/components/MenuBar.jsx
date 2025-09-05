import { useState } from "react";

function MenuBar({ menuOnOff }) {
	const [menuList, setMenuList] = useState([
		"Projects", "Web", "Languages", "Algorithms", "Git"
	]);

	return (
		<>
			{
				menuOnOff ?
					<div className="relative w-dvw h-[calc(100vh-var(--navbar-height))] px-4 py-1 bg-gray-800 z-10 sm:z-0 sm:w-sm">
						<ul>
							{menuList.map((item, index) => {
								return (
									<li className="w-full h-12 my-2 p-2 rounded-md hover:bg-gray-700 hover:cursor-pointer group">
										<h1 className="text-2xl text-gray-500 group-hover:text-gray-100">{item}</h1>
									</li>
								);
							})}
						</ul>
					</div>
					:
					null
			}
		</>
	);
}

export default MenuBar;