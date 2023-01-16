import { TestCommand, TestCommandOptions } from './test-command';

describe('command', () => {
  it('test-command', () => {
    expect(new TestCommand('cli', new TestCommandOptions()).getCommandName()).toBe('test');
    expect(new TestCommand('cli', new TestCommandOptions()).getCommand()).toBe('cli test');
  });
});
