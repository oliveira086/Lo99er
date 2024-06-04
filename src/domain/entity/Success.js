"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Success = /** @class */ (function () {
    function Success(service_name, service_version, appKey, message, route, data, header, timestamp, severity) {
        this.service_name = service_name;
        this.service_version = service_version;
        this.appKey = appKey;
        this.message = message;
        this.route = route;
        this.data = data;
        this.header = header;
        this.timestamp = timestamp;
        this.severity = severity;
        this.timestamp = "".concat(new Date().getTime());
        this.severity = 'success';
    }
    return Success;
}());
exports.default = Success;
