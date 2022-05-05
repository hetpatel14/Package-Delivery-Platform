import React from 'react'
import { Menu } from 'semantic-ui-react'
import Cookies from 'js-cookie'

const type = Cookies.get("type")

const SignupMenuTab = ({
	activeItem,
	handleItemClick
}) => {
	return (
		<>
			<Menu pointing secondary>
				{type === "consignees" && <Menu.Item
					name="address"
					active={activeItem === "address"}
					onClick={() => handleItemClick("address")}
				/>}

				{type === "drivers" && <Menu.Item
					name="vehicleDetail"
					active={activeItem === "vehicleDetail"}
					onClick={() => handleItemClick("vehicleDetail")}
				/>}

				{type === "consignees" && <Menu.Item
					name="payment"
					active={activeItem === "payment"}
					onClick={() => handleItemClick("payment")}
				/>}
			</Menu>
		</>
	)
}

export default SignupMenuTab