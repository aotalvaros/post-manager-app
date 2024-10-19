import { Layout, Menu, theme } from "antd";
import { CommentOutlined, UserOutlined,  } from "@ant-design/icons";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { CommentMenu } from "../components";


const { Sider, Content } = Layout;

export const RouterPages = () => {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider 
                collapsedWidth="0"
                breakpoint="md"
                hidden={false}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <CommentOutlined />,
                            label: <Link to='/comentarios'>Ver comentarios</Link>,
                        },
                        {
                            key: "2",
                            icon: <UserOutlined />,
                            label: <Link to='/creador'>Creado por:</Link>,
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 'auto',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Routes>
                        <Route path='/comentarios' element={<CommentMenu/> }></Route>
                        <Route path='/creador' element={<div>Andres otalvaro</div>}></Route>

                        <Route path='/*' element={ <Navigate to='/comentarios' /> }></Route>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}
