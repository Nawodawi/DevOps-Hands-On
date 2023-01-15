import { Button, Form, Input, Layout, Col, Row, Card } from 'antd';
import React from 'react';
import './App.css';
const { Header, Footer, Content } = Layout;


const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const App = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (

    <Layout>

      <Header></Header>
      <Content>

        <Row>
          <Col span={8}></Col>
          <Col span={8} className="space-align-blockd">
            <Card bordered title="DevOps Hands On" style={{ width: 400 }}>

              <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <MyFormItemGroup prefix={['user']}>
                  <MyFormItemGroup prefix={['name']}>
                    <MyFormItem name="firstName" label="First Name:">
                      <Input />
                    </MyFormItem>
                    <MyFormItem name="phone" label="Phone no:">
                      <Input />
                    </MyFormItem>
                  </MyFormItemGroup>

                  <MyFormItem name="age" label="Age:">
                    <Input />
                  </MyFormItem>
                </MyFormItemGroup>

                <Row gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }} >
                  <Col className="gutter-row" span={5}>
                    <Button type="primary" htmlType="submit">
                      Save
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={5}>
                    <Button type="primary" htmlType="submit">
                      Edit
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={5}>
                    <Button type="primary" htmlType="submit">
                      Delete
                    </Button>
                  </Col>

                </Row>



              </Form>

            </Card>
          </Col>
          <Col span={8}></Col>
        </Row>

      </Content>
      <Footer></Footer>

    </Layout>

  );
};

export default App;

