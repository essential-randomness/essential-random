const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
  return {
    name: "cusotm-webpack-plugin",
    configureWebpack(config) {
      config.module.rules.forEach((rule) => {
        console.log(rule.test);
        console.log(rule.test == /\.[jt]sx?$/i);
        console.log(rule.use);
      });
      config.module.rules.unshift({
        test: /\.[jt]sx?$/i,
        use: [
          {
            loader: "@linaria/webpack-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production",
            },
          },
        ],
      });
      // throw new Error("booo");
      return {
        // plugins: [
        //   new MiniCssExtractPlugin({
        //     filename: "linaria-[contenthash].css",
        //   }),
        // ],
        module: {
          rules: [
            {
              test: /\.[jt]sx?$/i,
              use: [
                {
                  loader: "@linaria/webpack-loader",
                  options: {
                    sourceMap: process.env.NODE_ENV !== "production",
                  },
                },
              ],
            },
            // {
            //   test: /\.css$/,
            //   use: [
            //     {
            //       loader: MiniCssExtractPlugin.loader,
            //     },
            //     {
            //       loader: "css-loader",
            //       options: {
            //         sourceMap: process.env.NODE_ENV !== "production",
            //       },
            //     },
            //   ],
            // },
          ],
        },
      };
    },
  };
};
