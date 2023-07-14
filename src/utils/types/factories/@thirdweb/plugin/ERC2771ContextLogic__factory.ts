/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC2771ContextLogic,
  ERC2771ContextLogicInterface,
} from "../../../@thirdweb/plugin/ERC2771ContextLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ERC2771ContextLogic__factory {
  static readonly abi = _abi;
  static createInterface(): ERC2771ContextLogicInterface {
    return new utils.Interface(_abi) as ERC2771ContextLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC2771ContextLogic {
    return new Contract(address, _abi, signerOrProvider) as ERC2771ContextLogic;
  }
}