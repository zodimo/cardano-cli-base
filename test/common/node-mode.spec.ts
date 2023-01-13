import { NodeMode } from '../../src/common/node-mode';
describe('node-mode', () => {
  it('shelly-mode', () => {
    expect(NodeMode.shelley().toString()).toBe('--shelley-mode');
  });
  it('byron-mode', () => {
    expect(NodeMode.byron().toString()).toBe('--byron-mode');
  });

  it('byron-mode with epoch-slots', () => {
    expect(NodeMode.byron(1000).toString()).toBe('--byron-mode --epoch-slots 1000');
  });

  it('cardano-mode', () => {
    expect(NodeMode.cardano().toString()).toBe('--cardano-mode');
  });

  it('cardano-mode with epoch-slots', () => {
    expect(NodeMode.cardano(1000).toString()).toBe('--cardano-mode --epoch-slots 1000');
  });
});
