import 'dotenv/config';
import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { base } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});

export const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY);

export const walletClient = createWalletClient({
  chain: base,
  transport: http(),
  account,
});
