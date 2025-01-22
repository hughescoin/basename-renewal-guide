# Basename Renewal Guide

This guide walks you through the process of renewing a [**Basename**](https://www.base.org/names) by invoking a smart contract using [viem](https://viem.sh).

**Basenames** are a human-readable address naming system that simplifies transactions and helps establish your onchain identity on [Base](https://www.base.org/).

---

## Prerequisites

Before you start, ensure you have the following:

1. **EOA Private Key**  
   [Create a wallet](https://www.coinbase.com/wallet/downloads) if you don't already have one.
2. **An Existing Basename**  
   Register for a Basename [here](https://www.base.org/names) or by following this [guide](https://github.com/hughescoin/basename-registration-example-js).
3. **Node.js**  
   Version 16 or higher.
4. **npm**  
   Installed and ready to use.

## Installation

### Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/hughescoin/basename-renewal-guide.git
cd basename-renewal-guide
```

### Install Dependencies

Run:

```bash
npm install
```

### Set Up Environment Variables

Create a .env file:

```bash
cp .env.example .env
```

### Add Your Private Key

Open the `.env` file and add your private key:

```bash
WALLET_PRIVATE_KEY=0xYourPrivateKey
```

> [!NOTE]  
> Ensure your private key starts with 0x.

### Configure Your Basename

- Open the RenewBasename.js file in the root directory.
- Replace the placeholder Basename on line 8 with the Basename you want to renew.
- Update the duration variable to represent the number of years in seconds.
- Save the file.

### Renew Your Basename

Run the renewal script:

```bash
node RenewBasename.js
```

## Conclusion

That's it! Your Basename should now be successfully renewed.

Your terminal shoudl look something like this:

```
Estimating costs to renew ziggyzaggy for 63072000 seconds
Estimated renewal fee: 199817583264000 ETH
Renewing Basename using wallet: 0x8522cf82FEa50e23d1505489492f6c881a3051E3
Renewal transaction sent successfully
View transaction: https://basescan.org/tx/0xf1335d16908268cf4841ef195ce654fcda01e7921c7789117a583d235debe243
```

For any issues or questions, feel free to raise an issue the [Base Discord] or DM hughescoin on [X] / [Warpcast]

---

[Base Discord]: https://discord.com/invite/buildonbase
[X]: https://x.com/hughescoin
[Warpcast]: https://warpcast.com/patty
