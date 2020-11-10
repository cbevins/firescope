module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    '../src/component/**/*.stories.js',
    // '../src/starter/stories/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    "@storybook/addon-essentials"
  ],
};

// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }