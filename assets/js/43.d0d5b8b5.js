(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{184:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"画解算法：938-二叉搜索树的范围和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解算法：938-二叉搜索树的范围和","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解算法：938. 二叉搜索树的范围和")]),t._v(" "),s("h2",{attrs:{id:"题目链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目链接")]),t._v(" "),s("p",[t._v("https://leetcode-cn.com/problems/range-sum-of-bst/")]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("给定二叉搜索树的根结点 "),s("code",[t._v("root")]),t._v("，返回 "),s("code",[t._v("L")]),t._v(" 和 "),s("code",[t._v("R")]),t._v("（含）之间的所有结点的值的和。")]),t._v(" "),s("p",[t._v("二叉搜索树保证具有唯一的值。")]),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("输入：root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("10,5,15,3,7,null,18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 7, R "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 15\n输出：32\n")])])]),s("p",[t._v("示例 2：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("输入：root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("10,5,15,3,7,13,18,1,null,6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 6, R "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 10\n输出：23\n")])])]),s("p",[t._v("提示：")]),t._v(" "),s("p",[t._v("树中的结点数量最多为 "),s("code",[t._v("10000")]),t._v(" 个。\n最终的答案保证小于 "),s("code",[t._v("2^31")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"解题方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解题方案")]),t._v(" "),s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("ul",[s("li",[t._v("标签：深度优先遍历")]),t._v(" "),s("li",[t._v("题意：这个题字面含义很难理解，本意就是求出所有 "),s("code",[t._v("X >= L")]),t._v(" 且 "),s("code",[t._v("X <= R")]),t._v(" 的值的和")]),t._v(" "),s("li",[t._v("递归终止条件：\n"),s("ul",[s("li",[t._v("当前节点为null时返回0")]),t._v(" "),s("li",[t._v("当前节点 "),s("code",[t._v("X < L")]),t._v(" 时则返回右子树之和")]),t._v(" "),s("li",[t._v("当前节点 "),s("code",[t._v("X > R")]),t._v(" 时则返回左子树之和")]),t._v(" "),s("li",[t._v("当前节点 "),s("code",[t._v("X >= L")]),t._v(" 且 "),s("code",[t._v("X <= R")]),t._v(" 时则返回：当前节点值 + 左子树之和 + 右子树之和")])])]),t._v(" "),s("li",[t._v("注意点：通过判断X的大小能够避免遍历全部树的节点，比如下方的动图中，3这个值就没有必要遍历")])]),t._v(" "),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"画解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e6b694e243652.png",alt:"fr<x>ame_00001.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e7f6967c10475.png",alt:"fr<x>ame_00003.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e7f696c856529.png",alt:"fr<x>ame_00005.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e7f56bc081059.png",alt:"fr<x>ame_00007.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e7f6941174378.png",alt:"fr<x>ame_00009.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e7f68c7d42126.png",alt:"fr<x>ame_00011.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e8be268c65938.png",alt:"fr<x>ame_00013.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e8cc129a35405.png",alt:"fr<x>ame_00015.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e8be685387513.png",alt:"fr<x>ame_00017.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e8bddc8572450.png",alt:"fr<x>ame_00019.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf08e8bde21497959.png",alt:"fr<x>ame_00021.png"}})]),t._v(" "),s("p",[s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("点击「"),s("strong",[t._v("阅读原文")]),t._v("」打卡")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("后台回复「"),s("strong",[t._v("算法")]),t._v("」，加入天天算法群")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("觉得算法直击灵魂，欢迎点击"),s("strong",[t._v("在看")]),t._v("和"),s("strong",[t._v("转发")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/20/5ce23b33cc01d73486.gif",alt:""}})])])}],!1,null,null,null);a.default=e.exports}}]);