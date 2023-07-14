/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC721Art,
  IERC721ArtInterface,
} from "../../interfaces/IERC721Art";

const _abi = [
  {
    inputs: [],
    name: "ERC721Art__ArraysDoNotMatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__CallerNotCrowdfund",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__CollectionForFund",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__CrodFundIsSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__InvalidCrowdFund",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__MaxSupplyReached",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__NotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__NotEnoughValueOrAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Art__NotTokenOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_crowdfund",
        type: "address",
      },
    ],
    name: "CrowdfundSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "discount",
        type: "uint256",
      },
    ],
    name: "MaxDiscountSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_coreSFT",
        type: "address",
      },
    ],
    name: "NewCoreSFTSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OwnerPaymentDone",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
    ],
    name: "PriceSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "creatorsProRoyalty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "creatorRoyalty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromWallet",
        type: "address",
      },
    ],
    name: "RoyaltiesTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_royalty",
        type: "uint256",
      },
    ],
    name: "RoyaltySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
    ],
    name: "TokenPriceSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
    ],
    name: "creatorsProSafeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCrowdfund",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getLastTransfer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
    ],
    name: "getPricePerCoin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRoyalty",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
    ],
    name: "getTokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceInUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceInCreatorsCoin",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "royalty",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "maxDiscount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "discount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint8[]",
        name: "classes",
        type: "uint8[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mintForCrowdfund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintToAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "coreSFT_",
        type: "address",
      },
    ],
    name: "setCoreSFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "crowdfund",
        type: "address",
      },
    ],
    name: "setCrowdfund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxDiscount_",
        type: "uint256",
      },
    ],
    name: "setMaxDiscount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "royalty",
        type: "uint256",
      },
    ],
    name: "setRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
    ],
    name: "setTokenPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC721Art__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721ArtInterface {
    return new utils.Interface(_abi) as IERC721ArtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721Art {
    return new Contract(address, _abi, signerOrProvider) as IERC721Art;
  }
}
