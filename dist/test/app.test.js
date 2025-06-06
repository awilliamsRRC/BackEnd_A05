"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
/**
 * Test suite for the GET `/` route.
 *
 * This test verifies that the root endpoint ("/") returns the correct response.
 * It checks if the status code is 200 and the text response is "Hello, World!".
 *
 * @group GET / - Test Suite
 */
describe("GET /", () => {
    /**
     * Test for the root endpoint that expects a "Hello, World!" response.
     *
     * It sends a GET request to the root URL ("/") and checks:
     * - If the status code is 200, indicating the request was successful.
     * - If the response text is exactly "Hello, World!".
     *
     * @test {GET /}
     * @returns {Promise<void>} A promise that resolves when the test completes.
     */
    it("should return Hello, World!", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello, World!");
    }));
});
//# sourceMappingURL=app.test.js.map