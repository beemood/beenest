import { execSync } from 'child_process';
import { join } from 'path';

/**
 * Run command in workspace root directory
 * @param command comamnd
 */
export function exec(command: string) {
  execSync(command, { cwd: join(__dirname, '../..') });
}

/**
 * Run commands in workspace root directory
 * @param commands comamnds
 */
export function execs(commands: string[]) {
  for (const c of commands) {
    exec(c);
  }
}
