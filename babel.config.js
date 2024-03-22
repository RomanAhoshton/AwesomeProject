module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       alias: {
    //         components: './src/components',
    //         hooks: './src/hooks',
    //         screens: './src/screens',
    //         types: './src/types',
    //         utils: './src/utils',
    //       },
    //     },
    //   ],
    // ],
  };
};
