import React from "react"
import { Segment, Menu, Image } from "semantic-ui-react"

const UiHeader = () => (
  <Segment inverted>
    <Menu inverted>
      <Image src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" />
    </Menu>
  </Segment>
)

export default UiHeader;
