import { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  ignores: [(commit) => commit.includes('Automated dependency upgrades')],
};

export default config;
