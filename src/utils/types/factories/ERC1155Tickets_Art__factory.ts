/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ERC1155Tickets_Art,
  ERC1155Tickets_ArtInterface,
} from "../ERC1155Tickets_Art";

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
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "paused",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061191b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80635c975abb1161008c578063a22cb46511610066578063a22cb4651461020f578063e985e9c514610222578063f242432a1461025e578063f2fde38b1461027157600080fd5b80635c975abb146101eb578063715018a6146101f65780638da5cb5b146101fe57600080fd5b80632a55205a116100c85780632a55205a146101575780632eb2c2d61461018957806341f434341461019e5780634e1273f4146101cb57600080fd5b8062fdd58e146100ee57806301ffc9a7146101145780630e89341c14610137575b600080fd5b6101016100fc366004611192565b610284565b6040519081526020015b60405180910390f35b6101276101223660046111d2565b610332565b604051901515815260200161010b565b61014a6101453660046111f6565b61034c565b60405161010b9190611255565b61016a610165366004611268565b6103e0565b604080516001600160a01b03909316835260208301919091520161010b565b61019c6101973660046113d6565b61049d565b005b6101b36daaeb6d7670e522a718067333cd4e81565b6040516001600160a01b03909116815260200161010b565b6101de6101d9366004611480565b61053f565b60405161010b9190611586565b60fb5460ff16610127565b61019c61067d565b6097546001600160a01b03166101b3565b61019c61021d366004611599565b610691565b6101276102303660046115d5565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b61019c61026c366004611608565b6106a0565b61019c61027f36600461166d565b61073b565b60006001600160a01b0383166103075760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526065602090815260408083206001600160a01b03861684529091529020545b92915050565b600061033d826107cb565b8061032c575061032c82610866565b60606067805461035b90611688565b80601f016020809104026020016040519081016040528092919081815260200182805461038790611688565b80156103d45780601f106103a9576101008083540402835291602001916103d4565b820191906000526020600020905b8154815290600101906020018083116103b757829003601f168201915b50505050509050919050565b600082815261012e602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046bffffffffffffffffffffffff1692820192909252829161046157506040805180820190915261012d546001600160a01b0381168252600160a01b90046bffffffffffffffffffffffff1660208201525b602081015160009061271090610485906bffffffffffffffffffffffff16876116d8565b61048f91906116ef565b915196919550909350505050565b6001600160a01b0385163314806104b957506104b98533610230565b61052b5760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016102fe565b61053885858585856108a4565b5050505050565b606081518351146105b85760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016102fe565b6000835167ffffffffffffffff8111156105d4576105d461128a565b6040519080825280602002602001820160405280156105fd578160200160208202803683370190505b50905060005b84518110156106755761064885828151811061062157610621611711565b602002602001015185838151811061063b5761063b611711565b6020026020010151610284565b82828151811061065a5761065a611711565b602090810291909101015261066e81611727565b9050610603565b509392505050565b610685610b1a565b61068f6000610b74565b565b61069c338383610bde565b5050565b6001600160a01b0385163314806106bc57506106bc8533610230565b61072e5760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016102fe565b6105388585858585610cd2565b610743610b1a565b6001600160a01b0381166107bf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102fe565b6107c881610b74565b50565b60006001600160e01b031982167fd9b67a2600000000000000000000000000000000000000000000000000000000148061082e57506001600160e01b031982167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061032c57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b031983161461032c565b60006001600160e01b031982167f2a55205a00000000000000000000000000000000000000000000000000000000148061032c575061032c826107cb565b815183511461091b5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016102fe565b6001600160a01b03841661097f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016102fe565b3360005b8451811015610aac5760008582815181106109a0576109a0611711565b6020026020010151905060008583815181106109be576109be611711565b60209081029190910181015160008481526065835260408082206001600160a01b038e168352909352919091205490915081811015610a525760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016102fe565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610a91908490611740565b9250508190555050505080610aa590611727565b9050610983565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610afc929190611753565b60405180910390a4610b12818787878787610e81565b505050505050565b6097546001600160a01b0316331461068f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fe565b609780546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610c655760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c66000000000000000000000000000000000000000000000060648201526084016102fe565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610d365760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016102fe565b336000610d428561102f565b90506000610d4f8561102f565b905060008681526065602090815260408083206001600160a01b038c16845290915290205485811015610dd75760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016102fe565b60008781526065602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610e16908490611740565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610e76848a8a8a8a8a61107a565b505050505050505050565b6001600160a01b0384163b15610b125760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610ec59089908990889088908890600401611781565b6020604051808303816000875af1925050508015610f00575060408051601f3d908101601f19168201909252610efd918101906117df565b60015b610fb557610f0c6117fc565b806308c379a003610f455750610f20611818565b80610f2b5750610f47565b8060405162461bcd60e51b81526004016102fe9190611255565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016102fe565b6001600160e01b0319811663bc197c8160e01b146110265760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016102fe565b50505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061106957611069611711565b602090810291909101015292915050565b6001600160a01b0384163b15610b125760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906110be90899089908890889088906004016118a2565b6020604051808303816000875af19250505080156110f9575060408051601f3d908101601f191682019092526110f6918101906117df565b60015b61110557610f0c6117fc565b6001600160e01b0319811663f23a6e6160e01b146110265760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016102fe565b80356001600160a01b038116811461118d57600080fd5b919050565b600080604083850312156111a557600080fd5b6111ae83611176565b946020939093013593505050565b6001600160e01b0319811681146107c857600080fd5b6000602082840312156111e457600080fd5b81356111ef816111bc565b9392505050565b60006020828403121561120857600080fd5b5035919050565b6000815180845260005b8181101561123557602081850181015186830182015201611219565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006111ef602083018461120f565b6000806040838503121561127b57600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156112c6576112c661128a565b6040525050565b600067ffffffffffffffff8211156112e7576112e761128a565b5060051b60200190565b600082601f83011261130257600080fd5b8135602061130f826112cd565b60405161131c82826112a0565b83815260059390931b850182019282810191508684111561133c57600080fd5b8286015b848110156113575780358352918301918301611340565b509695505050505050565b600082601f83011261137357600080fd5b813567ffffffffffffffff81111561138d5761138d61128a565b6040516113a4601f8301601f1916602001826112a0565b8181528460208386010111156113b957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156113ee57600080fd5b6113f786611176565b945061140560208701611176565b9350604086013567ffffffffffffffff8082111561142257600080fd5b61142e89838a016112f1565b9450606088013591508082111561144457600080fd5b61145089838a016112f1565b9350608088013591508082111561146657600080fd5b5061147388828901611362565b9150509295509295909350565b6000806040838503121561149357600080fd5b823567ffffffffffffffff808211156114ab57600080fd5b818501915085601f8301126114bf57600080fd5b813560206114cc826112cd565b6040516114d982826112a0565b83815260059390931b85018201928281019150898411156114f957600080fd5b948201945b8386101561151e5761150f86611176565b825294820194908201906114fe565b9650508601359250508082111561153457600080fd5b50611541858286016112f1565b9150509250929050565b600081518084526020808501945080840160005b8381101561157b5781518752958201959082019060010161155f565b509495945050505050565b6020815260006111ef602083018461154b565b600080604083850312156115ac57600080fd5b6115b583611176565b9150602083013580151581146115ca57600080fd5b809150509250929050565b600080604083850312156115e857600080fd5b6115f183611176565b91506115ff60208401611176565b90509250929050565b600080600080600060a0868803121561162057600080fd5b61162986611176565b945061163760208701611176565b93506040860135925060608601359150608086013567ffffffffffffffff81111561166157600080fd5b61147388828901611362565b60006020828403121561167f57600080fd5b6111ef82611176565b600181811c9082168061169c57607f821691505b6020821081036116bc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761032c5761032c6116c2565b60008261170c57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b600060018201611739576117396116c2565b5060010190565b8082018082111561032c5761032c6116c2565b604081526000611766604083018561154b565b8281036020840152611778818561154b565b95945050505050565b60006001600160a01b03808816835280871660208401525060a060408301526117ad60a083018661154b565b82810360608401526117bf818661154b565b905082810360808401526117d3818561120f565b98975050505050505050565b6000602082840312156117f157600080fd5b81516111ef816111bc565b600060033d11156118155760046000803e5060005160e01c5b90565b600060443d10156118265790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561185657505050505090565b828501915081518181111561186e5750505050505090565b843d87010160208285010111156118885750505050505090565b611897602082860101876112a0565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a060808301526118da60a083018461120f565b97965050505050505056fea264697066735822122019d14d768d1e02b2362384f1feac9096b6b71103137f5685f19e62f448a2009b64736f6c63430008130033";

type ERC1155Tickets_ArtConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155Tickets_ArtConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Tickets_Art__factory extends ContractFactory {
  constructor(...args: ERC1155Tickets_ArtConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Tickets_Art> {
    return super.deploy(overrides || {}) as Promise<ERC1155Tickets_Art>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155Tickets_Art {
    return super.attach(address) as ERC1155Tickets_Art;
  }
  override connect(signer: Signer): ERC1155Tickets_Art__factory {
    return super.connect(signer) as ERC1155Tickets_Art__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Tickets_ArtInterface {
    return new utils.Interface(_abi) as ERC1155Tickets_ArtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Tickets_Art {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Tickets_Art;
  }
}