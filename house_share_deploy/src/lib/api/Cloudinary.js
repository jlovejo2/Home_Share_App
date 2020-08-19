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
const cloudinary_1 = __importDefault(require("cloudinary"));
exports.Cloudinary = {
    upload: (image, folderPath) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let pathPresent = true;
            console.log("image: ", image);
            console.log("folder path: ", folderPath);
            if (folderPath === "") {
                pathPresent = false;
            }
            /*eslint-disable @typescript-eslint/camelcase */
            const res = yield cloudinary_1.default.v2.uploader.upload(image, {
                api_key: process.env.CLOUDINARY_KEY,
                api_secret: process.env.CLOUDINARY_SECRET,
                cloud_name: process.env.CLOUDINARY_NAME,
                folder: pathPresent ? folderPath : "TinyHouse_Assets/",
            });
            return res.secure_url;
        }
        catch (error) {
            throw new Error(`Failed to upload to cloudinary: ${error}`);
        }
    }),
    delete: (image) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield cloudinary_1.default.v2.uploader.destroy(image, function (result) {
            console.log(result);
        });
        return res.secure_url;
    }),
};
