(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{211:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"画解算法：162-寻找峰值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解算法：162-寻找峰值","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解算法：162. 寻找峰值")]),t._v(" "),s("h2",{attrs:{id:"题目链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目链接")]),t._v(" "),s("p",[t._v("https://leetcode-cn.com/problems/find-peak-element/")]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("峰值元素是指其值大于左右相邻值的元素。")]),t._v(" "),s("p",[t._v("给定一个输入数组 "),s("code",[t._v("nums")]),t._v("，其中 "),s("code",[t._v("nums[i] ≠ nums[i+1]")]),t._v("，找到峰值元素并返回其索引。")]),t._v(" "),s("p",[t._v("数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。")]),t._v(" "),s("p",[t._v("你可以假设 "),s("code",[t._v("nums[-1] = nums[n] = -∞")]),t._v("。")]),t._v(" "),s("p",[t._v("示例 1:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("输入: nums "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1,2,3,1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n输出: 2\n解释: 3 是峰值元素，你的函数应该返回其索引 2。\n")])])]),s("p",[t._v("示例 2:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("输入: nums "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1,2,1,3,5,6,4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n输出: 1 或 5 \n解释: 你的函数可以返回索引 1，其峰值元素为 2；\n     或者返回索引 5， 其峰值元素为 6。\n")])])]),s("p",[s("strong",[t._v("说明:")])]),t._v(" "),s("p",[t._v("你的解法应该是 "),s("code",[t._v("O(logN)")]),t._v(" 时间复杂度的。")]),t._v(" "),s("h2",{attrs:{id:"解题方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解题方案")]),t._v(" "),s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("ul",[s("li",[t._v("标签：二分查找")]),t._v(" "),s("li",[t._v("过程：\n"),s("ul",[s("li",[t._v("首先要注意题目条件，在题目描述中出现了"),s("code",[t._v("nums[-1] = nums[n] = -∞")]),t._v("，这就代表着"),s("strong",[t._v("只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值")])]),t._v(" "),s("li",[t._v("根据上述结论，我们就可以使用二分查找找到峰值")]),t._v(" "),s("li",[t._v("查找时，左指针l，右指针r，以其保持左右顺序为循环条件")]),t._v(" "),s("li",[t._v("根据左右指针计算中间位置m，并比较m与m+1的值，"),s("strong",[t._v("如果m较大")]),t._v("，则左侧存在峰值，r=m，"),s("strong",[t._v("如果m+1较大")]),t._v("，则右侧存在峰值，l=m+1")])])]),t._v(" "),s("li",[t._v("时间复杂度：O(logN)")])]),t._v(" "),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findPeakElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"画解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0891f5087153158.png",alt:"fr<x>ame_00001.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0892007d8a22329.png",alt:"fr<x>ame_00004.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08928a616672740.png",alt:"fr<x>ame_00007.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf089202646a63184.png",alt:"fr<x>ame_00010.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf089204f2c868528.png",alt:"fr<x>ame_00013.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf089352bf0671647.png",alt:"fr<x>ame_00016.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08934dec9d79586.png",alt:"fr<x>ame_00019.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf089392e87a43304.png",alt:"fr<x>ame_00022.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0893932a8420427.png",alt:"fr<x>ame_00025.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08934e258229687.png",alt:"fr<x>ame_00028.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08934de2be33159.png",alt:"fr<x>ame_00031.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf089369cd2580967.png",alt:"fr<x>ame_00034.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0893693aa452745.png",alt:"fr<x>ame_00037.png"}})]),t._v(" "),s("p",[s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("点击「"),s("strong",[t._v("阅读原文")]),t._v("」打卡")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("后台回复「"),s("strong",[t._v("算法")]),t._v("」，加入天天算法群")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("觉得算法直击灵魂，欢迎点击"),s("strong",[t._v("在看")]),t._v("和"),s("strong",[t._v("转发")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/20/5ce23b33cc01d73486.gif",alt:""}})])])}],!1,null,null,null);a.default=r.exports}}]);