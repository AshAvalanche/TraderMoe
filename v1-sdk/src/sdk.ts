import { AptosClient } from 'movement-sdk'
import { MiscModule } from './modules/MiscModule'
import { SwapModule } from './modules/SwapModule'
import { RouteModule } from './modules/RouteModule'
import { RouteV2Module } from './modules/RouteV2Module'
import { MasterChefModule } from './modules/MasterChefModule'
import { ResourcesModule } from './modules/ResourcesModule'
import { AptosResourceType } from './types/aptos'

export type SdkOptions = {
  nodeUrl: string
  networkOptions: {
    nativeCoin: AptosResourceType
    modules: {
      CoinInfo: AptosResourceType
      CoinStore: AptosResourceType
      Scripts: AptosResourceType
      ResourceAccountAddress: AptosResourceType
      DeployerAddress: AptosResourceType
      AniAddress: AptosResourceType
      MasterChefScripts: AptosResourceType
      MasterChefDeployerAddress: AptosResourceType
      MasterChefResourceAccountAddress: AptosResourceType
    } & Record<string, AptosResourceType>
    misc: {
      AirdropDeployer: AptosResourceType
      AutoAniScripts: AptosResourceType
      AutoAniDeployerAddress: AptosResourceType
      AutoAniResourceAccountAddress: AptosResourceType
    } & Record<string, AptosResourceType>
    coins: {
      zUSDC: AptosResourceType
    } & Record<string, AptosResourceType>
  }
}

export enum NetworkType {
  Mainnet,
  Devnet,
  Testnet,
}

export class SDK {
  protected _client: AptosClient
  protected _swap: SwapModule
  protected _route: RouteModule
  protected _routeV2: RouteV2Module
  protected _masterchef: MasterChefModule
  protected _misc: MiscModule
  protected _resources: ResourcesModule
  protected _networkOptions: SdkOptions['networkOptions']

  get swap() {
    return this._swap
  }

  get route() {
    return this._route
  }

  get routeV2() {
    return this._routeV2
  }

  get MasterChef() {
    return this._masterchef
  }

  get Misc() {
    return this._misc
  }

  get resources() {
    return this._resources
  }

  get client() {
    return this._client
  }

  get networkOptions() {
    return this._networkOptions
  }

  /**
   * SDK constructor
   * @param nodeUrl string
   * @param networkType? NetworkType
   */
  constructor(nodeUrl: string, networkType?: NetworkType) {
    const mainnetOptions = {
      nativeCoin: '0x1::aptos_coin::AptosCoin',
      modules: {
        Scripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::TraderMoePoolV1',
        CoinInfo: '0x1::coin::CoinInfo',
        CoinStore: '0x1::coin::CoinStore',
        DeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        ResourceAccountAddress: '0x6d013996933469b027ea0917214f9c45e6f10b7aa075b4200c11869069fb471b',
        AniAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin',
        MasterChefScripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::AnimeMasterChefV1',
        MasterChefDeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        MasterChefResourceAccountAddress: '0x8615f5671592532631e56c76ca09d332fae1cd03d463bc379eec1007973966ef',
      },
      misc: {
        AirdropDeployer: '0xf713bbb607b171ef26dd141050b854a8a7270b5a555a0a202abd98e3e5ded9da',
        AutoAniScripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::AutoAni',
        AutoAniDeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        AutoAniResourceAccountAddress: '0x453989b1e41bb442c833314f6ffc8572e3670c1a40a6c8a6e52ea7c588c72fd7',
      },
      coins: {
        zUSDC: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC',
      },
    }
    const devnetOptions = {
      nativeCoin: '0x1::aptos_coin::AptosCoin',
      modules: {
        Scripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::TraderMoePoolV1',
        CoinInfo: '0x1::coin::CoinInfo',
        CoinStore: '0x1::coin::CoinStore',
        DeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        ResourceAccountAddress: '0x6d013996933469b027ea0917214f9c45e6f10b7aa075b4200c11869069fb471b',
        AniAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin',
        MasterChefScripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::AnimeMasterChefV1',
        MasterChefDeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        MasterChefResourceAccountAddress: '0x8615f5671592532631e56c76ca09d332fae1cd03d463bc379eec1007973966ef',
      },
      misc: {
        AirdropDeployer: '0xf713bbb607b171ef26dd141050b854a8a7270b5a555a0a202abd98e3e5ded9da',
        AutoAniScripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::AutoAniT1',
        AutoAniDeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        AutoAniResourceAccountAddress: '0x453989b1e41bb442c833314f6ffc8572e3670c1a40a6c8a6e52ea7c588c72fd7',
      },
      coins: {
        zUSDC: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin',
      },
    }
    const testnetOptions = {
      nativeCoin: '0x1::aptos_coin::AptosCoin',
      modules: {
        Scripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::TraderMoePoolV1',
        CoinInfo: '0x1::coin::CoinInfo',
        CoinStore: '0x1::coin::CoinStore',
        DeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        ResourceAccountAddress: '0x6d013996933469b027ea0917214f9c45e6f10b7aa075b4200c11869069fb471b',
        AniAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin',
        MasterChefScripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::AnimeMasterChefV1f1',
        MasterChefDeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        MasterChefResourceAccountAddress: '0xc5c50013e5a1c04a665a879a06479c9ac11495f23a4c973af9c395c189763fde',
      },
      misc: {
        AirdropDeployer: '0xf713bbb607b171ef26dd141050b854a8a7270b5a555a0a202abd98e3e5ded9da',
        AutoAniScripts: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::AutoAnif2',
        AutoAniDeployerAddress: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c',
        AutoAniResourceAccountAddress: '0xdfee246b309af2e34e11c4f10119ac177185a6737ba05ad4377245d8164e669d',
      },
      coins: {
        zUSDC: '0x2e2f2175ecc96dfc48dbd789da52455344513e98c0641a737637fe83dc0b6d7c::moe_coin::MoeCoin',  // dummy
      },
    }
    let networkOptions = mainnetOptions  // default network
    if (networkType == NetworkType.Mainnet) networkOptions = mainnetOptions
    if (networkType == NetworkType.Devnet) networkOptions = devnetOptions
    if (networkType == NetworkType.Testnet) networkOptions = testnetOptions
    const options = {
      nodeUrl,
      networkOptions: networkOptions,
    }
    this._networkOptions = options.networkOptions
    this._client = new AptosClient(options.nodeUrl)
    this._swap = new SwapModule(this)
    this._route = new RouteModule(this)
    this._routeV2 = new RouteV2Module(this)
    this._masterchef = new MasterChefModule(this)
    this._misc = new MiscModule(this)
    this._resources = new ResourcesModule(this)
  }
}
