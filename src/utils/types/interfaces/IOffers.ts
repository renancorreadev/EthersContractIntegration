/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
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

export declare namespace IOffers {
  export type OfferStruct = {
    offeror: PromiseOrValue<string>;
    assetContract: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<string>;
    totalPrice: PromiseOrValue<BigNumberish>;
    expirationTimestamp: PromiseOrValue<BigNumberish>;
    tokenType: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
  };

  export type OfferStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number,
    number
  ] & {
    offeror: string;
    assetContract: string;
    tokenId: BigNumber;
    quantity: BigNumber;
    currency: string;
    totalPrice: BigNumber;
    expirationTimestamp: BigNumber;
    tokenType: number;
    status: number;
  };

  export type OfferParamsStruct = {
    assetContract: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<BigNumberish>;
    totalPrice: PromiseOrValue<BigNumberish>;
    offerDuration: PromiseOrValue<BigNumberish>;
  };

  export type OfferParamsStructOutput = [
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber
  ] & {
    assetContract: string;
    tokenId: BigNumber;
    quantity: BigNumber;
    currency: number;
    totalPrice: BigNumber;
    offerDuration: BigNumber;
  };
}

export interface IOffersInterface extends utils.Interface {
  functions: {
    "acceptOffer(uint256)": FunctionFragment;
    "cancelOffer(uint256)": FunctionFragment;
    "getAcceptingOffers()": FunctionFragment;
    "getAllOffers(uint256,uint256)": FunctionFragment;
    "getAllValidOffers(uint256,uint256)": FunctionFragment;
    "getOffer(uint256)": FunctionFragment;
    "makeOffer((address,uint256,uint256,uint8,uint256,uint256))": FunctionFragment;
    "setAcceptingOffers(bool)": FunctionFragment;
    "totalOffers()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOffer"
      | "cancelOffer"
      | "getAcceptingOffers"
      | "getAllOffers"
      | "getAllValidOffers"
      | "getOffer"
      | "makeOffer"
      | "setAcceptingOffers"
      | "totalOffers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAcceptingOffers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllOffers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllValidOffers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "makeOffer",
    values: [IOffers.OfferParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setAcceptingOffers",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalOffers",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAcceptingOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllValidOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOffer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeOffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAcceptingOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalOffers",
    data: BytesLike
  ): Result;

  events: {
    "AcceptedOffer(address,uint256,address,uint256,address,uint256,uint256)": EventFragment;
    "AcceptingOffersSet(address,bool)": EventFragment;
    "CancelledOffer(address,uint256)": EventFragment;
    "NewOffer(address,uint256,address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AcceptedOffer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AcceptingOffersSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelledOffer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOffer"): EventFragment;
}

export interface AcceptedOfferEventObject {
  offeror: string;
  offerId: BigNumber;
  assetContract: string;
  tokenId: BigNumber;
  seller: string;
  quantityBought: BigNumber;
  totalPricePaid: BigNumber;
}
export type AcceptedOfferEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string, BigNumber, BigNumber],
  AcceptedOfferEventObject
>;

export type AcceptedOfferEventFilter = TypedEventFilter<AcceptedOfferEvent>;

export interface AcceptingOffersSetEventObject {
  manager: string;
  _acceptingOffers: boolean;
}
export type AcceptingOffersSetEvent = TypedEvent<
  [string, boolean],
  AcceptingOffersSetEventObject
>;

export type AcceptingOffersSetEventFilter =
  TypedEventFilter<AcceptingOffersSetEvent>;

export interface CancelledOfferEventObject {
  offeror: string;
  offerId: BigNumber;
}
export type CancelledOfferEvent = TypedEvent<
  [string, BigNumber],
  CancelledOfferEventObject
>;

export type CancelledOfferEventFilter = TypedEventFilter<CancelledOfferEvent>;

