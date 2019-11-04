import React, { Component } from 'react';

import { Layout, Icon, Menu } from 'antd';

import './index.scss';
import User from '../../component/user';

// const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		};
	}
	componentWillMount() {}

	// tips: 切换
	toggleCollapsed = () => {
		console.log(this.state.collapsed);
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		return (
			<Layout className="admin">
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff' }}>
						<div>
							<Icon
								className="trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggleCollapsed}
							/>
						</div>
						<User />
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 280
						}}
					>
						{this.props.children}
					</Content>
					<Footer>这里是底部</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default Admin;
