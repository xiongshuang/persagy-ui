### DropGroup 下拉菜单组

<template>
    <div class="Button">
        <div class="component component-padding">
            <h1>Dropdown组件</h1>
            <div>
                <DropGroup :value="selVal" :data="dataSelect" @change="groupChange">
                    <span class="text">{{selText}}</span>
                </DropGroup>
            </div>
        </div>
    </div>
</template>

<script>
    const data=[
        {
            id: 'id_xcxm',
            name: '新城项目',
            children: [
                {
                    id: 'xincehng',
                    url: 'http://47.95.122.141:8200/HedyLamarrFrontend/V2/index.html',
                    name: '新城项目'
                }
            ]
        },
        {
            id: 'id_index',
            name: '首页',
            children: [
                {
                    id: 'tencent',
                    url: 'https://cloud.tencent.com',
                    name: '腾讯云'
                },
                {
                    id: 'animate',
                    url: 'https://daneden.github.io/animate.css',
                    name: 'animate',
                    disabled: true
                },
                {
                    id: 'aliyun',
                    url: 'https://www.aliyun.com/',
                    name: '阿里云'
                }
            ]
        }
    ];

    export default {
        name: 'DropGroupView',
        data() {
            return {
                selVal: 'xincehng',
                selText: '新城项目',
                dataSelect: data
            }
        },
        methods: {
            groupChange({cId, cName, pId}) {
                this.selVal=cId;
                this.selText=cName
            }
        }
    }
</script>

```vue
<template>
    <div class="Button">
        <div class="component component-padding">
            <h1>Dropdown组件</h1>
            <div>
                <DropGroup :value="selVal" :data="dataSelect" @change="groupChange">
                    <span class="text">{{selText}}</span>
                </DropGroup>
            </div>

            <div style="font-size: 16px;">
                <br><br><br><br><br><br><br><br>
            </div>
        </div>
    </div>
</template>

<script>
    const data=[
        {
            id: 'id_xcxm',
            name: '新城项目',
            children: [
                {
                    id: 'xincehng',
                    url: 'http://47.95.122.141:8200/HedyLamarrFrontend/V2/index.html',
                    name: '新城项目'
                }
            ]
        },
        {
            id: 'id_index',
            name: '首页',
            children: [
                {
                    id: 'tencent',
                    url: 'https://cloud.tencent.com',
                    name: '腾讯云'
                },
                {
                    id: 'animate',
                    url: 'https://daneden.github.io/animate.css',
                    name: 'animate',
                    disabled: true
                },
                {
                    id: 'aliyun',
                    url: 'https://www.aliyun.com/',
                    name: '阿里云'
                }
            ]
        }
    ];

    export default {
        name: 'DropGroupView',
        data() {
            return {
                selVal: 'xincehng',
                selText: '新城项目',
                dataSelect: data
            }
        },
        methods: {
            groupChange({cId, cName, pId}) {
                this.selVal=cId;
                this.selText=cName
            }
        }
    }
</script>

```

### Attributes

| 参数     | 说明  | 类型    | 默认值  | 必须    |
| ------- | ---- | ------ | ------- | ------ |
| data    | 数据列表 | Array | [] | no     |
| value    | 绑定的id值 | String | ‘’ | no     |
| @change    | 数据改变的回调 | Function | -- | no     |