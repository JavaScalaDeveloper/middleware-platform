import React from 'react';
import { Layout, Menu, Button, Drawer, Card, Carousel, Row, Col, Dropdown, Space } from 'antd';
import { AppstoreOutlined, SettingOutlined, CloudServerOutlined, SwapOutlined, ControlOutlined, GatewayOutlined, ScheduleOutlined, MessageOutlined, FileSearchOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content } = Layout;

const products = [
  { id: 1, name: '配置中心', path: '/config-center', port: 8081, icon: <SettingOutlined /> },
  { id: 2, name: '注册中心', path: '/registry-center', port: 8086, icon: <CloudServerOutlined /> },
  { id: 3, name: '分布式负载均衡', path: '/dlb', port: 8082, icon: <SwapOutlined /> },
  { id: 4, name: '流控中心', path: '/flow-control-center', port: 8083, icon: <ControlOutlined /> },
  { id: 5, name: '网关中心', path: '/gateway-center', port: 8084, icon: <GatewayOutlined /> },
  { id: 6, name: '任务调度', path: '/job', port: 8085, icon: <ScheduleOutlined /> },
  { id: 7, name: '消息队列', path: '/mq', port: 8080, icon: <MessageOutlined /> },
  { id: 8, name: '日志平台', path: '/log-platform', port: 8087, icon: <FileSearchOutlined /> }
];

const environments = [
  { key: 'dev-cn', label: '开发-国内' },
  { key: 'dev-sg', label: '开发-新加坡' },
  { key: 'test-cn', label: '测试-国内' },
  { key: 'test-sg', label: '测试-新加坡' },
  { key: 'staging-cn', label: '预发-国内' },
  { key: 'staging-sg', label: '预发-新加坡' },
  { key: 'prod-cn', label: '生产-国内' },
  { key: 'prod-sg', label: '生产-新加坡' }
];

const App = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const [currentEnv, setCurrentEnv] = React.useState('开发-国内');
  const [currentPage, setCurrentPage] = React.useState('');

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const handleEnvChange = ({ key }) => {
    const env = environments.find(e => e.key === key);
    if (env) {
      setCurrentEnv(env.label);
    }
  };

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // 初始化时也执行一次

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const carouselImages = [
    '/images/carousel1.jpg',
    '/images/carousel2.jpg',
    '/images/carousel3.jpg'
  ];

  // 渲染产品详情页面
  const renderProductPage = () => {
    const product = products.find(p => p.path === currentPage);
    if (!product) return null;

    return (
      <Content className="content">
        <div className="product-page">
          <h2>{product.name}模块</h2>
          <p>这里是{product.name}模块的详细内容页面。</p>
          <p>模块端口: {product.port}</p>
          <Button onClick={() => window.location.hash = ''}>返回首页</Button>
        </div>
      </Content>
    );
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <img src="/logo.svg" alt="Logo" style={{ height: '32px' }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: (
                <Space>
                  <AppstoreOutlined />
                  <span>全部</span>
                </Space>
              ),
              onClick: showDrawer
            }
          ]}
          className="menu"
        />
        <div className="header-right">
          <span className="title">中间件管理平台</span>
          <Dropdown
            menu={{
              items: environments,
              onClick: handleEnvChange
            }}
            trigger={['click']}
          >
            <Button type="link" className="env-button">
              {currentEnv} ▼
            </Button>
          </Dropdown>
        </div>
      </Header>

      {currentPage ? (
        renderProductPage()
      ) : (
        <>
          <Content className="content">
            <div className="carousel-container">
              <Carousel autoplay>
                {carouselImages.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={image} alt={`slide-${index}`} />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="product-matrix">
              <h2 className="product-matrix-title">产品矩阵</h2>
              <Row gutter={[24, 24]}>
                {products.map(product => (
                  <Col span={6} key={product.id}>
                    <Card 
                      title={<span><span className="product-icon">{product.icon}</span> {product.name}</span>} 
                      className="product-card"
                      onClick={() => window.location.hash = product.path}
                    >
                      <p>{product.name}模块</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Content>

          <Drawer
            title="项目导航"
            placement="left"
            closable={true}
            onClose={onClose}
            open={drawerVisible}
            width={400}
          >
            <div className="drawer-content">
              <h3>最近访问</h3>
              <Row gutter={[16, 16]}>
                {products.slice(0, 4).map(product => (
                  <Col span={12} key={`recent-${product.id}`}>
                    <Card 
                      size="small" 
                      title={<span><span className="product-icon">{product.icon}</span> {product.name}</span>}
                      className="drawer-card"
                      onClick={() => window.location.hash = product.path}
                    >
                      <p>{product.name}模块</p>
                    </Card>
                  </Col>
                ))}
              </Row>

              <h3>所有项目</h3>
              <Row gutter={[16, 16]}>
                {products.map(product => (
                  <Col span={12} key={`all-${product.id}`}>
                    <Card 
                      size="small" 
                      title={<span><span className="product-icon">{product.icon}</span> {product.name}</span>}
                      className="drawer-card"
                      onClick={() => window.location.hash = product.path}
                    >
                      <p>{product.name}模块</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Drawer>
        </>
      )}
    </Layout>
  );
};

export default App;