# 中间件管理平台

这是一个基于Spring Boot + MyBatis Plus的中间件管理平台，包含以下模块：

## 模块说明

| 模块名称 | 端口号 | 功能描述 |
|---------|-------|---------|
| middleware-platform-server-config-center | 8081 | 配置中心 |
| middleware-platform-server-dlb | 8082 | 分布式负载均衡 |
| middleware-platform-server-flow-control-center | 8083 | 流控中心 |
| middleware-platform-server-gateway-center | 8084 | 网关中心 |
| middleware-platform-server-job | 8085 | 任务调度管理 |
| middleware-platform-server-mq | 8080 | 消息队列 |
| middleware-platform-server-registry-center | 8086 | 注册中心 |
| middleware-platform-server-log-platform | 8087 | 日志平台 |

## 技术栈

- Java 1.8
- Spring Boot 2.7.0
- MyBatis Plus 3.5.3.1
- Maven

## 构建和运行

每个模块都是独立的Spring Boot应用，可以单独构建和运行：

```bash
# 进入任意模块目录
cd middleware-platform-server/middleware-platform-server-{module-name}

# 构建项目
mvn clean package

# 运行项目
mvn spring-boot:run
```

或者直接运行jar包：

```bash
java -jar target/middleware-platform-server-{module-name}-0.0.1-SNAPSHOT.jar
```