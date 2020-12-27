import { resolve as resolvePath } from 'path';

export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: resolvePath(__dirname, 'dist'),
    filename: 'romanice.min.js',
    library: 'Romanice',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        include: resolvePath(__dirname, 'src'),
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
