/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OperatorFiltererUpgradeable,
  OperatorFiltererUpgradeableInterface,
} from "../../@opensea/OperatorFiltererUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "OPERATOR_FILTER_REGISTRY",
    outputs: [
      {
        internalType: "contract IOperatorFilterRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class OperatorFiltererUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): OperatorFiltererUpgradeableInterface {
    return new utils.Interface(_abi) as OperatorFiltererUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OperatorFiltererUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OperatorFiltererUpgradeable;
  }
}
