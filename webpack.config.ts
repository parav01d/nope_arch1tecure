import * as path from "path";
import * as webpack from "webpack";
import * as nodeExternals from "webpack-node-externals";
import * as CircularDependencyPlugin from "circular-dependency-plugin";

const config: webpack.Configuration = {
    devtool: "source-map",
    entry: [
      "./api/index.ts"
    ],
    plugins: [
      new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    })
    ],
    module: {
      rules: [
        {
          loader: "awesome-typescript-loader",
          test: /\.ts$/
        }
      ]
    },
    node: {
      __dirname: "mock",
      __filename: "mock",
      Buffer: true,
      console: true,
      global: true,
      process: true,
      setImmediate: true
    },
    output: {
      filename: "bundle.js",
      path:     path.resolve(__dirname, "dist/js")
    },
    resolve: {
      alias: {
        ["UserManagement/Controller"]: path.resolve(__dirname, "api/Domain/UserManagement/Controller"),
        ["UserManagement/Hydration"]: path.resolve(__dirname, "api/Domain/UserManagement/Hydration"),
        ["UserManagement/Listener"]: path.resolve(__dirname, "api/Domain/UserManagement/Listener"),
        ["UserManagement/UseCase"]: path.resolve(__dirname, "api/Domain/UserManagement/UseCase"),
        Config: path.resolve(__dirname, "config"),
        Model: path.resolve(__dirname, "api/Model"),
        Definition: path.resolve(__dirname, "api/Definition"),
        Repository: path.resolve(__dirname, "api/Repository"),
        Service: path.resolve(__dirname, "api/Service"),
        Framework: path.resolve(__dirname, "framework"),
        Translation: path.resolve(__dirname, "translation"),
        Test: path.resolve(__dirname, "e2e")
      },
      extensions: [
        ".ts", ".js"
      ]
    },
    target: "node",
    externals: [nodeExternals()],
};

export default config;
