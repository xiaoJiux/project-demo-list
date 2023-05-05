##### `Alt+鼠标拖动下拉`：多行光标同步

```html
<div>光标同步打出</div>
<div>光标同步打出</div>
<div>光标同步打出</div>
<div>光标同步打出</div>
```



##### 标签+选择器符号+属性值

示例：`div#out`

示例：`div.out`

```html
<div id="out"></div>
<div class="out"></div>
```



##### 标签名[属性=“属性值”]

示例：`div[name="out"]`

```html
<div name="out"></div>
```



##### 标签{文字内容}

示例：`div{文字内容}`

```html
<div>文字内容</div>
```



##### 父标签>子标签

示例：`div>span`

```html
<div><span></span></div>
```



##### 标签*数量

示例：`div*5`

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```



##### 标签+标签

示例：`div+div`

```html
<div></div>
<div></div>
```



##### 综合示例

示例1：`div#out>div.in$*3>span{文字内容$}`

```html
<div id="out">
    <div class="in1"><span>文字内容1</span></div>
    <div class="in2"><span>文字内容2</span></div>
    <div class="in3"><span>文字内容3</span></div>
</div>
```



示例2：`div.out>(ul.list_out>li.list_left+li.list_right)+div.in>span.ion$*5`

```html
<div class="out">
    <ul class="list_out">
        <li class="list_left"></li>
        <li class="list_right"></li>
    </ul>
    <div class="in"><span class="ion1"></span><span class="ion2"></span><span class="ion3"></span><span class="ion4"></span><span
            class="ion5"></span></div>
</div>
```

