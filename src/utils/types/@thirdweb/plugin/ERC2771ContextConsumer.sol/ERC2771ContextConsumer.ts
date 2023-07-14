/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ERC2771ContextConsumerInterface extends utils.Interface {
  functions: {
    "_msgData()": FunctionFragment;
    "_msgSender()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "_msgData" | "_msgSender"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_msgData", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_msgSender",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_msgData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_msgSender", data: BytesLike): Result;

  events: {};
}

export interface ERC2771ContextConsumer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC2771ContextConsumerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _msgData(overrides?: CallOverrides): Promise<[string]>;

    _msgSender(
      overrides?: CallOverrides
    ): Promise<[string] & { sender: string }>;
  };

  _msgData(overrides?: CallOverrides): Promise<string>;

  _msgSender(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _msgData(overrides?: CallOverrides): Promise<string>;

    _msgSender(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _msgData(overrides?: CallOverrides): Promise<BigNumber>;

    _msgSender(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _msgData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _msgSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
