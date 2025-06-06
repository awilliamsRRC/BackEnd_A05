"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_1 = require("./swaggerOptions");
const setupSwagger = (app) => {
    const specs = (0, swaggerOptions_1.generateSwaggerSpec)();
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
};
exports.default = setupSwagger;
//# sourceMappingURL=swagger.js.map