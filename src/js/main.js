/**主模块 */
angular.module("app", ["aside"])
// angular.module("app", [
//         "ngRoute",
//         "aside",
//         "header",
//         "login",
//         "index"
//     ])
//     .config(["$routeProvider", function ($routeProvider) {
//         $routeProvider
//             .when("/", {
//                 template: ""
//             })
//             .when("/index", {
//                 redirectTo: "/"
//             })
//             .when("/login", {
//                 template: ""
//             })
//             .otherwise({
//                 templateUrl: "/src/html/404.html"
//             })
//     }])