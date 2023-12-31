import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Airdropped,
  Approval,
  ApprovalForAll,
  BaseURISet,
  BatchMetadataUpdate,
  ConsecutiveTransfer,
  ContractURISet,
  ERC20Withdrawn,
  ETHWithdrawn,
  EditionCutoffTimeSet,
  EditionMaxMintableRangeSet,
  FundingRecipientSet,
  MetadataFrozen,
  MetadataModuleSet,
  MintRandomnessEnabledSet,
  Minted,
  OperatorFilteringEnablededSet,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred,
  RolesUpdated,
  RoyaltySet,
  SAMSet,
  SoundEditionInitialized,
  Transfer
} from "../generated/ SoundEditionV1_2/ SoundEditionV1_2"

export function createAirdroppedEvent(
  to: Array<Address>,
  quantity: BigInt,
  fromTokenId: BigInt
): Airdropped {
  let airdroppedEvent = changetype<Airdropped>(newMockEvent())

  airdroppedEvent.parameters = new Array()

  airdroppedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddressArray(to))
  )
  airdroppedEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  airdroppedEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )

  return airdroppedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBaseURISetEvent(baseURI: string): BaseURISet {
  let baseUriSetEvent = changetype<BaseURISet>(newMockEvent())

  baseUriSetEvent.parameters = new Array()

  baseUriSetEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return baseUriSetEvent
}

export function createBatchMetadataUpdateEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createConsecutiveTransferEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt,
  from: Address,
  to: Address
): ConsecutiveTransfer {
  let consecutiveTransferEvent = changetype<ConsecutiveTransfer>(newMockEvent())

  consecutiveTransferEvent.parameters = new Array()

  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return consecutiveTransferEvent
}

export function createContractURISetEvent(contractURI: string): ContractURISet {
  let contractUriSetEvent = changetype<ContractURISet>(newMockEvent())

  contractUriSetEvent.parameters = new Array()

  contractUriSetEvent.parameters.push(
    new ethereum.EventParam(
      "contractURI",
      ethereum.Value.fromString(contractURI)
    )
  )

  return contractUriSetEvent
}

export function createERC20WithdrawnEvent(
  recipient: Address,
  tokens: Array<Address>,
  amounts: Array<BigInt>,
  caller: Address
): ERC20Withdrawn {
  let erc20WithdrawnEvent = changetype<ERC20Withdrawn>(newMockEvent())

  erc20WithdrawnEvent.parameters = new Array()

  erc20WithdrawnEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  erc20WithdrawnEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromAddressArray(tokens))
  )
  erc20WithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  erc20WithdrawnEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return erc20WithdrawnEvent
}

export function createETHWithdrawnEvent(
  recipient: Address,
  amount: BigInt,
  caller: Address
): ETHWithdrawn {
  let ethWithdrawnEvent = changetype<ETHWithdrawn>(newMockEvent())

  ethWithdrawnEvent.parameters = new Array()

  ethWithdrawnEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  ethWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  ethWithdrawnEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return ethWithdrawnEvent
}

export function createEditionCutoffTimeSetEvent(
  editionCutoffTime_: BigInt
): EditionCutoffTimeSet {
  let editionCutoffTimeSetEvent = changetype<EditionCutoffTimeSet>(
    newMockEvent()
  )

  editionCutoffTimeSetEvent.parameters = new Array()

  editionCutoffTimeSetEvent.parameters.push(
    new ethereum.EventParam(
      "editionCutoffTime_",
      ethereum.Value.fromUnsignedBigInt(editionCutoffTime_)
    )
  )

  return editionCutoffTimeSetEvent
}

export function createEditionMaxMintableRangeSetEvent(
  editionMaxMintableLower_: BigInt,
  editionMaxMintableUpper_: BigInt
): EditionMaxMintableRangeSet {
  let editionMaxMintableRangeSetEvent = changetype<EditionMaxMintableRangeSet>(
    newMockEvent()
  )

  editionMaxMintableRangeSetEvent.parameters = new Array()

  editionMaxMintableRangeSetEvent.parameters.push(
    new ethereum.EventParam(
      "editionMaxMintableLower_",
      ethereum.Value.fromUnsignedBigInt(editionMaxMintableLower_)
    )
  )
  editionMaxMintableRangeSetEvent.parameters.push(
    new ethereum.EventParam(
      "editionMaxMintableUpper_",
      ethereum.Value.fromUnsignedBigInt(editionMaxMintableUpper_)
    )
  )

  return editionMaxMintableRangeSetEvent
}

export function createFundingRecipientSetEvent(
  fundingRecipient: Address
): FundingRecipientSet {
  let fundingRecipientSetEvent = changetype<FundingRecipientSet>(newMockEvent())

  fundingRecipientSetEvent.parameters = new Array()

  fundingRecipientSetEvent.parameters.push(
    new ethereum.EventParam(
      "fundingRecipient",
      ethereum.Value.fromAddress(fundingRecipient)
    )
  )

  return fundingRecipientSetEvent
}

export function createMetadataFrozenEvent(
  metadataModule: Address,
  baseURI: string,
  contractURI: string
): MetadataFrozen {
  let metadataFrozenEvent = changetype<MetadataFrozen>(newMockEvent())

  metadataFrozenEvent.parameters = new Array()

  metadataFrozenEvent.parameters.push(
    new ethereum.EventParam(
      "metadataModule",
      ethereum.Value.fromAddress(metadataModule)
    )
  )
  metadataFrozenEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )
  metadataFrozenEvent.parameters.push(
    new ethereum.EventParam(
      "contractURI",
      ethereum.Value.fromString(contractURI)
    )
  )

  return metadataFrozenEvent
}

