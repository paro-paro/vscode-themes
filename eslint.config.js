// @ts-check
import { paroparo } from '@paro-paro/eslint-config'

export default paroparo(
  {},
  {
    files: ['themes/*.json'],
    rules: {
      'jsonc/sort-keys': 'error',
    },
  },
)
