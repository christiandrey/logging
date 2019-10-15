"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var elf_utils_1 = require("elf-utils");
exports.Logger = function () {
    return function (target, propertyName, propertyDescriptor) {
        var original = propertyDescriptor.value;
        var modified = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var base, error_1, elfLogMode, filePath, content;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, original.apply(this, args)];
                        case 1:
                            base = _a.sent();
                            return [2 /*return*/, base];
                        case 2:
                            error_1 = _a.sent();
                            elfLogMode = process.env.ELF_LOG_MODE;
                            if (elfLogMode === "file") {
                                filePath = path.resolve(process.cwd(), "./elf.log");
                                content = "\nFATAL: " + new Date().toISOString() + ": " + error_1 + "\n";
                                fs.appendFile(filePath, content, function () { });
                            }
                            if (elfLogMode === "console") {
                                console.log("FATAL: ", new Date().toISOString(), ": ", error_1);
                            }
                            return [2 /*return*/, new elf_utils_1.HttpResponse(new elf_utils_1.ApiResponse({
                                    errors: [
                                        new elf_utils_1.ApiResponseError({
                                            message: "An unexpected error occured. Please try again in a few minutes."
                                        })
                                    ]
                                }), elf_utils_1.HttpStatusCodes.internalServerError)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        propertyDescriptor.value = modified;
        return propertyDescriptor;
    };
};
exports.FileLogger = function () {
    return function (target, propertyName, propertyDescriptor) {
        var original = propertyDescriptor.value;
        var modified = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var base, error_2, filePath, content;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, original.apply(this, args)];
                        case 1:
                            base = _a.sent();
                            return [2 /*return*/, base];
                        case 2:
                            error_2 = _a.sent();
                            filePath = path.resolve(process.cwd(), "./elf.log");
                            content = "\nFATAL: " + new Date().toISOString() + ": " + error_2 + "\n";
                            fs.appendFile(filePath, content, function () { });
                            return [2 /*return*/, new elf_utils_1.HttpResponse(new elf_utils_1.ApiResponse({
                                    errors: [
                                        new elf_utils_1.ApiResponseError({
                                            message: "An unexpected error occured. Please try again in a few minutes."
                                        })
                                    ]
                                }), elf_utils_1.HttpStatusCodes.internalServerError)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        propertyDescriptor.value = modified;
        return propertyDescriptor;
    };
};
exports.ConsoleLogger = function () {
    return function (target, propertyName, propertyDescriptor) {
        var original = propertyDescriptor.value;
        var modified = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var base, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, original.apply(this, args)];
                        case 1:
                            base = _a.sent();
                            return [2 /*return*/, base];
                        case 2:
                            error_3 = _a.sent();
                            console.log("FATAL: ", new Date().toISOString(), ": ", error_3);
                            return [2 /*return*/, new elf_utils_1.HttpResponse(new elf_utils_1.ApiResponse({
                                    errors: [
                                        new elf_utils_1.ApiResponseError({
                                            message: "An unexpected error occured. Please try again in a few minutes."
                                        })
                                    ]
                                }), elf_utils_1.HttpStatusCodes.internalServerError)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        propertyDescriptor.value = modified;
        return propertyDescriptor;
    };
};
