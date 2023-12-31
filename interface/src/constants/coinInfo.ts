import { Coin } from 'hooks/common/Coin'

export const APTOS_CoinInfo: { [address: string]: Coin } = {
  '0x1::aptos_coin::AptosCoin': {
    address: '0x1::aptos_coin::AptosCoin',
    decimals: 8,
    symbol: 'APT',
    name: 'Aptos',
    logoURL: ['/images/icons/APT.svg'],
  },
  '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin': {
    address: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin',
    decimals: 8,
    symbol: 'ANI',
    name: 'TraderMoe Coin',
    logoURL: ['/images/icons/ANI.png'],
  },
  '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC': {
    address: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC',
    decimals: 6,
    symbol: 'zUSDC',
    name: 'LayerZero USD Coin',
    logoURL: ['/images/icons/USDC.webp'],
  },
}

export const MOVEMENT_TESTNET_CoinInfo: { [address: string]: Coin } = {
  '0x1::aptos_coin::AptosCoin': {
    address: '0x1::aptos_coin::AptosCoin',
    decimals: 8,
    symbol: 'MVMT',
    name: 'Movement',
    logoURL: ['/images/icons/mvmt.png'],
  },
  '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin': {
    address: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin',
    decimals: 8,
    symbol: 'MOE',
    name: 'TraderMoe Coin',
    logoURL: ['/images/icons/moe.png'],
  },
  '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::TestCoinsV1::USDT': {
    address: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::TestCoinsV1::USDT',
    decimals: 8,
    symbol: 'USDT',
    name: 'Tether USD',
    logoURL: ['/images/icons/USDT.webp'],
  },
  '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::TestCoinsV1::BTC': {
    address: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::TestCoinsV1::BTC',
    decimals: 8,
    symbol: 'BTC',
    name: 'Bitcoin',
    logoURL: ['/images/icons/BTC.webp'],
  },
}
