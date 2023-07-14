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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface DefaultOperatorFiltererUpgradeableInterface
  extends utils.Interface {
  functions: {
    "OPERATOR_FILTER_REGISTRY()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "OPERATOR_FILTER_REGISTRY"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "OPERATOR_FILTER_REGISTRY",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "OPERATOR_FILTER_REGISTRY",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface DefaultOperatorFiltererUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DefaultOperatorFiltererUpgradeableInterface;

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
    OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<[string]>;
  };

  OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    OPERATOR_FILTER_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    OPERATOR_FILTER_REGISTRY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}