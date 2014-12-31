module Core {
    "use strict";

    export class Logger {

        static $inject = ["$log"];

        constructor(private $log) {

        }

        log(message: string, data: any, source: string, showToast: boolean) {
            this.logIt(message, data, source, showToast, "info");
        }

        logWarning(message: string, data: any, source: string, showToast: boolean) {
            this.logIt(message, data, source, showToast, "warning");
        }

        logSuccess(message: string, data: any, source: string, showToast: boolean) {
            this.logIt(message, data, source, showToast, "success");
        }

        logError(message: string, data: any, source: string, showToast: boolean) {
            this.logIt(message, data, source, showToast, "error");
        }

        private logIt(message: string, data: any, source: string, showToast: boolean, toastType: string) {
            var write = (toastType === "error") ? this.$log.error : this.$log.log;
            source = source ? "[" + source + "] " : "";
            write(source, message, data);
            if (showToast) {
                if (toastType === "error") {
                    toastr.error(message);
                } else if (toastType === "warning") {
                    toastr.warning(message);
                } else if (toastType === "success") {
                    toastr.success(message);
                } else {
                    toastr.info(message);
                }
            }
        }
    }
}