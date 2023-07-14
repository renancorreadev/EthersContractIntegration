/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CurrencyTransferLib,
  CurrencyTransferLibInterface,
} from "../../@thirdweb/CurrencyTransferLib";

const _abi = [
  {
    inputs: [],
    name: "NATIVE_TOKEN",
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
];

const _bytecode =
  "0x60b1610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806331f7d964146038575b600080fd5b605273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f3fea2646970667358221220ab3e626de36619fe83b9c74792bdee634facb3040ab90619b5b09901914f912564736f6c63430008130033";

type CurrencyTransferLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurrencyTransferLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurrencyTransferLib__factory extends ContractFactory {
  constructor(...args: CurrencyTransferLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurrencyTransferLib> {
    return super.deploy(overrides || {}) as Promise<CurrencyTransferLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CurrencyTransferLib {
    return super.attach(address) as CurrencyTransferLib;
  }
  override connect(signer: Signer): CurrencyTransferLib__factory {
    return super.connect(signer) as CurrencyTransferLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurrencyTransferLibInterface {
    return new utils.Interface(_abi) as CurrencyTransferLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurrencyTransferLib {
    return new Contract(address, _abi, signerOrProvider) as CurrencyTransferLib;
  }
}