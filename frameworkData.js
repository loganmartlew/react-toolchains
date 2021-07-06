const frameworkData = {
  react: {
    uninstalls: [
      '@testing-library/jest-dom',
      '@testing-library/react',
      '@testing-library/user-event',
      'web-vitals',
    ],
    installs: {
      prod: {
        default: [],
        typescript: [],
        styledComponents: ['styled-components'],
      },
      dev: {
        default: ['eslint', '@types/react', '@types/react-dom'],
        typescript: ['typescript'],
        styledComponents: ['@types/styled-components'],
      },
    },
    deletes: [],
    templates: {
      default: {
        path: 'default',
      },
      typescript: {
        path: 'typescript',
      },
      styledComponents: {
        path: '',
      },
    },
  },
  next: {
    uninstalls: [],
    installs: {
      prod: {
        default: [],
        typescript: [],
        styledComponents: ['styled-components'],
      },
      dev: {
        default: [
          'eslint',
          '@types/react',
          '@types/react-dom',
          '@types/next',
          '@types/node',
        ],
        typescript: ['typescript'],
        styledComponents: [
          '@types/styled-components',
          'babel-plugin-styled-components',
        ],
      },
    },
    deletes: ['styles'],
    templates: {
      default: {
        path: 'default',
      },
      typescript: {
        path: 'typescript',
      },
      styledComponents: {
        path: 'styledComponents',
      },
    },
  },
};

module.exports = frameworkData;
