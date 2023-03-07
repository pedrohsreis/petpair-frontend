import { useState } from 'react';
import {
  Breadcrumb, Layout, Menu, Form, Button,
  InputNumber,
  Radio,
  Select,
  Upload,
  Input
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };


  const onFinish = (e) => {
    console.log(JSON.stringify(e), name, description);
  }

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };




  return (
    <Layout className="layout">
      <Header>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[{
            key: 1,
            label: `Dog Form`,
          }]}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dog Form</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: '#f5f5f5',
          }}
        >
          <Form
            name="dog_form"
            {...formItemLayout}
            onFinish={onFinish}
            style={{
              maxWidth: 600
            }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input the dog's name", type: "text" }]}
            > <Input value={name} onChange={(e) => setName(e.target.value)}/></Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please input the dog's description", type: "text" }]}
            > <Input value={description} onChange={(e) => setDescription(e.target.value)}/></Form.Item>

            <Form.Item label="Weight (lbs)">
              <Form.Item name="weight" noStyle>
                <InputNumber min={1} />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Age">
              <Form.Item name="age" noStyle>
                <InputNumber min={1} />
              </Form.Item>
            </Form.Item>
            <Form.Item
              name="personality"
              label="Personality"
              hasFeedback
              rules={[
                {
                  //required: true,
                  message: 'Please select',
                },
              ]}
            >
              <Select placeholder="Select">
                <Select.Option value="super-smart">Super Smart</Select.Option>
                <Select.Option value="silly-goose">Silly Goose</Select.Option>
                <Select.Option value="social-butterfly">Social Butterfly</Select.Option>
                <Select.Option value="snuggler">Quite the snuggler</Select.Option>
                <Select.Option value="quiet">Embraces quiet</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              hasFeedback
              rules={[
                {
                  //required: true,
                  message: 'Please select',
                },
              ]}
            >
              <Select placeholder="Select">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            

            <Form.Item
              name="traits"
              label="Traits"
              rules={[
                {
                  //required: true,
                  message: 'Please select',
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Select">
                <Select.Option value="guard">Guard</Select.Option>
                <Select.Option value="loyal">Loyal</Select.Option>
                <Select.Option value="smart">Smart</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="breed"
              label="Breed"
              rules={[
                {
                  //required: true,
                  message: 'Please select',
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Select">
                <Select.Option value="german-shepherd">German Shepherd</Select.Option>
                <Select.Option value="pitbull">Pitbull</Select.Option>
                <Select.Option value="boxer">Boxer</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="goodWith"
              label="Good With"
              rules={[
                {
                  //required: true,
                  message: 'Please select',
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Select">
                <Select.Option value="children">Children</Select.Option>
                <Select.Option value="cats">Cats</Select.Option>
                <Select.Option value="dogs">Other dogs</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="trainedAs"
              label="Trained for"
              rules={[
                {
                  //required: true,
                  message: 'Please select',
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Select">
                <Select.Option value="guard">Guard</Select.Option>
                <Select.Option value="basic">Basic</Select.Option>
                <Select.Option value="guide">Guide dog</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="commands"
              label="Commands"
              rules={[
                {
                  //required: true,
                  message: 'Please select',
                  type: 'array',
                },
              ]}
            >
              <Select mode="multiple" placeholder="Select">
                <Select.Option value="sit">Sit</Select.Option>
                <Select.Option value="roll">Roll</Select.Option>
                <Select.Option value="stay">Stay</Select.Option>
              </Select>
            </Form.Item>


            <Form.Item name="neutered" label="Spayed/Neutered">
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>


            <Form.Item label="Picture">
              <Form.Item name="picture" valuePropName="picture" getValueFromEvent={normFile} noStyle>
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
      </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default App;