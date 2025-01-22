import { account, walletClient } from './utils/client.js';
import { BaseNamesRegistrarControllerAddress } from './utils/mainnet.js';
import { BaseNamesRegistrarControllerABI } from './utils/abi/abi.js';
import { BasenameRenewalFee } from './utils/BasenameRenewalFee.js';

//Replace these arguments with the ones you want to use
const renewBasenameArgs = {
  name: 'REPLACE-NAME-HERE', //the name you want to renew
  duration: 63072000, //time in seconds for the renewal (2 years)
};

const { name, duration } = renewBasenameArgs;

async function renewBasename(name, duration) {
  const fee = await BasenameRenewalFee(name, duration);
  console.log(`Estimating costs to renew ${name} for ${duration} seconds`);
  console.log(`Estimated renewal fee: ${fee} ETH`);
  try {
    console.log(`Renewing Basename using wallet: ${account.address}`);
    const tx = await walletClient.writeContract({
      address: BaseNamesRegistrarControllerAddress,
      abi: BaseNamesRegistrarControllerABI,
      functionName: 'renew',
      args: [name, duration],
      value: fee,
    });
    console.log('Renewal transaction sent successfully');
    console.log(`View transaction: https://basescan.org/tx/${tx}`);
  } catch (error) {
    console.error('Error renewing Basename:', error);
  }
}

renewBasename(name, duration);
