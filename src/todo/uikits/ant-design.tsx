import React, { ReactElement } from "react";
import Description from "../../components/description";
import { Button } from "antd";

interface Props {}

export default function AntDesign({}: Props): ReactElement {
  return (
    <>
      <Description
        title="Ant Design"
        subtitle="An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises."
      >
        <>
          <ul>
            <li>🌈 Enterprise-class UI designed for web applications</li>
            <li>📦 A set of high-quality React components out of the box.</li>
            <li>🛡 Written in TypeScript with predictable static types.</li>
            <li>⚙️ Whole package of design resources and development tools.</li>
            <li>🌍 Internationalization support for dozens of languages.</li>
            <li>🎨 Powerful theme customization in every detail.</li>
          </ul>
          <pre>npm install antd</pre>
        </>
      </Description>

      <div className="m-10 p-10 bg-white">
        <Buttons />
      </div>
    </>
  );
}

function Buttons() {
  return (
    <>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
      <br />
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
      <br />
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
      <br />
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
      <br />
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
      <br />
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
      <br />
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text(disabled)
      </Button>
      <br />
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link(disabled)
      </Button>
      <div className="site-button-ghost-wrapper">
        <Button ghost>Ghost</Button>
        <Button ghost disabled>
          Ghost(disabled)
        </Button>
      </div>
    </>
  );
}
