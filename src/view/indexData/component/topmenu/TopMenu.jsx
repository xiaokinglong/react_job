import React from "react";

import { Card, Col, Row, Icon, Progress, Statistic } from "antd";

import './TopMenu.scss';

const { Meta } = Card;

function TopMenu(props) {
  console.log(props)
  return (
    <Row gutter={24} className="top-menu">
      <Col xs={24} sm={24} md={12} lg={6}>
        <Card
          className="menu-item"
          title="总销售额"
          headStyle={{
            fontWeight: "bold",
            fontSize: "14px",
            padding: "0 24px"
          }}
          bodyStyle={{
            height: "181px",
            overflow: "hidden"
          }}
          extra={<Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />}
          actions={[]}
          loading={props.loading}
          hoverable
          bordered={true}
          description={"是的"}
        >
          <Statistic
            value={1000000}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<Icon type="money-collect" />}
          />
          {/* <Lines /> */}
          <Meta description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6}>
        <Card
          className="menu-item"
          title="访问量"
          headStyle={{
            fontWeight: "bold",
            fontSize: "14px",
            padding: "0 24px"
          }}
          bodyStyle={{
            height: "181px",
            overflow: "hidden"
          }}
          extra={<Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />}
          loading={props.loading}
          hoverable
          bordered={true}
        >
          <Progress percent={70} />
          <Meta description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6}>
        <Card
          className="menu-item"
          title="支付笔数"
          headStyle={{
            fontWeight: "bold",
            fontSize: "14px",
            padding: "0 24px"
          }}
          bodyStyle={{
            height: "181px",
            overflow: "hidden"
          }}
          extra={<Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />}
          loading={props.loading}
          hoverable
          bordered={true}
        >
          <Progress type="dashboard" percent={7.01} />
          <Meta description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6}>
        <Card
          className="menu-item"
          title="运营活动效果"
          headStyle={{
            fontWeight: "bold",
            fontSize: "14px",
            padding: "0 24px"
          }}
          bodyStyle={{
            height: "181px",
            overflow: "hidden"
          }}
          extra={<Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />}
          loading={props.loading}
          hoverable
          bordered={true}
        >
          <Progress type="circle" percent={7.01} />
          <Meta description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
  );
}

export default TopMenu;
