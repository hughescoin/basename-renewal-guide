// Base Mainnet Registrar Controller Contract Address.
export const BaseNamesRegistrarControllerAddress =
  '0x4cCb0BB02FCABA27e82a56646E81d8c5bC4119a5';

// Base Mainnet L2 Resolver Contract Address.
export const L2ResolverAddress = '0xC6d566A56A1aFf6508b41f6c90ff131615583BCD';

// The regular expression to validate a Basename on Base Mainnet.
export const baseNameRegex = /\.base\.eth$/;

// Relevant ABI for L2 Resolver Contract.
export const l2ResolverABI = [
  {
    inputs: [
      { internalType: 'bytes32', name: 'node', type: 'bytes32' },
      { internalType: 'address', name: 'a', type: 'address' },
    ],
    name: 'setAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'node', type: 'bytes32' },
      { internalType: 'string', name: 'newName', type: 'string' },
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
