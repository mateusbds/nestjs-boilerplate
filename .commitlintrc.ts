import { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  ignores: [(commit) => commit === 'Automated dependency upgrades'],
};

export default config;
