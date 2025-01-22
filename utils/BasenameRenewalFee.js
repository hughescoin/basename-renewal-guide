import { namehash } from 'viem';
import { normalize } from 'viem/ens';
import { BaseNamesRegistrarControllerABI } from './abi/abi.js';
import { BaseNamesRegistrarControllerAddress } from './mainnet.js';
import { publicClient } from './client.js';

// Get the register / renewalprice for a basename
export async function BasenameRenewalFee(name, duration) {
  const price = await publicClient.readContract({
    address: BaseNamesRegistrarControllerAddress,
    abi: BaseNamesRegistrarControllerABI,
    functionName: 'registerPrice',
    args: [namehash(normalize(name)), duration],
  });

  console.log(price);
  return price; //in wei
}
