module.exports = {
  extends: ['@commitlint/config-conventional'],
  rule: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      ['chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'test'],
    ],
  },
}
