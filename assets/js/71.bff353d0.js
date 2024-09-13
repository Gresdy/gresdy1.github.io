(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{535:function(v,_,t){"use strict";t.r(_);var e=t(9),p=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"net面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#net面试题"}},[v._v("#")]),v._v(" Net面试题")]),v._v(" "),_("p",[_("strong",[v._v("1、JIT是如何工作的")])]),v._v(" "),_("p",[v._v("答：JIT 引擎在编译中间代码之前，会寻找方法的本机机器代码缓存并且判断其是否可用，如果可用则直接加载，如果不可用，JIT 引擎会查找类型中的方法存根，找到该中间代码并且进行编译。")]),v._v(" "),_("p",[_("strong",[v._v("2、值类型和引用类型的区别")])]),v._v(" "),_("p",[v._v("答：所有继承自System.ValueType 的类型是值类型，而其他类型都是引用类型。值类型的赋值会产生一个新的数据副本，所以每个值类型都拥有一个数据副本，而引用类型的赋值则是赋值引用。值类型的对象分配在堆栈上，而引用类型的对象分配在堆上。当比较两个值类型时，进行的是内容比较，而比较两个引用类型时，进行的是引用比较。")]),v._v(" "),_("p",[_("strong",[v._v("3、解释泛型的基本原理")])]),v._v(" "),_("p",[v._v("答：泛型类似C++中的模板，允许程序员定义更通用的类型和算法，并且在具体使用时再生成具体的封闭类型。所有带泛型参数的类型都是一个开放式类型，它不能被实例化，但具备所有封闭类型的其他特性，本质上，它和封闭类型没有区别。")]),v._v(" "),_("p",[_("strong",[v._v("4、如何自定义序列化和反序列化的过程")])]),v._v(" "),_("p",[v._v("答：通过实现 ISerializable 接口中的 GetObjectData 方法可以实现自定义的序列化，而通过添加带有SerializationInfo 和StreamingContext的参数的构造方法可以自定义反序列化的过程。")]),v._v(" "),_("p",[_("strong",[v._v("5、如何使用 IFormattable 接口实现格式化输出")])]),v._v(" "),_("p",[v._v("答：IFormattable接口帮助类型实现了多样式的格式化输出。IFormattable 的ToString方法接受一个代表格式的字符串参数，通过对这个参数的分析来进行格式化输出。另外，IFormattable.ToString方法接受一个IFormatProvider类型的参数，以允许类型的使用者提供格式化的方法。")]),v._v(" "),_("p",[_("strong",[v._v("6、请解释委托的基本原理")])]),v._v(" "),_("p",[v._v("答：委托是一类继承自System.Delegate 的类型，每个委托对象至少包含了一个指向某个方法的指针，该方法可以是实例方法，也可以是静态方法。委托实现了回调方法的机制，能够帮助程序员设计更加简洁优美的面向对象程序。")]),v._v(" "),_("p",[_("strong",[v._v("7、什么是链式委托")])]),v._v(" "),_("p",[v._v("答：链式委托是指一个由委托串成的链表，当链表上的一个委托被回调时，所有链表上该委托的后续委托将会被顺序执行。")]),v._v(" "),_("p",[_("strong",[v._v("8、请解释反射的基本原理和其实现的基石")])]),v._v(" "),_("p",[v._v("答：反射是一种动态分析程序集、模块、类型、字段等目标对象的机制，它的实现依托于元数据。元数据是存储在PE 文件中的数据块，它详细记录了程序集或模块内部的结构、引用的类型和程序集和清单")]),v._v(" "),_("p",[_("strong",[v._v("9、如何利用反射来实现工厂模式")])]),v._v(" "),_("p",[v._v("答：使用反射可以实现灵活性较高的工厂模式，其关键在于动态地查找产品所包含的所有零件，而不需要通过代码来逐一分析使用者的需求。反射工厂模式具有灵活性高，运行效率相对较低的特点。")]),v._v(" "),_("p",[_("strong",[v._v("10、如何以较小的内存代价保存 Type、Field 和 Method 信息")])]),v._v(" "),_("p",[v._v("答：System.RuntimeTypeHandle、System.RuntimeMethodHandle 和 System.RuntimeFieldHandle 三个类型，分别包含了一个指向类型、方法和字段描述的指针，用保存指针的方式来代替保存整个类型、方法和字段的信息描述对象，可以有效地减少内存的消耗。而在实际需要用到这些信息时，又可以通过这三个句柄类型对象，分别得到System.Type、System.Reflection.MethodInfo 和System.Reflection.FieldInfo 类型对象。")]),v._v(" "),_("p",[_("strong",[v._v("11、如何防止 SQL注入式攻击")])]),v._v(" "),_("p",[v._v("答：SQL 注入式攻击时常见的一种攻击方法，主要利用的是系统设计的弊端。程序员在设计时需要考虑到注入式攻击的问题，避免直接使用用户输入拼接 SQL 语句，适当使用加密数据进行存储，并且在合适的场合使用存储过程。")]),v._v(" "),_("p",[_("strong",[v._v("12、请简要叙述数据库连接池的机制")])]),v._v(" "),_("p",[v._v("答：ADO.NET 对上层用户提供了数据库连接池的服务，使用完的数据库连接将被有选择的保持在数据库连接池中，以供下次使用。当用户以某个连接字符串申请数据库连接时，数据库连接池将尝试寻找在池中寻找具有相同的连接字符串的连接，并直接提供给用户。")]),v._v(" "),_("p",[_("strong",[v._v("13、如何提高连接池内连接的重用率")])]),v._v(" "),_("p",[v._v("答：为了提高数据库连接池的重用率，唯一的方法就是尽量保证系统访问数据库所使用的连接字符串不变。例如建立跳板数据库，使所有连接都首先尝试访问跳板数据库。另外，统一使用超级用户帐号可以进一步统一连接字符串，但这为系统带来了安全上的隐患。")]),v._v(" "),_("p",[_("strong",[v._v("14、哈希表和数组列表有什么区别？")])]),v._v(" "),_("p",[v._v("答：哈希表以值对和名称的形式存储数据, 而数组列表仅存储值。")]),v._v(" "),_("p",[v._v("你需要将名称传递给哈希表中的值, 而在数组中, 则需要传递索引号来访问值。")]),v._v(" "),_("p",[v._v("在数组中, 你只能存储类似类型的数据类型, 而在哈希表中, 你可以存储不同类型的数据类型。例如整数, 字符串等")]),v._v(" "),_("p",[_("strong",[v._v("15、什么是内存映射文件？")])]),v._v(" "),_("p",[v._v("答：内存映射文件用于将文件内容映射到应用程序的逻辑地址。它使你能够在同一台计算机上运行多个进程以彼此共享数据。要获得一个内存映射文件对象, 可以使用MemoryMappedFile.CreateFromFiles()方法。它表示磁盘上文件中的持久性内存映射文件。")]),v._v(" "),_("p",[_("strong",[v._v("16、使用哪种方法在.NET中实施垃圾收集？")])]),v._v(" "),_("p",[v._v("System.GC.Collect()方法。")]),v._v(" "),_("p",[_("strong",[v._v("17、.Net中有哪些不同类型的索引？")])]),v._v(" "),_("p",[v._v("答：.Net中有两种类型的索引：")]),v._v(" "),_("p",[v._v("聚集索引和非聚集索引")]),v._v(" "),_("p",[_("strong",[v._v("18、.Net中有几种类型的内存？")])]),v._v(" "),_("p",[v._v("答：.Net中有两种类型的内存")]),v._v(" "),_("ul",[_("li",[v._v("堆栈内存")]),v._v(" "),_("li",[v._v("堆内存")])]),v._v(" "),_("p",[_("strong",[v._v("19、元组可以容纳多少个元素？")])]),v._v(" "),_("p",[v._v("答：一个元组可以容纳1到8个元素。如果元素多于8个, 则可以将第8个元素定义为另一个元组。元组可以指定为参数或方法的返回类型。")])])}),[],!1,null,null,null);_.default=p.exports}}]);