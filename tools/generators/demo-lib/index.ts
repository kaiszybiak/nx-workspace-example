/**
 * new schematic code generated with `ng g workspace-schematic demo-lib`
 * using @nrwl/devkit
 */
/*
import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
  await libraryGenerator(host, { name: schema.name });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
*/


/**
 * legacy code using @angular-devkit
 */
import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/angular', 'lib', {}),
  ]);
}
