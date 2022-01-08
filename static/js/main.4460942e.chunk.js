(this["webpackJsonptop-5-leagues-react"]=this["webpackJsonptop-5-leagues-react"]||[]).push([[0],{23:function(t,s,e){"use strict";e(1),e(72);var a=e(0);s.a=function(){return Object(a.jsx)("div",{className:"error",children:Object(a.jsx)("h3",{className:"error__header",children:"Something went wrong... Please refresh page after 1 minute"})})}},40:function(t,s,e){},49:function(t,s,e){},50:function(t,s,e){},51:function(t,s,e){},52:function(t,s,e){},71:function(t,s,e){},72:function(t,s,e){},73:function(t,s,e){},74:function(t,s,e){},94:function(t,s,e){},95:function(t,s,e){"use strict";e.r(s);var a=e(1),n=e.n(a),i=e(32),c=e.n(i),d=e(2),r=e(15),l=e(12),o=e(4),g=e.p+"static/media/logo.a4b80aec.png",j=(e(40),e(0)),_=function(){var t=Object(a.useState)(!1),s=Object(r.a)(t,2),e=s[0],n=s[1],i=function(){window.scrollY>100?n(!0):n(!1)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[]),Object(j.jsxs)("div",{className:"navigation ".concat(e?"navigation--hide":""),children:[Object(j.jsx)(l.b,{exact:!0,to:"/",className:"navigation__logo",children:Object(j.jsx)("img",{className:"navigation__image",src:g,alt:"top-5-leagues",width:"160",height:"90"})}),Object(j.jsxs)("nav",{className:"navigation__list",children:[Object(j.jsx)(l.b,{exact:!0,to:"/PremierLeague",className:"navigation__list-item",children:"Premier League"}),Object(j.jsx)(l.b,{exact:!0,to:"/PrimeraDivision",className:"navigation__list-item",children:"Primera Division"}),Object(j.jsx)(l.b,{exact:!0,to:"/Bundesliga",className:"navigation__list-item",children:"Bundesliga"}),Object(j.jsx)(l.b,{exact:!0,to:"/SerieA",className:"navigation__list-item",children:"Serie A"}),Object(j.jsx)(l.b,{exact:!0,to:"/Ligue1",className:"navigation__list-item navigation__ligue1",children:"Ligue 1"})]})]})},h=(e(49),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("p",{className:"footer__description",children:"\xa9 TOP 5 LEAGUES. All rights reserved."}),Object(j.jsx)("p",{className:"footer__description",children:"Football data provided by the Football-Data.org API and Scorebat.com"})]})}),m=(e(50),function(t){var s=t.children;return Object(j.jsxs)("div",{className:"main-layout",children:[Object(j.jsx)(_,{}),s,Object(j.jsx)(h,{})]})}),b=(e(51),function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h1",{className:"home__header",children:"Top 5 Leagues"}),Object(j.jsx)("p",{className:"home__content",children:"Welcome to the Top 5 Leagues. This page was created because I am learning programming and this is one of my projects. You can find here the current league tables, top scorers and highlights of the latest matches in the top 5 European leagues. The data comes from two different APIs."})]})}),u=(e(52),function(t){var s=t.highlights,i=t.competitionName,c=t.leagueName,d=t.flagUrl,r=t.alt,l=s.filter((function(t){return t.competition.name===i})),o=n.a.lazy((function(){return Promise.all([e.e(3),e.e(4)]).then(e.bind(null,162))})),g=l.map((function(t,s,e){return 0===s||e[s-1].date.substring(0,10)!==t.date.substring(0,10)?Object(j.jsxs)("li",{className:"highlights__match-container",children:[Object(j.jsx)("fieldset",{className:"highlights__fieldset",children:Object(j.jsx)("legend",{className:"highlights__date",children:t.date.substring(0,10)})}),Object(j.jsx)("ul",{className:"highlights__match",children:Object(j.jsx)(a.Suspense,{fallback:null,children:Object(j.jsx)(o,{match:t})})})]},t.title):e[s-1].date.substring(0,10)===t.date.substring(0,10)?Object(j.jsx)("li",{className:"highlights__match-container",children:Object(j.jsx)("ul",{className:"highlights__match",children:Object(j.jsx)(a.Suspense,{fallback:null,children:Object(j.jsx)(o,{match:t})})})},t.title):null}));return Object(j.jsxs)("div",{className:"highlights",children:[Object(j.jsxs)("header",{className:"highlights__header",children:[Object(j.jsx)("div",{className:"highlights__flag-container",children:Object(j.jsx)("img",{src:d,className:"highlights__image",alt:r,width:"200",height:"120"})}),Object(j.jsx)("h2",{className:"highlights__league-name",children:c})]}),Object(j.jsx)("ul",{className:"highlights__matches-list",children:g.length>0?g:Object(j.jsx)("div",{className:"highlights__notification",children:"Currently there is no video."})})]})}),p=e(34),O=e.n(p),x=(e(71),function(){return Object(j.jsx)("div",{className:"loader-comp",children:Object(j.jsx)(O.a,{type:"Oval",color:"tan",height:100,width:100})})}),N=e(23),f=(e(73),function(t){var s=t.areHighlightsLoading,i=t.haveHighlightsError,c=t.areStandingsLoading,r=t.areScorersLoading,l=n.a.lazy((function(){return e.e(5).then(e.bind(null,160))})),o=n.a.lazy((function(){return e.e(6).then(e.bind(null,161))}));return s&&c&&r?Object(j.jsx)(x,{}):i?Object(j.jsx)(N.a,{}):Object(j.jsxs)("section",{className:"league",children:[Object(j.jsx)("main",{className:"league__main",children:Object(j.jsx)(u,Object(d.a)({},t))}),Object(j.jsxs)("aside",{className:"league__aside",children:[Object(j.jsx)(a.Suspense,{fallback:null,children:Object(j.jsx)(o,Object(d.a)({},t))}),Object(j.jsx)(a.Suspense,{fallback:null,children:Object(j.jsx)(l,Object(d.a)({},t))})]})]})}),S=function(t){var s=t.standings.map((function(t){return Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td standings__td--bold ".concat(t.position<=4?"standings__td--green":5===t.position?"standings__td--lightgreen":t.position>=18?"standings__td--red":""),children:t.position}),Object(j.jsx)("td",{className:"standings__td standings__td--img",children:Object(j.jsx)("img",{className:"standings__club-img",src:"".concat(t.team.crestUrl),alt:t.team.name,width:"17",height:"17"})}),Object(j.jsx)("td",{className:"standings__td standings__td--team-name",children:t.team.name}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.playedGames}),Object(j.jsx)("td",{className:"standings__td",children:t.won}),Object(j.jsx)("td",{className:"standings__td",children:t.draw}),Object(j.jsx)("td",{className:"standings__td",children:t.lost}),Object(j.jsx)("td",{className:"standings__td",children:t.goalDifference}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.points})]},t.team.id)})),e=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("tr",{className:"standings__tr",children:Object(j.jsx)("td",{className:"standings__key",colSpan:"9",children:"Key:"})}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--green"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Champions League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--lightgreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Europa League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--red"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"Relegation"})]})]});return Object(j.jsx)("div",{children:Object(j.jsx)(f,Object(d.a)(Object(d.a)({},t),{},{competitionName:"ENGLAND: Premier League",leagueName:"Premier League",flagUrl:"https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",alt:"Flag of United Kingdom",table:s,tableKey:e}))})},v=function(t){var s=t.standings.map((function(t){return Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td standings__td--bold ".concat(t.position<=4?"standings__td--green":5===t.position?"standings__td--limegreen":6===t.position?"standings__td--lightgreen":t.position>=18?"standings__td--red":""),children:t.position}),Object(j.jsx)("td",{className:"standings__td standings__td--img",children:Object(j.jsx)("img",{className:"standings__club-img",src:"".concat(t.team.crestUrl),alt:t.team.name,width:"17",height:"17"})}),Object(j.jsx)("td",{className:"standings__td standings__td--team-name",children:t.team.name}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.playedGames}),Object(j.jsx)("td",{className:"standings__td",children:t.won}),Object(j.jsx)("td",{className:"standings__td",children:t.draw}),Object(j.jsx)("td",{className:"standings__td",children:t.lost}),Object(j.jsx)("td",{className:"standings__td",children:t.goalDifference}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.points})]},t.team.id)})),e=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("tr",{className:"standings__tr",children:Object(j.jsx)("td",{className:"standings__key",colSpan:"9",children:"Key:"})}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--green"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Champions League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--limegreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Europa League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--lightgreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Conference League Qualifiers"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--red"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"Relegation"})]})]});return Object(j.jsx)("div",{children:Object(j.jsx)(f,Object(d.a)(Object(d.a)({},t),{},{competitionName:"SPAIN: La Liga",leagueName:"Premera Division",flagUrl:"https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",alt:"Flag of Spain",table:s,tableKey:e}))})},L=function(t){var s=t.standings.map((function(t){return Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td standings__td--bold ".concat(t.position<=4?"standings__td--green":5===t.position?"standings__td--limegreen":6===t.position?"standings__td--lightgreen":16===t.position?"standings__td--tomato":t.position>=17?"standings__td--red":""),children:t.position}),Object(j.jsx)("td",{className:"standings__td standings__td--img",children:Object(j.jsx)("img",{className:"standings__club-img",src:"".concat(t.team.crestUrl),alt:t.team.name,width:"17",height:"17"})}),Object(j.jsx)("td",{className:"standings__td standings__td--team-name",children:t.team.name}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.playedGames}),Object(j.jsx)("td",{className:"standings__td",children:t.won}),Object(j.jsx)("td",{className:"standings__td",children:t.draw}),Object(j.jsx)("td",{className:"standings__td",children:t.lost}),Object(j.jsx)("td",{className:"standings__td",children:t.goalDifference}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.points})]},t.team.id)})),e=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("tr",{className:"standings__tr",children:Object(j.jsx)("td",{className:"standings__key",colSpan:"9",children:"Key:"})}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--green"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Champions League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--limegreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Europa League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--lightgreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Conference League Qualifiers"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--tomato"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"Relegation Play-off"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--red"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"Relegation"})]})]});return Object(j.jsx)("div",{children:Object(j.jsx)(f,Object(d.a)(Object(d.a)({},t),{},{competitionName:"GERMANY: Bundesliga",leagueName:"Bundesliga",flagUrl:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",alt:"Flag of Germany",table:s,tableKey:e}))})},y=function(t){var s=t.standings.map((function(t){return Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td standings__td--bold ".concat(t.position<=4?"standings__td--green":5===t.position?"standings__td--limegreen":6===t.position?"standings__td--lightgreen":t.position>=18?"standings__td--red":""),children:t.position}),Object(j.jsx)("td",{className:"standings__td standings__td--img",children:Object(j.jsx)("img",{className:"standings__club-img",src:"".concat(t.team.crestUrl),alt:t.team.name,width:"17",height:"17"})}),Object(j.jsx)("td",{className:"standings__td standings__td--team-name",children:t.team.name}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.playedGames}),Object(j.jsx)("td",{className:"standings__td",children:t.won}),Object(j.jsx)("td",{className:"standings__td",children:t.draw}),Object(j.jsx)("td",{className:"standings__td",children:t.lost}),Object(j.jsx)("td",{className:"standings__td",children:t.goalDifference}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.points})]},t.team.id)})),e=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("tr",{className:"standings__tr",children:Object(j.jsx)("td",{className:"standings__key",colSpan:"9",children:"Key:"})}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--green"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Champions League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--limegreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Europa League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--lightgreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Conference League Qualifiers"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--red"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"Relegation"})]})]});return Object(j.jsx)("div",{children:Object(j.jsx)(f,Object(d.a)(Object(d.a)({},t),{},{competitionName:"ITALY: Serie A",leagueName:"Serie A",flagUrl:"https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",alt:"Flag of Italy",table:s,tableKey:e}))})},E=function(t){var s=t.standings.map((function(t){return Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td standings__td--bold ".concat(t.position<=2?"standings__td--green":3===t.position?"standings__td--limegreen":4===t.position?"standings__td--lightgreen":5===t.position?"standings__td--orange":18===t.position?"standings__td--tomato":t.position>=19?"standings__td--red":""),children:t.position}),Object(j.jsx)("td",{className:"standings__td standings__td--img",children:Object(j.jsx)("img",{className:"standings__club-img",src:"".concat(t.team.crestUrl),alt:t.team.name,width:"17",height:"17"})}),Object(j.jsx)("td",{className:"standings__td standings__td--team-name",children:t.team.name}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.playedGames}),Object(j.jsx)("td",{className:"standings__td",children:t.won}),Object(j.jsx)("td",{className:"standings__td",children:t.draw}),Object(j.jsx)("td",{className:"standings__td",children:t.lost}),Object(j.jsx)("td",{className:"standings__td",children:t.goalDifference}),Object(j.jsx)("td",{className:"standings__td standings__td--bold",children:t.points})]},t.team.id)})),e=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("tr",{className:"standings__tr",children:Object(j.jsx)("td",{className:"standings__key",colSpan:"9",children:"Key:"})}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--green"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Champions League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--limegreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Champions League Qualifiers"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--lightgreen"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Europa League"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--orange"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"UEFA Conference League Qualifiers"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--tomato"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"Relegation Play-off"})]}),Object(j.jsxs)("tr",{className:"standings__tr",children:[Object(j.jsx)("td",{className:"standings__td--red"}),Object(j.jsx)("td",{className:"standings__key-item",colSpan:"8",children:"Relegation"})]})]});return Object(j.jsx)("div",{children:Object(j.jsx)(f,Object(d.a)(Object(d.a)({},t),{},{competitionName:"FRANCE: Ligue 1",leagueName:"Ligue 1",flagUrl:"https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",alt:"Flag of France",table:s,tableKey:e}))})};e(74);var F=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{className:"not-found",children:"There is no such page."})})},w=e(11),A=e.n(w),k=e(14),P=e(10),C=e.n(P),R=function(){var t=Object(k.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.scorebat.com/video-api/v1/",t.next=3,C.a.get("https://www.scorebat.com/video-api/v1/").then((function(t){return t.data}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),H=e(18),U=function(){var t=Object(k.a)(A.a.mark((function t(){var s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.football-data.org/v2/competitions/2021/standings","https://api.football-data.org/v2/competitions/2014/standings","https://api.football-data.org/v2/competitions/2002/standings","https://api.football-data.org/v2/competitions/2019/standings","https://api.football-data.org/v2/competitions/2015/standings",s=["https://api.football-data.org/v2/competitions/2021/standings","https://api.football-data.org/v2/competitions/2014/standings","https://api.football-data.org/v2/competitions/2002/standings","https://api.football-data.org/v2/competitions/2019/standings","https://api.football-data.org/v2/competitions/2015/standings"].map((function(t){return C.a.get(t,{headers:{"X-Auth-Token":"bc4002adeb2340bfb6bdd085dab96b15"}})})),t.next=9,C.a.all(Object(H.a)(s)).then(C.a.spread((function(){for(var t=arguments.length,s=new Array(t),e=0;e<t;e++)s[e]=arguments[e];var a={standingsPL:s[0].data.standings,standingsPD:s[1].data.standings,standingsBL1:s[2].data.standings,standingsSA:s[3].data.standings,standingsFL1:s[4].data.standings};return a})));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(k.a)(A.a.mark((function t(){var s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.football-data.org/v2/competitions/PL/scorers","https://api.football-data.org/v2/competitions/PD/scorers","https://api.football-data.org/v2/competitions/BL1/scorers","https://api.football-data.org/v2/competitions/SA/scorers","https://api.football-data.org/v2/competitions/FL1/scorers",s=["https://api.football-data.org/v2/competitions/PL/scorers","https://api.football-data.org/v2/competitions/PD/scorers","https://api.football-data.org/v2/competitions/BL1/scorers","https://api.football-data.org/v2/competitions/SA/scorers","https://api.football-data.org/v2/competitions/FL1/scorers"].map((function(t){return C.a.get(t,{headers:{"X-Auth-Token":"bc4002adeb2340bfb6bdd085dab96b15"}})})),t.next=9,C.a.all(Object(H.a)(s)).then(C.a.spread((function(){for(var t=arguments.length,s=new Array(t),e=0;e<t;e++)s[e]=arguments[e];var a={topScorersPL:s[0].data.scorers,topScorersPD:s[1].data.scorers,topScorersBL1:s[2].data.scorers,topScorersSA:s[3].data.scorers,topScorersFL1:s[4].data.scorers};return a})));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T={highlights:[],areHighlightsLoading:!0,haveHighlightsError:!1},G=function(t,s){switch(s.type){case"FETCH_HIGHLIGHTS_SUCCESS":return{highlights:s.payload,areHighlightsLoading:!1,haveHighlightsError:!1};case"FETCH_HIGHLIGHTS_ERROR":return{highlights:[],areHighlightsLoading:!1,haveHighlightsError:!0};default:return t}},B={standingsPL:[],standingsPD:[],standingsBL1:[],standingsSA:[],standingsFL1:[],areStandingsLoading:!0,haveStandingsError:!1},I=function(t,s){switch(s.type){case"FETCH_STANDINGS_SUCCESS":return{standingsPL:s.payload.standingsPL[0].table,standingsPD:s.payload.standingsPD[0].table,standingsBL1:s.payload.standingsBL1[0].table,standingsSA:s.payload.standingsSA[0].table,standingsFL1:s.payload.standingsFL1[0].table,areStandingsLoading:!1,haveStandingsError:!1};case"FETCH_STANDINGS_ERROR":return{standingsPL:[],standingsPD:[],standingsBL1:[],standingsSA:[],standingsFL1:[],areStandingsLoading:!1,haveStandingsError:!0};default:return t}},K={scorersPL:[],scorersPD:[],scorersBL1:[],scorersSA:[],scorersFL1:[],areScorersLoading:!0,haveScorersError:!1},Q=function(t,s){switch(s.type){case"FETCH_SCORERS_SUCCESS":return{scorersPL:s.payload.topScorersPL,scorersPD:s.payload.topScorersPD,scorersBL1:s.payload.topScorersBL1,scorersSA:s.payload.topScorersSA,scorersFL1:s.payload.topScorersFL1,areScorersLoading:!1,haveScorersError:!1};case"FETCH_SCORERS_ERROR":return{scorersPL:[],scorersPD:[],scorersBL1:[],scorersSA:[],scorersFL1:[],areScorersLoading:!1,haveScorersError:!0};default:return t}},Y=(e(94),function(){var t=Object(a.useReducer)(G,T),s=Object(r.a)(t,2),e=s[0],n=s[1],i=Object(a.useReducer)(I,B),c=Object(r.a)(i,2),g=c[0],_=c[1],h=Object(a.useReducer)(Q,K),u=Object(r.a)(h,2),p=u[0],O=u[1],x={highlights:e.highlights,areHighlightsLoading:e.areHighlightsLoading,haveHighlightsError:e.haveHighlightsError,areStandingsLoading:g.areStandingsLoading,haveStandingsError:g.haveStandingsError,areScorersLoading:p.areScorersLoading,haveScorersError:p.haveScorersError};return Object(a.useEffect)((function(){R().then((function(t){n({type:"FETCH_HIGHLIGHTS_SUCCESS",payload:t})})).catch((function(){n({type:"FETCH_HIGHLIGHTS_ERROR"})}))}),[]),Object(a.useEffect)((function(){U().then((function(t){_({type:"FETCH_STANDINGS_SUCCESS",payload:t})})).catch((function(){_({type:"FETCH_STANDINGS_ERROR"})}))}),[]),Object(a.useEffect)((function(){D().then((function(t){O({type:"FETCH_SCORERS_SUCCESS",payload:t})})).catch((function(){O({type:"FETCH_SCORERS_ERROR"})}))}),[]),Object(j.jsx)(l.a,{children:Object(j.jsx)(m,{children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(o.b,{path:"/PremierLeague",render:function(){return Object(j.jsx)(S,Object(d.a)({standings:g.standingsPL,scorers:p.scorersPL},x))}}),Object(j.jsx)(o.b,{path:"/PrimeraDivision",render:function(){return Object(j.jsx)(v,Object(d.a)({standings:g.standingsPD,scorers:p.scorersPD},x))}}),Object(j.jsx)(o.b,{path:"/Bundesliga",render:function(){return Object(j.jsx)(L,Object(d.a)({standings:g.standingsBL1,scorers:p.scorersBL1},x))}}),Object(j.jsx)(o.b,{path:"/SerieA",render:function(){return Object(j.jsx)(y,Object(d.a)({standings:g.standingsSA,scorers:p.scorersSA},x))}}),Object(j.jsx)(o.b,{path:"/Ligue1",render:function(){return Object(j.jsx)(E,Object(d.a)({standings:g.standingsFL1,scorers:p.scorersFL1},x))}}),Object(j.jsx)(o.b,{render:function(){return Object(j.jsx)(o.a,{to:{pathname:"/not-found"}})},component:F})]})})})});c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.4460942e.chunk.js.map