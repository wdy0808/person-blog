# 关于dep和go modules
## 主流依赖管理解决方案
1. manifest file记录依赖信息
2. 使用满足manifest file需求的最新package版本
3. 使用lock file记录依赖module具体版本号，由算法生成
4. 从manifest file到lock file的版本选择是np-completeness search problem

## go modules解决方案
### 版本号
1. 确立版本号具体要求，表示为v major.minor.patch，如v1.2.0。
2. major意味着存在不兼容改变。在go 
模型中意味着不同的package，表现为：
2.1. 对major version大于2的module，需要在import路径上体现，如```import "github.com/my/mod/v2/mypkg"```
2.2. 在一个项目中同时存在对一个package不同版本的依赖被认为是合理的
3. 对于major version相同的版本号，需要向后兼容，即1.3.5需要兼容1.2.8。
4. 第三条对major version为0时不成立

### 版本选择
1. go modules模型中每个项目申明他们依赖package的最小版本
2. go modules每次只会选择满足依赖的最小版本号，即如果项目依赖*mypkg v1.6.2*那么安装依赖package时只会安装v1.6.2，不管是否存在更新的版本。
3. 存在依赖冲突时，选最大的那个版本号。如项目同时依赖*mypkg v1.3.0*和*mypkg v1.4.0*，那么最终项目构建时使用*mypkg v1.4.0*
4. 以来package只能由用户手动完成
5. 理由
5.1. High-Fidelity，高保真性，不做不必要的更新。
5.2. 算法实现是线性

## 总结
### why dep？
1. 在vgo出来之前一度被认为将在未来某个时刻merge进go，形成go dep
2. 使用主流解决方案，易于理解
3. 对源代码修改较少

### why go modules？
1. 官方工具
2. 将依赖管理集成到go命令当中，如go build时直接下载依赖项，操作简单。
3. 允许在单个构建中使用程序的多个主要版本