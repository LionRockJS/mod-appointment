import url from "node:url";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url)).replace(/\/$/, '');

import path from 'node:path';
import { build } from '@lionrockjs/start';

build(
  `${__dirname}/studio.graphql`,
  ``,
  `${__dirname}/exports/studio.sql`,
  `${__dirname}/default/db/www/studio.sqlite`,
  path.normalize(`${__dirname}/../classes/model`)
);

build(
  `${__dirname}/staff.graphql`,
  ``,
  `${__dirname}/exports/staff.sql`,
  `${__dirname}/default/db/www/staff.sqlite`,
  path.normalize(`${__dirname}/../classes/model`)
);