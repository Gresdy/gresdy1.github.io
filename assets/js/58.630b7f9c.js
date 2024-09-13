(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{521:function(a,t,s){"use strict";s.r(t);var e=s(9),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"mariadb-mysql-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mariadb-mysql-分支"}},[a._v("#")]),a._v(" MariaDB MySQL 分支")]),a._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[a._v("网址")]),a._v(" "),t("p",[a._v("官网：https://mariadb.org/")]),a._v(" "),t("p",[a._v("github：https://github.com/MariaDB/server")])]),a._v(" "),t("h2",{attrs:{id:"开源简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开源简介"}},[a._v("#")]),a._v(" 开源简介")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/docker/mariadb.png",alt:"MariaDB"}})]),a._v(" "),t("blockquote",[t("p",[a._v("MariaDB Server 是最流行的开源关系型数据库之一。它由 MySQL 的原始开发者制作，并保证保持开源。它是大多数云产品的一部分，也是大多数 Linux 发行版的默认配置。MariaDB 被设计为 MySQL 的直接替代产品，具有更多功能，新的存储引擎，更少的错误和更好的性能。")])]),a._v(" "),t("p",[a._v("它建立在性能、稳定性和开放性的价值之上，MariaDB 基金会确保将根据技术优点接受贡献。最近的新功能包括与 Galera Cluster 4 的高级集群，与 Oracle 数据库和 Temporal Data Tables 的兼容功能，允许人们查询过去任何时候的数据。")]),a._v(" "),t("h2",{attrs:{id:"docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[a._v("#")]),a._v(" docker-compose.yml")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.7'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mariadb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mariadb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("10.6.4\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mariadb\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# command: --default-authentication-plugin=mysql_native_password --lower_case_table_names=1")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 3306"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_ROOT_PASSWORD=Mysql123$\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# - MYSQL_ROOT_HOST=%")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" TZ=Asia/Shanghai\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" mysql_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/mysql\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/mysql/my.cnf:/etc/mysql/my.cnf"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mysql_data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n")])])]),t("h2",{attrs:{id:"my-cnf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#my-cnf"}},[a._v("#")]),a._v(" my.cnf")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[client-server]\n# Port or socket location where to connect\n# port = 3306\nsocket = /run/mysqld/mysqld.sock\nlower_case_table_name=1\n\n# Import all .cnf files from configuration directory\n[mariadbd]\nskip-host-cache\nskip-name-resolve\n\n!includedir /etc/mysql/mariadb.conf.d/\n!includedir /etc/mysql/conf.d/\n")])])]),t("h2",{attrs:{id:"deploy-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-sh"}},[a._v("#")]),a._v(" deploy.sh")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /etc/mysql/\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("cp ./my.cnf /etc/mysql/my.cnf "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/usr/local/bin/docker-compose"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" docker-compose.yml up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);