# Pangea documentation

- Every token launches on five chains at once, into five pools. No bonding curve, no sequencer, no keeper.
- Price is automatically arbitraged using LayerZero Omnichain Fungible Tokens.
- Liquidity is locked on every chain: no contract function or program instruction withdraws it.

| Figure | Value | What it says |
| --- | --- | --- |
| Chains | 5 | Every launch deploys on all five at once. |
| Supply | 5B | All of it goes into liquidity from the start. New launches: 1B per chain · 5B across 5 chains. |
| Per liquidity pool | 1B | Each chain’s own supply, all of it in its pool. |
| Trading fee | 0.3-5% | Set once, per launch. |

This is the Markdown version of https://www.pangea.trade/app/docs. Each section is also on its own at https://www.pangea.trade/app/docs/<section id>.md, and https://www.pangea.trade/llms.txt lists them.

## How it works

Every launch deploys the same token on five chains at once. Each chain gets 1B tokens in its liquidity pool, and all five pools open at the same US dollar price.

All tokens go into liquidity from the start. There is no team allocation, treasury or vesting. Each pool starts with tokens only and collects the quote asset as people buy.

Each chain operates independently, and one thing keeps the five prices together: arbitrage, which is open to anyone. Buy on a cheaper chain and sell on a more expensive one.

## The five pools

Each chain gets 1 billion tokens in its liquidity pool, held in a concentrated liquidity position. As the price rises, the pool sells tokens and collects the quote asset.

| Chain | Venue | Quote |
| --- | --- | --- |
| Ethereum | Uniswap v4 | ETH |
| Base | Uniswap v4 | ETH |
| Robinhood Chain | Uniswap v4 | ETH |
| BSC | Uniswap v4 | BNB |
| Solana | Meteora DAMM v2 | SOL |

Each pool pays sellers from its own reserves. A chain with fewer buyers may have less quote asset available, regardless of how much liquidity exists elsewhere.

## Five contracts, one token

Each chain has its own token contract and address, so buyers choose which chain to trade on.

A token’s address is different on every chain, and every one of them ends in `6ea`: the last three hex digits on the four EVM chains, the last three characters of the mint on Solana. The token’s page lists all five.

Each chain has 1 billion tokens in its own liquidity pool, so 5 billion across the five chains.

| Chain | In its liquidity pool at launch |
| --- | --- |
| Ethereum | 1B |
| Base | 1B |
| Robinhood | 1B |
| BSC | 1B |
| Solana | 1B |

Each contract reports its own chain’s 1B supply.

