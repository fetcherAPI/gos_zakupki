/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from "./Attachment";
import type { Commissioner } from "./Commissioner";
import type { Criteria } from "./Criteria";
import type { Lot } from "./Lot";
import type { Qualifier } from "./Qualifier";
import type { SupplyDocument } from "./SupplyDocument";

export type Tender = {
  id?: string;
  view?: Tender.view;
  method?: Tender.method;
  masterContract?: boolean;
  name?: string;
  dateContest?: string;
  validnessPeriodOfBid?: number;
  allowOtherСurrency?: boolean;
  bidWarranty?: boolean;
  instructionForPreparingBid?: Attachment;
  warrantyProvisionForm?: Tender.warrantyProvisionForm;
  allowMonetaryValue?: Tender.allowMonetaryValue;
  bidSecurityAmount?: number;
  validnessPeriodOfGOTZ?: number;
  qualifiers?: Array<Qualifier>;
  criterias?: Array<Criteria>;
  criteriaFile?: Attachment;
  allowBenefits?: boolean;
  benefits?: number;
  allowMeeting?: boolean;
  meetingDateTime?: string;
  meetingAddress?: string;
  guaranteeProvision?: number;
  relatedServiceBool?: boolean;
  relatedService?: string;
  paymentAdvanceBool?: boolean;
  paymentAdvance?: number;
  paymentAfterShipmentBool?: boolean;
  paymentAfterShipment?: number;
  paymentAfterAcceptanceBool?: boolean;
  paymentAfterAcceptance?: number;
  paymentOtherCondition?: string;
  paymentMaturity?: string;
  forfeitDayRateDelivery?: number;
  forfeitMaxDeductibleAmountDelivery?: number;
  forfeitDayRatePayment?: number;
  forfeitMaxDeductibleAmountPayment?: number;
  allowTechnicalControl?: boolean;
  controlTitle?: string;
  controlPlaceOfAttendance?: string;
  allowSpares?: boolean;
  spares?: string;
  allowGuarantee?: boolean;
  guaranteePeriod?: string;
  guaranteeDiscoveredDefectPeriod?: string;
  guaranteeforfeitDayRate?: number;
  guaranteeMaxDeductibleAmount?: number;
  disputeResolutionCourtType?: boolean;
  disputeResolutionRegulation?: Tender.disputeResolutionRegulation;
  disputeResolutionJudgesNumber?: number;
  disputeResolutionLanguage?: Tender.disputeResolutionLanguage;
  projectFile?: Attachment;
  documents?: Array<SupplyDocument>;
  packaging?: string;
  allowInsurance?: boolean;
  insurance?: string;
  lots?: Array<Lot>;
  commissioners?: Array<Commissioner>;
  creatorId?: number;
  creatorFullName?: string;
  companyId?: number;
  companyName?: string;
  status?: Tender.status;
  number?: string;
  datePublished?: string;
  total?: number;
  preQualification?: boolean;
};

export namespace Tender {
  export enum view {
    PRODUCT = "PRODUCT",
    WORK = "WORK",
    SERVICE = "SERVICE",
  }

  export enum method {
    ONE_STAGE = "ONE_STAGE",
  }

  export enum warrantyProvisionForm {
    BANKING = "BANKING",
    CASH = "CASH",
    DECLARATION = "DECLARATION",
    BONDS = "BONDS",
    DEPOSIT = "DEPOSIT",
    BILL = "BILL",
    OTHER = "OTHER",
  }

  export enum allowMonetaryValue {
    PERCENT = "PERCENT",
    MONETARY_VALUE = "MONETARY_VALUE",
  }

  export enum disputeResolutionRegulation {
    REGULAR = "REGULAR",
    RAPID = "RAPID",
  }

  export enum disputeResolutionLanguage {
    KYRGYZ = "kyrgyz",
    RUSSIAN = "russian",
  }

  export enum status {
    NEW = "NEW",
    VERIFIED_PUBLISHED = "VERIFIED_PUBLISHED",
    REJECTED = "REJECTED",
    REJECTED_BY_SUBMISSION = "REJECTED_BY_SUBMISSION",
    PROTOCOL_OPENED = "PROTOCOL_OPENED",
    SEND_TO_PUBLISH_FIRST_PACKAGE = "SEND_TO_PUBLISH_FIRST_PACKAGE",
    FIRST_PACKAGE_PUBLISHED = "FIRST_PACKAGE_PUBLISHED",
  }
}
