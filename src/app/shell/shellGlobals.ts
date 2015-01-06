/// <reference path="shellConfig.ts" />
module Shell {
    angular.module("shell")
        .constant("globals", {
            webApiUrl: "http://localhost/Foresee/api/"
/*            ,messagingApiUrl: "http://localhost/MessagingApi/api/broadcasts/",
            messagingUrl: "http://localhost/MessagingApi/signalr",
            hubUrl: "http://localhost/MessagingApi/signalr/hubs"*/
        });
}