export function createMetadataModuleSetEvent(
  metadataModule: Address
): MetadataModuleSet {
  let metadataModuleSetEvent = changetype<MetadataModuleSet>(newMockEvent())

  metadataModuleSetEvent.parameters = new Array()

  metadataModuleSetEvent.parameters.push(
    new ethereum.EventParam(
      "metadataModule",
      ethereum.Value.fromAddress(metadataModule)
    )
  )

  return metadataModuleSetEvent
}

export function createMintRandomnessEnabledSetEvent(
  mintRandomnessEnabled_: boolean
): MintRandomnessEnabledSet {
  let mintRandomnessEnabledSetEvent = changetype<MintRandomnessEnabledSet>(
    newMockEvent()
  )

  mintRandomnessEnabledSetEvent.parameters = new Array()

  mintRandomnessEnabledSetEvent.parameters.push(
    new ethereum.EventParam(
      "mintRandomnessEnabled_",
      ethereum.Value.fromBoolean(mintRandomnessEnabled_)
    )
  )

  return mintRandomnessEnabledSetEvent
}

export function createMintedEvent(
  to: Address,
  quantity: BigInt,
  fromTokenId: BigInt
): Minted {
  let mintedEvent = changetype<Minted>(newMockEvent())

  mintedEvent.parameters = new Array()

  mintedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )

  return mintedEvent
}

export function createOperatorFilteringEnablededSetEvent(
  operatorFilteringEnabled_: boolean
): OperatorFilteringEnablededSet {
  let operatorFilteringEnablededSetEvent = changetype<
    OperatorFilteringEnablededSet
  >(newMockEvent())

  operatorFilteringEnablededSetEvent.parameters = new Array()

  operatorFilteringEnablededSetEvent.parameters.push(
    new ethereum.EventParam(
      "operatorFilteringEnabled_",
      ethereum.Value.fromBoolean(operatorFilteringEnabled_)
    )
  )

  return operatorFilteringEnablededSetEvent
}

export function createOwnershipHandoverCanceledEvent(
  pendingOwner: Address
): OwnershipHandoverCanceled {
  let ownershipHandoverCanceledEvent = changetype<OwnershipHandoverCanceled>(
    newMockEvent()
  )

  ownershipHandoverCanceledEvent.parameters = new Array()

  ownershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverCanceledEvent
}

export function createOwnershipHandoverRequestedEvent(
  pendingOwner: Address
): OwnershipHandoverRequested {
  let ownershipHandoverRequestedEvent = changetype<OwnershipHandoverRequested>(
    newMockEvent()
  )

  ownershipHandoverRequestedEvent.parameters = new Array()

  ownershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverRequestedEvent
}

export function createOwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRolesUpdatedEvent(
  user: Address,
  roles: BigInt
): RolesUpdated {
  let rolesUpdatedEvent = changetype<RolesUpdated>(newMockEvent())

  rolesUpdatedEvent.parameters = new Array()

  rolesUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rolesUpdatedEvent.parameters.push(
    new ethereum.EventParam("roles", ethereum.Value.fromUnsignedBigInt(roles))
  )

  return rolesUpdatedEvent
}

export function createRoyaltySetEvent(bps: i32): RoyaltySet {
  let royaltySetEvent = changetype<RoyaltySet>(newMockEvent())

  royaltySetEvent.parameters = new Array()

  royaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "bps",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(bps))
    )
  )

  return royaltySetEvent
}

export function createSAMSetEvent(sam_: Address): SAMSet {
  let samSetEvent = changetype<SAMSet>(newMockEvent())

  samSetEvent.parameters = new Array()

  samSetEvent.parameters.push(
    new ethereum.EventParam("sam_", ethereum.Value.fromAddress(sam_))
  )

  return samSetEvent
}

export function createSoundEditionInitializedEvent(
  edition_: Address,
  name_: string,
  symbol_: string,
  metadataModule_: Address,
  baseURI_: string,
  contractURI_: string,
  fundingRecipient_: Address,
  royaltyBPS_: i32,
  editionMaxMintableLower_: BigInt,
  editionMaxMintableUpper_: BigInt,
  editionCutoffTime_: BigInt,
  flags_: i32
): SoundEditionInitialized {
  let soundEditionInitializedEvent = changetype<SoundEditionInitialized>(
    newMockEvent()
  )

  soundEditionInitializedEvent.parameters = new Array()

  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam("edition_", ethereum.Value.fromAddress(edition_))
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam("name_", ethereum.Value.fromString(name_))
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam("symbol_", ethereum.Value.fromString(symbol_))
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "metadataModule_",
      ethereum.Value.fromAddress(metadataModule_)
    )
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam("baseURI_", ethereum.Value.fromString(baseURI_))
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "contractURI_",
      ethereum.Value.fromString(contractURI_)
    )
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "fundingRecipient_",
      ethereum.Value.fromAddress(fundingRecipient_)
    )
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyBPS_",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(royaltyBPS_))
    )
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "editionMaxMintableLower_",
      ethereum.Value.fromUnsignedBigInt(editionMaxMintableLower_)
    )
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "editionMaxMintableUpper_",
      ethereum.Value.fromUnsignedBigInt(editionMaxMintableUpper_)
    )
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "editionCutoffTime_",
      ethereum.Value.fromUnsignedBigInt(editionCutoffTime_)
    )
  )
  soundEditionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "flags_",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(flags_))
    )
  )

  return soundEditionInitializedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
