(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{483:function(a,s,t){"use strict";t.r(s);var n=t(9),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"java14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java14"}},[a._v("#")]),a._v(" Java14")]),a._v(" "),s("h3",{attrs:{id:"空指针异常精准提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空指针异常精准提示"}},[a._v("#")]),a._v(" 空指针异常精准提示")]),a._v(" "),s("p",[a._v("通过 JVM 参数中添加"),s("code",[a._v("-XX:+ShowCodeDetailsInExceptionMessages")]),a._v("，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 假设这段代码会发生空指针")]),a._v("\n")])])]),s("p",[a._v("Java 14 之前：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" in thread "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("NullPointerException")]),a._v("\n    at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NullPointerExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NullPointerExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Java 14 之后：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 增加参数后提示的异常中很明确的告知了哪里为空导致")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" in thread "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("NullPointerException")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cannot")]),a._v(" read field "),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("'c'")]),a._v(" because "),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("'a.b'")]),a._v(" is "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n    at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Prog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Prog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"switch-的增强-转正"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-的增强-转正"}},[a._v("#")]),a._v(" switch 的增强(转正)")]),a._v(" "),s("p",[a._v("Java12 引入的 switch（预览特性）在 Java14 变为正式版本，不需要增加参数来启用，直接在 JDK14 中就能使用。")]),a._v(" "),s("p",[a._v("Java12 为 switch 表达式引入了类似 lambda 语法条件匹配成功后的执行块，不需要多写 break ，Java13 提供了 "),s("code",[a._v("yield")]),a._v(" 来在 block 中返回值。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("switch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"M"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"W"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"F"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MWF"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"T"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TH"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"S"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TTS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("yield")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Please insert a valid day."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("yield")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Looks like a Sunday."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"预览新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览新特性"}},[a._v("#")]),a._v(" 预览新特性")]),a._v(" "),s("h4",{attrs:{id:"record-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#record-关键字"}},[a._v("#")]),a._v(" record 关键字")]),a._v(" "),s("p",[s("code",[a._v("record")]),a._v(" 关键字可以简化 "),s("strong",[a._v("数据类")]),a._v("（一个 Java 类一旦实例化就不能再修改）的定义方式，使用 "),s("code",[a._v("record")]),a._v(" 代替 "),s("code",[a._v("class")]),a._v(" 定义的类，只需要声明属性，就可以在获得属性的访问方法，以及 "),s("code",[a._v("toString()")]),a._v("，"),s("code",[a._v("hashCode()")]),a._v(", "),s("code",[a._v("equals()")]),a._v("方法。")]),a._v(" "),s("p",[a._v("类似于使用 "),s("code",[a._v("class")]),a._v(" 定义类，同时使用了 lombok 插件，并打上了"),s("code",[a._v("@Getter,@ToString,@EqualsAndHashCode")]),a._v("注解。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 这个类具有两个特征\n * 1. 所有成员属性都是final\n * 2. 全部方法由构造方法，和两个成员属性访问器组成（共三个）\n * 那么这种类就很适合使用record来声明\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Rectangle")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Shape")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 1. 使用record声明的类会自动拥有上面类中的三个方法\n * 2. 在这基础上还附赠了equals()，hashCode()方法以及toString()方法\n * 3. toString方法中包括所有成员属性的字符串表示形式及其名称\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("record")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"文本块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本块"}},[a._v("#")]),a._v(" 文本块")]),a._v(" "),s("p",[a._v("Java14 中，文本块依然是预览特性，不过，其引入了两个新的转义字符：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("\\")]),a._v(" : 表示行尾，不引入换行符")]),a._v(" "),s("li",[s("code",[a._v("\\s")]),a._v("：表示单个空格")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"凡心所向，素履所往，生如逆旅，一苇以航。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v('"\n        凡心所向，素履所往， \\\n        生如逆旅，一苇以航。'),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 凡心所向，素履所往， 生如逆旅，一苇以航。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[a._v('"""\n        java\n        c++\\sphp\n        """')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//输出：")]),a._v("\njava\nc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" php\n")])])]),s("h4",{attrs:{id:"instanceof-增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-增强"}},[a._v("#")]),a._v(" instanceof 增强")]),a._v(" "),s("p",[a._v("依然是"),s("strong",[a._v("预览特性")]),a._v(" ，"),s("RouterLink",{attrs:{to:"/01.Java基础/05.版本新特性/java12-13.html"}},[a._v("Java 12 新特性")]),a._v("中介绍过。")],1),a._v(" "),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("ul",[s("li",[a._v("从 Java11 引入的 ZGC 作为继 G1 过后的下一代 GC 算法，从支持 Linux 平台到 Java14 开始支持 MacOS 和 Windows（个人感觉是终于可以在日常开发工具中先体验下 ZGC 的效果了，虽然其实 G1 也够用）")]),a._v(" "),s("li",[a._v("移除了 CMS(Concurrent Mark Sweep) 垃圾收集器（功成而退）")]),a._v(" "),s("li",[a._v("新增了 jpackage 工具，标配将应用打成 jar 包外，还支持不同平台的特性包，比如 linux 下的"),s("code",[a._v("deb")]),a._v("和"),s("code",[a._v("rpm")]),a._v("，window 平台下的"),s("code",[a._v("msi")]),a._v("和"),s("code",[a._v("exe")])])]),a._v(" "),s("h2",{attrs:{id:"java15"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java15"}},[a._v("#")]),a._v(" Java15")]),a._v(" "),s("h3",{attrs:{id:"charsequence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charsequence"}},[a._v("#")]),a._v(" CharSequence")]),a._v(" "),s("p",[s("code",[a._v("CharSequence")]),a._v(" 接口添加了一个默认方法 "),s("code",[a._v("isEmpty()")]),a._v(" 来判断字符序列为空，如果是则返回 true。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"treemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treemap"}},[a._v("#")]),a._v(" TreeMap")]),a._v(" "),s("p",[s("code",[a._v("TreeMap")]),a._v(" 新引入了下面这些方法：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("putIfAbsent()")])]),a._v(" "),s("li",[s("code",[a._v("computeIfAbsent()")])]),a._v(" "),s("li",[s("code",[a._v("computeIfPresent()")])]),a._v(" "),s("li",[s("code",[a._v("compute()")])]),a._v(" "),s("li",[s("code",[a._v("merge()")])])]),a._v(" "),s("h3",{attrs:{id:"zgc-转正"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zgc-转正"}},[a._v("#")]),a._v(" ZGC(转正)")]),a._v(" "),s("p",[a._v("Java11 的时候 ，ZGC 还在试验阶段。")]),a._v(" "),s("p",[a._v("当时，ZGC 的出现让众多 Java 开发者看到了垃圾回收器的另外一种可能，因此备受关注。")]),a._v(" "),s("p",[a._v("经过多个版本的迭代，不断的完善和修复问题，ZGC 在 Java 15 已经可以正式使用了！")]),a._v(" "),s("p",[a._v("不过，默认的垃圾回收器依然是 G1。你可以通过下面的参数启动 ZGC：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-XX:+UseZGC")]),a._v(" className\n")])])]),s("h3",{attrs:{id:"eddsa-数字签名算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eddsa-数字签名算法"}},[a._v("#")]),a._v(" EdDSA(数字签名算法)")]),a._v(" "),s("p",[a._v("新加入了一个安全性和性能都更强的基于 Edwards-Curve Digital Signature Algorithm （EdDSA）实现的数字签名算法。")]),a._v(" "),s("p",[a._v("虽然其性能优于现有的 ECDSA 实现，不过，它并不会完全取代 JDK 中现有的椭圆曲线数字签名算法( ECDSA)。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KeyPairGenerator")]),a._v(" kpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KeyPairGenerator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Ed25519"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("KeyPair")]),a._v(" kp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" kpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("generateKeyPair")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test_string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StandardCharsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("UTF_8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Signature")]),a._v(" sig "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Signature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Ed25519"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nsig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initSign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("kp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPrivate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nsig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" sig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" encodedString "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Base64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("encodeToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("encodedString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("输出：")]),a._v(" "),s("div",{staticClass:"language-plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("0Hc0lxxASZNvS52WsvnncJOH/mlFhnA8Tc6D/k5DtAX5BSsNVjtPF4R4+yMWXVjrvB2mxVXmChIbki6goFBgAg==\n")])])]),s("h3",{attrs:{id:"文本块-转正"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本块-转正"}},[a._v("#")]),a._v(" 文本块(转正)")]),a._v(" "),s("p",[a._v("在 Java 15 ，文本块是正式的功能特性了。")]),a._v(" "),s("h3",{attrs:{id:"隐藏类-hidden-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏类-hidden-classes"}},[a._v("#")]),a._v(" 隐藏类(Hidden Classes)")]),a._v(" "),s("p",[a._v("隐藏类是为框架（frameworks）所设计的，隐藏类不能直接被其他类的字节码使用，只能在运行时生成类并通过反射间接使用它们。")]),a._v(" "),s("h3",{attrs:{id:"预览新特性-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览新特性-2"}},[a._v("#")]),a._v(" 预览新特性")]),a._v(" "),s("h4",{attrs:{id:"密封类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#密封类"}},[a._v("#")]),a._v(" 密封类")]),a._v(" "),s("p",[s("strong",[a._v("密封类（Sealed Classes）")]),a._v(" 是 Java 15 中的一个预览新特性。")]),a._v(" "),s("p",[a._v("没有密封类之前，在 Java 中如果想让一个类不能被继承和修改，我们可以使用"),s("code",[a._v("final")]),a._v(" 关键字对类进行修饰。不过，这种方式不太灵活，直接把一个类的继承和修改渠道给堵死了。")]),a._v(" "),s("p",[a._v("密封类可以对继承或者实现它们的类进行限制，这样这个类就只能被指定的类继承。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 抽象类 Person 只允许 Employee 和 Manager 继承。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("sealed")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("permits")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Employee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Manager")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("另外，任何扩展密封类的类本身都必须声明为 "),s("code",[a._v("sealed")]),a._v("、"),s("code",[a._v("non-sealed")]),a._v(" 或 "),s("code",[a._v("final")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Employee")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("non-sealed")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Manager")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://oss.javaguide.cn/javaguide/image-20210820153955587.png",alt:""}})]),a._v(" "),s("p",[a._v("如果允许扩展的子类和封闭类在同一个源代码文件里，封闭类可以不使用 permits 语句，Java 编译器将检索源文件，在编译期为封闭类添加上许可的子类。")]),a._v(" "),s("h4",{attrs:{id:"instanceof-模式匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-模式匹配"}},[a._v("#")]),a._v(" instanceof 模式匹配")]),a._v(" "),s("p",[a._v("Java 15 并没有对此特性进行调整，继续预览特性，主要用于接受更多的使用反馈。")]),a._v(" "),s("p",[a._v("在未来的 Java 版本中，Java 的目标是继续完善 "),s("code",[a._v("instanceof")]),a._v(" 模式匹配新特性。")]),a._v(" "),s("h3",{attrs:{id:"其他-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他-2"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Nashorn JavaScript 引擎彻底移除")]),a._v("：Nashorn 从 Java8 开始引入的 JavaScript 引擎，Java9 对 Nashorn 做了些增强，实现了一些 ES6 的新特性。在 Java 11 中就已经被弃用，到了 Java 15 就彻底被删除了。")]),a._v(" "),s("li",[s("strong",[a._v("DatagramSocket API 重构")])]),a._v(" "),s("li",[s("strong",[a._v("禁用和废弃偏向锁（Biased Locking）")]),a._v("：偏向锁的引入增加了 JVM 的复杂性大于其带来的性能提升。不过，你仍然可以使用 "),s("code",[a._v("-XX:+UseBiasedLocking")]),a._v(" 启用偏向锁定，但它会提示这是一个已弃用的 API。")]),a._v(" "),s("li",[a._v("……")])])])}),[],!1,null,null,null);s.default=e.exports}}]);