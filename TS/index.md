## 项目使用(配置)

### 基本配置

###### 项目初始化

```shell
npm init -y or yarn init -y
```

###### 安装依赖

```shell
npm i -D typescript ts-node nodemon @types/node
yarn add -D typescript ts-node nodemon @types/node
```

###### 项目运行

```shell
nodemon '项目地址'
```

###### 解决声明变量未赋值报错问题

```tsx
class Person {
    name:string //error,
}

tsconfig.json > compilerOptions, 增加一项："strictPropertyInitialization":false
```

