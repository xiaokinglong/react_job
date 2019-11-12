import React, { useState } from "react";

import { Col, Row } from "antd";

import TopMenu from "./component/topmenu/TopMenu";

import "./index.scss";

function IndexData() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div>
      <TopMenu
        loading={loading}
        data={{
          count: "传递给子组件的额数据"
        }}
      />
			<Row>
				<Col md={24} lg={12}>1</Col>
				<Col md={24} lg={12}>3</Col>
			</Row>
    </div>
  );
}

export default IndexData;
