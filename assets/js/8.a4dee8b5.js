(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{56:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"関数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#関数","aria-hidden":"true"}},[t._v("#")]),t._v(" 関数")]),a("p",[t._v("Nimの関数は"),a("code",[t._v("proc")]),t._v("で定義されます。")]),a("p",[t._v("引数や返り値は"),a("code",[t._v("名前: 型")]),t._v("で定義し、最後に"),a("code",[t._v("=")]),t._v("をつけてインデントすることで定義していきます。")]),a("p",[t._v("関数を呼ぶ時は他の言語と同じように、"),a("code",[t._v("関数名(第一引数, 第二引数...)")]),t._v("とやることで呼び出しができます。")]),a("p",[t._v("また、Nimでは呼び出し方法が他にもあり、"),a("code",[t._v("第一引数.関数名(第二引数以降はカッコ内)")]),t._v("のように呼び出すことも可能です。")]),a("p",[t._v("また、引数が1つの場合は"),a("code",[t._v("関数名 引数")]),t._v("と呼び出すことも可能です。")]),a("p",[t._v("では定義例と呼び出し例を実際に見てみましょう。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str2"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str1 "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" str2 "),a("span",{attrs:{class:"token comment"}},[t._v("# &は文字列連結演算子")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str\n\necho "),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"hello "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"world"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\necho "),a("span",{attrs:{class:"token string"}},[t._v('"hello "')]),a("span",{attrs:{class:"token operator"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"world"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\necho call2 "),a("span",{attrs:{class:"token string"}},[t._v('"hello world"')]),t._v("\n")])]),a("p",[a("code",[t._v("call2")]),t._v("だけ引数が1つですが、"),a("code",[t._v("echo")]),t._v("の実行結果は全て同じ"),a("code",[t._v("hello world")]),t._v("です。")]),a("p",[t._v("ところで、return`が無いことに気づきましたか？")]),a("p",[a("code",[t._v("proc")]),t._v("は暗黙的に"),a("code",[t._v("result")]),t._v("変数を持っていて、"),a("code",[t._v("reteun T")]),t._v("は暗黙的に"),a("code",[t._v("result")]),t._v("変数を返しています。")]),a("p",[a("code",[t._v("result")]),t._v("変数に値を入れておくことで"),a("code",[t._v("return")]),t._v("を省くことができます。")]),a("p",[t._v("また、"),a("code",[t._v("return")]),t._v("が無かったり"),a("code",[t._v("result")]),t._v("変数に値を入れてない場合、")]),a("p",[t._v("最後に書かれた変数が暗黙的に返されるようになっています。")]),a("p",[t._v("従って次のような書き方も可能です。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  echo str\n  str\n")])]),a("p",[t._v("返り値として"),a("code",[t._v("void")]),t._v("と定義すると何も返さない関数になります。")]),a("p",[t._v("返り値の型を書かない場合は暗黙的に"),a("code",[t._v("void")]),t._v("になるので、"),a("code",[t._v("void")]),t._v("は省くことが出来ます。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" void "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  echo "),a("span",{attrs:{class:"token string"}},[t._v('"call"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  echo "),a("span",{attrs:{class:"token string"}},[t._v('"call"')]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# callとcall2は全く同じ")]),t._v("\n")])]),a("p",[t._v("複数の引数が同じ型の場合、まとめて書くことができます。")]),a("p",[t._v("型を一度書くだけで複数の同じ型の引数を定義することが出来て便利です。")]),a("p",[t._v("複数の型が混在する時、カンマ"),a("code",[t._v(",")]),t._v("が通常の引数定義と混ざってしまうので、可読性を上げるためにセミコロン"),a("code",[t._v(";")]),t._v("で区切ることが出来ます。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  echo a\n  echo b\n  echo c\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string; d"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  echo a\n  echo b\n  echo c\n  echo d\n")])]),a("p",[t._v("引数の型に"),a("code",[t._v("var")]),t._v("をつけることで渡す変数の中身を直接変更することができます。")]),a("p",[t._v("ただし、その際は渡す変数も"),a("code",[t._v("var")]),t._v("で定義されている必要があります。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello, World!"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("edit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hell, World👿"')]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("edit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\necho a "),a("span",{attrs:{class:"token comment"}},[t._v("# Hell, World👿")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);