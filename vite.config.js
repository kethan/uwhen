import * as path from "path";
export default {
    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/index.js"),
            name: "uwhen",
            formats: ["es", "umd", "cjs", "iife"]
        }
    }
}