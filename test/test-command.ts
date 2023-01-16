import { Command } from '../src/command';
import { CommandOptions } from '../src/command-options';

export class TestCommandOptions implements CommandOptions {
  toString(): string {
    return '';
  }
}
export class TestCommand extends Command<TestCommandOptions> {
  getCommandName(): string {
    return 'test';
  }
}
