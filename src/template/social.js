import React from "react";
import { Icon } from "antd";
import images from '../resources/images'

class Social extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <div
        style={style}
      >
        <a
          href="https://www.facebook.com/giovanni.fernandes.503"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon type="facebook" theme="filled" />
        </a>
        <a
          href="https://www.linkedin.com/in/giovanni-fernandes-da-costa-a0105324/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon type="linkedin" theme="filled" />
        </a>
        <a
          href="https://twitter.com/_giofcosta"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon type="twitter" />
        </a>
        <a
          href="https://github.com/giofcosta"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon type="github" theme="filled" />
        </a>
        <a
          href="https://www.instagram.com/giofcosta/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon type="instagram" theme="filled" />
        </a>
        <a
          href="https://www.behance.net/giofcosta"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon type="behance-square" />
        </a>
        <a
          href="https://connect.unity.com/u/giovanni-fernandes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon component={images.iconUnity} />
        </a>
        <a
          href="https://medium.com/@giovannifernandes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444444", marginRight: 30 }}
        >
          <Icon type="medium" />
        </a>
      </div>
    );
  }
}

export default Social;
