_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"7Ky4":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-post/[id]",function(){return n("IzYP")}])},E1HW:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));var r="\n  query GetPost($id: ID!) {\n    getPost(id: $id) {\n      id\n      title\n      content\n      videoUrl\n      username\n      createdAt\n      updatedAt\n    }\n  }\n",o="\n  query ListPosts(\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        title\n        content\n        videoUrl\n        username\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",i="\n  query PostsByUsername(\n    $username: String\n    $sortDirection: ModelSortDirection\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    postsByUsername(\n      username: $username\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        title\n        content\n        videoUrl\n        username\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n"},IzYP:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("rePB"),i=n("o0o1"),a=n.n(i),c=n("HaE+"),s=n("q1tI"),u=n("oDCQ"),l=n("20a2"),d=n("k20a"),p=n.n(d),f=(n("FQ0y"),n("sIIE")),b=n("E1HW");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(s.useState)(null),t=e[0],n=e[1],i=Object(l.useRouter)(),d=i.query.id;if(Object(s.useEffect)((function(){function e(){return(e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u.a.graphql({query:b.a,variables:{id:d}});case 4:t=e.sent,n(t.data.getPost);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d]),!t)return null;function m(e){n((function(){return y(y({},t),{},Object(o.a)({},e.target.name,e.target.value))}))}var O=t.title,g=t.videoUrl,h=t.content;function j(){return(j=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O&&g&&h){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u.a.graphql({query:f.c,variables:{input:{title:O,videoUrl:g,content:h,id:d}},authMode:"AMAZON_COGNITO_USER_POOLS"});case 4:console.log("post successfully updated!"),i.push("/my-posts");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"text-3xl font-semibold tracking-wide mt-6 mb-2",children:"Edit post"}),Object(r.jsx)("input",{onChange:m,name:"title",placeholder:"Title",value:t.title,className:"border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"}),Object(r.jsx)("input",{onChange:m,name:"videoUrl",placeholder:"Video URL",value:t.videoUrl,className:"border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"}),Object(r.jsx)(p.a,{value:t.content,onChange:function(e){return n(y(y({},t),{},{content:e}))}}),Object(r.jsx)("button",{className:"mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg",onClick:function(){return j.apply(this,arguments)},children:"Update Post"}),Object(r.jsx)("button",{className:"m-8 bg-green-500 text-white font-semibold px-8 py-2 rounded-lg",children:"Create test"})]})}}},[["7Ky4",1,2,3,12,0,4,6,8,9,11]]]);