export interface NewOfferEventObject {
  offeror: string;
  offerId: BigNumber;
  assetContract: string;
  offer: IOffers.OfferStructOutput;
}
export type NewOfferEvent = TypedEvent<
  [string, BigNumber, string, IOffers.OfferStructOutput],
  NewOfferEventObject
>;

export type NewOfferEventFilter = TypedEventFilter<NewOfferEvent>;

export interface IOffers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOffersInterface;

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
    acceptOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAcceptingOffers(overrides?: CallOverrides): Promise<[boolean]>;

    getAllOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IOffers.OfferStructOutput[]] & { offers: IOffers.OfferStructOutput[] }
    >;

    getAllValidOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IOffers.OfferStructOutput[]] & { offers: IOffers.OfferStructOutput[] }
    >;

    getOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IOffers.OfferStructOutput] & { offer: IOffers.OfferStructOutput }
    >;

    makeOffer(
      _params: IOffers.OfferParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAcceptingOffers(
      _acceptingOffers: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalOffers(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptOffer(
    _offerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelOffer(
    _offerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAcceptingOffers(overrides?: CallOverrides): Promise<boolean>;

  getAllOffers(
    _startId: PromiseOrValue<BigNumberish>,
    _endId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IOffers.OfferStructOutput[]>;

  getAllValidOffers(
    _startId: PromiseOrValue<BigNumberish>,
    _endId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IOffers.OfferStructOutput[]>;

  getOffer(
    _offerId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IOffers.OfferStructOutput>;

  makeOffer(
    _params: IOffers.OfferParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAcceptingOffers(
    _acceptingOffers: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalOffers(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAcceptingOffers(overrides?: CallOverrides): Promise<boolean>;

    getAllOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IOffers.OfferStructOutput[]>;

    getAllValidOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IOffers.OfferStructOutput[]>;

    getOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IOffers.OfferStructOutput>;

    makeOffer(
      _params: IOffers.OfferParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAcceptingOffers(
      _acceptingOffers: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalOffers(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AcceptedOffer(address,uint256,address,uint256,address,uint256,uint256)"(
      offeror?: PromiseOrValue<string> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      tokenId?: null,
      seller?: null,
      quantityBought?: null,
      totalPricePaid?: null
    ): AcceptedOfferEventFilter;
    AcceptedOffer(
      offeror?: PromiseOrValue<string> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      tokenId?: null,
      seller?: null,
      quantityBought?: null,
      totalPricePaid?: null
    ): AcceptedOfferEventFilter;

    "AcceptingOffersSet(address,bool)"(
      manager?: PromiseOrValue<string> | null,
      _acceptingOffers?: null
    ): AcceptingOffersSetEventFilter;
    AcceptingOffersSet(
      manager?: PromiseOrValue<string> | null,
      _acceptingOffers?: null
    ): AcceptingOffersSetEventFilter;

    "CancelledOffer(address,uint256)"(
      offeror?: PromiseOrValue<string> | null,
      offerId?: PromiseOrValue<BigNumberish> | null
    ): CancelledOfferEventFilter;
    CancelledOffer(
      offeror?: PromiseOrValue<string> | null,
      offerId?: PromiseOrValue<BigNumberish> | null
    ): CancelledOfferEventFilter;

    "NewOffer(address,uint256,address,tuple)"(
      offeror?: PromiseOrValue<string> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      offer?: null
    ): NewOfferEventFilter;
    NewOffer(
      offeror?: PromiseOrValue<string> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      offer?: null
    ): NewOfferEventFilter;
  };

  estimateGas: {
    acceptOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAcceptingOffers(overrides?: CallOverrides): Promise<BigNumber>;

    getAllOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllValidOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeOffer(
      _params: IOffers.OfferParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAcceptingOffers(
      _acceptingOffers: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalOffers(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAcceptingOffers(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllValidOffers(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOffer(
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makeOffer(
      _params: IOffers.OfferParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAcceptingOffers(
      _acceptingOffers: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalOffers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