> **Note:** [How market cap is counted →](https://www.pangea.trade/app/docs#market-cap)

## The market cap situation

Terminals and apps calculate market cap in different ways. A token’s full market cap is the sum of its market caps on all five chains.

The price is the same on every terminal and app. You can bridge your tokens, or buy on any of the five contracts, at the same dollar price for the same number of tokens.

To see a token’s complete market cap, use its page on this site: it is the most accurate source.

The differences between platforms come from how Pangea manages supply on each chain to keep prices in line. That is what keeps the price gap between chains small, and what makes a single token across many chains possible. Every platform is consistent with itself, and many of them show the same figures.

**The key point:** the same token, at the same price, on every chain.

## Launch fee

You choose one of the five chains to pay on and pay once, from your own wallet, in that chain’s native asset. That one payment covers the launch on all five chains, so you need no funds on the other four.

| Pay on | Paid in | From |
| --- | --- | --- |
| Ethereum | ETH | Your EVM wallet |
| Base | ETH | Your EVM wallet |
| Robinhood Chain | ETH | Your EVM wallet |
| BSC | BNB | Your EVM wallet |
| Solana | SOL | Your Solana wallet |

### What it pays for

- **Gas on the four EVM chains.** The launch transaction on Ethereum, BSC, Base and Robinhood Chain, priced at 7,290,000 gas each at that chain’s gas price when you ask for the quote, plus the 1,000,000 wei opening buy (0.000000000001 ETH or BNB) each launch makes in its own pool.
- **Rent and fees on Solana.** 0.0447 SOL: the rent for the accounts the token needs there (its mint, its pool and position, its LayerZero store and escrow, its record in Pangea’s program) and the fees of the transactions that create them.
- **A platform margin.** 20% on top of that cost, for gas moving between the quote and the launch and for a chain that has to be retried.

So the amount is not fixed. It moves with gas prices on the four EVM chains and with the prices of ETH, BNB and SOL. It is quoted when you prepare the launch, and the launch page shows it in the asset you pay in, with its approximate US dollar value, before you sign. A quote is good for 10 minutes; once it runs out, you prepare again for a fresh one.

**At today’s prices a launch typically costs about $8 to $10.** For example, TEST4’s quote was $8.16: $6.80 of cost plus the 20% margin, paid as 0.0112 BNB. TEST3’s was $9.20, from $7.66 of cost.

A dev buy is optional. If you set one, it is your own money: it is paid on top of the fee in the same transaction, on the same chain, and shown separately. The fee then includes what the buy adds to the launch’s own cost, 150,000 gas on an EVM chain or one token account’s rent on Solana, so the platform pays no part of it.

> **Note:** The fee is held, not taken, until your launch lands. If the launch never happens it is refunded, or you can take it back yourself after 7 days.

## Trading fee

Each launch sets a trading fee between **0.3% and 5%**, once, at launch. No contract function or program instruction changes it afterwards.

The platform takes **20% of the trading fee**, with a floor of 0.2% of volume. The creator receives the rest.

| Trading fee | Platform | Creator |
| --- | --- | --- |
| 0.3% | 0.2% (floor) | 0.1% |
| 1% | 0.2% | 0.8% |
| 5% | 1.0% | 4.0% |

> **Note:** The minimum fee is 0.3% because Meteora keeps 20% of trading fees on Solana. At a 0.2% fee, only 0.16% of volume would remain, less than the platform’s share. This also means creators earn less on Solana: at a 1% trading fee they receive 0.6% there against 0.8% on Base.

**Where the fee goes can change.** Either side may hand its stream to another address, in two steps — the new address has to accept it — so a project that changes hands does not have to relaunch to move its revenue with it. On Solana, the fee split is enforced by Pangea's splitter program.

## Fee collection

Fees are paid in the quote asset: `ETH`, `BNB` or `SOL`. Never in the token that was launched.

Meteora supports collecting fees directly in the quote asset. Uniswap v4 collects fees in whichever token enters a swap, so fees from sells accrue in the launched token.

To convert them, the platform swaps those tokens for the quote asset when fees are claimed. This keeps extra code off the trading path, reducing the risk of a bug disrupting swaps. The trade-off is a small price impact from selling the collected tokens into the pool.

## Launch types

Every launch uses the same five-chain structure, single-sided liquidity and locked positions. The launch type determines the trading pair and any additional features.

- **Standard** (Live): A plain pool paired with each chain's native asset. No hooks means standard swap events stay compatible with DexScreener and other aggregators.
- **Stock-paired** (Planned): Pairs the token with a tokenized stock on the stock's native chain. The other chains continue using their native assets, so prices must account for the different quote assets.
- **Hooks** (With trade-offs): Uniswap v4 supports hooks, but Meteora has no equivalent, so a hook-based launch cannot use the same setup on all five chains. Custom swap accounting can also break the standard swap events aggregators read.

## PANGEA tokenomics

**$PANGEA is live.** It launched through Pangea on all five chains, with the same five-chain structure as every other token. [Trade $PANGEA →](https://www.pangea.trade/app/t/pangea-dadd0d)

| Chain | Official $PANGEA contract |
| --- | --- |
| Ethereum | `0x6434e57e8d12B92bb4D0b1EFb3274748B75196ea` |
| Base | `0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea` |
| Robinhood Chain | `0x30de7AE4c9578D110a97367EDe9F7765Cdce06ea` |
| BSC | `0xd0cb4279e2B74c2d72EEa20Df308Fb9604E3d6Ea` |
| Solana | `JAFqCQSpy5YinrsmixWSMaD7jTn4MytJRkyWvYPnY6ea` |

> **Note:** These five are the only official $PANGEA contracts. Any launch may use the ticker PANGEA; a token at any other address is not this one.

**Buyback and burn.** 80% of platform revenue buys PANGEA and burns what it buys; the remaining 20% stays with the platform. Buybacks happen continuously, and the amount depends on the fees generated by trading across the platform.

**Arbitrage buybacks.** The arbitrage bot that keeps $PANGEA at one price on all five chains spends its profit buying $PANGEA back, on the cheapest chains first.

## Bridging

The token uses LayerZero OFT. Transfers burn tokens on the source chain and mint them on the destination, keeping the total across the five chains unchanged. There are no wrapped tokens.

Each chain’s pool receives its 1 billion tokens at launch, so all five pools open at once.

### Standard or fast

A standard transfer takes LayerZero’s own path. On every route the verifiers attest once the source transaction has 1 confirmation, and a transfer typically arrives in 4 to 16 seconds. From Ethereum, whose blocks are slower, it takes longer. [How to bridge, step by step →](https://www.pangea.trade/app/docs#bridge-steps)

A fast transfer arrives in seconds: a relayer pays the recipient at once from its own tokens and is repaid when the standard transfer lands. It costs the fast lane’s own 0.2% on top of the standard 0.2%, plus the relayer’s price, which is capped at 10%. The bridge screen offers it only when a relayer is quoting your transfer. [Relayers →](https://www.pangea.trade/app/docs#relayers)

### What a transfer costs

- **The token’s fee.** The token keeps 0.2% of every transfer between chains. It goes to the platform. On the four EVM chains it is fixed in the token contract and nobody can change it. On Solana, the fee split is enforced by Pangea's splitter program.
- **The message fee.** LayerZero’s price for carrying the transfer, paid in the source chain’s native asset. It is quoted for the exact transfer before you sign.
- **A Solana route’s setup.** The first transfer on a Solana route nobody has used yet also pays a one-time setup fee for that route. Every later transfer on it does not.

### Routes opened at launch

A launcher can tick “Open all bridge routes at launch” on the launch page’s review step. The launch fee then also covers the setup of all four Solana routes, to Ethereum, BNB Chain, Base and Robinhood Chain, at cost plus the launch fee’s usual margin, in the same one payment. Pangea opens the four right after the Solana launch lands, so nobody pays a setup fee on that token’s routes. The box is offered only while all four routes are configured on Solana. The launch screen shows each route as it opens; a route that cannot be opened automatically is opened by hand.

A transfer of 1,000 tokens: 2 go to the platform and 998 arrive.

> **Note:** Transfers are rounded down to six decimal places. Amounts smaller than `0.000001` token are dropped.

> **Note:** [How market cap is counted →](https://www.pangea.trade/app/docs#market-cap)

## How to bridge

Bridging moves your tokens from one chain to another. It is the same token on both sides: the tokens are burned where you send them from and minted where they arrive, so nothing is wrapped and the total across the five chains does not change.

### On the Bridge page

- **Pick the token.** Open Bridge in the menu and choose the token, or open a token’s page and use its bridge tab. A link with the token in it, such as `/app/bridge?token=ptest4`, opens it ready.
- **Pick From and To.** The chain your tokens are on now, and the chain you want them on. The swap button between them turns the route around.
- **Connect a wallet.** An EVM wallet for Ethereum, Base, Robinhood Chain and BSC, a Solana wallet for Solana. A route between an EVM chain and Solana needs both: one sends, the other receives.
- **Enter the amount.** Your balance on the From chain is read from the chain. The page shows what you send, the token’s fee, what arrives, and the message fee, before you sign anything.
- **Choose Standard or Fast.** Standard is the token’s own path. Fast appears only when a relayer is quoting your transfer.
- **Sign.** One transaction on the From chain for a standard transfer. A fast transfer may ask for an approval first. The first transfer on a Solana route that nobody has used yet may ask for a setup step first; see below.
- **Wait for it to arrive.** The page follows the transfer and says when it has landed. Recent transfers are listed under the card.

### What it costs

- **The token’s fee, 0.2%.** Kept by the token for the platform, out of the amount you send. 1,000 tokens sent, 998 arrive.
- **LayerZero’s message fee.** Paid in the From chain’s native asset: ETH on Ethereum, Base and Robinhood Chain, BNB on BSC, SOL on Solana. It pays the verifiers and the delivery on the other side, and it is quoted for your exact transfer before you sign.
- **Gas.** The transaction itself, on the From chain, as for any transaction there.

| Route, 1,000 PTEST4 | Message fee quoted |
| --- | --- |
| Base to BSC | 0.000110 ETH |
| Ethereum to Base | 0.000205 ETH |
| Base to Solana | 0.000425 ETH |
| Solana to Base | 0.00058 SOL |

Those are live quotes from 19 October 2026, to show the size of the fee; it moves with gas prices. A transfer into Solana costs more because it also pays for the token account the tokens arrive in.

### How long it takes

A standard transfer waits for its transaction to have 1 confirmation on the From chain, then for two verifiers to attest it, and is then delivered. Measured on mainnet, transfers between Base, BSC, Robinhood Chain and Solana took 4 to 16 seconds:

| Route | Seconds, sent to delivered | Transfers measured |
| --- | --- | --- |
| Base to BSC | 5 | 2 |
| Base to Robinhood Chain | 4 to 5 | 4 |
| Base to Solana | 5 to 7 | 4 |
| BSC to Base | 8 | 1 |
| Robinhood Chain to Base | 10 to 16 | 4 |
| Robinhood Chain to BSC | 7 | 1 |
| Robinhood Chain to Solana | 5 to 13 | 2 |
| Solana to Base | 12 to 15 | 4 |

From Ethereum it takes longer. Ethereum makes a block only every 12 seconds, and the verifiers wait for the transfer’s block to be confirmed before they attest, so expect about half a minute or more. No transfer out of Ethereum has been measured on mainnet yet, and the Bridge page currently shows the same estimate for every route.

### The fast lane

Fast is an option on top of the standard transfer. When you choose it, the transfer carries a public order on Pangea’s fast bridge, PangeaFastBridge, one shared contract per chain. A relayer sees the order and pays you on the To chain within seconds from its own tokens, and is repaid when your standard transfer lands. It costs the fast lane’s 0.2% and the relayer’s price on top of the standard 0.2%, and the price is fixed in the order before you sign. If nobody fills the order, your tokens still arrive the standard way and you get the relayer’s fee too. [How relayers work →](https://www.pangea.trade/app/docs#relayers)

- Fast appears only when a relayer is quoting your route and amount. Otherwise only Standard is offered.
- Into Solana it needs the token to allow a 232-byte message. Tokens launched from the current factories allow 256; some earlier launches allow 200, and for those the page offers Standard only into Solana.
- A fast transfer may need an approval first: the fast bridge moves the tokens for you, once.

### Solana

- **Into Solana, the recipient is a wallet.** Name the Solana wallet that will own the tokens, not a token account. The tokens arrive in that wallet’s token account for the token, which is created on delivery if it does not exist.
- **That account’s rent is in the message fee.** Every transfer into Solana carries 2,074,080 lamports (about 0.002 SOL), the rent of a new Token-2022 account, paid in the From chain’s asset as part of LayerZero’s fee. You need no SOL to receive.
- **The first transfer on a route pays its setup.** A token’s route between Solana and a chain is opened the first time anyone uses it. That first transfer also pays a one-time setup fee: the rent of the accounts LayerZero keeps for the route. The page shows it as a separate line and may ask for two steps. Every later transfer on that route, by anyone, does not pay it.
- **Out of Solana, you pay in SOL.** The message fee and the transaction fee are paid from your Solana wallet, so keep a little SOL there.
- **Amounts cross at six decimals.** The odd base units below 0.000001 token stay in your wallet.

### If a transfer seems stuck

- **Look it up on LayerZero Scan.** Paste the transaction hash or signature of your send at layerzeroscan.com. It shows each verifier’s attestation and the delivery, with links to both transactions.
- **Inflight or confirming.** The verifiers are waiting for the confirmation or attesting. Wait: this is the ordinary state for the first seconds, and longer from Ethereum.
- **Verified but not delivered.** Delivery is open to anyone once a message is verified. LayerZero’s executor delivers it, and Pangea runs its own delivery service that delivers every Pangea token’s messages as soon as they are verified. If one sits verified and undelivered for more than a few minutes, anyone can deliver it by calling the destination endpoint’s `lzReceive` with the message, at their own gas cost.
- **Into Solana, on a route that is not open.** A transfer sent into Solana before its route is opened waits, and is delivered once the route is opened; LayerZero Scan may show it as blocked until then. Nothing is lost in between. The Bridge page opens the route as part of the first transfer on it.
- **A held fast order.** When a fast order cannot be paid on the To chain, the fast bridge holds it for the sender. The Bridge page shows a button that sends it back; anyone may do it, paying LayerZero’s fee for the trip back.
- **Nothing on LayerZero Scan.** The send did not go through on the From chain. Check it on that chain’s explorer: if it failed, the tokens never left your wallet.

> **Note:** [How the routes are set up, and how to check them →](https://www.pangea.trade/app/docs#routes)

## LayerZero routes

### One token, five contracts

- **An address per chain.** A token is a LayerZero OFT contract on each of Ethereum, Base, Robinhood Chain and BSC, and a mint on Solana, held by LayerZero’s OFT program. The five addresses are all different and all end in `6ea`. They are on the token’s page and in `/api/pools`.
- **1B per chain.** Each chain mints its own 1 billion at launch, all of it into that chain’s pool, 5 billion across the five. On an EVM chain `launchSlice()` is that 1B and `launchTotal()` the 5B. Nothing can mint more: there is no mint function and no minter.
- **Burn and mint.** A transfer burns the tokens on the chain it leaves and LayerZero’s message mints the same number on the chain it reaches. On an EVM chain the token’s fee is moved to `bridgeFeeTo()` and only the rest is burned, so what is burned on one side is exactly what is minted on the other.
- **What is on a chain, and what is reported.** On each EVM chain `localSupply()` is what is on that chain now; it moves as tokens cross. `totalSupply()` is a reported figure: it starts at the chain’s 1B, and for tokens launched from the current factories the platform’s SupplyReporter on that chain mirrors the token’s supply on Solana into it. A report moves no balance and mints nothing, and the token refuses one below its own `localSupply()` or above `launchTotal()`. Earlier launches have no reporter and always report their slice.
- **Peers are sealed at launch.** A peer is the token’s counterpart on another chain, the only address it accepts a mint from. The factory registers the four peers in the transaction that creates the token and hands ownership to a LaunchOwner contract that is sealed from the start: `sealed_()` is true and it has no way to add, change or remove a peer.

| Chain | SupplyReporter |
| --- | --- |
| Ethereum | 0xD7AF0c412911DCE5F864d949abA14a3048DD87B2 |
| Base | 0xF10254C126e41F69799e781D185cc42c99EE37Ed |
| Robinhood Chain | 0x51D658a71AEa38f123d4c73e42703Fb9C949900A |
| BSC | 0xf1a98Fa0B2baB64BC4358dC0C2c13444ecCA365b |

### How every route is set up

A route is one direction between two chains, for one token. When the factory creates a token it is, for that one transaction, the token’s LayerZero delegate, and it writes every route from a table fixed in its own constructor. Nothing is left on LayerZero’s defaults, because a default can be changed by whoever administers the endpoint.

- **Libraries.** The send and the receive message library are named explicitly: LayerZero’s Ultra Light Node on every chain, the same contracts the endpoint’s defaults point at today, pinned so they stay.
- **Executor.** LayerZero’s executor on each chain is named explicitly, with a cap on the message size.
- **Verifiers.** No required verifiers. An optional set of Pangea’s own verifier plus the external ones, and 2 of the set must attest before a message counts. So no single party can deliver a message: not Pangea’s verifier, and not any one external one.
- **Confirmations.** 1 on every source chain, Solana included: the verifiers attest once the send has 1 confirmation. Both ends of a route hold the same number.
- **A gas floor.** Every transfer must give the delivery at least 100,000 gas on an EVM chain, and 200,000 compute units plus 2,074,080 lamports on Solana, for the recipient’s token account. It is an enforced option, added to every send, so a sender cannot under-pay delivery.
- **A message size.** Up to 10,000 bytes between EVM chains and from Solana. Toward Solana 256 bytes for launches from the current factories; the factory admin can move that between 200 and 800 for launches after, never for a token that exists. A Solana transaction is small, and a cap above what Solana can deliver would let a message be sent that can never land.

| Chain | Optional verifiers | Of which must attest | Confirmations |
| --- | --- | --- | --- |
| Ethereum | Pangea, LayerZero Labs, Nethermind, Horizen, Canary | 2 | 1 |
| Base | Pangea, LayerZero Labs, Nethermind, Horizen, Canary | 2 | 1 |
| Robinhood Chain | Pangea, LayerZero Labs, Nethermind | 2 | 1 |
| BSC | Pangea, LayerZero Labs, Nethermind, Horizen, Canary | 2 | 1 |
| Solana | Pangea, LayerZero Labs, Nethermind, Horizen, Canary | 2 | 1 |

That is the set on each chain, for its routes to Ethereum, Base, BSC and Solana. Robinhood Chain has two of the external verifiers, so a route with Robinhood Chain at either end uses the verifiers both chains have: Pangea, LayerZero Labs and Nethermind, 2 of 3. Every other route has 5, 2 of 5.

| Chain | Send library | Receive library | Executor |
| --- | --- | --- | --- |
| Ethereum | 0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1 | 0xc02Ab410f0734EFa3F14628780e6e695156024C2 | 0x173272739Bd7Aa6e4e214714048a9fE699453059 |
| Base | 0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2 | 0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf | 0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4 |
| Robinhood Chain | 0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7 | 0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043 | 0x4208D6E27538189bB48E603D6123A94b8Abe0A0b |
| BSC | 0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE | 0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1 | 0x3ebD570ed38B1b3b4BC886999fcF507e9D584859 |
| Solana | 7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH | 7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH | AwrbHeCyniXaQhiJZkLhgWdUCteeWSGaSN1sTfLiY7xK |

| Chain | LayerZero endpoint | Launch factory | Pangea’s verifier |
| --- | --- | --- | --- |
| Ethereum | 0x1a44076050125825900e736c501f859c50fE728c | 0x1D583e6eA4AA7c5e167a7E69B07b83DD5B813f53 | 0x5FA03555f186e53a644405817E1BeAC894Bd6562 |
| Base | 0x1a44076050125825900e736c501f859c50fE728c | 0xba4beE425F268f7Dc0F7e5457d14320d5A64cd06 | 0x6dbFda44baB6bf0DDF3E9F88d7823eDdB48f4b25 |
| Robinhood Chain | 0x6F475642a6e85809B1c36Fa62763669b1b48DD5B | 0x8A1F3e1DB07048c007F6d9ab924494C77c0DBa65 | 0x85880e7D5315365165E97620Ba17B48A645b13F3 |
| BSC | 0x1a44076050125825900e736c501f859c50fE728c | 0xd1454764E8D87B117a23491E77cAfcCC50430256 | 0xF61Ed4347c4D02522e96657a606f49E8381B3dCA |
| Solana | ULN 7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH | Splitter program Hb5uTppRbNxc3RjVRqTWqfdU3E3GiZyGYKccxYf9tUej | 7EgbAY7663cybirqgmFHzF8q9debeePxr8ra7wKyEmNE |

| Verifier | Ethereum | Base | Robinhood Chain | BSC | Solana |
| --- | --- | --- | --- | --- | --- |
| LayerZero Labs | 0x589dEDbD617e0CBcB916A9223F4d1300c294236b | 0x9e059a54699a285714207b43B055483E78FAac25 | 0xd01ae6905d48315f7bE10C7330aeCF8360Ef5b12 | 0xfD6865c841c2d64565562fCc7e05e619A30615f0 | 4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb |
| Nethermind | 0xa59BA433ac34D2927232918Ef5B2eaAfcF130BA5 | 0xcd37CA043f8479064e10635020c65FfC005d36f6 | 0x0Ffe02DF012299A370D5dd69298A5826EAcaFdF8 | 0x31F748a368a893Bdb5aBB67ec95F232507601A73 | GPjyWr8vCotGuFubDpTxDxy9Vj1ZeEN4F2dwRmFiaGab |
| Horizen | 0x380275805876Ff19055EA900CDb2B46a94ecF20D | 0xa7b5189bcA84Cd304D8553977c7C614329750d99 | not on this chain | 0x247624e2143504730aeC22912ed41F092498bEf2 | HR9NQKK1ynW9NzgdM37dU5CBtqRHTukmbMKS7qkwSkHX |
| Canary | 0xa4fE5A5B9A846458a70Cd0748228aED3bF65c2cd | 0x554833698Ae0FB22ECC90B01222903fD62CA4B47 | not on this chain | 0xfA9bA83C102283958B997Adc8B44ED3A3CdB5dDa | 7jMeX5mzXnSSKYd8DxBDP4xMnkNFZZZm5W28FWUTbwU3 |

On Solana the same is done by Pangea’s splitter program. The program holds one route setting per destination chain, and the first transfer on a token’s route applies it to that token, once: the libraries, the executor, the verifiers in both directions, the confirmations and the gas floor. The token’s LayerZero admin and delegate on Solana is an address only that program can sign for, and the program has no instruction that changes a peer, a library or a verifier afterwards.

### Why nobody can change a route later

- On an EVM chain the factory writes the routes while it is the token’s delegate, then never calls the endpoint for that token again and has no function that could. The token’s owner, the sealed LaunchOwner, has no way to name another delegate. So no key, including Pangea’s, can change a token’s libraries, executor or verifiers.
- This matters because a delegate who could name the verifiers could name itself, attest a message nobody sent, and mint. Sealing the peers alone would not close that.
- One thing stays adjustable on purpose: the gas floor. The LaunchOwner’s admin can raise or lower it, so that a chain changing its gas costs does not break bridging for good. It accepts exactly one `lzReceive` option and nothing else, under hard caps of 1,000,000 gas and 10,000,000 in value, so it cannot add a payment to anyone or set a floor nobody can pay. On Solana the gas floor is fixed when the route is opened.
- The other side of this: if LayerZero retires a verifier a route depends on, that route keeps working only while two of its verifiers still attest, and nobody can swap one in. A paused bridge can be lived with; a token anyone could mint could not.
- On Solana the admin can change the route setting for launches still to come. A token’s route is applied with the setting in force when it launched, and the program refuses a setting edited after that, unless the admin signs the opening; once a route is open nothing changes it.

### Check it yourself

Everything above can be read from the chains, with no help from Pangea. The worked example is PTEST4, a live test launch, on Base. Its address there is `0x2dEC1F0FBe66ef78a7cec00cD1FD9c58345ED6Ea`; the other addresses are in the table at the end. These are read-only calls, with Foundry’s `cast` and any RPC endpoint for the chain.

The token's peers, owner and delegate, on Base:

```bash
TOKEN=0x2dEC1F0FBe66ef78a7cec00cD1FD9c58345ED6Ea
ENDPOINT=0x1a44076050125825900e736c501f859c50fE728c
RPC=your-base-rpc-endpoint

# its counterpart on Ethereum, BSC, Robinhood Chain and Solana
for EID in 30101 30102 30416 30168; do
  cast call $TOKEN "peers(uint32)(bytes32)" $EID --rpc-url $RPC
done

# the owner is a LaunchOwner, sealed: true
OWNER=$(cast call $TOKEN "owner()(address)" --rpc-url $RPC)
cast call $OWNER "sealed_()(bool)" --rpc-url $RPC

# the delegate, the only key that can set verifiers, is the factory that launched it
cast call $ENDPOINT "delegates(address)(address)" $TOKEN --rpc-url $RPC
```

One route's libraries, executor, verifiers and gas floor: Base to Robinhood Chain:

```bash
EID=30416
SEND_LIB=$(cast call $ENDPOINT "getSendLibrary(address,uint32)(address)" $TOKEN $EID --rpc-url $RPC)
cast call $ENDPOINT "isDefaultSendLibrary(address,uint32)(bool)" $TOKEN $EID --rpc-url $RPC
cast call $ENDPOINT "getReceiveLibrary(address,uint32)(address,bool)" $TOKEN $EID --rpc-url $RPC

# verifiers: (confirmations, required count, optional count, threshold, required, optional)
ULN=$(cast call $ENDPOINT "getConfig(address,address,uint32,uint32)(bytes)" $TOKEN $SEND_LIB $EID 2 --rpc-url $RPC)
cast decode-abi "f()((uint64,uint8,uint8,uint8,address[],address[]))" $ULN

# executor: (max message size, executor)
EXE=$(cast call $ENDPOINT "getConfig(address,address,uint32,uint32)(bytes)" $TOKEN $SEND_LIB $EID 1 --rpc-url $RPC)
cast decode-abi "f()((uint32,address))" $EXE

# the gas floor every send carries
cast call $TOKEN "enforcedOptions(uint32,uint16)(bytes)" $EID 1 --rpc-url $RPC
```

What those return for this token, read on 19 October 2026:

| Read | Answer | What it means |
| --- | --- | --- |
| `peers(30416)` | `0x00000000000000000000000068906d8b2a22d329b853ec650fa6a29fab6056ea` | The token on Robinhood Chain, left-padded to 32 bytes. |
| `peers(30168)` | `0xbad1e830d4a3bba670d642dd253151f5564074eb91e9197e0216ec274e91df6e` | Its OFT store on Solana, `DaGUXY1qixx3Wsp7KFb7L6UtXV6QHCRXtaXtx4yfLued`, as 32 bytes. |
| `sealed_()` | `true` | No peer can ever be added, changed or removed. |
| `delegates(token)` | `0x025f893Bdcd7978232C211e3A28610FC6d8B8970` | The factory that launched it, an earlier one than today’s, with no code to touch the endpoint again. |
| `isDefaultSendLibrary` | `false` | The library is pinned, not inherited. |
| `getConfig(... 2)` | `(1, 0, 3, 2, [], [3 verifiers])` | 1 confirmation, no required verifiers, 3 optional, 2 must attest. |
| `getConfig(... 1)` | `(10000, 0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4)` | Messages up to 10,000 bytes, LayerZero’s executor. |
| `enforcedOptions(30416, 1)` | `0x000301001101000000000000000000000000000186a0` | One `lzReceive` option: 0x186a0, which is 100,000 gas. |

The three optional verifiers it returns are Pangea’s on Base, `0x6dbFda44baB6bf0DDF3E9F88d7823eDdB48f4b25`, and LayerZero Labs’ and Nethermind’s there. Toward Solana the same read returns 5 verifiers and an executor cap of 200 bytes: this token was launched before the factories raised it to 256. The gas floor toward Solana reads `0x00030100210100000000000000000000000000030d40000000000000000000000000001fa5e0`: 0x30d40 is 200,000 compute units and 0x1fa5e0 is 2,074,080 lamports.

On LayerZero Scan, look up the token’s address, or any transfer. Its transfer from Base to Robinhood Chain on 16 October 2026, `0x5860a6920fd6fe6d97f7d88104d6ce105bb43fd4a9654d7d84cdd9229e961f65`, shows all three of the route’s verifiers attesting, and the delivery five seconds after the send. Each message lists the verifiers that attested and the `lzReceive` gas it carried.

On Solana, a token’s route to a chain is open when LayerZero’s receive config account for it exists: the ULN program’s address for the seeds `"ReceiveConfig"`, the chain’s endpoint id as four big-endian bytes, and the OFT store. Its contents are the confirmations and the verifiers, in the same order as above. For PTEST4, read on 19 October 2026, the routes from Base and Robinhood Chain are open, each with 1 confirmation and 2 of its verifiers, and the routes from Ethereum and BSC are not open yet: nobody has bridged on them. [Bridging from code →](https://www.pangea.trade/app/docs#bridge-code) has a script that checks it.

| Chain | PTEST4 on that chain |
| --- | --- |
| Ethereum | 0x835e9CFB333B9E4811CA1585460442806a99d6eA |
| Base | 0x2dEC1F0FBe66ef78a7cec00cD1FD9c58345ED6Ea |
| Robinhood Chain | 0x68906D8b2A22D329b853ec650Fa6A29fAb6056Ea |
| BSC | 0x90Ba4Df685A2D33c12C40F03808F290519E7F6EA |
| Solana | Mint DdJ6R9TSKdNYMZhdgATANT98BJNgScuU58baQoCfZ6ea, OFT store DaGUXY1qixx3Wsp7KFb7L6UtXV6QHCRXtaXtx4yfLued |

> **Note:** Pangea’s own checks do the same against every factory before a launch: each route’s two ends must agree, and every verifier a factory names must be on a list kept by hand, with the operator’s name. The addresses on this page are those.

## Relayers

A relayer pays the recipient on the destination chain within seconds, out of its own stock of the token, and is paid back, plus its fee, when the bridged tokens arrive over the standard path a few seconds later. Nobody has to trust it: the recipient, the amount and the fee are fixed by the order, and a relayer that pays anything else is simply never repaid. If no relayer fills an order, the transfer arrives the standard way, and the fee no relayer earned goes to the recipient.

There is one fast bridge per chain, shared by every token launched on Pangea. A new token can use it the moment its launch lands: nothing is deployed for it. An order names its launch, never a token address, and the bridge reads the token itself from Pangea’s own factories, so a relayer is only ever repaid in, and a recipient only ever paid in, that launch’s own token on that chain.

> **Note:** The fast bridges on Ethereum, Base, Robinhood Chain and BSC are deployed, at the addresses listed at the end of this section. Orders out of Solana are posted by Pangea’s fast-bridge program, in the same format. Into Solana the fast lane needs a token that allows a 232-byte message, which every launch from the current factories does.

### What a transfer costs, and who is paid

- **The token’s fee.** The token keeps 0.2% of every transfer between chains, on either lane. It goes to the platform.
- **The fast lane’s fee.** On the fast lane the fast bridge keeps 0.2% first, also for the platform, and the token’s fee is then taken from what is left. The bridge’s admin can change it, per launch or for all, but never above 1%.
- **The relayer’s fee.** This is a price, not a platform fee. Relayers publish what they charge and the app takes the lowest. The bridge refuses any order that would pay a relayer more than 10% of what arrives, or the lower cap its admin sets.
- **Your limit.** You set a slippage, 0.5% unless you change it and 10% at most. If the best relayer price is above it, no fast transfer is offered, and the bridge refuses an order that would pay the recipient less.

One transfer of 1,000 tokens, three ways, with a relayer charging 0.1% as the example price:

| Who gets | Standard | Fast, filled | Fast, unfilled |
| --- | --- | --- | --- |
| Platform | 2 | 3.996 | 3.996 |
| Relayer | 0 | 0.996004 | 0 |
| Recipient | 998 | 995.007996 | 996.004 |
| Arrives in | 4 to 16 seconds | seconds | 4 to 16 seconds |

On the fast lane the fast bridge keeps 2 tokens and the token keeps 1.996, so 996.004 are on their way. The relayer pays the recipient 995.007996 at once and receives the 996.004 when they arrive, keeping 0.996004. Both platform fees are taken on the chain the transfer leaves, when it is sent, so a fast transfer that nobody fills has still paid them.

### Becoming a relayer

Anyone can be a relayer. There is nothing to apply for and nothing to stake: you publish a price, watch for orders and fill the ones you want. Filling is never an obligation, and leaving an order unfilled takes nothing from anyone. It does count against you if the order was posted at your published price, as described under benching below.

What follows is the whole protocol, two HTTP calls and a handful of contract calls, and any program that follows it is a relayer. The HTTP calls are for the price board only: watching and filling work entirely on chain.

### 1. What you need

- **The token, on every chain you deliver to.** Fills are paid from your own wallet. The fast bridge holds no stock of its own.
- **An approval.** On each of those chains, approve that chain’s fast bridge to move your tokens: `approve(fastBridge, amount)` on the token. Without it your prices are not taken and a fill reverts.
- **Gas.** A fill is a transaction on the destination chain, paid in its native asset: ETH on Ethereum, Base and Robinhood Chain, BNB on BSC.
- **An RPC endpoint for each chain.** You read `OrderPosted` logs on the chains orders leave and send fills on the chains they go to, so the endpoint must serve `eth_getLogs`. A WebSocket endpoint makes you faster: subscribed to the fast bridge’s logs it tells you about an order the moment it is posted.
- **One key.** The address that signs your prices is the address the app checks for tokens and approval, so sign with the wallet you fill from.

Check a bridge before you approve it. `tokenOf(launchId)` returns the token it moves for a launch, read from Pangea’s factories (`isFactory(factory)` says which it accepts), and `remoteBridge(eid)` its counterpart on another chain.

### 2. Publish your price

You send a signed price sheet to the price board. The board is public: read it to see the prices you are competing with, the ceiling, and who is benched. A route is a pair of chains on one shared bridge, so one price covers every token on that route; the app only takes it for a transfer when you hold that token on the destination.

- Publish, POST: `https://www.pangea.trade/api/bridge/relayer-quotes`
- Read, GET: `https://www.pangea.trade/api/bridge/relayer-quotes`

The body you POST:

```json
{
  "sheet": {
    "v": 1,
    "relayer": "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "issuedAt": 1760000000,
    "expiresAt": 1760000120,
    "routes": [
      {
        "fromEid": 30184,
        "toEid": 30102,
        "bridge": "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "feeBps": 10,
        "minFee": "1000000",
        "maxAmount": "50000000000000"
      },
      {
        "fromEid": 30101,
        "toEid": 30102,
        "bridge": "0xcccccccccccccccccccccccccccccccccccccccc",
        "feeBps": 10,
        "minFee": "1000000",
        "maxAmount": "50000000000000"
      }
    ]
  },
  "signature": "0x<65-byte signature, 130 hex characters>"
}
```

| Field | What it is |
| --- | --- |
| `v` | Always 1. |
| `relayer` | Your address. The signature must be this address’s. |
| `issuedAt`, `expiresAt` | Unix seconds. A sheet may live at most 300 seconds, and its issue time may be at most 120 seconds ahead of the server’s clock. |
| `routes` | One to 64 routes. The same route may not appear twice. |
| `fromEid`, `toEid` | The LayerZero endpoint ids of the chain an order leaves and the chain you deliver on. |
| `bridge` | The fast bridge on the chain the order leaves. Not the one you fill on. |
| `feeBps` | Your price in basis points of what arrives, a whole number from 0 to the board’s ceiling. The ceiling is 1000, which is 10%, unless the board reports another. |
| `minFee` | The least you charge whatever the size, in base units, as a decimal string. Gas does not shrink with the amount. |
| `maxAmount` | The most you will front on that route, in base units, as a decimal string above zero. |
| `solana` | Optional, and needed for any route that delivers to Solana: your Solana address. The body then also carries `solanaSignature`, your Solana key’s Ed25519 signature over the same text, in base58 or base64. On a route from Solana, `bridge` is 32 bytes, written as 0x and 64 hex digits. |

The signature is over the text below, signed as an Ethereum personal message: EIP-191, which wallets offer as `personal_sign`. The lines are joined by a single newline with none at the end, addresses are in lower case, and the routes are sorted by `fromEid`, then `toEid`, then `bridge`, whatever order the JSON lists them in. This is the text for the body above:

The text you sign:

```text
Pangea relayer quotes v1
relayer: 0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
issued: 1760000000
expires: 1760000120
30101>30102 0xcccccccccccccccccccccccccccccccccccccccc 10bps min 1000000 max 50000000000000
30184>30102 0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 10bps min 1000000 max 50000000000000
```

Your fee for a transfer is `feeBps` of what arrives, rounded up, and never less than `minFee`. If that comes to more than the ceiling allows on that transfer, or the transfer is larger than `maxAmount`, you have no price for it.

A sheet stops counting at its expiry, so publish again before then. Every 30 seconds is plenty, and the board accepts 120 publishes per caller in ten minutes. Each new sheet replaces your last one and must carry a later `issuedAt`. Stop publishing and you are off the board when your last sheet expires.

| Answer | What it means |
| --- | --- |
| `200` | Kept. The body is `{ ok, relayer, expiresAt }`. |
| `400` | The sheet is malformed, expired or over the ceiling. The reasons are in `error`. |
| `401` | The signature is not this relayer’s over this sheet. |
| `403` | This address may not publish on this deployment. The board is open to any address unless the deployment lists who may publish or has turned an address away. |
| `409` | A sheet issued at the same time or later is already held for this relayer. |
| `413` | The body is larger than 32,768 bytes. |
| `429` | Too many requests. The message says how many seconds to wait. |
| `424` | The board cannot be read or written right now. |

What a GET returns:

```json
{
  "now": 1760000030,
  "maxFeeBps": 1000,
  "sheets": [
    {
      "sheet": "<a sheet, as published>",
      "signature": "0x<its signature>"
    }
  ],
  "benched": [
    {
      "relayer": "0x<address>",
      "until": 1760003600
    }
  ]
}
```

Reading is limited to 300 requests per caller in ten minutes. `maxFeeBps` is the ceiling in force, `sheets` every live sheet with its signature, and `benched` the relayers whose prices are not being taken, with the unix second each bench ends.

**How the app chooses.** For each transfer it works out every live sheet’s price and looks at the 4 lowest, lowest first. Between equal prices the sheet with the earlier `issuedAt` comes first. It takes the first whose relayer holds what the fill pays, in that launch’s token on the destination chain, and has approved the fast bridge there for it. Benched relayers are left out. If that price would leave the recipient less than the sender’s slippage allows, no fast transfer is offered. When no relayer quotes a transfer at all, the fast lane is simply not shown.

### 3. Watch for orders

Every fast transfer is an order, posted on the fast bridge of the chain it leaves. That bridge emits one event for it:

On the source chain’s fast bridge:

```solidity
event OrderPosted(
    bytes32 indexed orderId,
    bytes32 indexed launchId,
    uint32 dstEid,
    bytes32 indexed sender,
    uint64 senderNonce,
    bytes32 to,
    uint256 amount,
    uint256 relayerFee,
    uint64 lzNonce
);
```

- topic0: `0x7e20a23f868a6866f04de222fcf771b4747be0d748f6c3af50083f019a56c231`

| Field | What it is |
| --- | --- |
| `orderId` | `keccak256(abi.encode(uint32 srcEid, bytes32 srcBridge, bytes32 launchId, bytes32 sender, uint64 senderNonce, uint32 dstEid, bytes32 to, uint256 amount, uint256 relayerFee))`. |
| `launchId` | The launch the order is for. The token on either chain is `tokenOf(launchId)` on that chain’s bridge. |
| `dstEid` | The endpoint id of the chain to deliver on. |
| `sender`, `senderNonce` | Who posted the order, as 32 bytes, and that sender’s own counter on that bridge. |
| `to` | The recipient, as 32 bytes: an EVM address left-padded with zeros, or a Solana owner’s public key. An EVM destination refuses a recipient whose top 12 bytes are not zero. |
| `amount` | What arrives on the destination, in base units. Not what the sender parted with: both platform fees are already out of it. |
| `relayerFee` | What the filler keeps, out of `amount`, in base units. |
| `lzNonce` | The LayerZero nonce of the message carrying the order. A fill has to name it. |

### Orders from Solana

An order from Solana is posted by Pangea’s fast-bridge program (`post_order`) and carried by the sender’s own OFT send, in the same Solana transaction. On an EVM destination, for source endpoint `30168`, the order’s `srcBridge` is the sender’s own key (the OFT’s `composeFrom`), and the sender in the order is always taken to be that key: nobody can post in another’s name.

**Verify before you fill.** Skipping `post_order` only skips the fast lane’s fee, so an EVM-side check cannot tell you the order was paid for. Before filling an order from Solana, read the Solana transaction yourself and fill only when it holds both the `post_order` instruction and the OFT send it checks, with the same launch, recipient, amount and fee, and the transaction is finalized. A fill on anything less is a bet nobody else is making for you.

### 4. Fill

A fill is one call, made on the chain the order is going to:

On the destination chain’s fast bridge:

```solidity
function fillOrder(
    uint32 srcEid,
    bytes32 srcBridge,
    bytes32 launchId,
    bytes32 sender,
    uint64 senderNonce_,
    address to,
    uint256 amount,
    uint256 relayerFee,
    uint64 lzNonce
) external returns (bytes32 id);
```

`srcEid` is the endpoint id of the chain you saw the event on, and `srcBridge` the bridge that emitted it, as 32 bytes (the address left-padded with zeros): the destination accepts only a bridge it has named for that chain, else `NotARemoteBridge`. From Solana, `srcBridge` is the sender’s own key instead (see below). The other arguments are the event’s own fields, with `to` as the 20-byte address it pads: `senderNonce_` is its `senderNonce`. In the same transaction the bridge moves `amount - relayerFee` of `tokenOf(launchId)` from your wallet to the recipient and records you as owed `amount`.

Every one of those fields is hashed into the order’s id. Change the source bridge, the launch, the amount, the recipient or the fee and you have filled an order nobody posted: you have paid someone, and nothing will ever repay you.

Check before you send, on the destination bridge. Each check is a read and saves the gas of a fill that would revert:

- `filledBy(orderId)` is the zero address: nobody has filled it yet.
- `notYetArrived(token, srcEid, lzNonce)`, with `token` the launch’s token on this chain, is true: the order’s own message has not reached this chain. Once it has, there is nothing left to deliver early and a fill is refused.
- You hold `amount - relayerFee` of the token there and your approval covers it.
- `relayerFee` is at least your own price for that amount. You are never obliged to fill.

| Revert | What it means |
| --- | --- |
| `NoRemote(srcEid)` | This bridge has no counterpart on that source chain. |
| `NotARemoteBridge()` | The `srcBridge` you named is not a bridge this chain has ever named for that source chain. |
| `UnknownLaunch(launchId)` | None of Pangea’s factories this bridge accepts knows that launch. |
| `AlreadyFilled()` | Somebody filled it first. One fill per order. |
| `AlreadySettled()` | The order has already been paid out. |
| `FeeExceedsAmount()` | The fee is not less than the amount. No real order looks like this. |
| `TooLateToFill()` | The message you named has already reached this chain. |
| A token transfer error | Your balance or your approval is too small. |

A fill that goes through emits `OrderFilled(orderId, relayer, to, paid)`.

### 5. Get repaid

You are repaid on the chain you filled on, in the token, when the order’s own message arrives and the bridge settles it: seconds after the order was posted. The bridge checks that the message came from the launch’s own token and the source chain’s own fast bridge before it pays anyone. `settlement(orderId)` on the destination bridge says how the order settled:

| Value | What happened |
| --- | --- |
| `0` | Not settled yet. |
| `1` | Nobody filled it. The recipient was paid everything that arrived, the relayer’s fee included. Event: `SettledSlow`. |
| `2` | A fill earned the fee. The filler was sent the whole `amount`. Event: `RelayerPaid`. |
| `3` | A fill did not earn the fee. The filler was sent back `amount - relayerFee`, what it paid out, and the fee went to the recipient. Events: `RelayerPaid` and `FeeReturned`. |
| `4` | Held. The recipient could not be paid on this chain (it is not an address here), so nobody could fill it and the bridge keeps it for the sender. Event: `Refundable(orderId, guid, srcEid, sender, amount)`. It is never a strike against a relayer. |

The same order can only arrive twice from Solana, when a sender reuses a nonce. The second arrival is paid to the recipient (`ArrivedAgain` and `SettledSlow`) and the first settlement stands: each arrival brought its own tokens, so none is refused.

### Sending a held order back

Anyone may send a held amount back to its sender on the chain it came from: `quoteRefund(guid)` gives LayerZero’s fee for the message back, and `refund(guid)`, paying that fee, sends it (`Refunded`). `refunds(guid)` shows what is held. The bridge screen offers this button itself when a transfer it sent is held.

**What earns the fee.** The fee pays for delivering early with your own tokens, so a fill earns it only when both of these are true:

- The `lzNonce` your fill named is the nonce of the message that settles the order.
- The settlement lands in a later block than your fill. A fill settled in its own block is repaid what it paid out and earns nothing.

`filledBy(orderId)` and `filledLzNonce(orderId)` return the filler and the nonce it named. So fill as soon as you are willing to.

### Ceilings

| Limit | What it bounds |
| --- | --- |
| `MAX_FAST_FEE_BPS` | The fast lane’s own fee can never be set above 100 basis points, 1%. Read the fees in force for a launch with `feesOf(launchId)`. |
| `maxRelayerFeeBps` | No order may pay a relayer more than this share of what arrives: 1000 basis points, 10%, unless the bridge’s admin sets a lower one, for all launches or one. An order above it is refused with `RelayerFeeTooHigh`. |
| `maxFeeBps` | The price board’s own ceiling on a published price, reported by every read of the board. |
| `minReceived` | The sender’s floor, written into the order. An order that would pay the recipient less is refused with `ReceivesTooLittle` before any token moves. |

### What gets you benched

When the app sends an order at your published price, it remembers that the price was yours. It looks at the order again from 2 minutes after it was posted and judges it once it has settled, or after 30 minutes if it still has not. An order nobody filled, or one you filled without earning the fee, is a strike against you.

After 3 strikes within 60 minutes your prices are not taken for 60 minutes, however low they are. Those are the defaults, and a deployment can set its own. Your sheets stay on the board, and `benched` in the board’s answer says until when.

- It is not a strike if any relayer’s fill earned the fee: the sender was served.
- It is not a strike if another address filled the order without earning the fee, because that fill shut you out.
- It is not a strike if you no longer held enough on the destination to pay it when it was judged.
- A fill does not clear earlier strikes. Each one stops counting 60 minutes after it was given.

### The risks you take

Relaying is a business you run with your own money. Nothing here promises that it pays.

- **A reorg on the source chain.** Between your fill and your repayment, the fill is unsecured. If the source chain reorganises and the order’s transaction is gone, the message never arrives and nothing repays you. How many blocks you wait before filling is your own trade between speed and that risk. If a reorg keeps the order but moves its message to a different LayerZero nonce, you are repaid what you paid out and earn nothing.
- **Filling before the order is in a block.** Acting on pending transactions is the fastest way to fill and the riskiest: a transaction that has not been mined is likelier to vanish than a confirmed one.
- **Inventory.** You hold the token on every chain you serve, and its price moves while you hold it. Your fee is paid in the token too.
- **Gas.** A fill that reverts still costs gas, and gas is paid in the chain’s native asset while your fee is paid in the token. A price that does not cover gas loses money slowly.
- **Time.** Your tokens are out until the order settles. Settlement is run by LayerZero’s executor; if it stalls, anyone may run it, and until someone does you wait.
- **Being shut out.** Only one fill per order is accepted. Another address can fill ahead of you, even with a nonce that earns it nothing, and that order is then closed to you.

### Contract addresses

One fast bridge per chain, shared by every launch: Ethereum, Base, Robinhood Chain and BSC (deployed 16 October 2026), then Solana. The full interface is the bridge’s ABI and `INTERFACE.md`. These are the addresses, and the endpoint ids a price sheet and a fill use:

| Chain | Fast bridge | Endpoint id | Chain id |
| --- | --- | --- | --- |
| Ethereum | 0xE6feCfb8520Ce9417beB569ef95d6b8304802897 | 30101 | 1 |
| Base | 0x51D658a71AEa38f123d4c73e42703Fb9C949900A | 30184 | 8453 |
| Robinhood Chain | 0xcC87BeDb95E4ac0cf20039442A964ADB390c02c4 | 30416 | 4663 |
| BSC | 0xd7C10226327451ac768512aC4A5035a9477f862a | 30102 | 56 |

> **Note:** [How a standard transfer works →](https://www.pangea.trade/app/docs#bridging)

## For integrators and AI agents

Pangea is a token launchpad. Each launch deploys its token as five contracts, a LayerZero OFT on Ethereum, Base, Robinhood Chain and BSC and a mint on Solana, and opens one liquidity pool per chain at the same US dollar price. This section is the reference for reading and using it from code.

These docs are also published as Markdown, generated from the same source as this page:

- Index for language models: `https://www.pangea.trade/llms.txt`
- Everything in one file: `https://www.pangea.trade/llms-full.txt`
- These docs as Markdown: `https://www.pangea.trade/app/docs.md`

Each section is also on its own, at `/app/docs/<section id>.md`. This section is `/app/docs/integrators.md`.

### The five chains

| Chain | Name in the API | Chain id | Endpoint id |
| --- | --- | --- | --- |
| Ethereum | ethereum | 1 | 30101 |
| Base | base | 8453 | 30184 |
| Robinhood Chain | robinhood | 4663 | 30416 |
| BSC | bsc | 56 | 30102 |
| Solana | solana | none | 30168 |

The endpoint id is LayerZero’s, and it is how the token names a chain. Solana has no EVM chain id.

### Units

- Every token has 9 decimals, on all five chains. An amount in base units is a whole number at 9 decimals: one token is 1,000,000,000 base units.
- A transfer between chains crosses at 6 decimals. It is rounded down to a multiple of 1,000 base units, and the odd base units stay in the sender’s wallet.
- Fees are in basis points. One basis point is 0.01%.
- The standard supply is 5 billion tokens, 1 billion in each chain’s liquidity pool at launch. On an EVM chain `totalSupply()` starts at that chain’s 1 billion and is a reported figure that moves no balance, so every chain shows a market cap on the same basis ([LayerZero routes](https://www.pangea.trade/app/docs#routes) says how it is reported); `launchTotal()` is the sum across the five chains, and `localSupply()` what is on that chain now. On Solana the mint’s supply is what is on Solana now: tokens bridged in are minted there and tokens bridged out are burned. [The market cap situation](https://www.pangea.trade/app/docs#market-cap) explains why terminals show different market caps.
- Times in the API are unix seconds unless a field says otherwise.

### Rules that surprise people

- Every launch is paid for by the person launching it, once, on the chain they pick, in that chain’s native asset. There are no free launches.
- Every launch opens at a market cap of 3,000 on each chain: $0.000003 a token, the same price on every chain. Nobody chooses the opening price.
- A token has five addresses, one per chain, all different, and every one of them ends in `6ea`: the last three hex digits on the EVM chains, the last three characters of the mint on Solana. Read the addresses from the API. Do not assume two chains share one.
- A transfer between chains costs 0.2% of the amount, kept by the token for the platform, plus LayerZero’s message fee in the source chain’s native asset. It is attested after 1 confirmation on its source chain and typically arrives in 4 to 16 seconds.
- Each launch sets its trading fee once, between 0.3% and 5%. No contract function or program instruction changes it afterwards.
- The first transfer on a Solana route nobody has used yet also pays a one-time setup fee for that route. Every later transfer on that route does not. Any wallet can pay it, a smart-contract wallet too, except a Safe: its transactions wait for its owners, so a Safe bridges once the route is set up. Pay it from your own wallet, as the bridge page does: a payment sent through another contract (a multicall or a router) is refunded to that contract, not to you, and one made by delegatecall is not seen at all.
- On the four EVM chains nothing can mint more of a token. On Solana the mint authority is the token's store in Pangea's deployment of LayerZero's OFT program, which mints exactly what was burned on another chain. Bridging burns on one chain exactly what it mints on another.
- Prices on the five chains are separate markets. They are held together by arbitrage, not by a mechanism, and can differ.

### What you can and cannot do from code

- **You can read** every launch’s pools, prices, reserves and addresses, its trades and volume, recent bridge transfers and its metadata, over the HTTP endpoints below.
- **You can trade** directly against the pools: Uniswap v4 on the EVM chains, Meteora DAMM v2 on Solana. The API gives each pool’s id and venue.
- **You can bridge** by calling the token itself, or price a transfer over HTTP and sign the transaction it returns.
- **You cannot launch through an API.** A launch needs a price snapshot signed by the platform’s signer, and the endpoint that prepares one accepts requests from the Pangea site only. Launches are made on the launch page.
- **There are no API keys and no accounts.** Every endpoint here is public. Where one is limited, the limit is per caller, by IP address.
- **Do not crawl the API.** Each read costs reads on five chains. Call an endpoint when you need its answer; `robots.txt` asks crawlers to stay out of `/api/`.

### HTTP endpoints

All are under `https://www.pangea.trade/api`. They take and return JSON and need no key. Over a limit the answer is `429` with a message saying how many seconds to wait. An error is `{ "error": "..." }`. A value the chains could not give is `null` rather than a guess, so check for it.

| Endpoint | What it returns | Limit per caller |
| --- | --- | --- |
| `GET /pools` | Every launch, with its pool on each chain: addresses, price, reserves, supply. | None. Every caller is served one shared reading: re-read as soon as a trade moves a pool while the live page is open, and at least every 60 seconds unless the deployment sets another interval. |
| `GET /history` | Trades, volume in US dollars and price candles. | 30 uncached reads in ten minutes. An answer is reused for 45 seconds. |
| `GET /bridge/activity` | Recent transfers between chains. | None. |
| `GET /token/meta` | A token’s own metadata document: description, image, links. | None. |
| `POST /bridge/quote` | A transfer between chains, priced, with the transaction to sign. | 120 in ten minutes and 15 in any one minute. |

> **Note:** Every public endpoint, including the ones not described here, is in [API reference →](https://www.pangea.trade/app/docs#api)

- Pools, GET: `https://www.pangea.trade/api/pools`

No parameters. The answer is `{ live, readAt, rates, blockers, launches }`. When nothing has launched, `live` is false and `launches` is empty. Each launch carries:

| Field | What it is |
| --- | --- |
| `slug`, `name`, `symbol` | The launch’s name in every other endpoint (`slug`), and its name and symbol. |
| `pools[]` | One entry per chain, including chains that could not be read. |
| `pools[].chain` | The chain’s name in the API. |
| `pools[].token` | The token’s address on that chain. This is where a token’s five addresses are published. |
| `pools[].poolId`, `pools[].venue` | The pool’s id and the venue it is on. |
| `pools[].price`, `pools[].priceUsd` | Quote asset per token, and the same in US dollars. `quoteSymbol` names the quote asset. |
| `pools[].reserves`, `pools[].tokenReserves` | What the pool holds: quote asset, and whole tokens. |
| `pools[].localSupply` | Whole tokens on that chain now. |
| `pools[].error` | Why that chain has no reading, when it has none. |
| `launchTotal`, `launchTotalRaw` | The token’s total supply in whole tokens, and in base units as a string. For a perChain launch, 1B on each chain it is on. |
| `supplyModel`, `capSupply` | `"perChain"` for a new launch (1B per chain · 5B across 5 chains), `"global"` for one before. Market cap is the global one, a price times `capSupply`, which is `launchTotal`: the whole supply across all five chains (5B for perChain). |
| `cheapest`, `spreadUsd` | The chain with the lowest US dollar price, and the gap between the highest and lowest price as a fraction. |
| `sold`, `burnt` | Whole tokens that have left the pools, and whole tokens sent to the dead address across chains. |
| `metadataURI` | The token’s metadata document, as the contract names it. |

- History, GET: `https://www.pangea.trade/api/history`

Query: `launch`, a slug, or leave it out for every launch; `hours`, a whole number from 1 to 168, 24 unless given. The answer is `{ readAt, hours, cursor, rates, totals, launches }`. An unknown slug is a `404`. Each launch carries `volumeUsd`, `trades`, `coverage`, `chains`, `candles` and `recent`.

- `coverage` runs from 0 to 1. Below 1 the figures describe part of the window you asked for, not all of it. Show it, or check it.
- `candles` are `{ t, o, h, l, c, v }` in US dollars, one per bucket that traded, where `t` is the bucket's start. A bucket with no trade is left out, not filled with the last price.
- `recent` is the last trades, newest first: `{ id, chain, timestamp, txHash, side, tokenAmount, quoteAmount, quoteSymbol, priceUsd, valueUsd }`, where `side` is `buy` or `sell`.

- Bridge activity, GET: `https://www.pangea.trade/api/bridge/activity`

Query: `token`, a slug, optional; `hours`, 1 to 168, 24 unless given; `limit`, 1 to 100, 25 unless given. The answer is `{ recording, hours, since, uncovered, totals, cursor, transfers }`. A transfer is `{ id, guid, slug, from, to, at, amount, party, complete, tookSeconds }`.

- `recording` false means this deployment keeps no record, and the list is empty for that reason, not because nobody bridged. `reason` says why.
- `uncovered` lists the chains whose sends are not recorded. A transfer out of such a chain appears as an arrival with no send.
- `complete` false means one side is recorded: a transfer in flight, or one that failed. The feed does not guess which.

- Token metadata, GET: `https://www.pangea.trade/api/token/meta`

Query: `launch`, a slug, required. The answer is `{ uri, resolvable, name, symbol, description, image, website, twitter, telegram }`, or `{ uri, resolvable: false, reason }` when the document cannot be opened. Every field is the token author’s own claim. The name and symbol that cannot be edited are the contract’s, in the pools endpoint.

- Bridge quote, POST: `https://www.pangea.trade/api/bridge/quote`

The body you POST:

```json
{
  "slug": "<launch slug>",
  "from": "base",
  "to": "bsc",
  "amount": "1000000000000",
  "user": "0x<sender, and the recipient unless one is given>"
}
```

| Field | What it is |
| --- | --- |
| `slug` | The launch. |
| `from`, `to` | Chain names, as in the table of chains above. They must differ. |
| `amount` | Base units, as a decimal string. |
| `user` | The EVM address sending, and the recipient on an EVM chain unless one is given. |
| `solanaUser` | The Solana address, when Solana is the source or the destination. |
| `recipient` | Optional. Who receives, when it is not the sender. |

The answer is `{ symbol, from, to, amount, routes }`, where `routes` holds two routes: `canonical`, the token’s own LayerZero transfer, and `fast`, the same transfer with a fast order. A route that cannot be used says why in `unavailable`. It carries:

| Field | What it is |
| --- | --- |
| `id` | `canonical` or `fast`. The fast route’s own fields are in [API reference](https://www.pangea.trade/app/docs#api). |
| `amountOut` | What the recipient receives, in base units. |
| `nativeFee` | What it costs in the source chain’s native asset, in its smallest unit. Send it as the transaction’s value. |
| `tokenFee`, `platformFee` | Everything taken in the token, and the platform’s part of it, in base units. Both are the token’s fee. |
| `seconds` | The estimated time. |
| `call` | The transaction to sign: `{ to, data, value, chainId }`. Null when the transfer cannot be built as one contract call, as out of Solana. |
| `setupFee` | Present when this transfer opens a Solana route: the part of `nativeFee` that pays for it, once. |
| `unavailable` | Present when the route cannot be used, with the reason. |

### Bridging from code

On an EVM chain the token is a LayerZero OFT and you call it directly. Ask `quoteOFT` what a transfer debits and delivers, name the delivered amount as the minimum, ask `quoteSend` for the message fee, and send that fee as the transaction’s value. Leave `extraOptions` empty: the gas the destination needs is already enforced by the token.

On the token, on the chain the transfer leaves:

```solidity
struct SendParam {
    uint32 dstEid;       // the destination's endpoint id
    bytes32 to;          // the recipient, left-padded to 32 bytes
    uint256 amountLD;    // base units
    uint256 minAmountLD; // the least that may arrive
    bytes extraOptions;
    bytes composeMsg;
    bytes oftCmd;
}
struct MessagingFee { uint256 nativeFee; uint256 lzTokenFee; }
struct OFTReceipt { uint256 amountSentLD; uint256 amountReceivedLD; }

function quoteOFT(SendParam calldata _sendParam)
    external view returns (OFTLimit memory, OFTFeeDetail[] memory oftFeeDetails, OFTReceipt memory);
function quoteSend(SendParam calldata _sendParam, bool _payInLzToken)
    external view returns (MessagingFee memory);
function send(SendParam calldata _sendParam, MessagingFee calldata _fee, address _refundAddress)
    external payable returns (MessagingReceipt memory, OFTReceipt memory);

event OFTSent(bytes32 indexed guid, uint32 dstEid, address indexed fromAddress, uint256 amountSentLD, uint256 amountReceivedLD);
event OFTReceived(bytes32 indexed guid, uint32 srcEid, address indexed toAddress, uint256 amountReceivedLD);

error AmountTooSmallToBridge(uint256 amount);
error SlippageExceeded(uint256 amountLD, uint256 minAmountLD);
```

| Read on the token | What it returns |
| --- | --- |
| `BRIDGE_FEE_BPS()` | The token’s bridge fee in basis points: 20. |
| `bridgeFeeTo()` | Where that fee goes on this chain. |
| `peers(uint32 eid)` | The token’s counterpart on another chain. Zero means there is no route to it. |
| `decimals()` | 9, on every chain. |
| `totalSupply()` | The reported supply: this chain’s 1B slice, or, for a launch from the current factories, the token’s supply on Solana as the chain’s SupplyReporter mirrors it, never below `localSupply()` or above `launchTotal()`. |
| `launchTotal()`, `launchSlice()` | The whole launch’s supply across every chain, and this chain’s slice of it. |
| `supplyReporter()` | The only address that may report this token’s supply. Launches made before reporting existed have no such function. |
| `localSupply()` | What is on this chain now. |
| `metadataURI()` | The token’s metadata document. |

On Solana the token is an account of LayerZero’s OFT program, `SNyKyiZYU4R54SF9sYLmjCaCUsa1sC6QouNAj3x3Zzf`, and a transfer out of Solana is an instruction to that program, not a contract call. Into Solana the recipient is the wallet that will own the tokens.

### Launches on chain

On each EVM chain the launch factory emits one event per launch. The current factories’ addresses are in [LayerZero routes](https://www.pangea.trade/app/docs#routes).

On each EVM chain’s launch factory:

```solidity
event Launched(
    bytes32 indexed launchId,
    address indexed token,
    address splitter,
    address launchOwner,
    address locker,
    uint128 liquidity,
    uint256 dust
);
```

### Addresses

- A token’s five addresses are in the pools endpoint, at `launches[].pools[].token`, and on the token’s page.
- The current launch factories, and each chain’s LayerZero endpoint, libraries, executor and verifiers, are in [LayerZero routes](https://www.pangea.trade/app/docs#routes).

## Bridging from code

On the four EVM chains you call the token itself: it is a LayerZero OFT. Out of Solana the send is an instruction to LayerZero’s OFT program, and the simplest way to build it is to ask Pangea’s API for the unsigned transaction. The signatures and events are in [For integrators](https://www.pangea.trade/app/docs#integrators); the routes they travel are in [LayerZero routes](https://www.pangea.trade/app/docs#routes).

- `amountLD` is in base units, nine decimals. The token keeps 0.2% of it, rounded down, and what crosses is rounded down to six decimals. `quoteOFT` returns both figures, exactly.
- `minAmountLD` is the least that may arrive, or the send reverts with `SlippageExceeded`. The fee is fixed, so the received amount from `quoteOFT` can be used as it is.
- `extraOptions` stays empty. The token adds its own gas floor to every send; anything you add is added on top and paid for by you.
- `to` is 32 bytes: an EVM address left-padded with zeros, or a Solana wallet’s public key. Never a Solana token account.
- `quoteSend` gives LayerZero’s fee for that exact `SendParam`. Send it as the transaction’s value, with `payInLzToken` false. Any excess goes back to the refund address.
- No approval is needed for a standard send: the token burns from your own balance.

### EVM to EVM, with viem

Quote a transfer of 1,000 PTEST4 from Base to BSC:

```ts
import { createPublicClient, http, parseAbi, pad } from "viem";
import { base } from "viem/chains";

const OFT = parseAbi([
  "struct SendParam { uint32 dstEid; bytes32 to; uint256 amountLD; uint256 minAmountLD; bytes extraOptions; bytes composeMsg; bytes oftCmd; }",
  "struct MessagingFee { uint256 nativeFee; uint256 lzTokenFee; }",
  "struct OFTLimit { uint256 minAmountLD; uint256 maxAmountLD; }",
  "struct OFTFeeDetail { int256 feeAmountLD; string description; }",
  "struct OFTReceipt { uint256 amountSentLD; uint256 amountReceivedLD; }",
  "struct MessagingReceipt { bytes32 guid; uint64 nonce; MessagingFee fee; }",
  "function quoteOFT(SendParam _sendParam) view returns (OFTLimit, OFTFeeDetail[], OFTReceipt)",
  "function quoteSend(SendParam _sendParam, bool _payInLzToken) view returns (MessagingFee)",
  "function send(SendParam _sendParam, MessagingFee _fee, address _refundAddress) payable returns (MessagingReceipt, OFTReceipt)",
]);

const TOKEN = "0x2dEC1F0FBe66ef78a7cec00cD1FD9c58345ED6Ea"; // PTEST4 on Base
const BSC = 30102;
const recipient = "0x000000000000000000000000000000000000bEEF"; // who receives on BSC
const amount = 1_000n * 10n ** 9n; // 1,000 tokens: nine decimals

const client = createPublicClient({ chain: base, transport: http(process.env.BASE_RPC) });

// What the transfer debits and what arrives: 0.2% stays with the token, the rest crosses.
const sendParam = {
  dstEid: BSC,
  to: pad(recipient), // an EVM address, left-padded to 32 bytes
  amountLD: amount,
  minAmountLD: 0n,
  extraOptions: "0x", // empty: the token already enforces the gas the destination needs
  composeMsg: "0x",
  oftCmd: "0x",
};
const [, , receipt] = await client.readContract({ address: TOKEN, abi: OFT, functionName: "quoteOFT", args: [sendParam] });
sendParam.minAmountLD = receipt.amountReceivedLD; // the least that may arrive

// LayerZero's fee for this exact transfer, in ETH.
const fee = await client.readContract({ address: TOKEN, abi: OFT, functionName: "quoteSend", args: [sendParam, false] });
console.log({ sent: receipt.amountSentLD, arrives: receipt.amountReceivedLD, nativeFee: fee.nativeFee });

// The send, from the holder's wallet, paying the fee as the value:
// await wallet.writeContract({ address: TOKEN, abi: OFT, functionName: "send",
//   args: [sendParam, fee, account.address], value: fee.nativeFee });
```

Run against Base on 19 October 2026, it printed `sent: 1000000000000n, arrives: 998000000000n, nativeFee: 109546395808232n`: 1,000 tokens sent, 998 arrive, and about 0.00011 ETH for LayerZero.

### The same, with cast

quoteOFT and quoteSend from the command line:

```bash
TOKEN=0x2dEC1F0FBe66ef78a7cec00cD1FD9c58345ED6Ea
RPC=your-base-rpc-endpoint
TO=$(cast pad --len 32 0x000000000000000000000000000000000000bEEF)

# what is sent and what arrives: (limit), (fee details), (sent, received)
cast call $TOKEN "quoteOFT((uint32,bytes32,uint256,uint256,bytes,bytes,bytes))((uint256,uint256),(int256,string)[],(uint256,uint256))" \
  "(30102,$TO,1000000000000,0,0x,0x,0x)" --rpc-url $RPC

# LayerZero's fee in wei: (nativeFee, lzTokenFee)
cast call $TOKEN "quoteSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)((uint256,uint256))" \
  "(30102,$TO,1000000000000,998000000000,0x,0x,0x)" false --rpc-url $RPC
```

> **Note:** Pad an address with `cast pad`, which pads on the left. `cast to-bytes32` pads on the right, and a send to that would go to a different address.

### EVM to Solana

The same send, with `dstEid 30168` and the recipient’s Solana wallet as the 32 bytes. The tokens arrive in that wallet’s token account, created on delivery; its rent, 2,074,080 lamports, is in every transfer’s gas floor and so in `quoteSend`’s fee.

Quote a transfer from Base to Solana, and check the route is open:

```ts
import { createPublicClient, http, parseAbi, toHex } from "viem";
import { base } from "viem/chains";
import { Connection, PublicKey } from "@solana/web3.js";

const OFT = parseAbi([
  "struct SendParam { uint32 dstEid; bytes32 to; uint256 amountLD; uint256 minAmountLD; bytes extraOptions; bytes composeMsg; bytes oftCmd; }",
  "struct MessagingFee { uint256 nativeFee; uint256 lzTokenFee; }",
  "struct OFTLimit { uint256 minAmountLD; uint256 maxAmountLD; }",
  "struct OFTFeeDetail { int256 feeAmountLD; string description; }",
  "struct OFTReceipt { uint256 amountSentLD; uint256 amountReceivedLD; }",
  "function quoteOFT(SendParam _sendParam) view returns (OFTLimit, OFTFeeDetail[], OFTReceipt)",
  "function quoteSend(SendParam _sendParam, bool _payInLzToken) view returns (MessagingFee)",
  "function peers(uint32 eid) view returns (bytes32)",
]);

const TOKEN = "0x2dEC1F0FBe66ef78a7cec00cD1FD9c58345ED6Ea"; // PTEST4 on Base
const BASE_EID = 30184;
const SOLANA = 30168;
const owner = new PublicKey("<the Solana wallet that will own the tokens>");
const amount = 1_000n * 10n ** 9n;

const evm = createPublicClient({ chain: base, transport: http(process.env.BASE_RPC) });
const solana = new Connection(process.env.SOLANA_RPC, "confirmed");

// Is this token's route from Base open on Solana? It is once LayerZero's receive config exists.
const peer = await evm.readContract({ address: TOKEN, abi: OFT, functionName: "peers", args: [SOLANA] });
const store = new PublicKey(Buffer.from(peer.slice(2), "hex")); // the OFT store
const eid = Buffer.alloc(4);
eid.writeUInt32BE(BASE_EID);
const ULN = new PublicKey("7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH");
const [receiveConfig] = PublicKey.findProgramAddressSync([Buffer.from("ReceiveConfig"), eid, store.toBuffer()], ULN);
const open = (await solana.getAccountInfo(receiveConfig)) !== null;

const sendParam = {
  dstEid: SOLANA,
  to: toHex(owner.toBytes()), // the owner's public key as 32 bytes, not a token account
  amountLD: amount,
  minAmountLD: 0n,
  extraOptions: "0x", // the token adds the gas floor and the rent of the token account
  composeMsg: "0x",
  oftCmd: "0x",
};
const [, , receipt] = await evm.readContract({ address: TOKEN, abi: OFT, functionName: "quoteOFT", args: [sendParam] });
sendParam.minAmountLD = receipt.amountReceivedLD;
const fee = await evm.readContract({ address: TOKEN, abi: OFT, functionName: "quoteSend", args: [sendParam, false] });
console.log({ store: store.toBase58(), routeOpen: open, arrives: receipt.amountReceivedLD, nativeFee: fee.nativeFee });
// Then send exactly as from EVM to EVM. With routeOpen false, the transfer waits on Solana
// until the route is opened: see the route setup below.
```

If the token’s route from that chain is not open on Solana yet, a transfer sent now waits there until it is. To open it as part of your transfer, as the Bridge page does, `POST /api/bridge/quote` returns the setup payment in `routePayment`: send it first, then report it to `POST /api/bridge/route-open`, which opens the route or refunds the payment, and then send the transfer. [API reference →](https://www.pangea.trade/app/docs#api)

### Solana to EVM, with @solana/web3.js

Out of Solana the send is LayerZero’s OFT program’s own instruction, with about thirty accounts and a lookup table. `POST /api/bridge/solana-tx` builds it, unsigned, for your wallet to sign: it names the accounts, sets the minimum to what arrives, and adds the route’s opening when a route is used for the first time. You pay LayerZero’s fee and the transaction fee in SOL; the token’s 0.2% is kept in the OFT store’s escrow for the platform.

Price and build a transfer from Solana to Base, then simulate it:

```ts
import { Connection, VersionedTransaction } from "@solana/web3.js";

const API = "https://www.pangea.trade/api";
const sender = "<the Solana wallet holding the tokens>";
const recipient = "0x000000000000000000000000000000000000bEEF"; // who receives on Base
const amount = (1_000n * 10n ** 9n).toString(); // 1,000 tokens, in base units

const post = (path, body) =>
  fetch(API + path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) })
    .then(async (r) => ({ status: r.status, body: await r.json() }));

// The price: what arrives on Base, and LayerZero's fee in lamports.
const quote = await post("/bridge/quote", { slug: "ptest4", from: "solana", to: "base", amount, user: recipient, solanaUser: sender });
const standard = quote.body.routes?.find((r) => r.id === "canonical");
if (!standard || standard.unavailable) throw new Error(standard?.unavailable ?? quote.body.error);
console.log({ arrives: standard.amountOut, nativeFee: standard.nativeFee, setupFee: standard.setupFee ?? null });

// The unsigned transaction: the OFT send, and the route's opening if it is not open yet.
const built = await post("/bridge/solana-tx", { slug: "ptest4", to: "base", amount, sender, recipient });
if (built.status !== 200) throw new Error(built.body.error ?? `stage ${built.body.stage}`);
const tx = VersionedTransaction.deserialize(Buffer.from(built.body.transaction, "base64"));

// Check it before signing: a simulation sends nothing.
const connection = new Connection(process.env.SOLANA_RPC, "confirmed");
const sim = await connection.simulateTransaction(tx, { sigVerify: false });
console.log({ stage: built.body.stage, received: built.body.received, totalFee: built.body.totalFee, error: sim.value.err });

// Sign with the sender's wallet and send:
// const signed = await wallet.signTransaction(tx);
// await connection.sendRawTransaction(signed.serialize());
```

Run read-only on 19 October 2026 from a Solana holder, it built a transaction at stage `send` with `received: 998000000000` and a fee of at most 636,478 lamports, and the simulation passed. The stages are `send`, the transfer alone; `together`, the route’s opening and the transfer in one transaction; and `setup`, the opening alone, after which you ask again with `after` set to its signature.

### After the send

- The send emits `OFTSent(guid, ...)` on the source chain and the delivery `OFTReceived(guid, ...)` on the destination. The guid is the transfer’s id on LayerZero Scan.
- Look the guid or the transaction up on LayerZero Scan to follow it, or poll the destination for `OFTReceived` with that guid.
- Delivery needs nothing from you. If a message sits verified and undelivered, anyone may deliver it.

## API reference

All endpoints are under `https://www.pangea.trade/api`, take and return JSON, and need no key or account. The general rules are in [For integrators](https://www.pangea.trade/app/docs#integrators), which also describes five of them in full: pools, history, bridge activity, token metadata and the bridge quote. The relayers’ price board is in [Relayers](https://www.pangea.trade/app/docs#relayers). This section lists all of them and describes the rest.

- An error is `{ "error": "..." }` with a 4xx status (a 5xx is a fault, and its body may be a proxy's own). A value the chains could not give is `null`, not a guess.
- Limits are per caller, by IP address, counted on each server. Over a limit the answer is `429` and the message says how many seconds to wait; some also send `Retry-After`.
- A JSON body that is too large is `413`, one that is compressed is `415`, one that does not arrive within 10 seconds is `408`, and one that is not a JSON object of the expected fields is `400`.
- Amounts are base units as decimal strings. Chains are named `ethereum`, `base`, `robinhood`, `bsc` and `solana`. A launch is named by its slug.
- Three endpoints answer as a stream of server-sent events: `data: <json>` lines, with `content-type: text/event-stream`. Read them with a streaming fetch; they are POST, so an `EventSource` cannot open them.

### Every public endpoint

| Endpoint | What it is for | Limit per caller |
| --- | --- | --- |
| `GET /pools` | Every launch and its pool on each chain. | None; one shared reading. |
| `GET /history` | Trades, volume and price candles. | 30 in ten minutes, uncached reads only. |
| `GET /holders` | Who holds a token, per chain. | 60 in ten minutes, uncached reads only. |
| `GET /token/meta` | A token’s metadata document. | None. |
| `GET /logo/[cid]/[file]` | A token’s logo from this site, as square WebP: the file is 64.webp, 128.webp or 256.webp, and the CID is the image’s own, as /token/meta names it. Cached for a year: a CID’s picture cannot change. | None. |
| `GET /platform-funds` | The platform’s fee balance on each chain, in native units and US dollars, with the total: what is waiting to buy and burn PANGEA. | None; one shared reading a minute. |
| `GET /bridge/activity` | Recent transfers between chains. | None. |
| `GET /bridge/balance` | One address’s balance of a token or the native asset. | 120 in ten minutes |
| `POST /bridge/quote` | A transfer priced, both lanes, with the transaction to sign. | 120 in ten minutes, 15 a minute. |
| `POST /bridge/solana-tx` | The unsigned transaction for a transfer out of Solana. | 60 in ten minutes, 10 a minute. |
| `POST /bridge/solana-fast-tx` | The same, as a fast order. | 60 in ten minutes, 10 a minute. |
| `POST /bridge/route-open` | Opens a Solana route once its setup payment has landed. | 120 in ten minutes |
| `POST /bridge/arrival` | A stream that says when a transfer has arrived. | 60 in ten minutes |
| `POST /bridge/refund` | Whether a fast order is held, and the transaction that sends it back. | 60 in ten minutes |
| `POST /bridge/orders` | Tells the board a fast order was posted at a relayer’s price. | 60 in ten minutes |
| `GET, POST /bridge/relayer-quotes` | The relayers’ price board. | 300 in ten minutes reads, 120 publishes. |
| `POST /chain/tx` | A stream that says when a transaction is in a block. | 60 in ten minutes |
| `POST /trade/quote` | A buy or sell priced through Relay, or Jupiter on Solana. | 60 a minute. |
| `POST /trade/solana-tx` | Compiles a swap’s Solana instructions into an unsigned transaction. | 60 in ten minutes |

> **Note:** The launch endpoints are for the launch page and are not described here: preparing a launch only answers the Pangea site, and the rest belong to its steps.

### GET /holders

- Holders, GET: `https://www.pangea.trade/api/holders`

Query: `token`, a slug, required; `chain`, optional, to answer for one chain. The answer is `{ slug, readAt, launchTotal, chains, all }`, where each of `chains` is `{ chain, count, top10Pct, rows, complete, note?, error? }` and each row `{ chain, address, balance, pct, label }`, balances in whole tokens, at most 100 rows a chain. `all` combines the chains, `{ rows, count, partial, top10Pct }`, and is left out when `chain` is given. `label` names a known holder such as the pool or the bridge escrow. An answer is reused for a minute. Errors: `400` without a token, `404` for an unknown launch or a chain it is not on.

### GET /bridge/balance

- Balance, GET: `https://www.pangea.trade/api/bridge/balance`

Query: `token` (slug), `chain` and `address`, all required, and `asset=native` to read the chain’s native asset instead of the token. The answer is `{ slug, chain, address, balance, decimals, reason?, reserve? }`: `balance` in base units as a string, or `null` with a `reason` when the chain could not be read, never a false zero. On Solana the token balance is the sum of the owner’s token accounts for the mint. For the native asset, `reserve` is the gas the app keeps back for a trade. Errors: `400` for a missing field or an address of the wrong kind, `404` for an unknown launch or chain.

### POST /bridge/quote, in full

Beyond the fields in [For integrators](https://www.pangea.trade/app/docs#integrators), the body may carry `slippageBps` for the fast lane, 50 unless given and 1000 at most, and `smartWallet`, true when the sender is a contract wallet. The answer’s `routes` holds two routes, `canonical` and `fast`, and a route that cannot be used says why in `unavailable`. Besides the fields listed there, a route may carry:

| Field | What it is |
| --- | --- |
| `label` | `Standard` or `Fast`. |
| `fastFee`, `relayerFee`, `relayer` | On the fast route: the fast lane’s fee, the relayer’s price and who it is, in base units. |
| `minReceived` | On the fast route: the least the order lets the recipient be paid. |
| `approval` | On the fast route from an EVM chain: the approval to send first, `{ to, data, value, chainId }`, or null when none is needed. |
| `solanaFast` | On the fast route out of Solana: `{ relayerFee, minReceived }`, for `/bridge/solana-fast-tx`. |
| `routePayment` | From an EVM chain into a Solana route that is not open: the one-time setup payment, `{ to, data, value, chainId }`, to send before the transfer. |
| `setupNote`, `messageFeeLater` | Out of Solana with a route to open: the setup is paid first and LayerZero’s fee is priced after it. |
| `feeIsMaximum` | `nativeFee` is the most the Solana transaction will sign; LayerZero charges what its workers quote. |
| `note` | A sentence about the route, for showing to a person. |

Further errors: `409` when the token has not launched on the destination, `424` when a Solana recipient could not be checked, and `424` with `retry: true` when pricing took longer than 45 seconds.

### POST /bridge/solana-tx

- Out of Solana, POST: `https://www.pangea.trade/api/bridge/solana-tx`

The body you POST:

```json
{
  "slug": "<launch slug>",
  "to": "base",
  "amount": "1000000000000",
  "sender": "<Solana wallet>",
  "recipient": "0x<EVM address>"
}
```

Builds the unsigned transaction that sends the token from Solana to an EVM chain, for the sender to sign. `after` and `afterValidUntil` are given only on a second call after a setup step. The answer carries the request’s `from`, `to`, `amount` and `symbol` and one of three stages:

| Stage | What to do |
| --- | --- |
| `send` | Sign `transaction`, a base64 versioned transaction, and send it. `received` is what arrives, `nativeFee` LayerZero’s fee and `nativeFeeCap` the most it will sign. |
| `together` | The same, with the route’s opening in the same transaction. `setupFee` is the opening’s part of `totalFee`. |
| `setup` | The opening alone. Sign and send it, then call again with `after` set to its signature for the send. |

Every stage carries `blockhash` and `lastValidBlockHeight`: sign within about a minute. While a setup step is still settling the answer is `202` with `{ pending: true, stage: "waiting" }`; ask again. Errors: `400` for a bad field or a signature that is not this transfer’s setup, `404` for an unknown launch, `409` when the setup ran out or failed, the route is unusable or the wallet is short of SOL, `424` when the build takes longer than usual, with `retry: true`, and `424` after 50 seconds.

### POST /bridge/solana-fast-tx

- Fast out of Solana, POST: `https://www.pangea.trade/api/bridge/solana-fast-tx`

The fast lane out of Solana: one unsigned transaction holding Pangea’s fast-bridge order and the OFT send that carries it. Body: `{ slug, to, recipient, amount, relayerFee, minReceived, sender }`, with `relayerFee` and `minReceived` from the quote’s `solanaFast`. The answer is `{ stage: "send", transaction, orderId, amount, arriving, fastFee, relayerFee, nativeFee, nativeFeeCap, blockhash, lastValidBlockHeight }`. Errors: `409` when the fast lane is off for this launch or route, `422` when the order could not be built, nothing having been sent.

### POST /bridge/route-open

- Open a Solana route, POST: `https://www.pangea.trade/api/bridge/route-open`

The second step of the first transfer from an EVM chain into a Solana route: once the quote’s `routePayment` has been sent, this hands its transaction to Pangea’s delivery service, which checks the payment on chain and opens the route, or refunds it. Body: `{ slug, from, txHash, sender }`, `from` being the EVM chain the payment was made on. With `Accept: text/event-stream` it streams `{ state, reason?, refundTx? }` as the route is opened; otherwise it answers once. `state` is one of `verifying`, `paid`, `opening`, `open`, `refunded`, `refund-owed`, `review` and `refused`. Send the transfer once it is `open`. Errors: `404` for a launch not on Solana, `424` when routes cannot be opened from this deployment.

### POST /bridge/arrival

- Arrival stream, POST: `https://www.pangea.trade/api/bridge/arrival`

Body: `{ txHash }`, the send’s transaction hash or Solana signature. A stream of `{ state, route, guid, dstTx?, by? }`, `state` being `in-flight` and then `delivered`, with the delivery’s transaction in `dstTx`. It is fed by Pangea’s delivery service, which remembers a transfer for 30 minutes. Errors: `400` for a malformed hash, `424` when the deployment does not serve arrivals; LayerZero Scan answers the same question.

### POST /bridge/refund

- Held fast orders, POST: `https://www.pangea.trade/api/bridge/refund`

Body: `{ chain, orderId }`, the destination chain and the fast order’s id. The answer is `{ held: false }` or `{ held: true, guid, amount, srcEid, call }`, where `call` is the `refund(guid)` transaction, `{ to, data, value, chainId }`, with LayerZero’s fee for the trip back as its value. It looks back 5,000 blocks. Errors: `400` for a malformed id or a chain without a fast bridge.

### POST /bridge/orders

- Report a fast order, POST: `https://www.pangea.trade/api/bridge/orders`

Body: `{ from, hash }`, the chain a fast order was posted on and its transaction. The board reads the order from the receipt and remembers whose price it was sent at, which is how a relayer that does not fill is benched. The answer is `202` with `{ recorded: false, pending: true }` before the receipt exists, then `{ recorded, relayer, why?, orderId, to, srcBridge }`. Only orders priced from this deployment’s board are recorded; `why` says why not.

### POST /chain/tx

- Transaction stream, POST: `https://www.pangea.trade/api/chain/tx`

Body: `{ chain, hash }`. One event when the transaction is in a block: `{ state: "mined", success, block }` on an EVM chain, `{ state: "mined", success }` on Solana, or `{ state: "unseen" }` if it never appears, after up to 10 minutes on an EVM chain and 5 on Solana.

### Trading: POST /trade/quote and POST /trade/solana-tx

These are the trade card’s, as they are in release r41, and are due to change. `/trade/quote` takes `{ slug, side, chain, amount, fromChain?, user?, solanaUser?, recipient?, slippageBps? }`: `side` is `buy` or `sell`, `chain` a chain name or `auto` for the cheapest chain to buy on or the dearest to sell on, and `amount` the native asset’s base units for a buy, the token’s for a sell. `slippageBps` is the slippage, how far below the quote the trade may fill: a whole number of basis points from 1 to 9900 (0.01% to 99%), 100 unless given. The trade card sets it with its Slippage presets or a custom value. It prices the trade through Relay, or Jupiter for a trade within Solana, and answers `{ chain, fromChain, crossChain, cheapestNote, unroutable, details, steps }`, passing the router’s own `details` and `steps` through. Errors: `400`, `404`, `422` with the reason when no route was found, and `424` when a chain or the router could not be reached or took too long (with `retry: true` where trying again can help). Never a 5xx: a proxy in front may replace a 5xx body.

`/trade/solana-tx` takes `{ instructions, addressLookupTableAddresses?, payer }`, a swap step’s Solana instructions as the quote gives them, at most 24 instructions and 8 lookup tables, and answers `{ transaction, blockhash, lastValidBlockHeight }`: an unsigned versioned transaction. It does not inspect what the instructions do, so read them, or let your wallet simulate them, before you sign.
