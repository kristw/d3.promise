import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  entry: 'src/main.js',
  plugins: [
    babel(babelrc())
  ],
  external: id => false,
  targets: [
    {
      dest: 'dist/d3.promise.js',
      format: 'umd',
      moduleName: 'd3.promise',
      sourceMap: true
    }
  ]
};