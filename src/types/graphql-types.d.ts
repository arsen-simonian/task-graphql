import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateEnd: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeUtc: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  EMAIL: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Mixed: { input: any; output: any; }
  StringInteger: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  account_name: Scalars['String']['output'];
  account_number?: Maybe<Scalars['String']['output']>;
  account_state?: Maybe<AccountState>;
  account_type?: Maybe<AccountType>;
  activated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  client?: Maybe<Client>;
  client_accounts: Array<ClientAccountsDetails>;
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  currency?: Maybe<Currencies>;
  group?: Maybe<GroupRole>;
  group_type?: Maybe<GroupType>;
  iban_provider?: Maybe<PaymentProviderIban>;
  id: Scalars['ID']['output'];
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  last_charge_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  max_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  member?: Maybe<Members>;
  min_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  owner?: Maybe<ApplicantIndividual>;
  payment_bank?: Maybe<PaymentBank>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_system?: Maybe<PaymentSystem>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type AccountClient = {
  __typename?: 'AccountClient';
  client: Client;
  id: Scalars['ID']['output'];
};

export enum AccountClientsType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

export type AccountGenerateIbanResponse = {
  __typename?: 'AccountGenerateIbanResponse';
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type AccountLimit = {
  __typename?: 'AccountLimit';
  account?: Maybe<Account>;
  account_id?: Maybe<Scalars['ID']['output']>;
  amount?: Maybe<Scalars['Decimal']['output']>;
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  commission_template_limit_action_type_id?: Maybe<Scalars['ID']['output']>;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_period_id?: Maybe<Scalars['ID']['output']>;
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']['output']>;
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  currency?: Maybe<Currencies>;
  currency_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  period_count?: Maybe<Scalars['Int']['output']>;
};

export type AccountLimitPaginator = {
  __typename?: 'AccountLimitPaginator';
  data: Array<AccountLimit>;
  paginatorInfo: PaginatorInfo;
};

export type AccountPaginator = {
  __typename?: 'AccountPaginator';
  data: Array<Account>;
  paginatorInfo: PaginatorInfo;
};

export type AccountReachedLimit = {
  __typename?: 'AccountReachedLimit';
  account?: Maybe<Account>;
  account_id: Scalars['ID']['output'];
  amount: Scalars['Decimal']['output'];
  client_name: Scalars['String']['output'];
  client_type: Scalars['String']['output'];
  group_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  limit_currency: Scalars['String']['output'];
  limit_type: Scalars['String']['output'];
  limit_value: Scalars['Int']['output'];
  period: Scalars['Int']['output'];
  transfer_direction: Scalars['String']['output'];
};

export type AccountReachedLimitPaginator = {
  __typename?: 'AccountReachedLimitPaginator';
  data: Array<AccountReachedLimit>;
  paginatorInfo: PaginatorInfo;
};

export type AccountState = {
  __typename?: 'AccountState';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AccountStatement = {
  __typename?: 'AccountStatement';
  account_currency?: Maybe<Scalars['String']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  closing_balance?: Maybe<Scalars['Float']['output']>;
  closing_balance_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  credit_turnover?: Maybe<Scalars['Float']['output']>;
  date_from: Scalars['DateTimeUtc']['output'];
  debit_turnover?: Maybe<Scalars['Float']['output']>;
  opening_balance?: Maybe<Scalars['Float']['output']>;
  opening_balance_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  transactions?: Maybe<Array<Maybe<AccountStatementTransaction>>>;
};

export type AccountStatementTransaction = {
  __typename?: 'AccountStatementTransaction';
  account_balance?: Maybe<Scalars['Float']['output']>;
  account_client?: Maybe<Scalars['String']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  created_at: Scalars['DateTimeUtc']['output'];
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  sender_recipient?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_id: Scalars['ID']['output'];
};

export enum AccountType {
  Business = 'Business',
  Private = 'Private'
}

export type ActiveSession = {
  __typename?: 'ActiveSession';
  browser?: Maybe<Scalars['String']['output']>;
  browser_version?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company: Scalars['String']['output'];
  country?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeUtc']['output'];
  device_type?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  id: Scalars['String']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  trusted?: Maybe<Scalars['Boolean']['output']>;
};

export type ActiveSessionMutatorResponse = {
  __typename?: 'ActiveSessionMutatorResponse';
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type ActiveSessions = {
  __typename?: 'ActiveSessions';
  data?: Maybe<Array<ActiveSession>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ActivityLog = {
  __typename?: 'ActivityLog';
  changes?: Maybe<Scalars['String']['output']>;
  company: Scalars['String']['output'];
  created_at: Scalars['DateTimeUtc']['output'];
  description?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  group: Scalars['String']['output'];
  id: Scalars['String']['output'];
  member: Scalars['String']['output'];
};

export type ActivityLogs = {
  __typename?: 'ActivityLogs';
  data?: Maybe<Array<ActivityLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type AdditionalFieldInput = {
  field_name?: InputMaybe<Scalars['String']['input']>;
  field_type?: InputMaybe<FieldTypes>;
  field_value?: InputMaybe<Scalars['StringInteger']['input']>;
};

export type ApplicantAccount = {
  __typename?: 'ApplicantAccount';
  account_name: Scalars['String']['output'];
  account_number?: Maybe<Scalars['String']['output']>;
  account_type: Scalars['String']['output'];
  currency?: Maybe<Currencies>;
  current_balance?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['ID']['output'];
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  is_show?: Maybe<Scalars['Boolean']['output']>;
};

export type ApplicantBankingAccess = {
  __typename?: 'ApplicantBankingAccess';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_individual?: Maybe<ApplicantIndividual>;
  contact_administrator: Scalars['Boolean']['output'];
  create_payments?: Maybe<Scalars['Boolean']['output']>;
  daily_limit: Scalars['Decimal']['output'];
  grant_access?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Members>;
  monthly_limit: Scalars['Decimal']['output'];
  operation_limit: Scalars['Decimal']['output'];
  role?: Maybe<Role>;
  sign_payments?: Maybe<Scalars['Boolean']['output']>;
  used_daily_limit: Scalars['Decimal']['output'];
  used_monthly_limit: Scalars['Decimal']['output'];
};

export type ApplicantBankingAccesses = {
  __typename?: 'ApplicantBankingAccesses';
  data?: Maybe<Array<ApplicantBankingAccess>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export enum ApplicantClientType {
  Corporate = 'Corporate',
  Private = 'Private'
}

export type ApplicantCompany = {
  __typename?: 'ApplicantCompany';
  address?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  applicant_state?: Maybe<ApplicantState>;
  basic_info_additional_field?: Maybe<Scalars['JSON']['output']>;
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  company_info_additional_fields?: Maybe<Scalars['JSON']['output']>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  company_type?: Maybe<Scalars['String']['output']>;
  contact_email?: Maybe<Scalars['EMAIL']['output']>;
  contact_phone?: Maybe<Scalars['String']['output']>;
  contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  email?: Maybe<Scalars['EMAIL']['output']>;
  email_verification?: Maybe<ApplicantVerificationStatus>;
  expires_at?: Maybe<Scalars['Date']['output']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  incorporate_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  kyc_level?: Maybe<ApplicantRiskLevel>;
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  language?: Maybe<Languages>;
  license_number?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Members>;
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  office_address?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<ApplicantIndividual>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  photo?: Maybe<Files>;
  profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  project?: Maybe<Project>;
  reg_at?: Maybe<Scalars['Date']['output']>;
  reg_number?: Maybe<Scalars['String']['output']>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  state?: Maybe<Scalars['String']['output']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  tax?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type ApplicantCompanyBusinessType = {
  __typename?: 'ApplicantCompanyBusinessType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantCompanyBusinessTypePaginator = {
  __typename?: 'ApplicantCompanyBusinessTypePaginator';
  data: Array<ApplicantCompanyBusinessType>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyLabel = {
  __typename?: 'ApplicantCompanyLabel';
  hex_color_code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type ApplicantCompanyLabelPaginator = {
  __typename?: 'ApplicantCompanyLabelPaginator';
  data: Array<ApplicantCompanyLabel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyModules = {
  __typename?: 'ApplicantCompanyModules';
  id?: Maybe<Scalars['ID']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ApplicantCompanyNotes = {
  __typename?: 'ApplicantCompanyNotes';
  applicant?: Maybe<ApplicantCompany>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  note: Scalars['String']['output'];
};

export type ApplicantCompanyNotesPaginator = {
  __typename?: 'ApplicantCompanyNotesPaginator';
  data: Array<ApplicantCompanyNotes>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyPaginator = {
  __typename?: 'ApplicantCompanyPaginator';
  data: Array<ApplicantCompany>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyRiskLevelHistory = {
  __typename?: 'ApplicantCompanyRiskLevelHistory';
  applicant_company?: Maybe<ApplicantCompany>;
  comment: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  manager?: Maybe<Members>;
  risk_level?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantCompanyRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
  data: Array<ApplicantCompanyRiskLevelHistory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDetailsRequisites = {
  __typename?: 'ApplicantDetailsRequisites';
  address: Scalars['String']['output'];
  bank_address: Scalars['String']['output'];
  bank_country: Scalars['String']['output'];
  bank_name: Scalars['String']['output'];
  beneficiary: Scalars['String']['output'];
  country: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  iban: Scalars['String']['output'];
  swift_code: Scalars['String']['output'];
};

export type ApplicantDevice = {
  __typename?: 'ApplicantDevice';
  browser?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeUtc']['output'];
  device_type?: Maybe<Scalars['String']['output']>;
  expired_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  trusted: Scalars['Boolean']['output'];
};

export type ApplicantDocument = {
  __typename?: 'ApplicantDocument';
  added_from?: Maybe<Scalars['String']['output']>;
  applicant_id: Scalars['ID']['output'];
  applicant_type: ApplicantType;
  company?: Maybe<Company>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  document_state?: Maybe<DocumentState>;
  document_state_id?: Maybe<Scalars['ID']['output']>;
  document_type?: Maybe<DocumentType>;
  document_type_id?: Maybe<Scalars['ID']['output']>;
  file?: Maybe<Files>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  internal_notes?: Maybe<Array<Maybe<ApplicantDocumentInternalNote>>>;
  reject_details?: Maybe<Array<Maybe<ApplicantDocumentRejectDetail>>>;
  tags?: Maybe<Array<Maybe<ApplicantDocumentTag>>>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type ApplicantDocumentInternalNote = {
  __typename?: 'ApplicantDocumentInternalNote';
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  document?: Maybe<ApplicantDocument>;
  id: Scalars['ID']['output'];
  member?: Maybe<Members>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type ApplicantDocumentInternalNotePaginator = {
  __typename?: 'ApplicantDocumentInternalNotePaginator';
  data: Array<ApplicantDocumentInternalNote>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentPaginator = {
  __typename?: 'ApplicantDocumentPaginator';
  data: Array<ApplicantDocument>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentRejectDetail = {
  __typename?: 'ApplicantDocumentRejectDetail';
  applicant_document: ApplicantDocument;
  applicant_document_tag?: Maybe<Array<ApplicantDocumentTag>>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Members>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type ApplicantDocumentTag = {
  __typename?: 'ApplicantDocumentTag';
  category?: Maybe<ApplicantDocumentTagCategory>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Members>;
  name: Scalars['String']['output'];
};

export type ApplicantDocumentTagCategory = {
  __typename?: 'ApplicantDocumentTagCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantDocumentTagCategoryPaginator = {
  __typename?: 'ApplicantDocumentTagCategoryPaginator';
  data: Array<ApplicantDocumentTagCategory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentTagPaginator = {
  __typename?: 'ApplicantDocumentTagPaginator';
  data: Array<ApplicantDocumentTag>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividual = {
  __typename?: 'ApplicantIndividual';
  address?: Maybe<Scalars['String']['output']>;
  address_additional_fields?: Maybe<Scalars['JSON']['output']>;
  applicant_companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  applicant_state?: Maybe<ApplicantState>;
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  banking_access?: Maybe<Array<Maybe<ApplicantBankingAccess>>>;
  birth_at?: Maybe<Scalars['Date']['output']>;
  birth_city?: Maybe<Scalars['String']['output']>;
  birth_country?: Maybe<Country>;
  birth_state?: Maybe<Scalars['String']['output']>;
  citizenship_country?: Maybe<Country>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  email?: Maybe<Scalars['EMAIL']['output']>;
  email_verification?: Maybe<ApplicantVerificationStatus>;
  first_name?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  kyc_level?: Maybe<ApplicantKycLevel>;
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  language?: Maybe<Languages>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_screened_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  manager?: Maybe<Members>;
  middle_name?: Maybe<Scalars['String']['output']>;
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  nationality?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  personal_additional_fields?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  photo?: Maybe<Files>;
  profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  project?: Maybe<Project>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  security_pin?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Sex>;
  state?: Maybe<Scalars['String']['output']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type ApplicantIndividualCompany = {
  __typename?: 'ApplicantIndividualCompany';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_company_id: Scalars['ID']['output'];
  applicant_id: Scalars['ID']['output'];
  applicant_individual_company_position_id: Scalars['ID']['output'];
  applicant_individual_company_relation_id: Scalars['ID']['output'];
  applicant_type: Scalars['String']['output'];
  client?: Maybe<Client>;
  percentage_owned?: Maybe<Scalars['Float']['output']>;
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
};

export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  company?: Maybe<Company>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  data: Array<ApplicantIndividualCompanyPosition>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  company?: Maybe<Company>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  data: Array<ApplicantIndividualCompanyRelation>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualLabel = {
  __typename?: 'ApplicantIndividualLabel';
  hex_color_code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type ApplicantIndividualLabelPaginator = {
  __typename?: 'ApplicantIndividualLabelPaginator';
  data: Array<ApplicantIndividualLabel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualModules = {
  __typename?: 'ApplicantIndividualModules';
  id?: Maybe<Scalars['ID']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ApplicantIndividualNotes = {
  __typename?: 'ApplicantIndividualNotes';
  applicant?: Maybe<ApplicantIndividual>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  note: Scalars['String']['output'];
};

export type ApplicantIndividualNotesPaginator = {
  __typename?: 'ApplicantIndividualNotesPaginator';
  data: Array<ApplicantIndividualNotes>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualPaginator = {
  __typename?: 'ApplicantIndividualPaginator';
  data: Array<ApplicantIndividual>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantKycLevel = {
  __typename?: 'ApplicantKycLevel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantKycLevelPaginator = {
  __typename?: 'ApplicantKycLevelPaginator';
  data: Array<ApplicantKycLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantLinkedCompany = {
  __typename?: 'ApplicantLinkedCompany';
  company?: Maybe<ApplicantCompany>;
  company_position?: Maybe<ApplicantIndividualCompanyPosition>;
  company_relation?: Maybe<ApplicantIndividualCompanyRelation>;
  percentage_owned?: Maybe<Scalars['Float']['output']>;
};

export type ApplicantModules = {
  __typename?: 'ApplicantModules';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantModulesPaginator = {
  __typename?: 'ApplicantModulesPaginator';
  data: Array<ApplicantModules>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantProfile = {
  __typename?: 'ApplicantProfile';
  address?: Maybe<Scalars['String']['output']>;
  applicant_state?: Maybe<ApplicantState>;
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  birth_at?: Maybe<Scalars['Date']['output']>;
  birth_city?: Maybe<Scalars['String']['output']>;
  birth_country?: Maybe<Country>;
  birth_state?: Maybe<Scalars['String']['output']>;
  citizenship_country?: Maybe<Country>;
  city?: Maybe<Scalars['String']['output']>;
  companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  company?: Maybe<Company>;
  contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  email?: Maybe<Scalars['EMAIL']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  is_verification_phone?: Maybe<Scalars['Boolean']['output']>;
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  language?: Maybe<Languages>;
  last_name?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Members>;
  middle_name?: Maybe<Scalars['String']['output']>;
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  nationality?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  notify_device_email?: Maybe<Scalars['Boolean']['output']>;
  personal_additional_fields?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Files>;
  profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  security_pin?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Sex>;
  state?: Maybe<Scalars['String']['output']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  url?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type ApplicantRequisites = {
  __typename?: 'ApplicantRequisites';
  account_number: Scalars['String']['output'];
  bank?: Maybe<PaymentBank>;
  currency?: Maybe<Currencies>;
  id: Scalars['ID']['output'];
  owner?: Maybe<ApplicantProfile>;
};

export type ApplicantRiskLevel = {
  __typename?: 'ApplicantRiskLevel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantRiskLevelHistory = {
  __typename?: 'ApplicantRiskLevelHistory';
  applicant?: Maybe<ApplicantIndividual>;
  comment: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  manager?: Maybe<Members>;
  risk_level?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantRiskLevelHistoryPaginator';
  data: Array<ApplicantRiskLevelHistory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantRiskLevelPaginator = {
  __typename?: 'ApplicantRiskLevelPaginator';
  data: Array<ApplicantRiskLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantSettingsProfile = {
  __typename?: 'ApplicantSettingsProfile';
  email?: Maybe<Scalars['EMAIL']['output']>;
  email_confirm_url?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
};

export type ApplicantState = {
  __typename?: 'ApplicantState';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantStatePaginator = {
  __typename?: 'ApplicantStatePaginator';
  data: Array<ApplicantState>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantStateReason = {
  __typename?: 'ApplicantStateReason';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantStateReasonPaginator = {
  __typename?: 'ApplicantStateReasonPaginator';
  data: Array<ApplicantStateReason>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantStatus = {
  __typename?: 'ApplicantStatus';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApplicantStatusPaginator = {
  __typename?: 'ApplicantStatusPaginator';
  data: Array<ApplicantStatus>;
  paginatorInfo: PaginatorInfo;
};

export enum ApplicantType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual'
}

export type ApplicantVerificationStatus = {
  __typename?: 'ApplicantVerificationStatus';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AuthenticationLog = {
  __typename?: 'AuthenticationLog';
  browser?: Maybe<Scalars['String']['output']>;
  browser_version?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  client_type: Scalars['String']['output'];
  company: Scalars['String']['output'];
  country?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeUtc']['output'];
  device_type?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  email: Scalars['String']['output'];
  expired_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  group: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  member: Scalars['String']['output'];
  model?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationLogs = {
  __typename?: 'AuthenticationLogs';
  data?: Maybe<Array<AuthenticationLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type BankCorrespondent = {
  __typename?: 'BankCorrespondent';
  address: Scalars['String']['output'];
  bank_account: Scalars['String']['output'];
  bank_code: Scalars['String']['output'];
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type BankCorrespondentPaginator = {
  __typename?: 'BankCorrespondentPaginator';
  data: Array<BankCorrespondent>;
  paginatorInfo: PaginatorInfo;
};

export type BusinessActivity = {
  __typename?: 'BusinessActivity';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type BusinessActivityPaginator = {
  __typename?: 'BusinessActivityPaginator';
  data: Array<BusinessActivity>;
  paginatorInfo: PaginatorInfo;
};

export type Client = ApplicantCompany | ApplicantIndividual;

export type ClientAccountsDetails = {
  __typename?: 'ClientAccountsDetails';
  available_balance: Scalars['Decimal']['output'];
  currency: Currencies;
  current_balance: Scalars['Decimal']['output'];
  id: Scalars['ID']['output'];
  max_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  min_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  reserved_balance: Scalars['Decimal']['output'];
};

export type ClientIpAddress = {
  __typename?: 'ClientIpAddress';
  client_id?: Maybe<Scalars['ID']['output']>;
  client_type?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_address?: Maybe<Scalars['String']['output']>;
};

export enum ClientType {
  Administration = 'Administration',
  Client = 'Client'
}

export type Clientable = ApplicantCompany | ApplicantIndividual | Members;

export enum Column {
  CreatedAt = 'CREATED_AT',
  ExpiredAt = 'EXPIRED_AT',
  Id = 'ID'
}

export type CommissionPriceList = {
  __typename?: 'CommissionPriceList';
  account?: Maybe<Account>;
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Company>;
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  payment_system?: Maybe<PaymentSystem>;
  provider?: Maybe<PaymentProvider>;
  region?: Maybe<Region>;
};

export type CommissionPriceListPaginator = {
  __typename?: 'CommissionPriceListPaginator';
  data: Array<CommissionPriceList>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplate = {
  __typename?: 'CommissionTemplate';
  account?: Maybe<Account>;
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
  company?: Maybe<Company>;
  country_id?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  currency_id?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  payment_provider?: Maybe<PaymentProvider>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type CommissionTemplateLimit = {
  __typename?: 'CommissionTemplateLimit';
  amount: Scalars['Decimal']['output'];
  commission_template: CommissionTemplate;
  commission_template_limit_action_type: CommissionTemplateLimitActionType;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_transfer_direction: CommissionTemplateLimitTransferDirection;
  commission_template_limit_type: CommissionTemplateLimitType;
  currency: Currencies;
  id: Scalars['ID']['output'];
  payment_system: PaymentSystem;
  period_count?: Maybe<Scalars['Int']['output']>;
  region: Region;
};

export type CommissionTemplateLimitActionType = {
  __typename?: 'CommissionTemplateLimitActionType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CommissionTemplateLimitActionTypePaginator = {
  __typename?: 'CommissionTemplateLimitActionTypePaginator';
  data: Array<CommissionTemplateLimitActionType>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPaginator = {
  __typename?: 'CommissionTemplateLimitPaginator';
  data: Array<CommissionTemplateLimit>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPeriod = {
  __typename?: 'CommissionTemplateLimitPeriod';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CommissionTemplateLimitPeriodPaginator = {
  __typename?: 'CommissionTemplateLimitPeriodPaginator';
  data: Array<CommissionTemplateLimitPeriod>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitTransferDirection = {
  __typename?: 'CommissionTemplateLimitTransferDirection';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CommissionTemplateLimitTransferDirectionPaginator = {
  __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
  data: Array<CommissionTemplateLimitTransferDirection>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitType = {
  __typename?: 'CommissionTemplateLimitType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CommissionTemplateLimitTypePaginator = {
  __typename?: 'CommissionTemplateLimitTypePaginator';
  data: Array<CommissionTemplateLimitType>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplatePaginator = {
  __typename?: 'CommissionTemplatePaginator';
  data: Array<CommissionTemplate>;
  paginatorInfo: PaginatorInfo;
};

export type Company = {
  __typename?: 'Company';
  additional_fields_basic?: Maybe<Scalars['JSON']['output']>;
  additional_fields_data?: Maybe<Scalars['JSON']['output']>;
  additional_fields_info?: Maybe<Scalars['JSON']['output']>;
  additional_fields_settings?: Maybe<Scalars['JSON']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  backoffice_forgot_password_url?: Maybe<Scalars['String']['output']>;
  backoffice_login_url?: Maybe<Scalars['String']['output']>;
  backoffice_support_email?: Maybe<Scalars['EMAIL']['output']>;
  backoffice_support_url?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company_modules?: Maybe<Array<Maybe<CompanyModule>>>;
  company_number?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  created_at: Scalars['DateTimeUtc']['output'];
  departments?: Maybe<Array<Maybe<Department>>>;
  email: Scalars['EMAIL']['output'];
  employees?: Maybe<Employee>;
  entity_type?: Maybe<Scalars['String']['output']>;
  exp_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  incorporate_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  license_number?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Files>;
  member_verify_url?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<Maybe<Members>>>;
  members_count?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  projects_count?: Maybe<Scalars['Int']['output']>;
  reg_address?: Maybe<Scalars['String']['output']>;
  reg_number?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  state_reason?: Maybe<StateReason>;
  tax_id?: Maybe<Scalars['String']['output']>;
  type_of_industry?: Maybe<TypeOfIndustry>;
  updated_at: Scalars['DateTimeUtc']['output'];
  url?: Maybe<Scalars['String']['output']>;
  vv_token?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type CompanyModule = {
  __typename?: 'CompanyModule';
  iban_providers?: Maybe<Array<Maybe<CompanyModuleIbanProvider>>>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  module?: Maybe<Module>;
  payment_providers?: Maybe<Array<Maybe<CompanyModulePaymentProvider>>>;
};

export type CompanyModuleIbanProvider = {
  __typename?: 'CompanyModuleIbanProvider';
  company_module_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  payment_provider_iban: PaymentProviderIban;
};

export type CompanyModuleIbanProviderPassword = {
  __typename?: 'CompanyModuleIbanProviderPassword';
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
};

export type CompanyModulePaymentProvider = {
  __typename?: 'CompanyModulePaymentProvider';
  company_module_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  payment_provider: PaymentProvider;
};

export type CompanyModulePaymentProviderPassword = {
  __typename?: 'CompanyModulePaymentProviderPassword';
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
};

export type CompanyPaginator = {
  __typename?: 'CompanyPaginator';
  data: Array<Company>;
  paginatorInfo: PaginatorInfo;
};

export type ConnectImageableInput = {
  id: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID']['output'];
  iso: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CountryPaginator = {
  __typename?: 'CountryPaginator';
  data: Array<Country>;
  paginatorInfo: PaginatorInfo;
};

export type Currencies = {
  __typename?: 'Currencies';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  minor_unit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type CurrenciesPaginator = {
  __typename?: 'CurrenciesPaginator';
  data: Array<Currencies>;
  paginatorInfo: PaginatorInfo;
};

export type DateRange = {
  from: Scalars['Date']['input'];
  to: Scalars['DateEnd']['input'];
};

export type DateTimeRange = {
  from: Scalars['DateTimeUtc']['input'];
  to: Scalars['DateTimeUtc']['input'];
};

export type Department = {
  __typename?: 'Department';
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

export type DepartmentPaginator = {
  __typename?: 'DepartmentPaginator';
  data: Array<Department>;
  paginatorInfo: PaginatorInfo;
};

export type DepartmentPosition = {
  __typename?: 'DepartmentPosition';
  company?: Maybe<Company>;
  department?: Maybe<Array<Maybe<Department>>>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type DepartmentPositionPaginator = {
  __typename?: 'DepartmentPositionPaginator';
  data: Array<DepartmentPosition>;
  paginatorInfo: PaginatorInfo;
};

export type DocumentState = {
  __typename?: 'DocumentState';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum DocumentStateEnum {
  Approve = 'Approve',
  Declined = 'Declined',
  Pending = 'Pending',
  Processing = 'Processing'
}

export type DocumentType = {
  __typename?: 'DocumentType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type EmailNotification = {
  __typename?: 'EmailNotification';
  clientable?: Maybe<Clientable>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  group_role?: Maybe<GroupRole>;
  group_type?: Maybe<GroupType>;
  id: Scalars['ID']['output'];
  recipient_type?: Maybe<RecipientType>;
  templates?: Maybe<Array<Maybe<EmailTemplate>>>;
  type?: Maybe<NotifyType>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type EmailNotificationPaginator = {
  __typename?: 'EmailNotificationPaginator';
  data: Array<EmailNotification>;
  paginatorInfo: PaginatorInfo;
};

export type EmailSmtp = {
  __typename?: 'EmailSmtp';
  company?: Maybe<Company>;
  from_email?: Maybe<Scalars['String']['output']>;
  from_name?: Maybe<Scalars['String']['output']>;
  host_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_sending_mail?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Members>;
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  port: Scalars['Int']['output'];
  replay_to?: Maybe<Scalars['String']['output']>;
  security?: Maybe<Securities>;
  username: Scalars['String']['output'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  company?: Maybe<Company>;
  content: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<EmailTemplateLayout>;
  name: Scalars['String']['output'];
  service_type: ServiceType;
  subject: Scalars['String']['output'];
  type: ClientType;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  use_layout?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailTemplateLayout = {
  __typename?: 'EmailTemplateLayout';
  company_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  footer: Scalars['String']['output'];
  header: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type EmailTemplateOnCompanyResponse = {
  __typename?: 'EmailTemplateOnCompanyResponse';
  data: Array<EmailTemplate>;
  layout?: Maybe<EmailTemplateLayout>;
};

export enum EmailVerification {
  NotVerified = 'NOT_VERIFIED',
  Requested = 'REQUESTED',
  Verified = 'VERIFIED'
}

export type Employee = {
  __typename?: 'Employee';
  employees_number: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Fee = {
  __typename?: 'Fee';
  account?: Maybe<Account>;
  client?: Maybe<Client>;
  created_at: Scalars['DateTimeUtc']['output'];
  fee: Scalars['Decimal']['output'];
  fee_amount: Scalars['Decimal']['output'];
  fee_pp: Scalars['Decimal']['output'];
  member?: Maybe<Members>;
  operation_type?: Maybe<OperationType>;
  price_list_fee?: Maybe<PriceListFee>;
  status?: Maybe<PaymentStatus>;
  transfer_outgoing?: Maybe<TransferOutgoing>;
  transfer_type: Scalars['String']['output'];
};

export type FeeItem = {
  __typename?: 'FeeItem';
  amount_from?: Maybe<Scalars['Int']['output']>;
  amount_to?: Maybe<Scalars['Int']['output']>;
  fee?: Maybe<Scalars['Int']['output']>;
  mode: Scalars['String']['output'];
  percent?: Maybe<Scalars['Int']['output']>;
};

export type FeeMode = {
  __typename?: 'FeeMode';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type FeePeriod = {
  __typename?: 'FeePeriod';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FeeType = {
  __typename?: 'FeeType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum FieldTypes {
  CountryList = 'CountryList',
  Text = 'Text',
  TextArea = 'TextArea'
}

export enum FileEntityTypeEnum {
  Applicant = 'APPLICANT',
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Company = 'COMPANY',
  Document = 'DOCUMENT',
  File = 'FILE',
  Member = 'MEMBER',
  Project = 'PROJECT'
}

export type Files = {
  __typename?: 'Files';
  author_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  entity_type: FileEntityTypeEnum;
  file_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  mime_type: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  storage_name: Scalars['String']['output'];
  storage_path: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type FilesPaginator = {
  __typename?: 'FilesPaginator';
  data: Array<Files>;
  paginatorInfo: PaginatorInfo;
};

export type FilterConditions = {
  AND?: InputMaybe<Array<FilterConditions>>;
  OR?: InputMaybe<Array<FilterConditions>>;
  column?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type GroupRole = {
  __typename?: 'GroupRole';
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']['output']>;
  group_type?: Maybe<GroupType>;
  group_type_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  module?: Maybe<Module>;
  module_id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  providers?: Maybe<Array<Maybe<GroupRoleProvider>>>;
  role?: Maybe<Role>;
  role_id?: Maybe<Scalars['ID']['output']>;
};

export type GroupRolePaginator = {
  __typename?: 'GroupRolePaginator';
  data: Array<GroupRole>;
  paginatorInfo: PaginatorInfo;
};

export type GroupRoleProvider = {
  __typename?: 'GroupRoleProvider';
  commission_template?: Maybe<CommissionTemplate>;
  group_role_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  is_default?: Maybe<Scalars['Boolean']['output']>;
  payment_provider?: Maybe<PaymentProvider>;
};

export type GroupRoleView = {
  __typename?: 'GroupRoleView';
  commission_template_id?: Maybe<Scalars['ID']['output']>;
  commission_template_name?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']['output']>;
  group_type?: Maybe<GroupType>;
  group_type_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  module?: Maybe<Module>;
  module_id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  payment_provider_id?: Maybe<Scalars['ID']['output']>;
  payment_provider_name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  role_id?: Maybe<Scalars['ID']['output']>;
};

export type GroupRoleViewPaginator = {
  __typename?: 'GroupRoleViewPaginator';
  data: Array<GroupRoleView>;
  paginatorInfo: PaginatorInfo;
};

export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['ID']['output'];
  name: GroupsEntities;
};

export enum GroupTypeMode {
  All = 'ALL',
  Clients = 'CLIENTS'
}

export type GroupTypePaginator = {
  __typename?: 'GroupTypePaginator';
  data: Array<GroupType>;
  paginatorInfo: PaginatorInfo;
};

export type Groups = {
  __typename?: 'Groups';
  /** @deprecated Field no longer supported */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID']['output'];
  name: GroupsEntities;
};

export enum GroupsEntities {
  Company = 'Company',
  Individual = 'Individual',
  Member = 'Member'
}

export type ImageableMorphToTable = {
  connect?: InputMaybe<ConnectImageableInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputAccount = {
  account_name: Scalars['String']['input'];
  account_number?: InputMaybe<Scalars['String']['input']>;
  clientableAttach?: InputMaybe<PivotTable>;
  commission_template_id: Scalars['ID']['input'];
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  iban_provider_id?: InputMaybe<Scalars['ID']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  max_limit_balance?: InputMaybe<Scalars['Decimal']['input']>;
  min_limit_balance?: InputMaybe<Scalars['Decimal']['input']>;
  owner_id: Scalars['ID']['input'];
  payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id: Scalars['ID']['input'];
  payment_system_id: Scalars['ID']['input'];
};

export type InputCommissionTemplate = {
  business_activity?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  region_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type InputCommissionTemplateLimit = {
  amount: Scalars['Decimal']['input'];
  commission_template_id: Scalars['ID']['input'];
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_transfer_direction_id: Scalars['ID']['input'];
  commission_template_limit_type_id: Scalars['ID']['input'];
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  period_count?: InputMaybe<Scalars['ID']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputCompanyModuleIbanProvider = {
  company_module_id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  payment_provider_iban_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputCompanyModulePaymentProvider = {
  company_module_id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputGroupRoleProvider = {
  commission_template_id: Scalars['ID']['input'];
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  payment_provider_id: Scalars['ID']['input'];
};

export type InputMemberAccessLimitation = {
  company_id: Scalars['ID']['input'];
  groupRoles?: InputMaybe<PivotTable>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  member_id: Scalars['ID']['input'];
  module_id: Scalars['ID']['input'];
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  see_own_applicants?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputPaymentBank = {
  address: Scalars['String']['input'];
  bank_code?: InputMaybe<Scalars['String']['input']>;
  country_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  payment_provider_id: Scalars['ID']['input'];
  payment_system_code?: InputMaybe<Scalars['String']['input']>;
  payment_system_id: Scalars['ID']['input'];
};

export type InputPaymentProvider = {
  company_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  logo_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type InputPaymentProviderIban = {
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type InputPaymentSystem = {
  banks?: InputMaybe<PivotTable>;
  currencies?: InputMaybe<PivotTable>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  logo_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  operations?: InputMaybe<PivotTable>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  regions?: InputMaybe<PivotTable>;
};

export type InputProject = {
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  avatar_id?: InputMaybe<Scalars['ID']['input']>;
  client_url?: InputMaybe<Scalars['String']['input']>;
  company_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  forgot_password_url?: InputMaybe<Scalars['String']['input']>;
  login_url?: InputMaybe<Scalars['String']['input']>;
  module_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  project_settings?: InputMaybe<Array<InputMaybe<InputProjectSettings>>>;
  sms_sender_name?: InputMaybe<Scalars['String']['input']>;
  state_id?: InputMaybe<Scalars['ID']['input']>;
  support_email?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InputProjectApiSetting = {
  api_key: Scalars['String']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  provider_id: Scalars['ID']['input'];
  provider_type: ProviderTypeEnum;
  wallet: Scalars['String']['input'];
};

export type InputProjectSettings = {
  applicant_type: ApplicantType;
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  group_role_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  iban_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputRegion = {
  company_id: Scalars['ID']['input'];
  countries?: InputMaybe<PivotTable>;
  name: Scalars['String']['input'];
};

export type KycTimeline = {
  __typename?: 'KycTimeline';
  action: Scalars['String']['output'];
  action_new_value?: Maybe<Scalars['JSON']['output']>;
  action_old_value?: Maybe<Scalars['JSON']['output']>;
  action_type: KycTimelineActionType;
  applicant?: Maybe<Client>;
  applicant_id: Scalars['ID']['output'];
  applicant_type: ApplicantType;
  browser: Scalars['String']['output'];
  company?: Maybe<Company>;
  created_at: Scalars['DateTimeUtc']['output'];
  creator?: Maybe<Members>;
  document?: Maybe<ApplicantDocument>;
  id: Scalars['ID']['output'];
  ip: Scalars['String']['output'];
  os: Scalars['String']['output'];
  tag: Scalars['String']['output'];
};

export enum KycTimelineActionType {
  DocumentState = 'DOCUMENT_STATE',
  DocumentUpload = 'DOCUMENT_UPLOAD',
  Email = 'EMAIL',
  Profile = 'PROFILE',
  Verification = 'VERIFICATION'
}

export type KycTimelines = {
  __typename?: 'KycTimelines';
  data?: Maybe<Array<KycTimeline>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type Languages = {
  __typename?: 'Languages';
  id: Scalars['ID']['output'];
  iso: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LanguagesPaginator = {
  __typename?: 'LanguagesPaginator';
  data: Array<Languages>;
  paginatorInfo: PaginatorInfo;
};

export type MemberAccessLimitation = {
  __typename?: 'MemberAccessLimitation';
  company?: Maybe<Company>;
  group?: Maybe<GroupType>;
  group_roles?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID']['output'];
  member?: Maybe<Members>;
  module?: Maybe<Module>;
  project?: Maybe<Project>;
  provider?: Maybe<PaymentProvider>;
  see_own_applicants?: Maybe<Scalars['Boolean']['output']>;
};

export type MemberAccessLimitationPaginator = {
  __typename?: 'MemberAccessLimitationPaginator';
  data: Array<MemberAccessLimitation>;
  paginatorInfo: PaginatorInfo;
};

export type MemberProfile = {
  __typename?: 'MemberProfile';
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  additional_fields?: Maybe<Scalars['JSON']['output']>;
  additional_info_fields?: Maybe<Scalars['JSON']['output']>;
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  company: Company;
  country?: Maybe<Country>;
  department?: Maybe<Department>;
  email?: Maybe<Scalars['EMAIL']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_show_owner_applicants?: Maybe<Scalars['Boolean']['output']>;
  is_sign_transaction?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Languages>;
  last_login_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<DepartmentPosition>;
  security_pin?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Sex>;
  two_factor_auth_setting_id?: Maybe<Scalars['ID']['output']>;
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

export type MemberStatus = {
  __typename?: 'MemberStatus';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Members = {
  __typename?: 'Members';
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  additional_fields?: Maybe<Scalars['JSON']['output']>;
  additional_info_fields?: Maybe<Scalars['JSON']['output']>;
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  company?: Maybe<Company>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  department?: Maybe<Department>;
  email?: Maybe<Scalars['EMAIL']['output']>;
  email_verification?: Maybe<EmailVerification>;
  first_name?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  is_show_owner_applicants?: Maybe<Scalars['Boolean']['output']>;
  is_sign_transaction?: Maybe<Scalars['Boolean']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Languages>;
  last_login_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  member_status?: Maybe<MemberStatus>;
  photo?: Maybe<Files>;
  position?: Maybe<DepartmentPosition>;
  security_pin?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Sex>;
  two_factor_auth_setting_id?: Maybe<Scalars['ID']['output']>;
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

export type MembersPaginator = {
  __typename?: 'MembersPaginator';
  data: Array<Members>;
  paginatorInfo: PaginatorInfo;
};

export type Module = {
  __typename?: 'Module';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCompanyModule?: Maybe<Company>;
  attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  attachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  cancelTransferOutgoingFee?: Maybe<TransferOutgoing>;
  createAccount: Array<Account>;
  createAccountLimit?: Maybe<AccountLimit>;
  createApplicant?: Maybe<ApplicantSettingsProfile>;
  createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  createApplicantCompany?: Maybe<ApplicantCompany>;
  createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  createApplicantDocument?: Maybe<ApplicantDocument>;
  createApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  createApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  createApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  createApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  createApplicantIndividual?: Maybe<ApplicantIndividual>;
  createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  createApplicantModule?: Maybe<ApplicantModules>;
  createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  createApplicantStateReason?: Maybe<ApplicantStateReason>;
  createBankCorrespondent?: Maybe<BankCorrespondent>;
  createBusinessActivity?: Maybe<BusinessActivity>;
  createCommissionPriceList?: Maybe<CommissionPriceList>;
  createCommissionTemplate?: Maybe<CommissionTemplate>;
  createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  createCompany?: Maybe<Company>;
  createCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  createCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  createDepartment?: Maybe<Department>;
  createDepartmentPosition?: Maybe<DepartmentPosition>;
  createDocumentType?: Maybe<DocumentType>;
  createEmailNotification?: Maybe<EmailNotification>;
  createEmailSmtp?: Maybe<EmailSmtp>;
  createEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  createGroupSettings?: Maybe<GroupRole>;
  createMember?: Maybe<Members>;
  createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  createModule?: Maybe<Module>;
  createPayment?: Maybe<Payments>;
  createPaymentBank?: Maybe<PaymentBank>;
  createPaymentProvider?: Maybe<PaymentProvider>;
  createPaymentProviderIban?: Maybe<PaymentProviderIban>;
  createPaymentSystem?: Maybe<PaymentSystem>;
  createPriceListFees?: Maybe<PriceListFee>;
  createProject?: Maybe<Project>;
  createRegion?: Maybe<Region>;
  createRole?: Maybe<Role>;
  createTicket?: Maybe<Ticket>;
  createTicketComment?: Maybe<TicketComments>;
  createTransferOutgoing?: Maybe<TransferOutgoing>;
  createTransferOutgoingFee?: Maybe<TransferOutgoing>;
  deleteAccount?: Maybe<Account>;
  deleteAccountLimit?: Maybe<AccountLimit>;
  deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  deleteApplicantBankingMember?: Maybe<ApplicantBankingAccess>;
  deleteApplicantCompany?: Maybe<ApplicantCompany>;
  deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  deleteApplicantDevice?: Maybe<ApplicantDevice>;
  deleteApplicantDocument?: Maybe<ApplicantDocument>;
  deleteApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  deleteApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  deleteApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  deleteApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  deleteApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  deleteApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  deleteBankCorrespondent?: Maybe<BankCorrespondent>;
  deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  deleteCompany?: Maybe<Company>;
  deleteCompanyModule?: Maybe<Company>;
  deleteCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  deleteCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  deleteDepartment?: Maybe<Department>;
  deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  deleteDocumentType?: Maybe<DocumentType>;
  deleteEmailNotification?: Maybe<EmailNotification>;
  deleteEmailSmtp: Array<EmailSmtp>;
  deleteEmailTemplate?: Maybe<EmailTemplate>;
  deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  deleteFile?: Maybe<Files>;
  deleteGroup?: Maybe<GroupRole>;
  deleteMember?: Maybe<Members>;
  deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  deletePayment?: Maybe<Payments>;
  deletePaymentBank?: Maybe<PaymentBank>;
  deletePaymentProvider?: Maybe<PaymentProvider>;
  deletePaymentProviderIban?: Maybe<PaymentProviderIban>;
  deletePaymentSystem?: Maybe<PaymentSystem>;
  deletePriceListFees?: Maybe<PriceListFee>;
  deleteProject?: Maybe<Project>;
  deleteRegion?: Maybe<Region>;
  deleteRole?: Maybe<Role>;
  deleteTagApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  detachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  generateIban: AccountGenerateIbanResponse;
  grantApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  resetMemberPassword?: Maybe<Members>;
  sendConfirmChangeEmail?: Maybe<StatusType>;
  sendEmail?: Maybe<StatusType>;
  sendEmailRegistation?: Maybe<ApplicantIndividual>;
  sendEmailResetPassword?: Maybe<ApplicantIndividual>;
  sendEmailVerification?: Maybe<ApplicantIndividual>;
  sendEmailVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  sendEmailWithTemplate?: Maybe<StatusType>;
  sendMemberEmailVerification?: Maybe<Members>;
  sendPhoneVerification?: Maybe<ApplicantIndividual>;
  sendPhoneVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  setApplicantSecurityPin?: Maybe<ApplicantIndividual>;
  setApplicantSettingsPassword?: Maybe<TwoFactorAuthToken>;
  setApplicantSettingsPasswordWithOtp?: Maybe<ApplicantSettingsProfile>;
  setMemberActive?: Maybe<Members>;
  setMemberGroup?: Maybe<GroupRole>;
  setMemberInactive?: Maybe<Members>;
  setMemberPassword?: Maybe<Members>;
  setMemberSecurityPin?: Maybe<Members>;
  setMemberSuspended?: Maybe<Members>;
  updateAccount?: Maybe<Account>;
  updateAccountLimit?: Maybe<AccountLimit>;
  updateActiveSession: ActiveSessionMutatorResponse;
  updateApplicantAccount: ApplicantAccount;
  updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  updateApplicantCompany?: Maybe<ApplicantCompany>;
  updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  updateApplicantCompanyVerificationStatus?: Maybe<ApplicantCompany>;
  updateApplicantDevice: TwoFactorAuthToken;
  updateApplicantDeviceWithOtp: ApplicantDevice;
  updateApplicantDocument?: Maybe<ApplicantDocument>;
  updateApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  updateApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  updateApplicantIndividualVerificationStatus?: Maybe<ApplicantIndividual>;
  updateApplicantProfile?: Maybe<ApplicantProfile>;
  updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  updateBankCorrespondent?: Maybe<BankCorrespondent>;
  updateBusinessActivity?: Maybe<BusinessActivity>;
  updateCommissionPriceList?: Maybe<CommissionPriceList>;
  updateCommissionTemplate?: Maybe<CommissionTemplate>;
  updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  updateCompany?: Maybe<Company>;
  updateCompanyModule?: Maybe<CompanyModule>;
  updateCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  updateCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  updateDepartment?: Maybe<Department>;
  updateEmailNotification?: Maybe<EmailNotification>;
  updateEmailSmtp?: Maybe<EmailSmtp>;
  updateEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  updateGroupSettings?: Maybe<GroupRole>;
  updateMember?: Maybe<Members>;
  updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  updateMemberProfile?: Maybe<MemberProfile>;
  updatePayment?: Maybe<Payments>;
  updatePaymentBank?: Maybe<PaymentBank>;
  updatePaymentProvider?: Maybe<PaymentProvider>;
  updatePaymentProviderIban?: Maybe<PaymentProviderIban>;
  updatePaymentSystem?: Maybe<PaymentSystem>;
  updatePriceListFees?: Maybe<PriceListFee>;
  updateProject?: Maybe<Project>;
  updateProjectApiSetting: Array<ProjectApiSetting>;
  updateRegion?: Maybe<Region>;
  updateRole?: Maybe<Role>;
  updateTicket?: Maybe<Ticket>;
  updateTransferOutgoing?: Maybe<TransferOutgoing>;
  updateTransferOutgoingFee?: Maybe<TransferOutgoing>;
};


export type MutationAddCompanyModuleArgs = {
  company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationAttachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCancelTransferOutgoingFeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAccountArgs = {
  input: InputAccount;
};


export type MutationCreateAccountLimitArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  commission_template_limit_action_type_id: Scalars['ID']['input'];
  commission_template_limit_period_id: Scalars['ID']['input'];
  commission_template_limit_transfer_direction_id: Scalars['ID']['input'];
  commission_template_limit_type_id: Scalars['ID']['input'];
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  period_count?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateApplicantArgs = {
  client_type: ApplicantClientType;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_individual_id: Scalars['ID']['input'];
  contact_administrator: Scalars['Boolean']['input'];
  daily_limit: Scalars['Decimal']['input'];
  monthly_limit: Scalars['Decimal']['input'];
  operation_limit: Scalars['Decimal']['input'];
  role_id: Scalars['ID']['input'];
  used_limit?: InputMaybe<Scalars['Decimal']['input']>;
};


export type MutationCreateApplicantCompanyArgs = {
  company_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  group_id?: InputMaybe<Scalars['ID']['input']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
  owner_id?: InputMaybe<Scalars['ID']['input']>;
  owner_position_id?: InputMaybe<Scalars['ID']['input']>;
  owner_relation_id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  project_id: Scalars['ID']['input'];
};


export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantCompanyLabelArgs = {
  hex_color_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCreateApplicantCompanyNoteArgs = {
  applicant_company_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  risk_level_id: Scalars['ID']['input'];
};


export type MutationCreateApplicantDocumentArgs = {
  added_from?: InputMaybe<Scalars['String']['input']>;
  applicant_id: Scalars['ID']['input'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID']['input'];
  country_id?: InputMaybe<Scalars['ID']['input']>;
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  document_type_id: Scalars['ID']['input'];
  file_id: Scalars['ID']['input'];
  info?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateApplicantDocumentInternalNoteArgs = {
  applicant_document_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type MutationCreateApplicantDocumentRejectDetailArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: Array<Scalars['ID']['input']>;
};


export type MutationCreateApplicantDocumentTagArgs = {
  category_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantDocumentTagCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualArgs = {
  company_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  group_id?: InputMaybe<Scalars['ID']['input']>;
  last_name: Scalars['String']['input'];
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  phone: Scalars['String']['input'];
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
  applicant_individual_company_position_id: Scalars['ID']['input'];
  applicant_individual_company_relation_id: Scalars['ID']['input'];
  percentage_owned?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualLabelArgs = {
  hex_color_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCreateApplicantIndividualNoteArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type MutationCreateApplicantModuleArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  risk_level_id: Scalars['ID']['input'];
};


export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateBankCorrespondentArgs = {
  address: Scalars['String']['input'];
  bank_account: Scalars['String']['input'];
  bank_code: Scalars['String']['input'];
  currency_id: Array<InputMaybe<Scalars['ID']['input']>>;
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  region_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCreateBusinessActivityArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID']['input'];
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  provider_id: Scalars['ID']['input'];
  region_id: Scalars['ID']['input'];
};


export type MutationCreateCommissionTemplateArgs = {
  input: InputCommissionTemplate;
};


export type MutationCreateCommissionTemplateLimitArgs = {
  input: InputCommissionTemplateLimit;
};


export type MutationCreateCompanyArgs = {
  country_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationCreateCompanyModuleIbanProviderArgs = {
  input: InputCompanyModuleIbanProvider;
};


export type MutationCreateCompanyModulePaymentProviderArgs = {
  input: InputCompanyModulePaymentProvider;
};


export type MutationCreateDepartmentArgs = {
  company_id: Scalars['ID']['input'];
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
};


export type MutationCreateDepartmentPositionArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateDocumentTypeArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']['input']>;
  company_id: Scalars['ID']['input'];
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  templates: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type MutationCreateEmailSmtpArgs = {
  company_id: Scalars['ID']['input'];
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name: Scalars['String']['input'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String']['input'];
};


export type MutationCreateEmailTemplateArgs = {
  company_id: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  service_type: ServiceType;
  subject: Scalars['String']['input'];
  type: ClientType;
  use_layout: Scalars['Boolean']['input'];
};


export type MutationCreateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int']['input'];
  footer: Scalars['String']['input'];
  header: Scalars['String']['input'];
};


export type MutationCreateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateMemberArgs = {
  company_id: Scalars['ID']['input'];
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  group_id: Scalars['ID']['input'];
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name: Scalars['String']['input'];
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  send_email?: InputMaybe<Scalars['Boolean']['input']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id: Scalars['ID']['input'];
};


export type MutationCreateMemberAccessLimitationArgs = {
  input: InputMemberAccessLimitation;
};


export type MutationCreateModuleArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreatePaymentArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  amount_real?: InputMaybe<Scalars['Decimal']['input']>;
  beneficiary_additional_data?: InputMaybe<Scalars['JSON']['input']>;
  beneficiary_address: Scalars['String']['input'];
  beneficiary_city: Scalars['String']['input'];
  beneficiary_country_id: Scalars['ID']['input'];
  beneficiary_name: Scalars['String']['input'];
  beneficiary_state: Scalars['String']['input'];
  beneficiary_zip: Scalars['String']['input'];
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  fee?: InputMaybe<Scalars['Decimal']['input']>;
  fee_type_id: Scalars['ID']['input'];
  operation_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  price_list_fees_id: Scalars['ID']['input'];
  recipient_account: Scalars['String']['input'];
  recipient_bank_address: Scalars['String']['input'];
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name: Scalars['String']['input'];
  recipient_bank_swift: Scalars['String']['input'];
  respondent_fees_id: Scalars['ID']['input'];
  urgency_id: Scalars['ID']['input'];
};


export type MutationCreatePaymentBankArgs = {
  input: InputPaymentBank;
};


export type MutationCreatePaymentProviderArgs = {
  input: InputPaymentProvider;
};


export type MutationCreatePaymentProviderIbanArgs = {
  input: InputPaymentProviderIban;
};


export type MutationCreatePaymentSystemArgs = {
  input: InputPaymentSystem;
};


export type MutationCreatePriceListFeesArgs = {
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationCreateProjectArgs = {
  input: InputProject;
};


export type MutationCreateRegionArgs = {
  input: InputRegion;
};


export type MutationCreateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCreateTicketArgs = {
  client_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateTicketCommentArgs = {
  client_id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  ticket_id: Scalars['ID']['input'];
};


export type MutationCreateTransferOutgoingArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  bank_message?: InputMaybe<Scalars['String']['input']>;
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  group_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  payment_system_id: Scalars['ID']['input'];
  price_list_fee_id: Scalars['ID']['input'];
  price_list_id: Scalars['ID']['input'];
  project_id: Scalars['ID']['input'];
  recipient_account?: InputMaybe<Scalars['String']['input']>;
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']['input']>;
  recipient_city?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  recipient_zip?: InputMaybe<Scalars['String']['input']>;
  requested_by_id: Scalars['ID']['input'];
};


export type MutationCreateTransferOutgoingFeeArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  bank_message?: InputMaybe<Scalars['String']['input']>;
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  group_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  operation_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  payment_system_id: Scalars['ID']['input'];
  price_list_fee_id: Scalars['ID']['input'];
  price_list_id: Scalars['ID']['input'];
  project_id: Scalars['ID']['input'];
  recipient_account?: InputMaybe<Scalars['String']['input']>;
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']['input']>;
  recipient_city?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  recipient_zip?: InputMaybe<Scalars['String']['input']>;
  requested_by_id: Scalars['ID']['input'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccountLimitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantBankingMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentInternalNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentRejectDetailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualCompanyPositionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualCompanyRelationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBankCorrespondentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyModuleArgs = {
  company_id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyModuleIbanProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyModulePaymentProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDocumentTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailSmtpArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailTemplateLayoutArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberAccessLimitationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentBankArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentSystemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePriceListFeesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRegionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagApplicantDocumentRejectDetailArgs = {
  applicant_document_tag_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
};


export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationDetachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationGenerateIbanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGrantApplicantBankingAccessArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetMemberPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendConfirmChangeEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendEmailArgs = {
  email: Scalars['String']['input'];
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String']['input'];
};


export type MutationSendEmailRegistationArgs = {
  applicant_id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendEmailResetPasswordArgs = {
  applicant_id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendEmailVerificationArgs = {
  applicant_id: Scalars['ID']['input'];
};


export type MutationSendEmailVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type MutationSendEmailWithTemplateArgs = {
  company_id: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
};


export type MutationSendMemberEmailVerificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendPhoneVerificationArgs = {
  applicant_id: Scalars['ID']['input'];
};


export type MutationSendPhoneVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetApplicantSecurityPinArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetApplicantSettingsPasswordArgs = {
  current_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetApplicantSettingsPasswordWithOtpArgs = {
  auth_token: Scalars['String']['input'];
  code: Scalars['String']['input'];
  current_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetMemberActiveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetMemberGroupArgs = {
  group_type_id: Scalars['ID']['input'];
  providers?: InputMaybe<Array<InputGroupRoleProvider>>;
  role_id: Scalars['ID']['input'];
};


export type MutationSetMemberInactiveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetMemberPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetMemberSecurityPinArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetMemberSuspendedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAccountArgs = {
  account_name: Scalars['String']['input'];
  account_state_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  is_primary: Scalars['Boolean']['input'];
};


export type MutationUpdateAccountLimitArgs = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  period_count?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateActiveSessionArgs = {
  id: Scalars['String']['input'];
  trusted: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantAccountArgs = {
  id: Scalars['ID']['input'];
  is_show: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantBankingAccessArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
  contact_administrator?: InputMaybe<Scalars['Boolean']['input']>;
  daily_limit?: InputMaybe<Scalars['Decimal']['input']>;
  id: Scalars['ID']['input'];
  monthly_limit?: InputMaybe<Scalars['Decimal']['input']>;
  operation_limit?: InputMaybe<Scalars['Decimal']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateApplicantCompanyArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  basic_info_additional_field?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']['input']>;
  contact_email?: InputMaybe<Scalars['EMAIL']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  expires_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']['input']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  office_address?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['ID']['input']>;
  owner_position_id?: InputMaybe<Scalars['ID']['input']>;
  owner_relation_id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  reg_at?: InputMaybe<Scalars['Date']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  tax?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantCompanyLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationUpdateApplicantCompanyVerificationStatusArgs = {
  applicant_status_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateApplicantDeviceArgs = {
  id: Scalars['ID']['input'];
  trusted: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantDeviceWithOtpArgs = {
  auth_token: Scalars['String']['input'];
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  trusted: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantDocumentArgs = {
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  info?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantDocumentTagArgs = {
  category_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  birth_at?: InputMaybe<Scalars['Date']['input']>;
  birth_city?: InputMaybe<Scalars['String']['input']>;
  birth_country_id?: InputMaybe<Scalars['ID']['input']>;
  birth_state?: InputMaybe<Scalars['String']['input']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  ip_address?: InputMaybe<Scalars['String']['input']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']['input']>;
  kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_screened_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Sex>;
  state?: InputMaybe<Scalars['String']['input']>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
  applicant_individual_company_position_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']['input']>;
  percentage_owned?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationUpdateApplicantIndividualVerificationStatusArgs = {
  applicant_status_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateApplicantProfileArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  notify_device_email?: InputMaybe<Scalars['Boolean']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateBankCorrespondentArgs = {
  address: Scalars['String']['input'];
  bank_account: Scalars['String']['input'];
  bank_code: Scalars['String']['input'];
  currency_id: Array<InputMaybe<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  region_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdateBusinessActivityArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateCommissionPriceListArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  provider_id?: InputMaybe<Scalars['ID']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateCommissionTemplateArgs = {
  id: Scalars['ID']['input'];
  input: InputCommissionTemplate;
};


export type MutationUpdateCommissionTemplateLimitArgs = {
  id: Scalars['ID']['input'];
  input: InputCommissionTemplateLimit;
};


export type MutationUpdateCompanyArgs = {
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_data?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_info?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  backoffice_forgot_password_url?: InputMaybe<Scalars['String']['input']>;
  backoffice_login_url?: InputMaybe<Scalars['String']['input']>;
  backoffice_support_email?: InputMaybe<Scalars['EMAIL']['input']>;
  backoffice_support_url?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_number?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  employees_id?: InputMaybe<Scalars['ID']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  exp_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  id: Scalars['ID']['input'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  logo_id?: InputMaybe<Scalars['ID']['input']>;
  member_verify_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  reg_address?: InputMaybe<Scalars['String']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  state_id?: InputMaybe<Scalars['ID']['input']>;
  state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  type_of_industry_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  vv_token?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCompanyModuleArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};


export type MutationUpdateCompanyModuleIbanProviderArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};


export type MutationUpdateCompanyModulePaymentProviderArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};


export type MutationUpdateDepartmentArgs = {
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  templates?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationUpdateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEmailTemplateArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  service_type?: InputMaybe<ServiceType>;
  subject?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ClientType>;
  use_layout?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMemberArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  department_id?: InputMaybe<Scalars['ID']['input']>;
  department_position_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  ip_address?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMemberAccessLimitationArgs = {
  id: Scalars['ID']['input'];
  input: InputMemberAccessLimitation;
};


export type MutationUpdateMemberProfileArgs = {
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePaymentArgs = {
  id: Scalars['ID']['input'];
  status_id: Scalars['ID']['input'];
};


export type MutationUpdatePaymentBankArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentBank;
};


export type MutationUpdatePaymentProviderArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentProvider;
};


export type MutationUpdatePaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentProviderIban;
};


export type MutationUpdatePaymentSystemArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentSystem;
};


export type MutationUpdatePriceListFeesArgs = {
  commission_price_list?: InputMaybe<Array<InputMaybe<PriceList>>>;
  id: Scalars['ID']['input'];
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input: InputProject;
};


export type MutationUpdateProjectApiSettingArgs = {
  input: Array<InputProjectApiSetting>;
  project_id: Scalars['ID']['input'];
};


export type MutationUpdateRegionArgs = {
  id: Scalars['ID']['input'];
  input: InputRegion;
};


export type MutationUpdateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTransferOutgoingArgs = {
  id: Scalars['ID']['input'];
  status_id: Scalars['Int']['input'];
};


export type MutationUpdateTransferOutgoingFeeArgs = {
  amount: Scalars['Decimal']['input'];
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export enum NotifyType {
  Administration = 'Administration',
  Client = 'Client'
}

export type OperationType = {
  __typename?: 'OperationType';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum OperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingWireTransfer = 'INCOMING_WIRE_TRANSFER',
  OutgoingWireTransfer = 'OUTGOING_WIRE_TRANSFER',
  ScheduledFees = 'SCHEDULED_FEES'
}

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderBy = {
  column: Column;
  order: Order;
};

export type OrderByClause = {
  column: Scalars['String']['input'];
  order: SortOrder;
};

export enum OrderByRelationAggregateFunction {
  Count = 'COUNT'
}

export enum OrderByRelationWithColumnAggregateFunction {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
}

export enum Permission_Account_Details {
  Edit = 'EDIT',
  Read = 'READ',
  ShowBalance = 'SHOW_BALANCE',
  ShowProviderInfo = 'SHOW_PROVIDER_INFO',
  StatusActive = 'STATUS_ACTIVE',
  StatusClosed = 'STATUS_CLOSED',
  StatusPending = 'STATUS_PENDING',
  StatusSuspended = 'STATUS_SUSPENDED',
  WaitingForIBANActivation = 'WAITING_FOR_I_B_A_N_ACTIVATION'
}

export enum Permission_Dashboard {
  Feedback = 'FEEDBACK',
  InviteFriends = 'INVITE_FRIENDS',
  LastPayments = 'LAST_PAYMENTS',
  Yes = 'YES'
}

export enum Permission_Make_Payments {
  CreatePayments = 'CREATE_PAYMENTS',
  SignPayments = 'SIGN_PAYMENTS'
}

export enum Permission_My_Net_Worth {
  Assets = 'ASSETS',
  Liabilities = 'LIABILITIES',
  Summary = 'SUMMARY',
  Yes = 'YES'
}

export enum Permission_My_Templates {
  AddNew = 'ADD_NEW',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Payment_Details {
  ExportPaymentDetails = 'EXPORT_PAYMENT_DETAILS',
  Read = 'READ'
}

export enum Permission_Payment_List {
  CancelPayment = 'CANCEL_PAYMENT',
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Requisites {
  DownloadRequisites = 'DOWNLOAD_REQUISITES',
  Read = 'READ',
  SendRequisitesDetails = 'SEND_REQUISITES_DETAILS'
}

export enum Permission_Settings_Account {
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Settings_Contact_Details {
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Settings_Log_In_Details {
  Edit = 'EDIT',
  MyDevice = 'MY_DEVICE',
  Read = 'READ',
  SecurePin = 'SECURE_PIN',
  TwoFactorAuthentication = 'TWO_FACTOR_AUTHENTICATION'
}

export enum Permission_Settings_Security_Level {
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Statements {
  ExportStatement = 'EXPORT_STATEMENT',
  Read = 'READ'
}

export enum Permission_Tickets {
  CloseTicket = 'CLOSE_TICKET',
  NewTicket = 'NEW_TICKET',
  Read = 'READ',
  StatusClosed = 'STATUS_CLOSED',
  StatusNoReplyRequired = 'STATUS_NO_REPLY_REQUIRED',
  StatusOpened = 'STATUS_OPENED',
  StatusReplyRequired = 'STATUS_REPLY_REQUIRED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  firstItem?: Maybe<Scalars['Int']['output']>;
  hasMorePages: Scalars['Boolean']['output'];
  lastItem?: Maybe<Scalars['Int']['output']>;
  lastPage: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaymentBank = {
  __typename?: 'PaymentBank';
  address?: Maybe<Scalars['String']['output']>;
  bank_code?: Maybe<Scalars['String']['output']>;
  bank_correspondent?: Maybe<BankCorrespondent>;
  country?: Maybe<Country>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  payment_provider?: Maybe<PaymentProvider>;
  payment_system?: Maybe<PaymentSystem>;
  payment_system_code?: Maybe<Scalars['String']['output']>;
};

export type PaymentBankPaginator = {
  __typename?: 'PaymentBankPaginator';
  data: Array<PaymentBank>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  commission_price_list?: Maybe<CommissionPriceList>;
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Files>;
  name: Scalars['String']['output'];
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
};

export type PaymentProviderHistory = {
  __typename?: 'PaymentProviderHistory';
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  payment_provider_id: Scalars['ID']['output'];
  provider_response?: Maybe<Scalars['JSON']['output']>;
  transfer_id: Scalars['ID']['output'];
  transfer_type?: Maybe<Scalars['String']['output']>;
};

export type PaymentProviderIban = {
  __typename?: 'PaymentProviderIban';
  company?: Maybe<Company>;
  currency?: Maybe<Currencies>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type PaymentProviderIbanPaginator = {
  __typename?: 'PaymentProviderIbanPaginator';
  data: Array<PaymentProviderIban>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentProviderPaginator = {
  __typename?: 'PaymentProviderPaginator';
  data: Array<PaymentProvider>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentStatus = {
  __typename?: 'PaymentStatus';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  bank_correspondent?: Maybe<BankCorrespondent>;
  banks?: Maybe<Array<Maybe<PaymentBank>>>;
  company?: Maybe<Company>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Files>;
  name: Scalars['String']['output'];
  operations?: Maybe<Array<Maybe<OperationType>>>;
  providers?: Maybe<PaymentProvider>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type PaymentSystemPaginator = {
  __typename?: 'PaymentSystemPaginator';
  data: Array<PaymentSystem>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentUrgency = {
  __typename?: 'PaymentUrgency';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Payments = {
  __typename?: 'Payments';
  account?: Maybe<Account>;
  amount: Scalars['Decimal']['output'];
  amount_real: Scalars['Decimal']['output'];
  beneficiary_additional_data?: Maybe<Scalars['JSON']['output']>;
  beneficiary_address?: Maybe<Scalars['String']['output']>;
  beneficiary_city?: Maybe<Scalars['String']['output']>;
  beneficiary_country?: Maybe<Country>;
  beneficiary_name?: Maybe<Scalars['String']['output']>;
  beneficiary_state?: Maybe<Scalars['String']['output']>;
  beneficiary_zip?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  currency?: Maybe<Currencies>;
  error?: Maybe<Scalars['String']['output']>;
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  fee?: Maybe<Scalars['Decimal']['output']>;
  fee_type?: Maybe<FeeType>;
  id: Scalars['ID']['output'];
  member?: Maybe<Members>;
  payment_number?: Maybe<Scalars['String']['output']>;
  payment_operation_type?: Maybe<OperationType>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_urgency?: Maybe<PaymentUrgency>;
  price_list_fees?: Maybe<PriceListFee>;
  received_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  recipient_account?: Maybe<Scalars['String']['output']>;
  recipient_bank_address?: Maybe<Scalars['String']['output']>;
  recipient_bank_country?: Maybe<Country>;
  recipient_bank_name?: Maybe<Scalars['String']['output']>;
  recipient_bank_swift?: Maybe<Scalars['String']['output']>;
  respondent_fee?: Maybe<RespondentFee>;
  status?: Maybe<PaymentStatus>;
  status_id?: Maybe<Scalars['ID']['output']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type PaymentsPaginator = {
  __typename?: 'PaymentsPaginator';
  data: Array<Payments>;
  paginatorInfo: PaginatorInfo;
};

export type PermissionAuth = {
  __typename?: 'PermissionAuth';
  PERMISSION_ACCOUNT_DETAILS: Array<Permission_Account_Details>;
  PERMISSION_DASHBOARD: Array<Permission_Dashboard>;
  PERMISSION_MAKE_PAYMENTS: Array<Permission_Make_Payments>;
  PERMISSION_MY_NET_WORTH: Array<Permission_My_Net_Worth>;
  PERMISSION_MY_TEMPLATES: Array<Permission_My_Templates>;
  PERMISSION_PAYMENT_DETAILS: Array<Permission_Payment_Details>;
  PERMISSION_PAYMENT_LIST: Array<Permission_Payment_List>;
  PERMISSION_REQUISITES: Array<Permission_Requisites>;
  PERMISSION_SETTINGS_ACCOUNT: Array<Permission_Settings_Account>;
  PERMISSION_SETTINGS_CONTACT_DETAILS: Array<Permission_Settings_Contact_Details>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS: Array<Permission_Settings_Log_In_Details>;
  PERMISSION_SETTINGS_SECURITY_LEVEL: Array<Permission_Settings_Security_Level>;
  PERMISSION_STATEMENTS: Array<Permission_Statements>;
  PERMISSION_TICKETS: Array<Permission_Tickets>;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};


export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE'
}

export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
  OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type PermissionCategoryRole = {
  __typename?: 'PermissionCategoryRole';
  is_all_companies?: Maybe<Scalars['Boolean']['output']>;
  permission_category_id?: Maybe<Scalars['ID']['output']>;
  role_id?: Maybe<Scalars['ID']['output']>;
};

export type PermissionList = {
  __typename?: 'PermissionList';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  separator?: Maybe<PermissionSeparatorType>;
  type?: Maybe<PermissionListType>;
};

export enum PermissionListType {
  Individual = 'Individual',
  Member = 'Member'
}

export enum PermissionSeparatorType {
  Business = 'Business',
  Private = 'Private'
}

export type PermissionType = {
  __typename?: 'PermissionType';
  PERMISSION_ACCOUNT_DETAILS?: Maybe<Permission_Account_Details>;
  PERMISSION_DASHBOARD?: Maybe<Permission_Dashboard>;
  PERMISSION_MAKE_PAYMENTS?: Maybe<Permission_Make_Payments>;
  PERMISSION_MY_NET_WORTH?: Maybe<Permission_My_Net_Worth>;
  PERMISSION_MY_TEMPLATES?: Maybe<Permission_My_Templates>;
  PERMISSION_PAYMENT_DETAILS?: Maybe<Permission_Payment_Details>;
  PERMISSION_PAYMENT_LIST?: Maybe<Permission_Payment_List>;
  PERMISSION_REQUISITES?: Maybe<Permission_Requisites>;
  PERMISSION_SETTINGS_ACCOUNT?: Maybe<Permission_Settings_Account>;
  PERMISSION_SETTINGS_CONTACT_DETAILS?: Maybe<Permission_Settings_Contact_Details>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS?: Maybe<Permission_Settings_Log_In_Details>;
  PERMISSION_SETTINGS_SECURITY_LEVEL?: Maybe<Permission_Settings_Security_Level>;
  PERMISSION_STATEMENTS?: Maybe<Permission_Statements>;
  PERMISSION_TICKETS?: Maybe<Permission_Tickets>;
};

export type Permissions = {
  __typename?: 'Permissions';
  all?: Maybe<Scalars['JSON']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  guard_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PivotTable = {
  sync?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type PriceListFee = {
  __typename?: 'PriceListFee';
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  fee_ranges?: Maybe<Scalars['JSON']['output']>;
  fee_type?: Maybe<FeeType>;
  fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation_type?: Maybe<OperationType>;
  period?: Maybe<FeePeriod>;
  price_list_id?: Maybe<Scalars['ID']['output']>;
  scheduled?: Maybe<PriceListFeeScheduled>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type PriceListFeeCurrency = {
  __typename?: 'PriceListFeeCurrency';
  currency_id: Scalars['ID']['output'];
  fee?: Maybe<Array<Maybe<FeeItem>>>;
  id: Scalars['ID']['output'];
  price_list_fee_id: Scalars['ID']['output'];
};

export type PriceListFeeInput = {
  fee_ranges?: InputMaybe<Scalars['JSON']['input']>;
  fees?: InputMaybe<Array<PriceListFeesList>>;
  name: Scalars['String']['input'];
  operation_type_id: Scalars['ID']['input'];
  period_id?: InputMaybe<Scalars['ID']['input']>;
  price_list_id: Scalars['ID']['input'];
  scheduled?: InputMaybe<PriceListFeeScheduledInput>;
  type_id: Scalars['ID']['input'];
};

export type PriceListFeeItem = {
  amount_from?: InputMaybe<Scalars['Int']['input']>;
  amount_to?: InputMaybe<Scalars['Int']['input']>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  mode: Scalars['String']['input'];
  percent?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceListFeeScheduled = {
  __typename?: 'PriceListFeeScheduled';
  end_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  end_date_id?: Maybe<Scalars['ID']['output']>;
  recurrent_interval?: Maybe<Scalars['Int']['output']>;
  starting_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  starting_date_id?: Maybe<Scalars['ID']['output']>;
};

export type PriceListFeeScheduledInput = {
  end_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  end_date_id?: InputMaybe<Scalars['ID']['input']>;
  recurrent_interval?: InputMaybe<Scalars['Int']['input']>;
  starting_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  starting_date_id?: InputMaybe<Scalars['ID']['input']>;
};

export type PriceListFeesList = {
  currency_id: Scalars['ID']['input'];
  fee: Array<Array<InputMaybe<PriceListFeeItem>>>;
};

export type Project = {
  __typename?: 'Project';
  additional_fields_basic?: Maybe<Scalars['JSON']['output']>;
  additional_fields_settings?: Maybe<Scalars['JSON']['output']>;
  avatar?: Maybe<Files>;
  client_url?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  created_at: Scalars['DateTimeUtc']['output'];
  description?: Maybe<Scalars['String']['output']>;
  forgot_password_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  login_url?: Maybe<Scalars['String']['output']>;
  module?: Maybe<Module>;
  name: Scalars['String']['output'];
  project_api_settings?: Maybe<Array<Maybe<ProjectApiSetting>>>;
  project_settings?: Maybe<Array<Maybe<ProjectSettings>>>;
  sms_sender_name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  support_email?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeUtc']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ProjectApiSetting = {
  __typename?: 'ProjectApiSetting';
  api_key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  project: Project;
  provider?: Maybe<ProviderType>;
  wallet?: Maybe<Scalars['String']['output']>;
};

export type ProjectApiSettingPassword = {
  __typename?: 'ProjectApiSettingPassword';
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
};

export type ProjectPaginator = {
  __typename?: 'ProjectPaginator';
  data: Array<Project>;
  paginatorInfo: PaginatorInfo;
};

export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  applicant_type: ApplicantType;
  commission_template?: Maybe<CommissionTemplate>;
  group_role?: Maybe<GroupRole>;
  group_type?: Maybe<GroupType>;
  iban_provider?: Maybe<PaymentProviderIban>;
  payment_provider?: Maybe<PaymentProvider>;
};

export type ProviderType = PaymentProvider | PaymentProviderIban;

export enum ProviderTypeEnum {
  PaymentProvider = 'PaymentProvider',
  PaymentProviderIban = 'PaymentProviderIban'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountLimit?: Maybe<AccountLimit>;
  accountLimits?: Maybe<AccountLimitPaginator>;
  accountList?: Maybe<AccountPaginator>;
  accountReachedLimit?: Maybe<AccountReachedLimit>;
  accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
  accountStatement?: Maybe<AccountStatement>;
  accountStates: Array<AccountState>;
  activeSessions?: Maybe<ActiveSessions>;
  activityLogs?: Maybe<ActivityLogs>;
  applicantAccounts?: Maybe<Array<ApplicantAccount>>;
  applicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  applicantBankingAccesses?: Maybe<ApplicantBankingAccesses>;
  applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  applicantCompany?: Maybe<ApplicantCompany>;
  applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  applicantCompanyLabels: Array<ApplicantCompanyLabel>;
  applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  applicantCompanyModules: Array<ApplicantCompanyModules>;
  applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  applicantDevices?: Maybe<Array<ApplicantDevice>>;
  applicantDocument?: Maybe<ApplicantDocument>;
  applicantDocumentInternalNotes?: Maybe<ApplicantDocumentInternalNotePaginator>;
  applicantDocumentTagCategories?: Maybe<ApplicantDocumentTagCategoryPaginator>;
  applicantDocumentTags?: Maybe<ApplicantDocumentTagPaginator>;
  applicantDocuments?: Maybe<ApplicantDocumentPaginator>;
  applicantIndividual?: Maybe<ApplicantIndividual>;
  applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  applicantIndividualLabels: Array<ApplicantIndividualLabel>;
  applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  applicantIndividualModules: Array<ApplicantIndividualModules>;
  applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  applicantKycLevel?: Maybe<ApplicantKycLevel>;
  applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  applicantLinkedCompanies: Array<ApplicantLinkedCompany>;
  applicantProfile?: Maybe<ApplicantProfile>;
  applicantRequisite?: Maybe<ApplicantDetailsRequisites>;
  applicantRequisites: Array<ApplicantRequisites>;
  applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  applicantState?: Maybe<ApplicantState>;
  applicantStateReason?: Maybe<ApplicantStateReason>;
  applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  applicantStates?: Maybe<ApplicantStatePaginator>;
  applicantStatus?: Maybe<ApplicantStatus>;
  applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  applicantVerificationStatuses: Array<ApplicantVerificationStatus>;
  applicant_module?: Maybe<ApplicantModules>;
  applicant_modules?: Maybe<ApplicantModulesPaginator>;
  authenticationLogs?: Maybe<AuthenticationLogs>;
  authenticationMemberLogs?: Maybe<AuthenticationLogs>;
  bankCorrespondent: BankCorrespondent;
  bankCorrespondents?: Maybe<BankCorrespondentPaginator>;
  businessActivities?: Maybe<BusinessActivityPaginator>;
  businessActivity?: Maybe<BusinessActivity>;
  clientList: Array<AccountClient>;
  commissionPriceList?: Maybe<CommissionPriceList>;
  commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  commissionTemplate?: Maybe<CommissionTemplate>;
  commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionType>;
  commissionTemplateLimitActionTypes?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  companies?: Maybe<CompanyPaginator>;
  company?: Maybe<Company>;
  companyModuleIbanProviderPassword?: Maybe<CompanyModuleIbanProviderPassword>;
  companyModuleProviderPassword?: Maybe<CompanyModulePaymentProviderPassword>;
  companyModules: Array<CompanyModule>;
  countries?: Maybe<CountryPaginator>;
  country?: Maybe<Country>;
  currencies?: Maybe<CurrenciesPaginator>;
  currency?: Maybe<Currencies>;
  dashboardAccountsStatistic?: Maybe<Array<Maybe<DashboardAccountsStatistic>>>;
  dashboardTicketsStatistic?: Maybe<Array<Maybe<DashboardTicketsStatistic>>>;
  dashboardTransfersStatistic?: Maybe<Array<Maybe<DashboardTransfersStatistic>>>;
  dashboardUsersStatistic?: Maybe<Array<Maybe<DashboardUsersStatistic>>>;
  department?: Maybe<Department>;
  departmentPosition?: Maybe<DepartmentPosition>;
  departmentPositions?: Maybe<DepartmentPositionPaginator>;
  departments?: Maybe<DepartmentPaginator>;
  documentStates: Array<DocumentState>;
  documentTypes: Array<DocumentType>;
  downloadAccountStatementCsv?: Maybe<RawFile>;
  downloadAccountStatementPdf?: Maybe<RawFile>;
  downloadAccountStatementXls?: Maybe<RawFile>;
  downloadApplicantRequisiteDetails?: Maybe<RawFile>;
  downloadRequisiteDetails?: Maybe<RawFile>;
  emailNotification?: Maybe<EmailNotification>;
  emailNotifications?: Maybe<EmailNotificationPaginator>;
  emailSmtp?: Maybe<EmailSmtp>;
  emailSmtps: Array<EmailSmtp>;
  emailTemplate?: Maybe<EmailTemplate>;
  emailTemplateLayout?: Maybe<EmailTemplateLayout>;
  emailTemplates: Array<EmailTemplate>;
  employees: Array<Employee>;
  feeDetails: Fee;
  feeModes: Array<FeeMode>;
  feePeriods: Array<FeePeriod>;
  feeTypes: Array<FeeType>;
  file?: Maybe<Files>;
  files?: Maybe<FilesPaginator>;
  getMatchedApplicantIndividuals: Array<ApplicantIndividualCompany>;
  getMatchedUsers: Array<ApplicantIndividualCompany>;
  getPaymentUrgencys: Array<PaymentUrgency>;
  getTicketComments: Array<TicketComments>;
  grantedBankingAccess?: Maybe<ApplicantBankingAccesses>;
  groupList?: Maybe<GroupRoleViewPaginator>;
  groupTypeList?: Maybe<GroupTypePaginator>;
  group_type?: Maybe<GroupType>;
  group_types: Array<GroupType>;
  groups?: Maybe<GroupRolePaginator>;
  kycTimeline?: Maybe<KycTimeline>;
  kycTimelines?: Maybe<KycTimelines>;
  language?: Maybe<Languages>;
  languages?: Maybe<LanguagesPaginator>;
  member?: Maybe<Members>;
  memberAccessLimitation?: Maybe<MemberAccessLimitation>;
  memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
  memberProfile?: Maybe<MemberProfile>;
  memberStatuses: Array<MemberStatus>;
  members?: Maybe<MembersPaginator>;
  module?: Maybe<Module>;
  modules: Array<Module>;
  modulesWithKyc?: Maybe<Array<Module>>;
  operationTypes: Array<OperationType>;
  owners: Array<ApplicantIndividual>;
  payment?: Maybe<Payments>;
  paymentBank?: Maybe<PaymentBank>;
  paymentBanks?: Maybe<PaymentBankPaginator>;
  paymentProvider?: Maybe<PaymentProvider>;
  paymentProviderIban: PaymentProviderIban;
  paymentProviderIbans?: Maybe<PaymentProviderIbanPaginator>;
  paymentProviders?: Maybe<PaymentProviderPaginator>;
  paymentStatuses: Array<PaymentStatus>;
  paymentSystem?: Maybe<PaymentSystem>;
  paymentSystems?: Maybe<PaymentSystemPaginator>;
  paymentSystemsList: Array<PaymentSystem>;
  payments?: Maybe<PaymentsPaginator>;
  permission?: Maybe<Permissions>;
  permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions_tree?: Maybe<Permissions>;
  priceListFees: Array<PriceListFee>;
  project?: Maybe<Project>;
  projectApiSettingPassword?: Maybe<ProjectApiSettingPassword>;
  projectApiSettings: Array<ProjectApiSetting>;
  projects?: Maybe<ProjectPaginator>;
  region: Region;
  regions?: Maybe<RegionPaginator>;
  requisite?: Maybe<Requisite>;
  requisites: Array<Requisite>;
  respondentFees: Array<RespondentFee>;
  role?: Maybe<Role>;
  roles?: Maybe<RolePaginator>;
  sendApplicantRequisiteDetails?: Maybe<StatusType>;
  sendRequisiteDetails?: Maybe<StatusType>;
  senders?: Maybe<Array<Maybe<Sender>>>;
  stateReasons: Array<StateReason>;
  states: Array<State>;
  ticket?: Maybe<Ticket>;
  ticketComment?: Maybe<TicketComments>;
  tickets?: Maybe<TicketPaginator>;
  transferIncoming: TransferIncoming;
  transferIncomingHistory?: Maybe<TransferIncomingHistoryPaginator>;
  transferIncomings?: Maybe<TransferIncomingPaginator>;
  transferIncomingsStatistic?: Maybe<Array<Maybe<TransferIncomingStatistic>>>;
  transferOutgoing: TransferOutgoing;
  transferOutgoingHistory?: Maybe<TransferOutgoingHistoryPaginator>;
  transferOutgoings?: Maybe<TransferOutgoingPaginator>;
  transferOutgoingsStatistic?: Maybe<Array<Maybe<TransferOutgoingStatistic>>>;
  twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  typeOfIndustries: Array<TypeOfIndustry>;
  userAuthData: UserAuthResponse;
  users?: Maybe<UsersPaginator>;
};


export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountLimitsArgs = {
  filter?: InputMaybe<QueryAccountLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryAccountLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryAccountListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryAccountListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountReachedLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountReachedLimitsArgs = {
  filter?: InputMaybe<QueryAccountReachedLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasAccount?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountReachedLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
};


export type QueryAccountStatementArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryAccountStatesArgs = {
  orderBy?: InputMaybe<Array<QueryAccountStatesOrderByOrderByClause>>;
};


export type QueryActiveSessionsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryActiveSessionsStatic>;
};


export type QueryActivityLogsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryActivityLogsStatic>;
};


export type QueryApplicantAccountsArgs = {
  filter?: InputMaybe<QueryApplicantAccountsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantAccountsOrderByOrderByClause>>;
};


export type QueryApplicantBankingAccessArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantBankingAccessesArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryApplicantBankingAccessesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantBankingAccessesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantCompaniesArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Sort>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};


export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantCompanyBusinessTypeArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantCompanyModulesArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantCompanyNotesArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryApplicantDocumentInternalNotesArgs = {
  applicant_document_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantDocumentTagCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantDocumentTagsArgs = {
  filter?: InputMaybe<QueryApplicantDocumentTagsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentTagsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantDocumentsArgs = {
  applicant_type: ApplicantType;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantDocumentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  update_at?: InputMaybe<DateTimeRange>;
};


export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualCompanyPositionsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualCompanyRelationsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualModulesArgs = {
  applicant_individual_id: Scalars['ID']['input'];
};


export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualNotesArgs = {
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualsArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantIndividualsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantKycLevelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};


export type QueryApplicantLinkedCompaniesArgs = {
  applicant_individual_id: Scalars['ID']['input'];
};


export type QueryApplicantRequisiteArgs = {
  account_number?: InputMaybe<Scalars['String']['input']>;
};


export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};


export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantStateReasonsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};


export type QueryApplicantStatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};


export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantStatusesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};


export type QueryApplicant_ModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicant_ModulesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};


export type QueryAuthenticationLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryAuthenticationLogsStatic>;
};


export type QueryAuthenticationMemberLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  member_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBankCorrespondentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBankCorrespondentsArgs = {
  filter?: InputMaybe<QueryBankCorrespondentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryBankCorrespondentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBusinessActivitiesArgs = {
  filter?: InputMaybe<QueryBusinessActivitiesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClientListArgs = {
  group_type?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionPriceListsArgs = {
  filter?: InputMaybe<QueryCommissionPriceListsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitActionTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitActionTypesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitTypesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitsArgs = {
  filter?: InputMaybe<QueryCommissionTemplateLimitsFilterStatic>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommissionTemplatesArgs = {
  filter?: InputMaybe<QueryCommissionTemplatesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCompaniesArgs = {
  country?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  member_count?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCompanyModuleIbanProviderPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanyModuleProviderPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanyModulesArgs = {
  company_id: Scalars['ID']['input'];
};


export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDashboardAccountsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDashboardTicketsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDashboardTransfersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDashboardUsersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDepartmentPositionsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<QueryDepartmentPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDepartmentsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDepartmentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDownloadAccountStatementCsvArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementPdfArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementXlsArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadApplicantRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDownloadRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['ID']['input']>;
  company_id: Scalars['ID']['input'];
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
};


export type QueryEmailNotificationsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailNotificationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmailSmtpArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmailSmtpsArgs = {
  company_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<QueryEmailSmtpsOrderByOrderByClause>>;
};


export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmailTemplateLayoutArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmailTemplatesArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailTemplatesFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
};


export type QueryFeeDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeeTypesArgs = {
  filter?: InputMaybe<QueryFeeTypesFilterFilterConditions>;
};


export type QueryFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFilesArgs = {
  filter?: InputMaybe<QueryFilesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMatchedApplicantIndividualsArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryGetMatchedUsersFilterFilterConditions>;
};


export type QueryGrantedBankingAccessArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_individual_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryGrantedBankingAccessFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryGrantedBankingAccessOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroupListArgs = {
  filter?: InputMaybe<QueryGroupListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryGroupListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroupTypeListArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<GroupTypeMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroup_TypesArgs = {
  filter?: InputMaybe<QueryGroupTypesFilterFilterConditions>;
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<QueryGroupsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryKycTimelineArgs = {
  id: Scalars['ID']['input'];
};


export type QueryKycTimelinesArgs = {
  applicant_id: Scalars['ID']['input'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryKycTimelinesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMemberAccessLimitationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMemberAccessLimitationsArgs = {
  filter?: InputMaybe<QueryMemberAccessLimitationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  member_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<QueryMemberAccessLimitationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMembersArgs = {
  companyName?: InputMaybe<Sort>;
  filter?: InputMaybe<QueryMembersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryModulesArgs = {
  orderBy?: InputMaybe<Array<QueryModulesOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWhereWhereConditions>;
};


export type QueryModulesWithKycArgs = {
  orderBy?: InputMaybe<Array<QueryModulesWithKycOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
};


export type QueryOperationTypesArgs = {
  filter?: InputMaybe<QueryOperationTypesFilterFilterConditions>;
};


export type QueryOwnersArgs = {
  orderBy?: InputMaybe<Array<QueryOwnersOrderByOrderByClause>>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentBankArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentBanksArgs = {
  filter?: InputMaybe<QueryPaymentBanksFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentBanksOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryPaymentBankCondition>;
};


export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentProviderIbansArgs = {
  filter?: InputMaybe<QueryPaymentProviderIbansFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentProviderIbansOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentProvidersArgs = {
  filter?: InputMaybe<QueryPaymentProvidersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentStatusesArgs = {
  filter?: InputMaybe<QueryPaymentStatusesFilterFilterConditions>;
};


export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentSystemsArgs = {
  filter?: InputMaybe<QueryPaymentSystemsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentsArgs = {
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryPaymentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};


export type QueryPriceListFeesArgs = {
  filter?: InputMaybe<QueryPriceListFeesFilterFilterConditions>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectApiSettingPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectApiSettingsArgs = {
  project_id: Scalars['ID']['input'];
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<QueryProjectsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRegionsArgs = {
  filter?: InputMaybe<QueryRegionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRequisitesArgs = {
  filter?: InputMaybe<QueryRequisitesFilterFilterConditions>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRolesArgs = {
  filter?: InputMaybe<QueryRolesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groups_sort?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySendApplicantRequisiteDetailsArgs = {
  account_id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};


export type QuerySendRequisiteDetailsArgs = {
  account_id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTicketsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTicketsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTransferIncomingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransferIncomingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  transfer_id: Scalars['ID']['input'];
};


export type QueryTransferIncomingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferIncomingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTransferIncomingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTransferOutgoingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransferOutgoingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  transfer_id: Scalars['ID']['input'];
};


export type QueryTransferOutgoingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferOutgoingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTransferOutgoingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<QueryUsersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAccountLimitsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
  column?: InputMaybe<QueryAccountLimitsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryAccountLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_ACTION_TYPE_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_PERIOD_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TRANSFER_DIRECTION_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TYPE_MIXED_ID_OR_NAME',
  HasCurrencyMixedIdOrName = 'HAS_CURRENCY_MIXED_ID_OR_NAME',
  PeriodCount = 'PERIOD_COUNT'
}

export type QueryAccountLimitsFilterStaticInput = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  hasCommissionTemplateLimitActionTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateLimitPeriodMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateLimitTransferDirectionMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateLimitTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCurrencyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  period_count?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryAccountLimitsFilterStaticOperator {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count'
}

export enum QueryAccountLimitsFilterStaticType {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count'
}

export enum QueryAccountLimitsOrderByColumn {
  Id = 'ID'
}

export type QueryAccountLimitsOrderByOrderByClause = {
  column: QueryAccountLimitsOrderByColumn;
  order: SortOrder;
};

export type QueryAccountListFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  column?: InputMaybe<QueryAccountListFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryAccountListFilterStatic {
  AccountStateId = 'ACCOUNT_STATE_ID',
  CurrencyId = 'CURRENCY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasClientableMixedIdOrFullname = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME',
  HasCommissionTemplateMixedIdOrFullname = 'HAS_COMMISSION_TEMPLATE_MIXED_ID_OR_FULLNAME',
  HasCompanyMixedIdOrName = 'HAS_COMPANY_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasPaymentProviderMixedIdOrName = 'HAS_PAYMENT_PROVIDER_MIXED_ID_OR_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
  IsPrimary = 'IS_PRIMARY',
  MixedAccountNumberOrAccountName = 'MIXED_ACCOUNT_NUMBER_OR_ACCOUNT_NAME'
}

export type QueryAccountListFilterStaticInput = {
  MixedAccountNumberOrAccountName?: InputMaybe<Scalars['String']['input']>;
  account_state_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  hasClientableMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasPaymentProviderMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum QueryAccountListFilterStaticOperator {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary'
}

export enum QueryAccountListFilterStaticType {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary'
}

export enum QueryAccountListOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryAccountListOrderByOrderByClause = {
  column: QueryAccountListOrderByColumn;
  order: SortOrder;
};

export type QueryAccountReachedLimitsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  column?: InputMaybe<QueryAccountReachedLimitsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryAccountReachedLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

export type QueryAccountReachedLimitsFilterStaticInput = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  limit_currency?: InputMaybe<Scalars['String']['input']>;
  limit_type?: InputMaybe<Scalars['String']['input']>;
  limit_value?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  transfer_direction?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryAccountReachedLimitsFilterStaticOperator {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

export enum QueryAccountReachedLimitsFilterStaticType {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

export enum QueryAccountReachedLimitsHasAccountColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountReachedLimitsHasAccountWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  column?: InputMaybe<QueryAccountReachedLimitsHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryAccountReachedLimitsOrderByColumn {
  Id = 'ID'
}

export type QueryAccountReachedLimitsOrderByOrderByClause = {
  column: QueryAccountReachedLimitsOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountReachedLimitsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  ClientName = 'CLIENT_NAME',
  ClientType = 'CLIENT_TYPE',
  GroupType = 'GROUP_TYPE',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

export type QueryAccountReachedLimitsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  column?: InputMaybe<QueryAccountReachedLimitsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryAccountReachedLimitsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryAccountStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountStatesOrderByOrderByClause = {
  column: QueryAccountStatesOrderByColumn;
  order: SortOrder;
};

export type QueryActiveSessionsStatic = {
  company?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};

export type QueryActivityLogsStatic = {
  company?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<Scalars['String']['input']>;
};

export type QueryApplicantAccountsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantAccountsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantAccountsFilterStatic {
  IsShow = 'IS_SHOW'
}

export type QueryApplicantAccountsFilterStaticInput = {
  is_show?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum QueryApplicantAccountsFilterStaticOperator {
  IsShow = 'is_show'
}

export enum QueryApplicantAccountsFilterStaticType {
  IsShow = 'is_show'
}

export enum QueryApplicantAccountsOrderByColumn {
  CurrentBalance = 'CURRENT_BALANCE',
  Id = 'ID'
}

export type QueryApplicantAccountsOrderByOrderByClause = {
  column: QueryApplicantAccountsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantBankingAccessesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantBankingAccessesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantBankingAccessesFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

export type QueryApplicantBankingAccessesFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryApplicantBankingAccessesFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryApplicantBankingAccessesFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryApplicantBankingAccessesOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

export type QueryApplicantBankingAccessesOrderByOrderByClause = {
  column: QueryApplicantBankingAccessesOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantCompaniesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantCompaniesFilterStatic {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  HasBusinessTypeMixedIdOrName = 'HAS_BUSINESS_TYPE_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasKycLevelMixedIdOrName = 'HAS_KYC_LEVEL_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasRiskLevelMixedIdOrName = 'HAS_RISK_LEVEL_MIXED_ID_OR_NAME',
  HasStateReasonMixedIdOrName = 'HAS_STATE_REASON_MIXED_ID_OR_NAME',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  HasStatusMixedIdOrName = 'HAS_STATUS_MIXED_ID_OR_NAME',
  Id = 'ID',
  Name = 'NAME',
  ProjectId = 'PROJECT_ID',
  Url = 'URL'
}

export type QueryApplicantCompaniesFilterStaticInput = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hasBusinessTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasKycLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasRiskLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasStateReasonMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasStatusMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryApplicantCompaniesFilterStaticOperator {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

export enum QueryApplicantCompaniesFilterStaticType {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

export enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompaniesHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompaniesHasKycLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompaniesHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompaniesHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompaniesHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompaniesOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  OwnerId = 'OWNER_ID',
  Url = 'URL'
}

export type QueryApplicantCompaniesOrderByOrderByClause = {
  column: QueryApplicantCompaniesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompaniesWhereColumn {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  ApplicantStateId = 'APPLICANT_STATE_ID',
  ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

export type QueryApplicantCompaniesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompanyBusinessTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
  column: QueryApplicantCompanyBusinessTypeOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyBusinessTypeWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantCompanyNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  column: QueryApplicantCompanyNotesOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantCompanyRiskLevelHistoryFilterStatic {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantCompanyRiskLevelHistoryFilterStaticInput = {
  applicant_company_id: Scalars['ID']['input'];
  risk_level_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired {
  ApplicantCompanyId = 'applicant_company_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticType {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type QueryApplicantDocumentTagsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantDocumentTagsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantDocumentTagsFilterStatic {
  HasCategoryFilterByName = 'HAS_CATEGORY_FILTER_BY_NAME',
  Name = 'NAME'
}

export type QueryApplicantDocumentTagsFilterStaticInput = {
  hasCategoryFilterByName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryApplicantDocumentTagsFilterStaticOperator {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

export enum QueryApplicantDocumentTagsFilterStaticType {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

export enum QueryApplicantDocumentTagsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantDocumentTagsOrderByOrderByClause = {
  column: QueryApplicantDocumentTagsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantDocumentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantDocumentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantDocumentsFilterStatic {
  ApplicantId = 'APPLICANT_ID',
  DocumentStateId = 'DOCUMENT_STATE_ID',
  DocumentTypeId = 'DOCUMENT_TYPE_ID',
  Id = 'ID'
}

export type QueryApplicantDocumentsFilterStaticInput = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  document_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryApplicantDocumentsFilterStaticOperator {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

export enum QueryApplicantDocumentsFilterStaticType {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

export enum QueryApplicantDocumentsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantDocumentsOrderByOrderByClause = {
  column: QueryApplicantDocumentsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantIndividualCompanyPositionsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyPositionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyPositionsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantIndividualCompanyRelationsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantIndividualCompanyRelationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyRelationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryApplicantIndividualCompanyRelationsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyRelationsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsWhereColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type QueryApplicantIndividualModulesFilterStatic = {
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryApplicantIndividualNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  column: QueryApplicantIndividualNotesOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantIndividualsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantIndividualsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryApplicantIndividualsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasRiskLevelFilterById = 'HAS_RISK_LEVEL_FILTER_BY_ID',
  HasStateReasonFilterById = 'HAS_STATE_REASON_FILTER_BY_ID',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  Id = 'ID',
  KycLevelId = 'KYC_LEVEL_ID',
  ProjectId = 'PROJECT_ID'
}

export type QueryApplicantIndividualsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasRiskLevelFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasStateReasonFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryApplicantIndividualsFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id'
}

export enum QueryApplicantIndividualsFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id'
}

export enum QueryApplicantIndividualsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

export type QueryApplicantIndividualsOrderByOrderByClause = {
  column: QueryApplicantIndividualsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantKycLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantKycLevelsOrderByOrderByClause = {
  column: QueryApplicantKycLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantKycLevelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantKycLevelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantModulesOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantModulesOrderByOrderByClause = {
  column: QueryApplicantModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantModulesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantModulesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantModulesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantRiskLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantRiskLevelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantStateReasonsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStateReasonsOrderByOrderByClause = {
  column: QueryApplicantStateReasonsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStateReasonsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStateReasonsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStatesOrderByOrderByClause = {
  column: QueryApplicantStatesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStatesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantStatesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryApplicantStatusesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStatusesOrderByOrderByClause = {
  column: QueryApplicantStatusesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatusesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStatusesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type QueryAuthenticationLogsStatic = {
  browser?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  client_type?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  device_type?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expired_at?: InputMaybe<Scalars['Date']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBankCorrespondentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  column?: InputMaybe<QueryBankCorrespondentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryBankCorrespondentsFilterStatic {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'HAS_BANK_CORRESPONDENT_CURRENCIES_FILTER_BY_CURRENCY_ID',
  HasBankCorrespondentRegionsFilterByRegionId = 'HAS_BANK_CORRESPONDENT_REGIONS_FILTER_BY_REGION_ID',
  Name = 'NAME'
}

export type QueryBankCorrespondentsFilterStaticInput = {
  hasBankCorrespondentCurrenciesFilterByCurrencyId?: InputMaybe<Scalars['ID']['input']>;
  hasBankCorrespondentRegionsFilterByRegionId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryBankCorrespondentsFilterStaticOperator {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name'
}

export enum QueryBankCorrespondentsFilterStaticType {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name'
}

export enum QueryBankCorrespondentsOrderByColumn {
  Id = 'ID'
}

export type QueryBankCorrespondentsOrderByOrderByClause = {
  column: QueryBankCorrespondentsOrderByColumn;
  order: SortOrder;
};

export type QueryBusinessActivitiesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  column?: InputMaybe<QueryBusinessActivitiesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryBusinessActivitiesFilterStatic {
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryBusinessActivitiesFilterStaticInput = {
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryBusinessActivitiesFilterStaticOperator {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryBusinessActivitiesFilterStaticType {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryBusinessActivitiesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryBusinessActivitiesOrderByOrderByClause = {
  column: QueryBusinessActivitiesOrderByColumn;
  order: SortOrder;
};

export type QueryClientCondition = {
  id: Scalars['ID']['input'];
};

export type QueryCommissionPriceListsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryCommissionPriceListsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  RegionId = 'REGION_ID'
}

export type QueryCommissionPriceListsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryCommissionPriceListsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

export enum QueryCommissionPriceListsFilterStaticType {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

export enum QueryCommissionPriceListsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsOrderByOrderByClause = {
  column: QueryCommissionPriceListsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitActionTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitActionTypesOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitActionTypesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitActionTypesWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitTypesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type QueryCommissionTemplateLimitsFilterStatic = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  period_count?: InputMaybe<Scalars['Int']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCommissionTemplatesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryCommissionTemplatesFilterStatic {
  HasBusinessActivityFilterById = 'HAS_BUSINESS_ACTIVITY_FILTER_BY_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryCommissionTemplatesFilterStaticInput = {
  hasBusinessActivityFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryCommissionTemplatesFilterStaticOperator {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryCommissionTemplatesFilterStaticType {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryCommissionTemplatesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryCommissionTemplatesOrderByOrderByClause = {
  column: QueryCommissionTemplatesOrderByColumn;
  order: SortOrder;
};

export type QueryCompaniesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  column?: InputMaybe<QueryCompaniesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryCompaniesFilterStatic {
  CountryId = 'COUNTRY_ID',
  Email = 'EMAIL',
  EntityType = 'ENTITY_TYPE',
  HasPaymentProvidersFilterById = 'HAS_PAYMENT_PROVIDERS_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Name = 'NAME',
  RegNumber = 'REG_NUMBER',
  Url = 'URL'
}

export type QueryCompaniesFilterStaticInput = {
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  hasPaymentProvidersFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryCompaniesFilterStaticOperator {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

export enum QueryCompaniesFilterStaticType {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

export enum QueryCompaniesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

export type QueryCompaniesOrderByOrderByClause = {
  column: QueryCompaniesOrderByColumn;
  order: SortOrder;
};

export type QueryDepartmentPositionsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  column?: InputMaybe<QueryDepartmentPositionsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryDepartmentPositionsFilterStatic {
  HasDepartmentFilterById = 'HAS_DEPARTMENT_FILTER_BY_ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryDepartmentPositionsFilterStaticInput = {
  hasDepartmentFilterById?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryDepartmentPositionsFilterStaticOperator {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryDepartmentPositionsFilterStaticType {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryDepartmentPositionsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryDepartmentPositionsOrderByOrderByClause = {
  column: QueryDepartmentPositionsOrderByColumn;
  order: SortOrder;
};

export type QueryDepartmentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  column?: InputMaybe<QueryDepartmentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryDepartmentsFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Name = 'NAME'
}

export type QueryDepartmentsFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryDepartmentsFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

export enum QueryDepartmentsFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

export enum QueryDepartmentsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryDepartmentsOrderByOrderByClause = {
  column: QueryDepartmentsOrderByColumn;
  order: SortOrder;
};

export type QueryEmailNotificationsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  column?: InputMaybe<QueryEmailNotificationsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryEmailNotificationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasApplicantCompanyMixedIdOrName = 'HAS_APPLICANT_COMPANY_MIXED_ID_OR_NAME',
  HasApplicantIndividualMixedIdOrFullname = 'HAS_APPLICANT_INDIVIDUAL_MIXED_ID_OR_FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasTemplatesFilterBySubject = 'HAS_TEMPLATES_FILTER_BY_SUBJECT',
  RecipientType = 'RECIPIENT_TYPE',
  Type = 'TYPE'
}

export enum QueryEmailNotificationsFilterStaticEnumNotifyType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

export enum QueryEmailNotificationsFilterStaticEnumRecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

export type QueryEmailNotificationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasApplicantCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasApplicantIndividualMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasTemplatesFilterBySubject?: InputMaybe<Scalars['String']['input']>;
  recipient_type?: InputMaybe<RecipientType>;
  type?: InputMaybe<NotifyType>;
};

export enum QueryEmailNotificationsFilterStaticOperator {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

export enum QueryEmailNotificationsFilterStaticType {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

export enum QueryEmailNotificationsOrderByColumn {
  Id = 'ID'
}

export type QueryEmailNotificationsOrderByOrderByClause = {
  column: QueryEmailNotificationsOrderByColumn;
  order: SortOrder;
};

export enum QueryEmailSmtpsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryEmailSmtpsOrderByOrderByClause = {
  column: QueryEmailSmtpsOrderByColumn;
  order: SortOrder;
};

export type QueryEmailTemplatesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  column?: InputMaybe<QueryEmailTemplatesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryEmailTemplatesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCompanyFilterByName = 'HAS_COMPANY_FILTER_BY_NAME',
  Name = 'NAME',
  ServiceType = 'SERVICE_TYPE',
  Type = 'TYPE'
}

export enum QueryEmailTemplatesFilterStaticEnumClientType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

export enum QueryEmailTemplatesFilterStaticEnumServiceType {
  AdminNotify = 'ADMIN_NOTIFY',
  Banking = 'BANKING',
  BankingCommon = 'BANKING_COMMON',
  BankingSystem = 'BANKING_SYSTEM',
  Common = 'COMMON',
  System = 'SYSTEM'
}

export type QueryEmailTemplatesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasCompanyFilterByName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  service_type?: InputMaybe<ServiceType>;
  type?: InputMaybe<ClientType>;
};

export enum QueryEmailTemplatesFilterStaticOperator {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

export enum QueryEmailTemplatesFilterStaticType {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

export enum QueryEmailTemplatesOrderByColumn {
  Id = 'ID'
}

export type QueryEmailTemplatesOrderByOrderByClause = {
  column: QueryEmailTemplatesOrderByColumn;
  order: SortOrder;
};

export type QueryFeeTypesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  column?: InputMaybe<QueryFeeTypesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryFeeTypesFilterStatic {
  HasOperationTypeFilterById = 'HAS_OPERATION_TYPE_FILTER_BY_ID'
}

export type QueryFeeTypesFilterStaticInput = {
  hasOperationTypeFilterById?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryFeeTypesFilterStaticOperator {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

export enum QueryFeeTypesFilterStaticType {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

export type QueryFilesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
  column?: InputMaybe<QueryFilesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryFilesFilterStatic {
  AuthorId = 'AUTHOR_ID',
  EntityType = 'ENTITY_TYPE'
}

export type QueryFilesFilterStaticInput = {
  author_id?: InputMaybe<Scalars['ID']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryFilesFilterStaticOperator {
  AuthorId = 'author_id',
  EntityType = 'entity_type'
}

export enum QueryFilesFilterStaticType {
  AuthorId = 'author_id',
  EntityType = 'entity_type'
}

export enum QueryFilesOrderByColumn {
  AuthorId = 'AUTHOR_ID',
  Id = 'ID'
}

export type QueryFilesOrderByOrderByClause = {
  column: QueryFilesOrderByColumn;
  order: SortOrder;
};

export type QueryGetMatchedUsersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  column?: InputMaybe<QueryGetMatchedUsersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryGetMatchedUsersFilterStatic {
  ApplicantType = 'APPLICANT_TYPE'
}

export enum QueryGetMatchedUsersFilterStaticEnumApplicantType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL'
}

export type QueryGetMatchedUsersFilterStaticInput = {
  applicant_type?: InputMaybe<ApplicantType>;
};

export enum QueryGetMatchedUsersFilterStaticOperator {
  ApplicantType = 'applicant_type'
}

export enum QueryGetMatchedUsersFilterStaticType {
  ApplicantType = 'applicant_type'
}

export type QueryGrantedBankingAccessFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  column?: InputMaybe<QueryGrantedBankingAccessFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryGrantedBankingAccessFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

export type QueryGrantedBankingAccessFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryGrantedBankingAccessFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryGrantedBankingAccessFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryGrantedBankingAccessOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

export type QueryGrantedBankingAccessOrderByOrderByClause = {
  column: QueryGrantedBankingAccessOrderByColumn;
  order: SortOrder;
};

export type QueryGroupListFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  column?: InputMaybe<QueryGroupListFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryGroupListFilterStatic {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  ModuleId = 'MODULE_ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  RoleId = 'ROLE_ID'
}

export type QueryGroupListFilterStaticInput = {
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryGroupListFilterStaticOperator {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id'
}

export enum QueryGroupListFilterStaticType {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id'
}

export enum QueryGroupListOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryGroupListOrderByOrderByClause = {
  column: QueryGroupListOrderByColumn;
  order: SortOrder;
};

export type QueryGroupTypesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  column?: InputMaybe<QueryGroupTypesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryGroupTypesFilterStatic {
  HasGroupsFilterByCompanyId = 'HAS_GROUPS_FILTER_BY_COMPANY_ID',
  HasGroupsFilterByRoleId = 'HAS_GROUPS_FILTER_BY_ROLE_ID',
  HasRolesFilterById = 'HAS_ROLES_FILTER_BY_ID'
}

export type QueryGroupTypesFilterStaticInput = {
  hasGroupsFilterByCompanyId?: InputMaybe<Scalars['ID']['input']>;
  hasGroupsFilterByRoleId?: InputMaybe<Scalars['ID']['input']>;
  hasRolesFilterById?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryGroupTypesFilterStaticOperator {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

export enum QueryGroupTypesFilterStaticType {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

export type QueryGroupsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  column?: InputMaybe<QueryGroupsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryGroupsFilterStatic {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
  RoleId = 'ROLE_ID'
}

export type QueryGroupsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryGroupsFilterStaticOperator {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

export enum QueryGroupsFilterStaticType {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

export enum QueryGroupsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryGroupsOrderByOrderByClause = {
  column: QueryGroupsOrderByColumn;
  order: SortOrder;
};

export enum QueryKycTimelinesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryKycTimelinesOrderByOrderByClause = {
  column: QueryKycTimelinesOrderByColumn;
  order: SortOrder;
};

export type QueryMemberAccessLimitationsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  column?: InputMaybe<QueryMemberAccessLimitationsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryMemberAccessLimitationsFilterStatic {
  DoesntHaveGroupRoles = 'DOESNT_HAVE_GROUP_ROLES',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasGroupRolesFilterById = 'HAS_GROUP_ROLES_FILTER_BY_ID',
  ModuleId = 'MODULE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  ProjectId = 'PROJECT_ID'
}

export type QueryMemberAccessLimitationsFilterStaticInput = {
  doesntHaveGroupRoles?: InputMaybe<Scalars['Boolean']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  hasGroupRolesFilterById?: InputMaybe<Scalars['ID']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryMemberAccessLimitationsFilterStaticOperator {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

export enum QueryMemberAccessLimitationsFilterStaticType {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

export enum QueryMemberAccessLimitationsOrderByColumn {
  Id = 'ID'
}

export type QueryMemberAccessLimitationsOrderByOrderByClause = {
  column: QueryMemberAccessLimitationsOrderByColumn;
  order: SortOrder;
};

export type QueryMembersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  column?: InputMaybe<QueryMembersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryMembersFilterStatic {
  CompanyId = 'COMPANY_ID',
  DepartmentId = 'DEPARTMENT_ID',
  DepartmentPositionId = 'DEPARTMENT_POSITION_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleFilterById = 'HAS_GROUP_ROLE_FILTER_BY_ID',
  HasRoleFilterById = 'HAS_ROLE_FILTER_BY_ID',
  Id = 'ID',
  IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
  LastLoginAt = 'LAST_LOGIN_AT',
  MemberStatusId = 'MEMBER_STATUS_ID'
}

export type QueryMembersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  department_id?: InputMaybe<Scalars['ID']['input']>;
  department_position_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  hasGroupRoleFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasRoleFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  last_login_at?: InputMaybe<Scalars['String']['input']>;
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryMembersFilterStaticOperator {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

export enum QueryMembersFilterStaticType {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

export enum QueryMembersOrderByColumn {
  Email = 'EMAIL',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  LastLoginAt = 'LAST_LOGIN_AT'
}

export type QueryMembersOrderByOrderByClause = {
  column: QueryMembersOrderByColumn;
  order: SortOrder;
};

export enum QueryModulesOrderByColumn {
  Id = 'ID'
}

export type QueryModulesOrderByOrderByClause = {
  column: QueryModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryModulesWhereColumn {
  Name = 'NAME'
}

export type QueryModulesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryModulesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  column?: InputMaybe<QueryModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryModulesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryModulesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export enum QueryModulesWithKycOrderByColumn {
  Id = 'ID'
}

export type QueryModulesWithKycOrderByOrderByClause = {
  column: QueryModulesWithKycOrderByColumn;
  order: SortOrder;
};

export enum QueryModulesWithKycWhereColumn {
  Name = 'NAME'
}

export type QueryModulesWithKycWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  HAS?: InputMaybe<QueryModulesWithKycWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  column?: InputMaybe<QueryModulesWithKycWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryModulesWithKycWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type QueryOperationTypesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  column?: InputMaybe<QueryOperationTypesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryOperationTypesFilterStatic {
  FeeTypeId = 'FEE_TYPE_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
  TransferType = 'TRANSFER_TYPE'
}

export enum QueryOperationTypesFilterStaticEnumTransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

export type QueryOperationTypesFilterStaticInput = {
  fee_type_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  transfer_type?: InputMaybe<TransferType>;
};

export enum QueryOperationTypesFilterStaticOperator {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

export enum QueryOperationTypesFilterStaticType {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

export enum QueryOwnersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryOwnersOrderByOrderByClause = {
  column: QueryOwnersOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentBankCondition = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_code?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id: Scalars['ID']['input'];
  payment_system_code?: InputMaybe<Scalars['String']['input']>;
  payment_system_id: Scalars['ID']['input'];
};

export type QueryPaymentBanksFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentBanksFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPaymentBanksFilterStatic {
  Address = 'ADDRESS',
  BankCode = 'BANK_CODE',
  CountryId = 'COUNTRY_ID',
  Id = 'ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemCode = 'PAYMENT_SYSTEM_CODE',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

export type QueryPaymentBanksFilterStaticInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_code?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_code?: InputMaybe<Scalars['String']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryPaymentBanksFilterStaticOperator {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

export enum QueryPaymentBanksFilterStaticType {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

export enum QueryPaymentBanksOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentBanksOrderByOrderByClause = {
  column: QueryPaymentBanksOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentProviderIbansFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentProviderIbansFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPaymentProviderIbansFilterStatic {
  CompanyId = 'COMPANY_ID',
  CurrencyId = 'CURRENCY_ID',
  Name = 'NAME'
}

export type QueryPaymentProviderIbansFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryPaymentProviderIbansFilterStaticOperator {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

export enum QueryPaymentProviderIbansFilterStaticType {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

export enum QueryPaymentProviderIbansOrderByColumn {
  Id = 'ID'
}

export type QueryPaymentProviderIbansOrderByOrderByClause = {
  column: QueryPaymentProviderIbansOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentProvidersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentProvidersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPaymentProvidersFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterById = 'HAS_ACCOUNT_FILTER_BY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentSystemsFilterById = 'HAS_PAYMENT_SYSTEMS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPaymentProvidersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasAccountFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemsFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryPaymentProvidersFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryPaymentProvidersFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryPaymentProvidersOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentProvidersOrderByOrderByClause = {
  column: QueryPaymentProvidersOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentStatusesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentStatusesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPaymentStatusesFilterStatic {
  OperationType = 'OPERATION_TYPE'
}

export enum QueryPaymentStatusesFilterStaticEnumOperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingTransfer = 'INCOMING_TRANSFER',
  OutgoingTransfer = 'OUTGOING_TRANSFER',
  ScheduledFee = 'SCHEDULED_FEE'
}

export type QueryPaymentStatusesFilterStaticInput = {
  operation_type?: InputMaybe<OperationTypeEnum>;
};

export enum QueryPaymentStatusesFilterStaticOperator {
  OperationType = 'operation_type'
}

export enum QueryPaymentStatusesFilterStaticType {
  OperationType = 'operation_type'
}

export type QueryPaymentSystemsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentSystemsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPaymentSystemsFilterStatic {
  HasCompaniesFilterById = 'HAS_COMPANIES_FILTER_BY_ID',
  HasProvidersFilterById = 'HAS_PROVIDERS_FILTER_BY_ID',
  HasProvidersFilterByName = 'HAS_PROVIDERS_FILTER_BY_NAME',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPaymentSystemsFilterStaticInput = {
  hasCompaniesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasProvidersFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasProvidersFilterByName?: InputMaybe<Scalars['String']['input']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['Mixed']['input']>;
  name?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPaymentSystemsFilterStaticOperator {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryPaymentSystemsFilterStaticType {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryPaymentSystemsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentSystemsOrderByOrderByClause = {
  column: QueryPaymentSystemsOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPaymentsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

export type QueryPaymentsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  sender_name?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['ID']['input']>;
  urgency_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryPaymentsFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export enum QueryPaymentsFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export enum QueryPaymentsOrderByColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  Fee = 'FEE',
  Id = 'ID',
  PaymentNumber = 'PAYMENT_NUMBER'
}

export type QueryPaymentsOrderByOrderByClause = {
  column: QueryPaymentsOrderByColumn;
  order: SortOrder;
};

export enum QueryPermissionsWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPermissionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  column?: InputMaybe<QueryPermissionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type QueryPermissionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type QueryPriceListFeesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  column?: InputMaybe<QueryPriceListFeesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryPriceListFeesFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PeriodId = 'PERIOD_ID',
  PriceListId = 'PRICE_LIST_ID',
  TypeId = 'TYPE_ID'
}

export type QueryPriceListFeesFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasFeesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  period_id?: InputMaybe<Scalars['ID']['input']>;
  price_list_id?: InputMaybe<Scalars['ID']['input']>;
  type_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryPriceListFeesFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

export enum QueryPriceListFeesFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

export type QueryProjectsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  column?: InputMaybe<QueryProjectsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryProjectsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  ModuleId = 'MODULE_ID'
}

export type QueryProjectsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryProjectsFilterStaticOperator {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

export enum QueryProjectsFilterStaticType {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

export type QueryRegionsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  column?: InputMaybe<QueryRegionsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryRegionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCountriesFilterById = 'HAS_COUNTRIES_FILTER_BY_ID',
  HasCountriesFilterByName = 'HAS_COUNTRIES_FILTER_BY_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME'
}

export type QueryRegionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasCountriesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasCountriesFilterByName?: InputMaybe<Scalars['String']['input']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryRegionsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

export enum QueryRegionsFilterStaticType {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

export type QueryRequisitesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  column?: InputMaybe<QueryRequisitesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryRequisitesFilterStatic {
  AccountNumber = 'ACCOUNT_NUMBER',
  CompanyId = 'COMPANY_ID',
  PaymentBankId = 'PAYMENT_BANK_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

export type QueryRequisitesFilterStaticInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryRequisitesFilterStaticOperator {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

export enum QueryRequisitesFilterStaticType {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

export type QueryRolesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  column?: InputMaybe<QueryRolesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryRolesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasGroupsMixedIdOrName = 'HAS_GROUPS_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  Name = 'NAME'
}

export type QueryRolesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupsMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryRolesFilterStaticOperator {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

export enum QueryRolesFilterStaticType {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

export enum QueryRolesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryRolesOrderByOrderByClause = {
  column: QueryRolesOrderByColumn;
  order: SortOrder;
};

export type QueryTicketsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
  column?: InputMaybe<QueryTicketsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryTicketsFilterStatic {
  ClientId = 'CLIENT_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

export type QueryTicketsFilterStaticInput = {
  client_id?: InputMaybe<Scalars['ID']['input']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  member_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryTicketsFilterStaticOperator {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id'
}

export enum QueryTicketsFilterStaticType {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id'
}

export enum QueryTicketsOrderByColumn {
  Id = 'ID'
}

export type QueryTicketsOrderByCompany = {
  aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByDepartment = {
  aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByRelationOrderByClause = {
  column?: InputMaybe<QueryTicketsOrderByColumn>;
  company?: InputMaybe<QueryTicketsOrderByCompany>;
  department?: InputMaybe<QueryTicketsOrderByDepartment>;
  order: SortOrder;
};

export type QueryTransferIncomingsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  column?: InputMaybe<QueryTransferIncomingsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryTransferIncomingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

export type QueryTransferIncomingsFilterStaticInput = {
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  sender_name?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['ID']['input']>;
  urgency_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryTransferIncomingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export enum QueryTransferIncomingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export type QueryTransferOutgoingsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  column?: InputMaybe<QueryTransferOutgoingsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryTransferOutgoingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  HasSenderMixedNameOrFullname = 'HAS_SENDER_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  RecipientName = 'RECIPIENT_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
  UserType = 'USER_TYPE'
}

export enum QueryTransferOutgoingsFilterStaticEnumUserType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Members = 'MEMBERS'
}

export type QueryTransferOutgoingsFilterStaticInput = {
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']['input']>;
  hasSenderMixedNameOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['ID']['input']>;
  urgency_id?: InputMaybe<Scalars['ID']['input']>;
  user_type?: InputMaybe<UserType>;
};

export enum QueryTransferOutgoingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

export enum QueryTransferOutgoingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

export type QueryUsersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  column?: InputMaybe<QueryUsersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QueryUsersFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

export type QueryUsersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryUsersFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

export enum QueryUsersFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

export enum QueryUsersOrderByColumn {
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryUsersOrderByOrderByClause = {
  column: QueryUsersOrderByColumn;
  order: SortOrder;
};

export type RawFile = {
  __typename?: 'RawFile';
  base64: Scalars['String']['output'];
};

export enum RecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

export type Region = {
  __typename?: 'Region';
  company?: Maybe<Company>;
  countries?: Maybe<Array<Maybe<Country>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RegionPaginator = {
  __typename?: 'RegionPaginator';
  data: Array<Region>;
  paginatorInfo: PaginatorInfo;
};

export type Requisite = {
  __typename?: 'Requisite';
  account_number?: Maybe<Scalars['String']['output']>;
  bank?: Maybe<PaymentBank>;
  currency?: Maybe<Currencies>;
  id?: Maybe<Scalars['ID']['output']>;
  owner?: Maybe<ApplicantIndividual>;
};

export type RespondentFee = {
  __typename?: 'RespondentFee';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Role = {
  __typename?: 'Role';
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']['output']>;
  group_type?: Maybe<GroupType>;
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  groups_count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  is_all_companies?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  permissions_tree?: Maybe<Scalars['JSON']['output']>;
};

export type RolePaginator = {
  __typename?: 'RolePaginator';
  data: Array<Role>;
  paginatorInfo: PaginatorInfo;
};

export enum SqlOperator {
  Between = 'BETWEEN',
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  Ilike = 'ILIKE',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  Like = 'LIKE',
  Lt = 'LT',
  Lte = 'LTE',
  Neq = 'NEQ',
  NotBetween = 'NOT_BETWEEN',
  NotIn = 'NOT_IN',
  NotLike = 'NOT_LIKE'
}

export enum Securities {
  Auto = 'Auto',
  Ssl = 'Ssl',
  Starttls = 'Starttls'
}

export type Sender = {
  __typename?: 'Sender';
  sender_name: Scalars['String']['output'];
};

export enum ServiceType {
  AdminNotify = 'AdminNotify',
  Banking = 'Banking',
  BankingCommon = 'BankingCommon',
  BankingSystem = 'BankingSystem',
  Common = 'Common',
  System = 'System'
}

export enum Sex {
  Female = 'Female',
  Male = 'Male'
}

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  firstItem?: Maybe<Scalars['Int']['output']>;
  hasMorePages: Scalars['Boolean']['output'];
  lastItem?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type State = {
  __typename?: 'State';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type StateReason = {
  __typename?: 'StateReason';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type StatusType = {
  __typename?: 'StatusType';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Ticket = {
  __typename?: 'Ticket';
  client?: Maybe<ApplicantIndividual>;
  comments?: Maybe<Array<Maybe<TicketComments>>>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  department?: Maybe<Department>;
  file_object?: Maybe<Files>;
  id: Scalars['ID']['output'];
  member?: Maybe<Members>;
  message: Scalars['String']['output'];
  position?: Maybe<DepartmentPosition>;
  status?: Maybe<TicketStatus>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type TicketComments = {
  __typename?: 'TicketComments';
  client?: Maybe<ApplicantIndividual>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  file_object?: Maybe<Files>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  ticket?: Maybe<Ticket>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type TicketPaginator = {
  __typename?: 'TicketPaginator';
  data: Array<Ticket>;
  paginatorInfo: PaginatorInfo;
};

export type TicketStatus = {
  __typename?: 'TicketStatus';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TransferIncoming = {
  __typename?: 'TransferIncoming';
  account?: Maybe<Account>;
  amount: Scalars['Decimal']['output'];
  amount_debt: Scalars['Decimal']['output'];
  bank_message?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  currency?: Maybe<Currencies>;
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  fee?: Maybe<Fee>;
  fees?: Maybe<Array<Maybe<Fee>>>;
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID']['output'];
  payment_bank?: Maybe<PaymentBank>;
  payment_number: Scalars['String']['output'];
  payment_operation_type?: Maybe<OperationType>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  payment_system?: Maybe<PaymentSystem>;
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Client>;
  respondent_fee?: Maybe<RespondentFee>;
  sender_account?: Maybe<Scalars['String']['output']>;
  sender_address?: Maybe<Scalars['String']['output']>;
  sender_bank_address?: Maybe<Scalars['String']['output']>;
  sender_bank_country?: Maybe<Country>;
  sender_bank_name?: Maybe<Scalars['String']['output']>;
  sender_bank_swift?: Maybe<Scalars['String']['output']>;
  sender_city?: Maybe<Scalars['String']['output']>;
  sender_country?: Maybe<Country>;
  sender_name?: Maybe<Scalars['String']['output']>;
  sender_state?: Maybe<Scalars['String']['output']>;
  sender_zip?: Maybe<Scalars['String']['output']>;
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']['output']>;
  transfer_type?: Maybe<TypeOfTransfer>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type TransferIncomingHistory = {
  __typename?: 'TransferIncomingHistory';
  action?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<PaymentStatus>;
};

export type TransferIncomingHistoryPaginator = {
  __typename?: 'TransferIncomingHistoryPaginator';
  data: Array<TransferIncomingHistory>;
  paginatorInfo: PaginatorInfo;
};

export type TransferIncomingPaginator = {
  __typename?: 'TransferIncomingPaginator';
  data: Array<TransferIncoming>;
  paginatorInfo: PaginatorInfo;
};

export type TransferIncomingStatistic = {
  __typename?: 'TransferIncomingStatistic';
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status_id: Scalars['ID']['output'];
};

export type TransferOutgoing = {
  __typename?: 'TransferOutgoing';
  account?: Maybe<Account>;
  amount: Scalars['Decimal']['output'];
  amount_debt: Scalars['Decimal']['output'];
  bank_message?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  currency?: Maybe<Currencies>;
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  fee?: Maybe<Fee>;
  fees?: Maybe<Array<Maybe<Fee>>>;
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID']['output'];
  payment_bank?: Maybe<PaymentBank>;
  payment_number: Scalars['String']['output'];
  payment_operation_type?: Maybe<OperationType>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  payment_system?: Maybe<PaymentSystem>;
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']['output']>;
  recipient_account: Scalars['String']['output'];
  recipient_address: Scalars['String']['output'];
  recipient_bank_address: Scalars['String']['output'];
  recipient_bank_country?: Maybe<Country>;
  recipient_bank_name: Scalars['String']['output'];
  recipient_bank_swift?: Maybe<Scalars['String']['output']>;
  recipient_city: Scalars['String']['output'];
  recipient_country?: Maybe<Country>;
  recipient_name: Scalars['String']['output'];
  recipient_state: Scalars['String']['output'];
  recipient_zip: Scalars['String']['output'];
  requested_by?: Maybe<Clientable>;
  respondent_fee?: Maybe<RespondentFee>;
  sender?: Maybe<Client>;
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']['output']>;
  transfer_type?: Maybe<TypeOfTransfer>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  user_type?: Maybe<UserType>;
};

export type TransferOutgoingHistory = {
  __typename?: 'TransferOutgoingHistory';
  action?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<PaymentStatus>;
};

export type TransferOutgoingHistoryPaginator = {
  __typename?: 'TransferOutgoingHistoryPaginator';
  data: Array<TransferOutgoingHistory>;
  paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingPaginator = {
  __typename?: 'TransferOutgoingPaginator';
  data: Array<TransferOutgoing>;
  paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingStatistic = {
  __typename?: 'TransferOutgoingStatistic';
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status_id: Scalars['ID']['output'];
};

export enum TransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

export type TwoFactorAuthSettings = {
  __typename?: 'TwoFactorAuthSettings';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TwoFactorAuthSettingsPaginator = {
  __typename?: 'TwoFactorAuthSettingsPaginator';
  data: Array<TwoFactorAuthSettings>;
  paginatorInfo: PaginatorInfo;
};

export type TwoFactorAuthToken = {
  __typename?: 'TwoFactorAuthToken';
  auth_token?: Maybe<Scalars['String']['output']>;
  two_factor?: Maybe<Scalars['Boolean']['output']>;
};

export type TypeOfIndustry = {
  __typename?: 'TypeOfIndustry';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TypeOfTransfer = {
  __typename?: 'TypeOfTransfer';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum UserType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual',
  Members = 'Members'
}

export type Users = {
  __typename?: 'Users';
  company?: Maybe<Company>;
  email?: Maybe<Scalars['EMAIL']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  group?: Maybe<GroupRole>;
  id?: Maybe<Scalars['ID']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
};

export type UsersPaginator = {
  __typename?: 'UsersPaginator';
  data: Array<Users>;
  paginatorInfo: PaginatorInfo;
};

export type WhereConditions = {
  AND?: InputMaybe<Array<WhereConditions>>;
  HAS?: InputMaybe<WhereConditionsRelation>;
  OR?: InputMaybe<Array<WhereConditions>>;
  column?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type WhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<WhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String']['input'];
};

export type DashboardAccountsStatistic = {
  __typename?: 'dashboardAccountsStatistic';
  account_state_id: Scalars['ID']['output'];
  account_state_name: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  payment_provider_id: Scalars['ID']['output'];
  payment_provider_name: Scalars['String']['output'];
};

export type DashboardTicketsStatistic = {
  __typename?: 'dashboardTicketsStatistic';
  count: Scalars['Int']['output'];
  status_id: Scalars['ID']['output'];
  status_name: Scalars['String']['output'];
};

export type DashboardTransfersStatistic = {
  __typename?: 'dashboardTransfersStatistic';
  count: Scalars['Int']['output'];
  status_name: Scalars['String']['output'];
  transfer_type: Scalars['String']['output'];
};

export type DashboardUsersStatistic = {
  __typename?: 'dashboardUsersStatistic';
  applicant_type: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  status_name: Scalars['String']['output'];
};

export type PriceList = {
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserAuthResponse = {
  __typename?: 'userAuthResponse';
  data?: Maybe<Users>;
  permissions: PermissionAuth;
};

export type RelationsQueryVariables = Exact<{ [key: string]: never; }>;


export type RelationsQuery = { __typename?: 'Query', applicantIndividualCompanyRelations?: { __typename?: 'ApplicantIndividualCompanyRelationPaginator', data: Array<{ __typename?: 'ApplicantIndividualCompanyRelation', id: string, name: string }> } | null };

export type PositionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PositionsQuery = { __typename?: 'Query', applicantIndividualCompanyPositions?: { __typename?: 'ApplicantIndividualCompanyPositionPaginator', data: Array<{ __typename?: 'ApplicantIndividualCompanyPosition', id: string, name: string }> } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  Client: ( ApplicantCompany ) | ( ApplicantIndividual );
  Clientable: ( ApplicantCompany ) | ( ApplicantIndividual ) | ( Members );
  ProviderType: ( PaymentProvider ) | ( PaymentProviderIban );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Omit<Account, 'client'> & { client?: Maybe<ResolversTypes['Client']> }>;
  AccountClient: ResolverTypeWrapper<Omit<AccountClient, 'client'> & { client: ResolversTypes['Client'] }>;
  AccountClientsType: AccountClientsType;
  AccountGenerateIbanResponse: ResolverTypeWrapper<AccountGenerateIbanResponse>;
  AccountLimit: ResolverTypeWrapper<AccountLimit>;
  AccountLimitPaginator: ResolverTypeWrapper<AccountLimitPaginator>;
  AccountPaginator: ResolverTypeWrapper<AccountPaginator>;
  AccountReachedLimit: ResolverTypeWrapper<AccountReachedLimit>;
  AccountReachedLimitPaginator: ResolverTypeWrapper<AccountReachedLimitPaginator>;
  AccountState: ResolverTypeWrapper<AccountState>;
  AccountStatement: ResolverTypeWrapper<AccountStatement>;
  AccountStatementTransaction: ResolverTypeWrapper<AccountStatementTransaction>;
  AccountType: AccountType;
  ActiveSession: ResolverTypeWrapper<ActiveSession>;
  ActiveSessionMutatorResponse: ResolverTypeWrapper<ActiveSessionMutatorResponse>;
  ActiveSessions: ResolverTypeWrapper<ActiveSessions>;
  ActivityLog: ResolverTypeWrapper<ActivityLog>;
  ActivityLogs: ResolverTypeWrapper<ActivityLogs>;
  AdditionalFieldInput: AdditionalFieldInput;
  ApplicantAccount: ResolverTypeWrapper<ApplicantAccount>;
  ApplicantBankingAccess: ResolverTypeWrapper<ApplicantBankingAccess>;
  ApplicantBankingAccesses: ResolverTypeWrapper<ApplicantBankingAccesses>;
  ApplicantClientType: ApplicantClientType;
  ApplicantCompany: ResolverTypeWrapper<ApplicantCompany>;
  ApplicantCompanyBusinessType: ResolverTypeWrapper<ApplicantCompanyBusinessType>;
  ApplicantCompanyBusinessTypePaginator: ResolverTypeWrapper<ApplicantCompanyBusinessTypePaginator>;
  ApplicantCompanyLabel: ResolverTypeWrapper<ApplicantCompanyLabel>;
  ApplicantCompanyLabelPaginator: ResolverTypeWrapper<ApplicantCompanyLabelPaginator>;
  ApplicantCompanyModules: ResolverTypeWrapper<ApplicantCompanyModules>;
  ApplicantCompanyNotes: ResolverTypeWrapper<ApplicantCompanyNotes>;
  ApplicantCompanyNotesPaginator: ResolverTypeWrapper<ApplicantCompanyNotesPaginator>;
  ApplicantCompanyPaginator: ResolverTypeWrapper<ApplicantCompanyPaginator>;
  ApplicantCompanyRiskLevelHistory: ResolverTypeWrapper<ApplicantCompanyRiskLevelHistory>;
  ApplicantCompanyRiskLevelHistoryPaginator: ResolverTypeWrapper<ApplicantCompanyRiskLevelHistoryPaginator>;
  ApplicantDetailsRequisites: ResolverTypeWrapper<ApplicantDetailsRequisites>;
  ApplicantDevice: ResolverTypeWrapper<ApplicantDevice>;
  ApplicantDocument: ResolverTypeWrapper<ApplicantDocument>;
  ApplicantDocumentInternalNote: ResolverTypeWrapper<ApplicantDocumentInternalNote>;
  ApplicantDocumentInternalNotePaginator: ResolverTypeWrapper<ApplicantDocumentInternalNotePaginator>;
  ApplicantDocumentPaginator: ResolverTypeWrapper<ApplicantDocumentPaginator>;
  ApplicantDocumentRejectDetail: ResolverTypeWrapper<ApplicantDocumentRejectDetail>;
  ApplicantDocumentTag: ResolverTypeWrapper<ApplicantDocumentTag>;
  ApplicantDocumentTagCategory: ResolverTypeWrapper<ApplicantDocumentTagCategory>;
  ApplicantDocumentTagCategoryPaginator: ResolverTypeWrapper<ApplicantDocumentTagCategoryPaginator>;
  ApplicantDocumentTagPaginator: ResolverTypeWrapper<ApplicantDocumentTagPaginator>;
  ApplicantIndividual: ResolverTypeWrapper<ApplicantIndividual>;
  ApplicantIndividualCompany: ResolverTypeWrapper<Omit<ApplicantIndividualCompany, 'client'> & { client?: Maybe<ResolversTypes['Client']> }>;
  ApplicantIndividualCompanyPosition: ResolverTypeWrapper<ApplicantIndividualCompanyPosition>;
  ApplicantIndividualCompanyPositionPaginator: ResolverTypeWrapper<ApplicantIndividualCompanyPositionPaginator>;
  ApplicantIndividualCompanyRelation: ResolverTypeWrapper<ApplicantIndividualCompanyRelation>;
  ApplicantIndividualCompanyRelationPaginator: ResolverTypeWrapper<ApplicantIndividualCompanyRelationPaginator>;
  ApplicantIndividualLabel: ResolverTypeWrapper<ApplicantIndividualLabel>;
  ApplicantIndividualLabelPaginator: ResolverTypeWrapper<ApplicantIndividualLabelPaginator>;
  ApplicantIndividualModules: ResolverTypeWrapper<ApplicantIndividualModules>;
  ApplicantIndividualNotes: ResolverTypeWrapper<ApplicantIndividualNotes>;
  ApplicantIndividualNotesPaginator: ResolverTypeWrapper<ApplicantIndividualNotesPaginator>;
  ApplicantIndividualPaginator: ResolverTypeWrapper<ApplicantIndividualPaginator>;
  ApplicantKycLevel: ResolverTypeWrapper<ApplicantKycLevel>;
  ApplicantKycLevelPaginator: ResolverTypeWrapper<ApplicantKycLevelPaginator>;
  ApplicantLinkedCompany: ResolverTypeWrapper<ApplicantLinkedCompany>;
  ApplicantModules: ResolverTypeWrapper<ApplicantModules>;
  ApplicantModulesPaginator: ResolverTypeWrapper<ApplicantModulesPaginator>;
  ApplicantProfile: ResolverTypeWrapper<ApplicantProfile>;
  ApplicantRequisites: ResolverTypeWrapper<ApplicantRequisites>;
  ApplicantRiskLevel: ResolverTypeWrapper<ApplicantRiskLevel>;
  ApplicantRiskLevelHistory: ResolverTypeWrapper<ApplicantRiskLevelHistory>;
  ApplicantRiskLevelHistoryPaginator: ResolverTypeWrapper<ApplicantRiskLevelHistoryPaginator>;
  ApplicantRiskLevelPaginator: ResolverTypeWrapper<ApplicantRiskLevelPaginator>;
  ApplicantSettingsProfile: ResolverTypeWrapper<ApplicantSettingsProfile>;
  ApplicantState: ResolverTypeWrapper<ApplicantState>;
  ApplicantStatePaginator: ResolverTypeWrapper<ApplicantStatePaginator>;
  ApplicantStateReason: ResolverTypeWrapper<ApplicantStateReason>;
  ApplicantStateReasonPaginator: ResolverTypeWrapper<ApplicantStateReasonPaginator>;
  ApplicantStatus: ResolverTypeWrapper<ApplicantStatus>;
  ApplicantStatusPaginator: ResolverTypeWrapper<ApplicantStatusPaginator>;
  ApplicantType: ApplicantType;
  ApplicantVerificationStatus: ResolverTypeWrapper<ApplicantVerificationStatus>;
  AuthenticationLog: ResolverTypeWrapper<AuthenticationLog>;
  AuthenticationLogs: ResolverTypeWrapper<AuthenticationLogs>;
  BankCorrespondent: ResolverTypeWrapper<BankCorrespondent>;
  BankCorrespondentPaginator: ResolverTypeWrapper<BankCorrespondentPaginator>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BusinessActivity: ResolverTypeWrapper<BusinessActivity>;
  BusinessActivityPaginator: ResolverTypeWrapper<BusinessActivityPaginator>;
  Client: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Client']>;
  ClientAccountsDetails: ResolverTypeWrapper<ClientAccountsDetails>;
  ClientIpAddress: ResolverTypeWrapper<ClientIpAddress>;
  ClientType: ClientType;
  Clientable: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Clientable']>;
  Column: Column;
  CommissionPriceList: ResolverTypeWrapper<CommissionPriceList>;
  CommissionPriceListPaginator: ResolverTypeWrapper<CommissionPriceListPaginator>;
  CommissionTemplate: ResolverTypeWrapper<CommissionTemplate>;
  CommissionTemplateLimit: ResolverTypeWrapper<CommissionTemplateLimit>;
  CommissionTemplateLimitActionType: ResolverTypeWrapper<CommissionTemplateLimitActionType>;
  CommissionTemplateLimitActionTypePaginator: ResolverTypeWrapper<CommissionTemplateLimitActionTypePaginator>;
  CommissionTemplateLimitPaginator: ResolverTypeWrapper<CommissionTemplateLimitPaginator>;
  CommissionTemplateLimitPeriod: ResolverTypeWrapper<CommissionTemplateLimitPeriod>;
  CommissionTemplateLimitPeriodPaginator: ResolverTypeWrapper<CommissionTemplateLimitPeriodPaginator>;
  CommissionTemplateLimitTransferDirection: ResolverTypeWrapper<CommissionTemplateLimitTransferDirection>;
  CommissionTemplateLimitTransferDirectionPaginator: ResolverTypeWrapper<CommissionTemplateLimitTransferDirectionPaginator>;
  CommissionTemplateLimitType: ResolverTypeWrapper<CommissionTemplateLimitType>;
  CommissionTemplateLimitTypePaginator: ResolverTypeWrapper<CommissionTemplateLimitTypePaginator>;
  CommissionTemplatePaginator: ResolverTypeWrapper<CommissionTemplatePaginator>;
  Company: ResolverTypeWrapper<Company>;
  CompanyModule: ResolverTypeWrapper<CompanyModule>;
  CompanyModuleIbanProvider: ResolverTypeWrapper<CompanyModuleIbanProvider>;
  CompanyModuleIbanProviderPassword: ResolverTypeWrapper<CompanyModuleIbanProviderPassword>;
  CompanyModulePaymentProvider: ResolverTypeWrapper<CompanyModulePaymentProvider>;
  CompanyModulePaymentProviderPassword: ResolverTypeWrapper<CompanyModulePaymentProviderPassword>;
  CompanyPaginator: ResolverTypeWrapper<CompanyPaginator>;
  ConnectImageableInput: ConnectImageableInput;
  Country: ResolverTypeWrapper<Country>;
  CountryPaginator: ResolverTypeWrapper<CountryPaginator>;
  Currencies: ResolverTypeWrapper<Currencies>;
  CurrenciesPaginator: ResolverTypeWrapper<CurrenciesPaginator>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateEnd: ResolverTypeWrapper<Scalars['DateEnd']['output']>;
  DateRange: DateRange;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeRange: DateTimeRange;
  DateTimeUtc: ResolverTypeWrapper<Scalars['DateTimeUtc']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  Department: ResolverTypeWrapper<Department>;
  DepartmentPaginator: ResolverTypeWrapper<DepartmentPaginator>;
  DepartmentPosition: ResolverTypeWrapper<DepartmentPosition>;
  DepartmentPositionPaginator: ResolverTypeWrapper<DepartmentPositionPaginator>;
  DocumentState: ResolverTypeWrapper<DocumentState>;
  DocumentStateEnum: DocumentStateEnum;
  DocumentType: ResolverTypeWrapper<DocumentType>;
  EMAIL: ResolverTypeWrapper<Scalars['EMAIL']['output']>;
  EmailNotification: ResolverTypeWrapper<Omit<EmailNotification, 'clientable'> & { clientable?: Maybe<ResolversTypes['Clientable']> }>;
  EmailNotificationPaginator: ResolverTypeWrapper<EmailNotificationPaginator>;
  EmailSmtp: ResolverTypeWrapper<EmailSmtp>;
  EmailTemplate: ResolverTypeWrapper<EmailTemplate>;
  EmailTemplateLayout: ResolverTypeWrapper<EmailTemplateLayout>;
  EmailTemplateOnCompanyResponse: ResolverTypeWrapper<EmailTemplateOnCompanyResponse>;
  EmailVerification: EmailVerification;
  Employee: ResolverTypeWrapper<Employee>;
  Fee: ResolverTypeWrapper<Omit<Fee, 'client'> & { client?: Maybe<ResolversTypes['Client']> }>;
  FeeItem: ResolverTypeWrapper<FeeItem>;
  FeeMode: ResolverTypeWrapper<FeeMode>;
  FeePeriod: ResolverTypeWrapper<FeePeriod>;
  FeeType: ResolverTypeWrapper<FeeType>;
  FieldTypes: FieldTypes;
  FileEntityTypeEnum: FileEntityTypeEnum;
  Files: ResolverTypeWrapper<Files>;
  FilesPaginator: ResolverTypeWrapper<FilesPaginator>;
  FilterConditions: FilterConditions;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GroupRole: ResolverTypeWrapper<GroupRole>;
  GroupRolePaginator: ResolverTypeWrapper<GroupRolePaginator>;
  GroupRoleProvider: ResolverTypeWrapper<GroupRoleProvider>;
  GroupRoleView: ResolverTypeWrapper<GroupRoleView>;
  GroupRoleViewPaginator: ResolverTypeWrapper<GroupRoleViewPaginator>;
  GroupType: ResolverTypeWrapper<GroupType>;
  GroupTypeMode: GroupTypeMode;
  GroupTypePaginator: ResolverTypeWrapper<GroupTypePaginator>;
  Groups: ResolverTypeWrapper<Groups>;
  GroupsEntities: GroupsEntities;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageableMorphToTable: ImageableMorphToTable;
  InputAccount: InputAccount;
  InputCommissionTemplate: InputCommissionTemplate;
  InputCommissionTemplateLimit: InputCommissionTemplateLimit;
  InputCompanyModuleIbanProvider: InputCompanyModuleIbanProvider;
  InputCompanyModulePaymentProvider: InputCompanyModulePaymentProvider;
  InputGroupRoleProvider: InputGroupRoleProvider;
  InputMemberAccessLimitation: InputMemberAccessLimitation;
  InputPaymentBank: InputPaymentBank;
  InputPaymentProvider: InputPaymentProvider;
  InputPaymentProviderIban: InputPaymentProviderIban;
  InputPaymentSystem: InputPaymentSystem;
  InputProject: InputProject;
  InputProjectApiSetting: InputProjectApiSetting;
  InputProjectSettings: InputProjectSettings;
  InputRegion: InputRegion;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  KycTimeline: ResolverTypeWrapper<Omit<KycTimeline, 'applicant'> & { applicant?: Maybe<ResolversTypes['Client']> }>;
  KycTimelineActionType: KycTimelineActionType;
  KycTimelines: ResolverTypeWrapper<KycTimelines>;
  Languages: ResolverTypeWrapper<Languages>;
  LanguagesPaginator: ResolverTypeWrapper<LanguagesPaginator>;
  MemberAccessLimitation: ResolverTypeWrapper<MemberAccessLimitation>;
  MemberAccessLimitationPaginator: ResolverTypeWrapper<MemberAccessLimitationPaginator>;
  MemberProfile: ResolverTypeWrapper<MemberProfile>;
  MemberStatus: ResolverTypeWrapper<MemberStatus>;
  Members: ResolverTypeWrapper<Members>;
  MembersPaginator: ResolverTypeWrapper<MembersPaginator>;
  Mixed: ResolverTypeWrapper<Scalars['Mixed']['output']>;
  Module: ResolverTypeWrapper<Module>;
  Mutation: ResolverTypeWrapper<{}>;
  NotifyType: NotifyType;
  OperationType: ResolverTypeWrapper<OperationType>;
  OperationTypeEnum: OperationTypeEnum;
  Order: Order;
  OrderBy: OrderBy;
  OrderByClause: OrderByClause;
  OrderByRelationAggregateFunction: OrderByRelationAggregateFunction;
  OrderByRelationWithColumnAggregateFunction: OrderByRelationWithColumnAggregateFunction;
  PERMISSION_ACCOUNT_DETAILS: Permission_Account_Details;
  PERMISSION_DASHBOARD: Permission_Dashboard;
  PERMISSION_MAKE_PAYMENTS: Permission_Make_Payments;
  PERMISSION_MY_NET_WORTH: Permission_My_Net_Worth;
  PERMISSION_MY_TEMPLATES: Permission_My_Templates;
  PERMISSION_PAYMENT_DETAILS: Permission_Payment_Details;
  PERMISSION_PAYMENT_LIST: Permission_Payment_List;
  PERMISSION_REQUISITES: Permission_Requisites;
  PERMISSION_SETTINGS_ACCOUNT: Permission_Settings_Account;
  PERMISSION_SETTINGS_CONTACT_DETAILS: Permission_Settings_Contact_Details;
  PERMISSION_SETTINGS_LOG_IN_DETAILS: Permission_Settings_Log_In_Details;
  PERMISSION_SETTINGS_SECURITY_LEVEL: Permission_Settings_Security_Level;
  PERMISSION_STATEMENTS: Permission_Statements;
  PERMISSION_TICKETS: Permission_Tickets;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginatorInfo: ResolverTypeWrapper<PaginatorInfo>;
  PaymentBank: ResolverTypeWrapper<PaymentBank>;
  PaymentBankPaginator: ResolverTypeWrapper<PaymentBankPaginator>;
  PaymentProvider: ResolverTypeWrapper<PaymentProvider>;
  PaymentProviderHistory: ResolverTypeWrapper<PaymentProviderHistory>;
  PaymentProviderIban: ResolverTypeWrapper<PaymentProviderIban>;
  PaymentProviderIbanPaginator: ResolverTypeWrapper<PaymentProviderIbanPaginator>;
  PaymentProviderPaginator: ResolverTypeWrapper<PaymentProviderPaginator>;
  PaymentStatus: ResolverTypeWrapper<PaymentStatus>;
  PaymentSystem: ResolverTypeWrapper<PaymentSystem>;
  PaymentSystemPaginator: ResolverTypeWrapper<PaymentSystemPaginator>;
  PaymentUrgency: ResolverTypeWrapper<PaymentUrgency>;
  Payments: ResolverTypeWrapper<Payments>;
  PaymentsPaginator: ResolverTypeWrapper<PaymentsPaginator>;
  PermissionAuth: ResolverTypeWrapper<PermissionAuth>;
  PermissionCategory: ResolverTypeWrapper<PermissionCategory>;
  PermissionCategoryPermissionListPermissionTypeColumn: PermissionCategoryPermissionListPermissionTypeColumn;
  PermissionCategoryPermissionListPermissionTypeWhereConditions: PermissionCategoryPermissionListPermissionTypeWhereConditions;
  PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation: PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation;
  PermissionCategoryRole: ResolverTypeWrapper<PermissionCategoryRole>;
  PermissionList: ResolverTypeWrapper<PermissionList>;
  PermissionListType: PermissionListType;
  PermissionSeparatorType: PermissionSeparatorType;
  PermissionType: ResolverTypeWrapper<PermissionType>;
  Permissions: ResolverTypeWrapper<Permissions>;
  PivotTable: PivotTable;
  PriceListFee: ResolverTypeWrapper<PriceListFee>;
  PriceListFeeCurrency: ResolverTypeWrapper<PriceListFeeCurrency>;
  PriceListFeeInput: PriceListFeeInput;
  PriceListFeeItem: PriceListFeeItem;
  PriceListFeeScheduled: ResolverTypeWrapper<PriceListFeeScheduled>;
  PriceListFeeScheduledInput: PriceListFeeScheduledInput;
  PriceListFeesList: PriceListFeesList;
  Project: ResolverTypeWrapper<Project>;
  ProjectApiSetting: ResolverTypeWrapper<Omit<ProjectApiSetting, 'provider'> & { provider?: Maybe<ResolversTypes['ProviderType']> }>;
  ProjectApiSettingPassword: ResolverTypeWrapper<ProjectApiSettingPassword>;
  ProjectPaginator: ResolverTypeWrapper<ProjectPaginator>;
  ProjectSettings: ResolverTypeWrapper<ProjectSettings>;
  ProviderType: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ProviderType']>;
  ProviderTypeEnum: ProviderTypeEnum;
  Query: ResolverTypeWrapper<{}>;
  QueryAccountLimitsFilterFilterConditions: QueryAccountLimitsFilterFilterConditions;
  QueryAccountLimitsFilterStatic: QueryAccountLimitsFilterStatic;
  QueryAccountLimitsFilterStaticInput: QueryAccountLimitsFilterStaticInput;
  QueryAccountLimitsFilterStaticOperator: QueryAccountLimitsFilterStaticOperator;
  QueryAccountLimitsFilterStaticType: QueryAccountLimitsFilterStaticType;
  QueryAccountLimitsOrderByColumn: QueryAccountLimitsOrderByColumn;
  QueryAccountLimitsOrderByOrderByClause: QueryAccountLimitsOrderByOrderByClause;
  QueryAccountListFilterFilterConditions: QueryAccountListFilterFilterConditions;
  QueryAccountListFilterStatic: QueryAccountListFilterStatic;
  QueryAccountListFilterStaticInput: QueryAccountListFilterStaticInput;
  QueryAccountListFilterStaticOperator: QueryAccountListFilterStaticOperator;
  QueryAccountListFilterStaticType: QueryAccountListFilterStaticType;
  QueryAccountListOrderByColumn: QueryAccountListOrderByColumn;
  QueryAccountListOrderByOrderByClause: QueryAccountListOrderByOrderByClause;
  QueryAccountReachedLimitsFilterFilterConditions: QueryAccountReachedLimitsFilterFilterConditions;
  QueryAccountReachedLimitsFilterStatic: QueryAccountReachedLimitsFilterStatic;
  QueryAccountReachedLimitsFilterStaticInput: QueryAccountReachedLimitsFilterStaticInput;
  QueryAccountReachedLimitsFilterStaticOperator: QueryAccountReachedLimitsFilterStaticOperator;
  QueryAccountReachedLimitsFilterStaticType: QueryAccountReachedLimitsFilterStaticType;
  QueryAccountReachedLimitsHasAccountColumn: QueryAccountReachedLimitsHasAccountColumn;
  QueryAccountReachedLimitsHasAccountWhereHasConditions: QueryAccountReachedLimitsHasAccountWhereHasConditions;
  QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation: QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation;
  QueryAccountReachedLimitsOrderByColumn: QueryAccountReachedLimitsOrderByColumn;
  QueryAccountReachedLimitsOrderByOrderByClause: QueryAccountReachedLimitsOrderByOrderByClause;
  QueryAccountReachedLimitsWhereColumn: QueryAccountReachedLimitsWhereColumn;
  QueryAccountReachedLimitsWhereWhereConditions: QueryAccountReachedLimitsWhereWhereConditions;
  QueryAccountReachedLimitsWhereWhereConditionsRelation: QueryAccountReachedLimitsWhereWhereConditionsRelation;
  QueryAccountStatesOrderByColumn: QueryAccountStatesOrderByColumn;
  QueryAccountStatesOrderByOrderByClause: QueryAccountStatesOrderByOrderByClause;
  QueryActiveSessionsStatic: QueryActiveSessionsStatic;
  QueryActivityLogsStatic: QueryActivityLogsStatic;
  QueryApplicantAccountsFilterFilterConditions: QueryApplicantAccountsFilterFilterConditions;
  QueryApplicantAccountsFilterStatic: QueryApplicantAccountsFilterStatic;
  QueryApplicantAccountsFilterStaticInput: QueryApplicantAccountsFilterStaticInput;
  QueryApplicantAccountsFilterStaticOperator: QueryApplicantAccountsFilterStaticOperator;
  QueryApplicantAccountsFilterStaticType: QueryApplicantAccountsFilterStaticType;
  QueryApplicantAccountsOrderByColumn: QueryApplicantAccountsOrderByColumn;
  QueryApplicantAccountsOrderByOrderByClause: QueryApplicantAccountsOrderByOrderByClause;
  QueryApplicantBankingAccessesFilterFilterConditions: QueryApplicantBankingAccessesFilterFilterConditions;
  QueryApplicantBankingAccessesFilterStatic: QueryApplicantBankingAccessesFilterStatic;
  QueryApplicantBankingAccessesFilterStaticInput: QueryApplicantBankingAccessesFilterStaticInput;
  QueryApplicantBankingAccessesFilterStaticOperator: QueryApplicantBankingAccessesFilterStaticOperator;
  QueryApplicantBankingAccessesFilterStaticType: QueryApplicantBankingAccessesFilterStaticType;
  QueryApplicantBankingAccessesOrderByColumn: QueryApplicantBankingAccessesOrderByColumn;
  QueryApplicantBankingAccessesOrderByOrderByClause: QueryApplicantBankingAccessesOrderByOrderByClause;
  QueryApplicantCompaniesFilterFilterConditions: QueryApplicantCompaniesFilterFilterConditions;
  QueryApplicantCompaniesFilterStatic: QueryApplicantCompaniesFilterStatic;
  QueryApplicantCompaniesFilterStaticInput: QueryApplicantCompaniesFilterStaticInput;
  QueryApplicantCompaniesFilterStaticOperator: QueryApplicantCompaniesFilterStaticOperator;
  QueryApplicantCompaniesFilterStaticType: QueryApplicantCompaniesFilterStaticType;
  QueryApplicantCompaniesHasBusinessTypeColumn: QueryApplicantCompaniesHasBusinessTypeColumn;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditions: QueryApplicantCompaniesHasBusinessTypeWhereHasConditions;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation: QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation;
  QueryApplicantCompaniesHasGroupRoleColumn: QueryApplicantCompaniesHasGroupRoleColumn;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditions: QueryApplicantCompaniesHasGroupRoleWhereHasConditions;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation: QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation;
  QueryApplicantCompaniesHasKycLevelColumn: QueryApplicantCompaniesHasKycLevelColumn;
  QueryApplicantCompaniesHasKycLevelWhereHasConditions: QueryApplicantCompaniesHasKycLevelWhereHasConditions;
  QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasOwnerColumn: QueryApplicantCompaniesHasOwnerColumn;
  QueryApplicantCompaniesHasOwnerWhereHasConditions: QueryApplicantCompaniesHasOwnerWhereHasConditions;
  QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation: QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation;
  QueryApplicantCompaniesHasRiskLevelColumn: QueryApplicantCompaniesHasRiskLevelColumn;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditions: QueryApplicantCompaniesHasRiskLevelWhereHasConditions;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStateReasonColumn: QueryApplicantCompaniesHasStateReasonColumn;
  QueryApplicantCompaniesHasStateReasonWhereHasConditions: QueryApplicantCompaniesHasStateReasonWhereHasConditions;
  QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation: QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStatusColumn: QueryApplicantCompaniesHasStatusColumn;
  QueryApplicantCompaniesHasStatusWhereHasConditions: QueryApplicantCompaniesHasStatusWhereHasConditions;
  QueryApplicantCompaniesHasStatusWhereHasConditionsRelation: QueryApplicantCompaniesHasStatusWhereHasConditionsRelation;
  QueryApplicantCompaniesOrderByColumn: QueryApplicantCompaniesOrderByColumn;
  QueryApplicantCompaniesOrderByOrderByClause: QueryApplicantCompaniesOrderByOrderByClause;
  QueryApplicantCompaniesWhereColumn: QueryApplicantCompaniesWhereColumn;
  QueryApplicantCompaniesWhereWhereConditions: QueryApplicantCompaniesWhereWhereConditions;
  QueryApplicantCompaniesWhereWhereConditionsRelation: QueryApplicantCompaniesWhereWhereConditionsRelation;
  QueryApplicantCompanyBusinessTypeOrderByColumn: QueryApplicantCompanyBusinessTypeOrderByColumn;
  QueryApplicantCompanyBusinessTypeOrderByOrderByClause: QueryApplicantCompanyBusinessTypeOrderByOrderByClause;
  QueryApplicantCompanyBusinessTypeWhereColumn: QueryApplicantCompanyBusinessTypeWhereColumn;
  QueryApplicantCompanyBusinessTypeWhereWhereConditions: QueryApplicantCompanyBusinessTypeWhereWhereConditions;
  QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation: QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation;
  QueryApplicantCompanyLabelsAvailableOrderByColumn: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  QueryApplicantCompanyLabelsAvailableOrderByOrderByClause: QueryApplicantCompanyLabelsAvailableOrderByOrderByClause;
  QueryApplicantCompanyLabelsOrderByColumn: QueryApplicantCompanyLabelsOrderByColumn;
  QueryApplicantCompanyLabelsOrderByOrderByClause: QueryApplicantCompanyLabelsOrderByOrderByClause;
  QueryApplicantCompanyLabelsWhereColumn: QueryApplicantCompanyLabelsWhereColumn;
  QueryApplicantCompanyLabelsWhereWhereConditions: QueryApplicantCompanyLabelsWhereWhereConditions;
  QueryApplicantCompanyLabelsWhereWhereConditionsRelation: QueryApplicantCompanyLabelsWhereWhereConditionsRelation;
  QueryApplicantCompanyNotesOrderByColumn: QueryApplicantCompanyNotesOrderByColumn;
  QueryApplicantCompanyNotesOrderByOrderByClause: QueryApplicantCompanyNotesOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions: QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions;
  QueryApplicantCompanyRiskLevelHistoryFilterStatic: QueryApplicantCompanyRiskLevelHistoryFilterStatic;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticInput: QueryApplicantCompanyRiskLevelHistoryFilterStaticInput;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator: QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired: QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticType: QueryApplicantCompanyRiskLevelHistoryFilterStaticType;
  QueryApplicantCompanyRiskLevelHistoryOrderByColumn: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause: QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryWhereColumn: QueryApplicantCompanyRiskLevelHistoryWhereColumn;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantDocumentTagsFilterFilterConditions: QueryApplicantDocumentTagsFilterFilterConditions;
  QueryApplicantDocumentTagsFilterStatic: QueryApplicantDocumentTagsFilterStatic;
  QueryApplicantDocumentTagsFilterStaticInput: QueryApplicantDocumentTagsFilterStaticInput;
  QueryApplicantDocumentTagsFilterStaticOperator: QueryApplicantDocumentTagsFilterStaticOperator;
  QueryApplicantDocumentTagsFilterStaticType: QueryApplicantDocumentTagsFilterStaticType;
  QueryApplicantDocumentTagsOrderByColumn: QueryApplicantDocumentTagsOrderByColumn;
  QueryApplicantDocumentTagsOrderByOrderByClause: QueryApplicantDocumentTagsOrderByOrderByClause;
  QueryApplicantDocumentsFilterFilterConditions: QueryApplicantDocumentsFilterFilterConditions;
  QueryApplicantDocumentsFilterStatic: QueryApplicantDocumentsFilterStatic;
  QueryApplicantDocumentsFilterStaticInput: QueryApplicantDocumentsFilterStaticInput;
  QueryApplicantDocumentsFilterStaticOperator: QueryApplicantDocumentsFilterStaticOperator;
  QueryApplicantDocumentsFilterStaticType: QueryApplicantDocumentsFilterStaticType;
  QueryApplicantDocumentsOrderByColumn: QueryApplicantDocumentsOrderByColumn;
  QueryApplicantDocumentsOrderByOrderByClause: QueryApplicantDocumentsOrderByOrderByClause;
  QueryApplicantIndividualCompanyPositionsFilterFilterConditions: QueryApplicantIndividualCompanyPositionsFilterFilterConditions;
  QueryApplicantIndividualCompanyPositionsFilterStatic: QueryApplicantIndividualCompanyPositionsFilterStatic;
  QueryApplicantIndividualCompanyPositionsFilterStaticInput: QueryApplicantIndividualCompanyPositionsFilterStaticInput;
  QueryApplicantIndividualCompanyPositionsFilterStaticOperator: QueryApplicantIndividualCompanyPositionsFilterStaticOperator;
  QueryApplicantIndividualCompanyPositionsFilterStaticType: QueryApplicantIndividualCompanyPositionsFilterStaticType;
  QueryApplicantIndividualCompanyPositionsOrderByColumn: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  QueryApplicantIndividualCompanyPositionsOrderByOrderByClause: QueryApplicantIndividualCompanyPositionsOrderByOrderByClause;
  QueryApplicantIndividualCompanyRelationsFilterFilterConditions: QueryApplicantIndividualCompanyRelationsFilterFilterConditions;
  QueryApplicantIndividualCompanyRelationsFilterStatic: QueryApplicantIndividualCompanyRelationsFilterStatic;
  QueryApplicantIndividualCompanyRelationsFilterStaticInput: QueryApplicantIndividualCompanyRelationsFilterStaticInput;
  QueryApplicantIndividualCompanyRelationsFilterStaticOperator: QueryApplicantIndividualCompanyRelationsFilterStaticOperator;
  QueryApplicantIndividualCompanyRelationsFilterStaticType: QueryApplicantIndividualCompanyRelationsFilterStaticType;
  QueryApplicantIndividualCompanyRelationsOrderByColumn: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  QueryApplicantIndividualCompanyRelationsOrderByOrderByClause: QueryApplicantIndividualCompanyRelationsOrderByOrderByClause;
  QueryApplicantIndividualLabelsAvailableOrderByColumn: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  QueryApplicantIndividualLabelsAvailableOrderByOrderByClause: QueryApplicantIndividualLabelsAvailableOrderByOrderByClause;
  QueryApplicantIndividualLabelsOrderByColumn: QueryApplicantIndividualLabelsOrderByColumn;
  QueryApplicantIndividualLabelsOrderByOrderByClause: QueryApplicantIndividualLabelsOrderByOrderByClause;
  QueryApplicantIndividualLabelsWhereColumn: QueryApplicantIndividualLabelsWhereColumn;
  QueryApplicantIndividualLabelsWhereWhereConditions: QueryApplicantIndividualLabelsWhereWhereConditions;
  QueryApplicantIndividualLabelsWhereWhereConditionsRelation: QueryApplicantIndividualLabelsWhereWhereConditionsRelation;
  QueryApplicantIndividualModulesFilterStatic: QueryApplicantIndividualModulesFilterStatic;
  QueryApplicantIndividualNotesOrderByColumn: QueryApplicantIndividualNotesOrderByColumn;
  QueryApplicantIndividualNotesOrderByOrderByClause: QueryApplicantIndividualNotesOrderByOrderByClause;
  QueryApplicantIndividualsFilterFilterConditions: QueryApplicantIndividualsFilterFilterConditions;
  QueryApplicantIndividualsFilterStatic: QueryApplicantIndividualsFilterStatic;
  QueryApplicantIndividualsFilterStaticInput: QueryApplicantIndividualsFilterStaticInput;
  QueryApplicantIndividualsFilterStaticOperator: QueryApplicantIndividualsFilterStaticOperator;
  QueryApplicantIndividualsFilterStaticType: QueryApplicantIndividualsFilterStaticType;
  QueryApplicantIndividualsOrderByColumn: QueryApplicantIndividualsOrderByColumn;
  QueryApplicantIndividualsOrderByOrderByClause: QueryApplicantIndividualsOrderByOrderByClause;
  QueryApplicantKycLevelsOrderByColumn: QueryApplicantKycLevelsOrderByColumn;
  QueryApplicantKycLevelsOrderByOrderByClause: QueryApplicantKycLevelsOrderByOrderByClause;
  QueryApplicantKycLevelsWhereColumn: QueryApplicantKycLevelsWhereColumn;
  QueryApplicantKycLevelsWhereWhereConditions: QueryApplicantKycLevelsWhereWhereConditions;
  QueryApplicantKycLevelsWhereWhereConditionsRelation: QueryApplicantKycLevelsWhereWhereConditionsRelation;
  QueryApplicantModulesOrderByColumn: QueryApplicantModulesOrderByColumn;
  QueryApplicantModulesOrderByOrderByClause: QueryApplicantModulesOrderByOrderByClause;
  QueryApplicantModulesWhereColumn: QueryApplicantModulesWhereColumn;
  QueryApplicantModulesWhereWhereConditions: QueryApplicantModulesWhereWhereConditions;
  QueryApplicantModulesWhereWhereConditionsRelation: QueryApplicantModulesWhereWhereConditionsRelation;
  QueryApplicantRiskLevelHistoryOrderByColumn: QueryApplicantRiskLevelHistoryOrderByColumn;
  QueryApplicantRiskLevelHistoryOrderByOrderByClause: QueryApplicantRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantRiskLevelHistoryWhereColumn: QueryApplicantRiskLevelHistoryWhereColumn;
  QueryApplicantRiskLevelHistoryWhereWhereConditions: QueryApplicantRiskLevelHistoryWhereWhereConditions;
  QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantRiskLevelsOrderByColumn: QueryApplicantRiskLevelsOrderByColumn;
  QueryApplicantRiskLevelsOrderByOrderByClause: QueryApplicantRiskLevelsOrderByOrderByClause;
  QueryApplicantRiskLevelsWhereColumn: QueryApplicantRiskLevelsWhereColumn;
  QueryApplicantRiskLevelsWhereWhereConditions: QueryApplicantRiskLevelsWhereWhereConditions;
  QueryApplicantRiskLevelsWhereWhereConditionsRelation: QueryApplicantRiskLevelsWhereWhereConditionsRelation;
  QueryApplicantStateReasonsOrderByColumn: QueryApplicantStateReasonsOrderByColumn;
  QueryApplicantStateReasonsOrderByOrderByClause: QueryApplicantStateReasonsOrderByOrderByClause;
  QueryApplicantStateReasonsWhereColumn: QueryApplicantStateReasonsWhereColumn;
  QueryApplicantStateReasonsWhereWhereConditions: QueryApplicantStateReasonsWhereWhereConditions;
  QueryApplicantStateReasonsWhereWhereConditionsRelation: QueryApplicantStateReasonsWhereWhereConditionsRelation;
  QueryApplicantStatesOrderByColumn: QueryApplicantStatesOrderByColumn;
  QueryApplicantStatesOrderByOrderByClause: QueryApplicantStatesOrderByOrderByClause;
  QueryApplicantStatesWhereColumn: QueryApplicantStatesWhereColumn;
  QueryApplicantStatesWhereWhereConditions: QueryApplicantStatesWhereWhereConditions;
  QueryApplicantStatesWhereWhereConditionsRelation: QueryApplicantStatesWhereWhereConditionsRelation;
  QueryApplicantStatusesOrderByColumn: QueryApplicantStatusesOrderByColumn;
  QueryApplicantStatusesOrderByOrderByClause: QueryApplicantStatusesOrderByOrderByClause;
  QueryApplicantStatusesWhereColumn: QueryApplicantStatusesWhereColumn;
  QueryApplicantStatusesWhereWhereConditions: QueryApplicantStatusesWhereWhereConditions;
  QueryApplicantStatusesWhereWhereConditionsRelation: QueryApplicantStatusesWhereWhereConditionsRelation;
  QueryAuthenticationLogsStatic: QueryAuthenticationLogsStatic;
  QueryBankCorrespondentsFilterFilterConditions: QueryBankCorrespondentsFilterFilterConditions;
  QueryBankCorrespondentsFilterStatic: QueryBankCorrespondentsFilterStatic;
  QueryBankCorrespondentsFilterStaticInput: QueryBankCorrespondentsFilterStaticInput;
  QueryBankCorrespondentsFilterStaticOperator: QueryBankCorrespondentsFilterStaticOperator;
  QueryBankCorrespondentsFilterStaticType: QueryBankCorrespondentsFilterStaticType;
  QueryBankCorrespondentsOrderByColumn: QueryBankCorrespondentsOrderByColumn;
  QueryBankCorrespondentsOrderByOrderByClause: QueryBankCorrespondentsOrderByOrderByClause;
  QueryBusinessActivitiesFilterFilterConditions: QueryBusinessActivitiesFilterFilterConditions;
  QueryBusinessActivitiesFilterStatic: QueryBusinessActivitiesFilterStatic;
  QueryBusinessActivitiesFilterStaticInput: QueryBusinessActivitiesFilterStaticInput;
  QueryBusinessActivitiesFilterStaticOperator: QueryBusinessActivitiesFilterStaticOperator;
  QueryBusinessActivitiesFilterStaticType: QueryBusinessActivitiesFilterStaticType;
  QueryBusinessActivitiesOrderByColumn: QueryBusinessActivitiesOrderByColumn;
  QueryBusinessActivitiesOrderByOrderByClause: QueryBusinessActivitiesOrderByOrderByClause;
  QueryClientCondition: QueryClientCondition;
  QueryCommissionPriceListsFilterFilterConditions: QueryCommissionPriceListsFilterFilterConditions;
  QueryCommissionPriceListsFilterStatic: QueryCommissionPriceListsFilterStatic;
  QueryCommissionPriceListsFilterStaticInput: QueryCommissionPriceListsFilterStaticInput;
  QueryCommissionPriceListsFilterStaticOperator: QueryCommissionPriceListsFilterStaticOperator;
  QueryCommissionPriceListsFilterStaticType: QueryCommissionPriceListsFilterStaticType;
  QueryCommissionPriceListsOrderByColumn: QueryCommissionPriceListsOrderByColumn;
  QueryCommissionPriceListsOrderByOrderByClause: QueryCommissionPriceListsOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesOrderByColumn: QueryCommissionTemplateLimitActionTypesOrderByColumn;
  QueryCommissionTemplateLimitActionTypesOrderByOrderByClause: QueryCommissionTemplateLimitActionTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesWhereColumn: QueryCommissionTemplateLimitActionTypesWhereColumn;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditions: QueryCommissionTemplateLimitActionTypesWhereWhereConditions;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitPeriodsOrderByColumn: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  QueryCommissionTemplateLimitPeriodsOrderByOrderByClause: QueryCommissionTemplateLimitPeriodsOrderByOrderByClause;
  QueryCommissionTemplateLimitPeriodsWhereColumn: QueryCommissionTemplateLimitPeriodsWhereColumn;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditions: QueryCommissionTemplateLimitPeriodsWhereWhereConditions;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation: QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTransferDirectionsOrderByColumn: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause: QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause;
  QueryCommissionTemplateLimitTransferDirectionsWhereColumn: QueryCommissionTemplateLimitTransferDirectionsWhereColumn;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTypesOrderByColumn: QueryCommissionTemplateLimitTypesOrderByColumn;
  QueryCommissionTemplateLimitTypesOrderByOrderByClause: QueryCommissionTemplateLimitTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitTypesWhereColumn: QueryCommissionTemplateLimitTypesWhereColumn;
  QueryCommissionTemplateLimitTypesWhereWhereConditions: QueryCommissionTemplateLimitTypesWhereWhereConditions;
  QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitsFilterStatic: QueryCommissionTemplateLimitsFilterStatic;
  QueryCommissionTemplatesFilterFilterConditions: QueryCommissionTemplatesFilterFilterConditions;
  QueryCommissionTemplatesFilterStatic: QueryCommissionTemplatesFilterStatic;
  QueryCommissionTemplatesFilterStaticInput: QueryCommissionTemplatesFilterStaticInput;
  QueryCommissionTemplatesFilterStaticOperator: QueryCommissionTemplatesFilterStaticOperator;
  QueryCommissionTemplatesFilterStaticType: QueryCommissionTemplatesFilterStaticType;
  QueryCommissionTemplatesOrderByColumn: QueryCommissionTemplatesOrderByColumn;
  QueryCommissionTemplatesOrderByOrderByClause: QueryCommissionTemplatesOrderByOrderByClause;
  QueryCompaniesFilterFilterConditions: QueryCompaniesFilterFilterConditions;
  QueryCompaniesFilterStatic: QueryCompaniesFilterStatic;
  QueryCompaniesFilterStaticInput: QueryCompaniesFilterStaticInput;
  QueryCompaniesFilterStaticOperator: QueryCompaniesFilterStaticOperator;
  QueryCompaniesFilterStaticType: QueryCompaniesFilterStaticType;
  QueryCompaniesOrderByColumn: QueryCompaniesOrderByColumn;
  QueryCompaniesOrderByOrderByClause: QueryCompaniesOrderByOrderByClause;
  QueryDepartmentPositionsFilterFilterConditions: QueryDepartmentPositionsFilterFilterConditions;
  QueryDepartmentPositionsFilterStatic: QueryDepartmentPositionsFilterStatic;
  QueryDepartmentPositionsFilterStaticInput: QueryDepartmentPositionsFilterStaticInput;
  QueryDepartmentPositionsFilterStaticOperator: QueryDepartmentPositionsFilterStaticOperator;
  QueryDepartmentPositionsFilterStaticType: QueryDepartmentPositionsFilterStaticType;
  QueryDepartmentPositionsOrderByColumn: QueryDepartmentPositionsOrderByColumn;
  QueryDepartmentPositionsOrderByOrderByClause: QueryDepartmentPositionsOrderByOrderByClause;
  QueryDepartmentsFilterFilterConditions: QueryDepartmentsFilterFilterConditions;
  QueryDepartmentsFilterStatic: QueryDepartmentsFilterStatic;
  QueryDepartmentsFilterStaticInput: QueryDepartmentsFilterStaticInput;
  QueryDepartmentsFilterStaticOperator: QueryDepartmentsFilterStaticOperator;
  QueryDepartmentsFilterStaticType: QueryDepartmentsFilterStaticType;
  QueryDepartmentsOrderByColumn: QueryDepartmentsOrderByColumn;
  QueryDepartmentsOrderByOrderByClause: QueryDepartmentsOrderByOrderByClause;
  QueryEmailNotificationsFilterFilterConditions: QueryEmailNotificationsFilterFilterConditions;
  QueryEmailNotificationsFilterStatic: QueryEmailNotificationsFilterStatic;
  QueryEmailNotificationsFilterStaticEnumNotifyType: QueryEmailNotificationsFilterStaticEnumNotifyType;
  QueryEmailNotificationsFilterStaticEnumRecipientType: QueryEmailNotificationsFilterStaticEnumRecipientType;
  QueryEmailNotificationsFilterStaticInput: QueryEmailNotificationsFilterStaticInput;
  QueryEmailNotificationsFilterStaticOperator: QueryEmailNotificationsFilterStaticOperator;
  QueryEmailNotificationsFilterStaticType: QueryEmailNotificationsFilterStaticType;
  QueryEmailNotificationsOrderByColumn: QueryEmailNotificationsOrderByColumn;
  QueryEmailNotificationsOrderByOrderByClause: QueryEmailNotificationsOrderByOrderByClause;
  QueryEmailSmtpsOrderByColumn: QueryEmailSmtpsOrderByColumn;
  QueryEmailSmtpsOrderByOrderByClause: QueryEmailSmtpsOrderByOrderByClause;
  QueryEmailTemplatesFilterFilterConditions: QueryEmailTemplatesFilterFilterConditions;
  QueryEmailTemplatesFilterStatic: QueryEmailTemplatesFilterStatic;
  QueryEmailTemplatesFilterStaticEnumClientType: QueryEmailTemplatesFilterStaticEnumClientType;
  QueryEmailTemplatesFilterStaticEnumServiceType: QueryEmailTemplatesFilterStaticEnumServiceType;
  QueryEmailTemplatesFilterStaticInput: QueryEmailTemplatesFilterStaticInput;
  QueryEmailTemplatesFilterStaticOperator: QueryEmailTemplatesFilterStaticOperator;
  QueryEmailTemplatesFilterStaticType: QueryEmailTemplatesFilterStaticType;
  QueryEmailTemplatesOrderByColumn: QueryEmailTemplatesOrderByColumn;
  QueryEmailTemplatesOrderByOrderByClause: QueryEmailTemplatesOrderByOrderByClause;
  QueryFeeTypesFilterFilterConditions: QueryFeeTypesFilterFilterConditions;
  QueryFeeTypesFilterStatic: QueryFeeTypesFilterStatic;
  QueryFeeTypesFilterStaticInput: QueryFeeTypesFilterStaticInput;
  QueryFeeTypesFilterStaticOperator: QueryFeeTypesFilterStaticOperator;
  QueryFeeTypesFilterStaticType: QueryFeeTypesFilterStaticType;
  QueryFilesFilterFilterConditions: QueryFilesFilterFilterConditions;
  QueryFilesFilterStatic: QueryFilesFilterStatic;
  QueryFilesFilterStaticInput: QueryFilesFilterStaticInput;
  QueryFilesFilterStaticOperator: QueryFilesFilterStaticOperator;
  QueryFilesFilterStaticType: QueryFilesFilterStaticType;
  QueryFilesOrderByColumn: QueryFilesOrderByColumn;
  QueryFilesOrderByOrderByClause: QueryFilesOrderByOrderByClause;
  QueryGetMatchedUsersFilterFilterConditions: QueryGetMatchedUsersFilterFilterConditions;
  QueryGetMatchedUsersFilterStatic: QueryGetMatchedUsersFilterStatic;
  QueryGetMatchedUsersFilterStaticEnumApplicantType: QueryGetMatchedUsersFilterStaticEnumApplicantType;
  QueryGetMatchedUsersFilterStaticInput: QueryGetMatchedUsersFilterStaticInput;
  QueryGetMatchedUsersFilterStaticOperator: QueryGetMatchedUsersFilterStaticOperator;
  QueryGetMatchedUsersFilterStaticType: QueryGetMatchedUsersFilterStaticType;
  QueryGrantedBankingAccessFilterFilterConditions: QueryGrantedBankingAccessFilterFilterConditions;
  QueryGrantedBankingAccessFilterStatic: QueryGrantedBankingAccessFilterStatic;
  QueryGrantedBankingAccessFilterStaticInput: QueryGrantedBankingAccessFilterStaticInput;
  QueryGrantedBankingAccessFilterStaticOperator: QueryGrantedBankingAccessFilterStaticOperator;
  QueryGrantedBankingAccessFilterStaticType: QueryGrantedBankingAccessFilterStaticType;
  QueryGrantedBankingAccessOrderByColumn: QueryGrantedBankingAccessOrderByColumn;
  QueryGrantedBankingAccessOrderByOrderByClause: QueryGrantedBankingAccessOrderByOrderByClause;
  QueryGroupListFilterFilterConditions: QueryGroupListFilterFilterConditions;
  QueryGroupListFilterStatic: QueryGroupListFilterStatic;
  QueryGroupListFilterStaticInput: QueryGroupListFilterStaticInput;
  QueryGroupListFilterStaticOperator: QueryGroupListFilterStaticOperator;
  QueryGroupListFilterStaticType: QueryGroupListFilterStaticType;
  QueryGroupListOrderByColumn: QueryGroupListOrderByColumn;
  QueryGroupListOrderByOrderByClause: QueryGroupListOrderByOrderByClause;
  QueryGroupTypesFilterFilterConditions: QueryGroupTypesFilterFilterConditions;
  QueryGroupTypesFilterStatic: QueryGroupTypesFilterStatic;
  QueryGroupTypesFilterStaticInput: QueryGroupTypesFilterStaticInput;
  QueryGroupTypesFilterStaticOperator: QueryGroupTypesFilterStaticOperator;
  QueryGroupTypesFilterStaticType: QueryGroupTypesFilterStaticType;
  QueryGroupsFilterFilterConditions: QueryGroupsFilterFilterConditions;
  QueryGroupsFilterStatic: QueryGroupsFilterStatic;
  QueryGroupsFilterStaticInput: QueryGroupsFilterStaticInput;
  QueryGroupsFilterStaticOperator: QueryGroupsFilterStaticOperator;
  QueryGroupsFilterStaticType: QueryGroupsFilterStaticType;
  QueryGroupsOrderByColumn: QueryGroupsOrderByColumn;
  QueryGroupsOrderByOrderByClause: QueryGroupsOrderByOrderByClause;
  QueryKycTimelinesOrderByColumn: QueryKycTimelinesOrderByColumn;
  QueryKycTimelinesOrderByOrderByClause: QueryKycTimelinesOrderByOrderByClause;
  QueryMemberAccessLimitationsFilterFilterConditions: QueryMemberAccessLimitationsFilterFilterConditions;
  QueryMemberAccessLimitationsFilterStatic: QueryMemberAccessLimitationsFilterStatic;
  QueryMemberAccessLimitationsFilterStaticInput: QueryMemberAccessLimitationsFilterStaticInput;
  QueryMemberAccessLimitationsFilterStaticOperator: QueryMemberAccessLimitationsFilterStaticOperator;
  QueryMemberAccessLimitationsFilterStaticType: QueryMemberAccessLimitationsFilterStaticType;
  QueryMemberAccessLimitationsOrderByColumn: QueryMemberAccessLimitationsOrderByColumn;
  QueryMemberAccessLimitationsOrderByOrderByClause: QueryMemberAccessLimitationsOrderByOrderByClause;
  QueryMembersFilterFilterConditions: QueryMembersFilterFilterConditions;
  QueryMembersFilterStatic: QueryMembersFilterStatic;
  QueryMembersFilterStaticInput: QueryMembersFilterStaticInput;
  QueryMembersFilterStaticOperator: QueryMembersFilterStaticOperator;
  QueryMembersFilterStaticType: QueryMembersFilterStaticType;
  QueryMembersOrderByColumn: QueryMembersOrderByColumn;
  QueryMembersOrderByOrderByClause: QueryMembersOrderByOrderByClause;
  QueryModulesOrderByColumn: QueryModulesOrderByColumn;
  QueryModulesOrderByOrderByClause: QueryModulesOrderByOrderByClause;
  QueryModulesWhereColumn: QueryModulesWhereColumn;
  QueryModulesWhereWhereConditions: QueryModulesWhereWhereConditions;
  QueryModulesWhereWhereConditionsRelation: QueryModulesWhereWhereConditionsRelation;
  QueryModulesWithKycOrderByColumn: QueryModulesWithKycOrderByColumn;
  QueryModulesWithKycOrderByOrderByClause: QueryModulesWithKycOrderByOrderByClause;
  QueryModulesWithKycWhereColumn: QueryModulesWithKycWhereColumn;
  QueryModulesWithKycWhereWhereConditions: QueryModulesWithKycWhereWhereConditions;
  QueryModulesWithKycWhereWhereConditionsRelation: QueryModulesWithKycWhereWhereConditionsRelation;
  QueryOperationTypesFilterFilterConditions: QueryOperationTypesFilterFilterConditions;
  QueryOperationTypesFilterStatic: QueryOperationTypesFilterStatic;
  QueryOperationTypesFilterStaticEnumTransferType: QueryOperationTypesFilterStaticEnumTransferType;
  QueryOperationTypesFilterStaticInput: QueryOperationTypesFilterStaticInput;
  QueryOperationTypesFilterStaticOperator: QueryOperationTypesFilterStaticOperator;
  QueryOperationTypesFilterStaticType: QueryOperationTypesFilterStaticType;
  QueryOwnersOrderByColumn: QueryOwnersOrderByColumn;
  QueryOwnersOrderByOrderByClause: QueryOwnersOrderByOrderByClause;
  QueryPaymentBankCondition: QueryPaymentBankCondition;
  QueryPaymentBanksFilterFilterConditions: QueryPaymentBanksFilterFilterConditions;
  QueryPaymentBanksFilterStatic: QueryPaymentBanksFilterStatic;
  QueryPaymentBanksFilterStaticInput: QueryPaymentBanksFilterStaticInput;
  QueryPaymentBanksFilterStaticOperator: QueryPaymentBanksFilterStaticOperator;
  QueryPaymentBanksFilterStaticType: QueryPaymentBanksFilterStaticType;
  QueryPaymentBanksOrderByColumn: QueryPaymentBanksOrderByColumn;
  QueryPaymentBanksOrderByOrderByClause: QueryPaymentBanksOrderByOrderByClause;
  QueryPaymentProviderIbansFilterFilterConditions: QueryPaymentProviderIbansFilterFilterConditions;
  QueryPaymentProviderIbansFilterStatic: QueryPaymentProviderIbansFilterStatic;
  QueryPaymentProviderIbansFilterStaticInput: QueryPaymentProviderIbansFilterStaticInput;
  QueryPaymentProviderIbansFilterStaticOperator: QueryPaymentProviderIbansFilterStaticOperator;
  QueryPaymentProviderIbansFilterStaticType: QueryPaymentProviderIbansFilterStaticType;
  QueryPaymentProviderIbansOrderByColumn: QueryPaymentProviderIbansOrderByColumn;
  QueryPaymentProviderIbansOrderByOrderByClause: QueryPaymentProviderIbansOrderByOrderByClause;
  QueryPaymentProvidersFilterFilterConditions: QueryPaymentProvidersFilterFilterConditions;
  QueryPaymentProvidersFilterStatic: QueryPaymentProvidersFilterStatic;
  QueryPaymentProvidersFilterStaticInput: QueryPaymentProvidersFilterStaticInput;
  QueryPaymentProvidersFilterStaticOperator: QueryPaymentProvidersFilterStaticOperator;
  QueryPaymentProvidersFilterStaticType: QueryPaymentProvidersFilterStaticType;
  QueryPaymentProvidersOrderByColumn: QueryPaymentProvidersOrderByColumn;
  QueryPaymentProvidersOrderByOrderByClause: QueryPaymentProvidersOrderByOrderByClause;
  QueryPaymentStatusesFilterFilterConditions: QueryPaymentStatusesFilterFilterConditions;
  QueryPaymentStatusesFilterStatic: QueryPaymentStatusesFilterStatic;
  QueryPaymentStatusesFilterStaticEnumOperationTypeEnum: QueryPaymentStatusesFilterStaticEnumOperationTypeEnum;
  QueryPaymentStatusesFilterStaticInput: QueryPaymentStatusesFilterStaticInput;
  QueryPaymentStatusesFilterStaticOperator: QueryPaymentStatusesFilterStaticOperator;
  QueryPaymentStatusesFilterStaticType: QueryPaymentStatusesFilterStaticType;
  QueryPaymentSystemsFilterFilterConditions: QueryPaymentSystemsFilterFilterConditions;
  QueryPaymentSystemsFilterStatic: QueryPaymentSystemsFilterStatic;
  QueryPaymentSystemsFilterStaticInput: QueryPaymentSystemsFilterStaticInput;
  QueryPaymentSystemsFilterStaticOperator: QueryPaymentSystemsFilterStaticOperator;
  QueryPaymentSystemsFilterStaticType: QueryPaymentSystemsFilterStaticType;
  QueryPaymentSystemsOrderByColumn: QueryPaymentSystemsOrderByColumn;
  QueryPaymentSystemsOrderByOrderByClause: QueryPaymentSystemsOrderByOrderByClause;
  QueryPaymentsFilterFilterConditions: QueryPaymentsFilterFilterConditions;
  QueryPaymentsFilterStatic: QueryPaymentsFilterStatic;
  QueryPaymentsFilterStaticInput: QueryPaymentsFilterStaticInput;
  QueryPaymentsFilterStaticOperator: QueryPaymentsFilterStaticOperator;
  QueryPaymentsFilterStaticType: QueryPaymentsFilterStaticType;
  QueryPaymentsOrderByColumn: QueryPaymentsOrderByColumn;
  QueryPaymentsOrderByOrderByClause: QueryPaymentsOrderByOrderByClause;
  QueryPermissionsWhereColumn: QueryPermissionsWhereColumn;
  QueryPermissionsWhereWhereConditions: QueryPermissionsWhereWhereConditions;
  QueryPermissionsWhereWhereConditionsRelation: QueryPermissionsWhereWhereConditionsRelation;
  QueryPriceListFeesFilterFilterConditions: QueryPriceListFeesFilterFilterConditions;
  QueryPriceListFeesFilterStatic: QueryPriceListFeesFilterStatic;
  QueryPriceListFeesFilterStaticInput: QueryPriceListFeesFilterStaticInput;
  QueryPriceListFeesFilterStaticOperator: QueryPriceListFeesFilterStaticOperator;
  QueryPriceListFeesFilterStaticType: QueryPriceListFeesFilterStaticType;
  QueryProjectsFilterFilterConditions: QueryProjectsFilterFilterConditions;
  QueryProjectsFilterStatic: QueryProjectsFilterStatic;
  QueryProjectsFilterStaticInput: QueryProjectsFilterStaticInput;
  QueryProjectsFilterStaticOperator: QueryProjectsFilterStaticOperator;
  QueryProjectsFilterStaticType: QueryProjectsFilterStaticType;
  QueryRegionsFilterFilterConditions: QueryRegionsFilterFilterConditions;
  QueryRegionsFilterStatic: QueryRegionsFilterStatic;
  QueryRegionsFilterStaticInput: QueryRegionsFilterStaticInput;
  QueryRegionsFilterStaticOperator: QueryRegionsFilterStaticOperator;
  QueryRegionsFilterStaticType: QueryRegionsFilterStaticType;
  QueryRequisitesFilterFilterConditions: QueryRequisitesFilterFilterConditions;
  QueryRequisitesFilterStatic: QueryRequisitesFilterStatic;
  QueryRequisitesFilterStaticInput: QueryRequisitesFilterStaticInput;
  QueryRequisitesFilterStaticOperator: QueryRequisitesFilterStaticOperator;
  QueryRequisitesFilterStaticType: QueryRequisitesFilterStaticType;
  QueryRolesFilterFilterConditions: QueryRolesFilterFilterConditions;
  QueryRolesFilterStatic: QueryRolesFilterStatic;
  QueryRolesFilterStaticInput: QueryRolesFilterStaticInput;
  QueryRolesFilterStaticOperator: QueryRolesFilterStaticOperator;
  QueryRolesFilterStaticType: QueryRolesFilterStaticType;
  QueryRolesOrderByColumn: QueryRolesOrderByColumn;
  QueryRolesOrderByOrderByClause: QueryRolesOrderByOrderByClause;
  QueryTicketsFilterFilterConditions: QueryTicketsFilterFilterConditions;
  QueryTicketsFilterStatic: QueryTicketsFilterStatic;
  QueryTicketsFilterStaticInput: QueryTicketsFilterStaticInput;
  QueryTicketsFilterStaticOperator: QueryTicketsFilterStaticOperator;
  QueryTicketsFilterStaticType: QueryTicketsFilterStaticType;
  QueryTicketsOrderByColumn: QueryTicketsOrderByColumn;
  QueryTicketsOrderByCompany: QueryTicketsOrderByCompany;
  QueryTicketsOrderByDepartment: QueryTicketsOrderByDepartment;
  QueryTicketsOrderByRelationOrderByClause: QueryTicketsOrderByRelationOrderByClause;
  QueryTransferIncomingsFilterFilterConditions: QueryTransferIncomingsFilterFilterConditions;
  QueryTransferIncomingsFilterStatic: QueryTransferIncomingsFilterStatic;
  QueryTransferIncomingsFilterStaticInput: QueryTransferIncomingsFilterStaticInput;
  QueryTransferIncomingsFilterStaticOperator: QueryTransferIncomingsFilterStaticOperator;
  QueryTransferIncomingsFilterStaticType: QueryTransferIncomingsFilterStaticType;
  QueryTransferOutgoingsFilterFilterConditions: QueryTransferOutgoingsFilterFilterConditions;
  QueryTransferOutgoingsFilterStatic: QueryTransferOutgoingsFilterStatic;
  QueryTransferOutgoingsFilterStaticEnumUserType: QueryTransferOutgoingsFilterStaticEnumUserType;
  QueryTransferOutgoingsFilterStaticInput: QueryTransferOutgoingsFilterStaticInput;
  QueryTransferOutgoingsFilterStaticOperator: QueryTransferOutgoingsFilterStaticOperator;
  QueryTransferOutgoingsFilterStaticType: QueryTransferOutgoingsFilterStaticType;
  QueryUsersFilterFilterConditions: QueryUsersFilterFilterConditions;
  QueryUsersFilterStatic: QueryUsersFilterStatic;
  QueryUsersFilterStaticInput: QueryUsersFilterStaticInput;
  QueryUsersFilterStaticOperator: QueryUsersFilterStaticOperator;
  QueryUsersFilterStaticType: QueryUsersFilterStaticType;
  QueryUsersOrderByColumn: QueryUsersOrderByColumn;
  QueryUsersOrderByOrderByClause: QueryUsersOrderByOrderByClause;
  RawFile: ResolverTypeWrapper<RawFile>;
  RecipientType: RecipientType;
  Region: ResolverTypeWrapper<Region>;
  RegionPaginator: ResolverTypeWrapper<RegionPaginator>;
  Requisite: ResolverTypeWrapper<Requisite>;
  RespondentFee: ResolverTypeWrapper<RespondentFee>;
  Role: ResolverTypeWrapper<Role>;
  RolePaginator: ResolverTypeWrapper<RolePaginator>;
  SQLOperator: SqlOperator;
  Securities: Securities;
  Sender: ResolverTypeWrapper<Sender>;
  ServiceType: ServiceType;
  Sex: Sex;
  SimplePaginatorInfo: ResolverTypeWrapper<SimplePaginatorInfo>;
  Sort: Sort;
  SortOrder: SortOrder;
  State: ResolverTypeWrapper<State>;
  StateReason: ResolverTypeWrapper<StateReason>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringInteger: ResolverTypeWrapper<Scalars['StringInteger']['output']>;
  Ticket: ResolverTypeWrapper<Ticket>;
  TicketComments: ResolverTypeWrapper<TicketComments>;
  TicketPaginator: ResolverTypeWrapper<TicketPaginator>;
  TicketStatus: ResolverTypeWrapper<TicketStatus>;
  TransferIncoming: ResolverTypeWrapper<Omit<TransferIncoming, 'recipient'> & { recipient?: Maybe<ResolversTypes['Client']> }>;
  TransferIncomingHistory: ResolverTypeWrapper<TransferIncomingHistory>;
  TransferIncomingHistoryPaginator: ResolverTypeWrapper<TransferIncomingHistoryPaginator>;
  TransferIncomingPaginator: ResolverTypeWrapper<TransferIncomingPaginator>;
  TransferIncomingStatistic: ResolverTypeWrapper<TransferIncomingStatistic>;
  TransferOutgoing: ResolverTypeWrapper<Omit<TransferOutgoing, 'requested_by' | 'sender'> & { requested_by?: Maybe<ResolversTypes['Clientable']>, sender?: Maybe<ResolversTypes['Client']> }>;
  TransferOutgoingHistory: ResolverTypeWrapper<TransferOutgoingHistory>;
  TransferOutgoingHistoryPaginator: ResolverTypeWrapper<TransferOutgoingHistoryPaginator>;
  TransferOutgoingPaginator: ResolverTypeWrapper<TransferOutgoingPaginator>;
  TransferOutgoingStatistic: ResolverTypeWrapper<TransferOutgoingStatistic>;
  TransferType: TransferType;
  TwoFactorAuthSettings: ResolverTypeWrapper<TwoFactorAuthSettings>;
  TwoFactorAuthSettingsPaginator: ResolverTypeWrapper<TwoFactorAuthSettingsPaginator>;
  TwoFactorAuthToken: ResolverTypeWrapper<TwoFactorAuthToken>;
  TypeOfIndustry: ResolverTypeWrapper<TypeOfIndustry>;
  TypeOfTransfer: ResolverTypeWrapper<TypeOfTransfer>;
  UserType: UserType;
  Users: ResolverTypeWrapper<Users>;
  UsersPaginator: ResolverTypeWrapper<UsersPaginator>;
  WhereConditions: WhereConditions;
  WhereConditionsRelation: WhereConditionsRelation;
  dashboardAccountsStatistic: ResolverTypeWrapper<DashboardAccountsStatistic>;
  dashboardTicketsStatistic: ResolverTypeWrapper<DashboardTicketsStatistic>;
  dashboardTransfersStatistic: ResolverTypeWrapper<DashboardTransfersStatistic>;
  dashboardUsersStatistic: ResolverTypeWrapper<DashboardUsersStatistic>;
  priceList: PriceList;
  userAuthResponse: ResolverTypeWrapper<UserAuthResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Omit<Account, 'client'> & { client?: Maybe<ResolversParentTypes['Client']> };
  AccountClient: Omit<AccountClient, 'client'> & { client: ResolversParentTypes['Client'] };
  AccountGenerateIbanResponse: AccountGenerateIbanResponse;
  AccountLimit: AccountLimit;
  AccountLimitPaginator: AccountLimitPaginator;
  AccountPaginator: AccountPaginator;
  AccountReachedLimit: AccountReachedLimit;
  AccountReachedLimitPaginator: AccountReachedLimitPaginator;
  AccountState: AccountState;
  AccountStatement: AccountStatement;
  AccountStatementTransaction: AccountStatementTransaction;
  ActiveSession: ActiveSession;
  ActiveSessionMutatorResponse: ActiveSessionMutatorResponse;
  ActiveSessions: ActiveSessions;
  ActivityLog: ActivityLog;
  ActivityLogs: ActivityLogs;
  AdditionalFieldInput: AdditionalFieldInput;
  ApplicantAccount: ApplicantAccount;
  ApplicantBankingAccess: ApplicantBankingAccess;
  ApplicantBankingAccesses: ApplicantBankingAccesses;
  ApplicantCompany: ApplicantCompany;
  ApplicantCompanyBusinessType: ApplicantCompanyBusinessType;
  ApplicantCompanyBusinessTypePaginator: ApplicantCompanyBusinessTypePaginator;
  ApplicantCompanyLabel: ApplicantCompanyLabel;
  ApplicantCompanyLabelPaginator: ApplicantCompanyLabelPaginator;
  ApplicantCompanyModules: ApplicantCompanyModules;
  ApplicantCompanyNotes: ApplicantCompanyNotes;
  ApplicantCompanyNotesPaginator: ApplicantCompanyNotesPaginator;
  ApplicantCompanyPaginator: ApplicantCompanyPaginator;
  ApplicantCompanyRiskLevelHistory: ApplicantCompanyRiskLevelHistory;
  ApplicantCompanyRiskLevelHistoryPaginator: ApplicantCompanyRiskLevelHistoryPaginator;
  ApplicantDetailsRequisites: ApplicantDetailsRequisites;
  ApplicantDevice: ApplicantDevice;
  ApplicantDocument: ApplicantDocument;
  ApplicantDocumentInternalNote: ApplicantDocumentInternalNote;
  ApplicantDocumentInternalNotePaginator: ApplicantDocumentInternalNotePaginator;
  ApplicantDocumentPaginator: ApplicantDocumentPaginator;
  ApplicantDocumentRejectDetail: ApplicantDocumentRejectDetail;
  ApplicantDocumentTag: ApplicantDocumentTag;
  ApplicantDocumentTagCategory: ApplicantDocumentTagCategory;
  ApplicantDocumentTagCategoryPaginator: ApplicantDocumentTagCategoryPaginator;
  ApplicantDocumentTagPaginator: ApplicantDocumentTagPaginator;
  ApplicantIndividual: ApplicantIndividual;
  ApplicantIndividualCompany: Omit<ApplicantIndividualCompany, 'client'> & { client?: Maybe<ResolversParentTypes['Client']> };
  ApplicantIndividualCompanyPosition: ApplicantIndividualCompanyPosition;
  ApplicantIndividualCompanyPositionPaginator: ApplicantIndividualCompanyPositionPaginator;
  ApplicantIndividualCompanyRelation: ApplicantIndividualCompanyRelation;
  ApplicantIndividualCompanyRelationPaginator: ApplicantIndividualCompanyRelationPaginator;
  ApplicantIndividualLabel: ApplicantIndividualLabel;
  ApplicantIndividualLabelPaginator: ApplicantIndividualLabelPaginator;
  ApplicantIndividualModules: ApplicantIndividualModules;
  ApplicantIndividualNotes: ApplicantIndividualNotes;
  ApplicantIndividualNotesPaginator: ApplicantIndividualNotesPaginator;
  ApplicantIndividualPaginator: ApplicantIndividualPaginator;
  ApplicantKycLevel: ApplicantKycLevel;
  ApplicantKycLevelPaginator: ApplicantKycLevelPaginator;
  ApplicantLinkedCompany: ApplicantLinkedCompany;
  ApplicantModules: ApplicantModules;
  ApplicantModulesPaginator: ApplicantModulesPaginator;
  ApplicantProfile: ApplicantProfile;
  ApplicantRequisites: ApplicantRequisites;
  ApplicantRiskLevel: ApplicantRiskLevel;
  ApplicantRiskLevelHistory: ApplicantRiskLevelHistory;
  ApplicantRiskLevelHistoryPaginator: ApplicantRiskLevelHistoryPaginator;
  ApplicantRiskLevelPaginator: ApplicantRiskLevelPaginator;
  ApplicantSettingsProfile: ApplicantSettingsProfile;
  ApplicantState: ApplicantState;
  ApplicantStatePaginator: ApplicantStatePaginator;
  ApplicantStateReason: ApplicantStateReason;
  ApplicantStateReasonPaginator: ApplicantStateReasonPaginator;
  ApplicantStatus: ApplicantStatus;
  ApplicantStatusPaginator: ApplicantStatusPaginator;
  ApplicantVerificationStatus: ApplicantVerificationStatus;
  AuthenticationLog: AuthenticationLog;
  AuthenticationLogs: AuthenticationLogs;
  BankCorrespondent: BankCorrespondent;
  BankCorrespondentPaginator: BankCorrespondentPaginator;
  Boolean: Scalars['Boolean']['output'];
  BusinessActivity: BusinessActivity;
  BusinessActivityPaginator: BusinessActivityPaginator;
  Client: ResolversUnionTypes<ResolversParentTypes>['Client'];
  ClientAccountsDetails: ClientAccountsDetails;
  ClientIpAddress: ClientIpAddress;
  Clientable: ResolversUnionTypes<ResolversParentTypes>['Clientable'];
  CommissionPriceList: CommissionPriceList;
  CommissionPriceListPaginator: CommissionPriceListPaginator;
  CommissionTemplate: CommissionTemplate;
  CommissionTemplateLimit: CommissionTemplateLimit;
  CommissionTemplateLimitActionType: CommissionTemplateLimitActionType;
  CommissionTemplateLimitActionTypePaginator: CommissionTemplateLimitActionTypePaginator;
  CommissionTemplateLimitPaginator: CommissionTemplateLimitPaginator;
  CommissionTemplateLimitPeriod: CommissionTemplateLimitPeriod;
  CommissionTemplateLimitPeriodPaginator: CommissionTemplateLimitPeriodPaginator;
  CommissionTemplateLimitTransferDirection: CommissionTemplateLimitTransferDirection;
  CommissionTemplateLimitTransferDirectionPaginator: CommissionTemplateLimitTransferDirectionPaginator;
  CommissionTemplateLimitType: CommissionTemplateLimitType;
  CommissionTemplateLimitTypePaginator: CommissionTemplateLimitTypePaginator;
  CommissionTemplatePaginator: CommissionTemplatePaginator;
  Company: Company;
  CompanyModule: CompanyModule;
  CompanyModuleIbanProvider: CompanyModuleIbanProvider;
  CompanyModuleIbanProviderPassword: CompanyModuleIbanProviderPassword;
  CompanyModulePaymentProvider: CompanyModulePaymentProvider;
  CompanyModulePaymentProviderPassword: CompanyModulePaymentProviderPassword;
  CompanyPaginator: CompanyPaginator;
  ConnectImageableInput: ConnectImageableInput;
  Country: Country;
  CountryPaginator: CountryPaginator;
  Currencies: Currencies;
  CurrenciesPaginator: CurrenciesPaginator;
  Date: Scalars['Date']['output'];
  DateEnd: Scalars['DateEnd']['output'];
  DateRange: DateRange;
  DateTime: Scalars['DateTime']['output'];
  DateTimeRange: DateTimeRange;
  DateTimeUtc: Scalars['DateTimeUtc']['output'];
  Decimal: Scalars['Decimal']['output'];
  Department: Department;
  DepartmentPaginator: DepartmentPaginator;
  DepartmentPosition: DepartmentPosition;
  DepartmentPositionPaginator: DepartmentPositionPaginator;
  DocumentState: DocumentState;
  DocumentType: DocumentType;
  EMAIL: Scalars['EMAIL']['output'];
  EmailNotification: Omit<EmailNotification, 'clientable'> & { clientable?: Maybe<ResolversParentTypes['Clientable']> };
  EmailNotificationPaginator: EmailNotificationPaginator;
  EmailSmtp: EmailSmtp;
  EmailTemplate: EmailTemplate;
  EmailTemplateLayout: EmailTemplateLayout;
  EmailTemplateOnCompanyResponse: EmailTemplateOnCompanyResponse;
  Employee: Employee;
  Fee: Omit<Fee, 'client'> & { client?: Maybe<ResolversParentTypes['Client']> };
  FeeItem: FeeItem;
  FeeMode: FeeMode;
  FeePeriod: FeePeriod;
  FeeType: FeeType;
  Files: Files;
  FilesPaginator: FilesPaginator;
  FilterConditions: FilterConditions;
  Float: Scalars['Float']['output'];
  GroupRole: GroupRole;
  GroupRolePaginator: GroupRolePaginator;
  GroupRoleProvider: GroupRoleProvider;
  GroupRoleView: GroupRoleView;
  GroupRoleViewPaginator: GroupRoleViewPaginator;
  GroupType: GroupType;
  GroupTypePaginator: GroupTypePaginator;
  Groups: Groups;
  ID: Scalars['ID']['output'];
  ImageableMorphToTable: ImageableMorphToTable;
  InputAccount: InputAccount;
  InputCommissionTemplate: InputCommissionTemplate;
  InputCommissionTemplateLimit: InputCommissionTemplateLimit;
  InputCompanyModuleIbanProvider: InputCompanyModuleIbanProvider;
  InputCompanyModulePaymentProvider: InputCompanyModulePaymentProvider;
  InputGroupRoleProvider: InputGroupRoleProvider;
  InputMemberAccessLimitation: InputMemberAccessLimitation;
  InputPaymentBank: InputPaymentBank;
  InputPaymentProvider: InputPaymentProvider;
  InputPaymentProviderIban: InputPaymentProviderIban;
  InputPaymentSystem: InputPaymentSystem;
  InputProject: InputProject;
  InputProjectApiSetting: InputProjectApiSetting;
  InputProjectSettings: InputProjectSettings;
  InputRegion: InputRegion;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  KycTimeline: Omit<KycTimeline, 'applicant'> & { applicant?: Maybe<ResolversParentTypes['Client']> };
  KycTimelines: KycTimelines;
  Languages: Languages;
  LanguagesPaginator: LanguagesPaginator;
  MemberAccessLimitation: MemberAccessLimitation;
  MemberAccessLimitationPaginator: MemberAccessLimitationPaginator;
  MemberProfile: MemberProfile;
  MemberStatus: MemberStatus;
  Members: Members;
  MembersPaginator: MembersPaginator;
  Mixed: Scalars['Mixed']['output'];
  Module: Module;
  Mutation: {};
  OperationType: OperationType;
  OrderBy: OrderBy;
  OrderByClause: OrderByClause;
  PageInfo: PageInfo;
  PaginatorInfo: PaginatorInfo;
  PaymentBank: PaymentBank;
  PaymentBankPaginator: PaymentBankPaginator;
  PaymentProvider: PaymentProvider;
  PaymentProviderHistory: PaymentProviderHistory;
  PaymentProviderIban: PaymentProviderIban;
  PaymentProviderIbanPaginator: PaymentProviderIbanPaginator;
  PaymentProviderPaginator: PaymentProviderPaginator;
  PaymentStatus: PaymentStatus;
  PaymentSystem: PaymentSystem;
  PaymentSystemPaginator: PaymentSystemPaginator;
  PaymentUrgency: PaymentUrgency;
  Payments: Payments;
  PaymentsPaginator: PaymentsPaginator;
  PermissionAuth: PermissionAuth;
  PermissionCategory: PermissionCategory;
  PermissionCategoryPermissionListPermissionTypeWhereConditions: PermissionCategoryPermissionListPermissionTypeWhereConditions;
  PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation: PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation;
  PermissionCategoryRole: PermissionCategoryRole;
  PermissionList: PermissionList;
  PermissionType: PermissionType;
  Permissions: Permissions;
  PivotTable: PivotTable;
  PriceListFee: PriceListFee;
  PriceListFeeCurrency: PriceListFeeCurrency;
  PriceListFeeInput: PriceListFeeInput;
  PriceListFeeItem: PriceListFeeItem;
  PriceListFeeScheduled: PriceListFeeScheduled;
  PriceListFeeScheduledInput: PriceListFeeScheduledInput;
  PriceListFeesList: PriceListFeesList;
  Project: Project;
  ProjectApiSetting: Omit<ProjectApiSetting, 'provider'> & { provider?: Maybe<ResolversParentTypes['ProviderType']> };
  ProjectApiSettingPassword: ProjectApiSettingPassword;
  ProjectPaginator: ProjectPaginator;
  ProjectSettings: ProjectSettings;
  ProviderType: ResolversUnionTypes<ResolversParentTypes>['ProviderType'];
  Query: {};
  QueryAccountLimitsFilterFilterConditions: QueryAccountLimitsFilterFilterConditions;
  QueryAccountLimitsFilterStaticInput: QueryAccountLimitsFilterStaticInput;
  QueryAccountLimitsOrderByOrderByClause: QueryAccountLimitsOrderByOrderByClause;
  QueryAccountListFilterFilterConditions: QueryAccountListFilterFilterConditions;
  QueryAccountListFilterStaticInput: QueryAccountListFilterStaticInput;
  QueryAccountListOrderByOrderByClause: QueryAccountListOrderByOrderByClause;
  QueryAccountReachedLimitsFilterFilterConditions: QueryAccountReachedLimitsFilterFilterConditions;
  QueryAccountReachedLimitsFilterStaticInput: QueryAccountReachedLimitsFilterStaticInput;
  QueryAccountReachedLimitsHasAccountWhereHasConditions: QueryAccountReachedLimitsHasAccountWhereHasConditions;
  QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation: QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation;
  QueryAccountReachedLimitsOrderByOrderByClause: QueryAccountReachedLimitsOrderByOrderByClause;
  QueryAccountReachedLimitsWhereWhereConditions: QueryAccountReachedLimitsWhereWhereConditions;
  QueryAccountReachedLimitsWhereWhereConditionsRelation: QueryAccountReachedLimitsWhereWhereConditionsRelation;
  QueryAccountStatesOrderByOrderByClause: QueryAccountStatesOrderByOrderByClause;
  QueryActiveSessionsStatic: QueryActiveSessionsStatic;
  QueryActivityLogsStatic: QueryActivityLogsStatic;
  QueryApplicantAccountsFilterFilterConditions: QueryApplicantAccountsFilterFilterConditions;
  QueryApplicantAccountsFilterStaticInput: QueryApplicantAccountsFilterStaticInput;
  QueryApplicantAccountsOrderByOrderByClause: QueryApplicantAccountsOrderByOrderByClause;
  QueryApplicantBankingAccessesFilterFilterConditions: QueryApplicantBankingAccessesFilterFilterConditions;
  QueryApplicantBankingAccessesFilterStaticInput: QueryApplicantBankingAccessesFilterStaticInput;
  QueryApplicantBankingAccessesOrderByOrderByClause: QueryApplicantBankingAccessesOrderByOrderByClause;
  QueryApplicantCompaniesFilterFilterConditions: QueryApplicantCompaniesFilterFilterConditions;
  QueryApplicantCompaniesFilterStaticInput: QueryApplicantCompaniesFilterStaticInput;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditions: QueryApplicantCompaniesHasBusinessTypeWhereHasConditions;
  QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation: QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditions: QueryApplicantCompaniesHasGroupRoleWhereHasConditions;
  QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation: QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation;
  QueryApplicantCompaniesHasKycLevelWhereHasConditions: QueryApplicantCompaniesHasKycLevelWhereHasConditions;
  QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasOwnerWhereHasConditions: QueryApplicantCompaniesHasOwnerWhereHasConditions;
  QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation: QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditions: QueryApplicantCompaniesHasRiskLevelWhereHasConditions;
  QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation: QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStateReasonWhereHasConditions: QueryApplicantCompaniesHasStateReasonWhereHasConditions;
  QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation: QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation;
  QueryApplicantCompaniesHasStatusWhereHasConditions: QueryApplicantCompaniesHasStatusWhereHasConditions;
  QueryApplicantCompaniesHasStatusWhereHasConditionsRelation: QueryApplicantCompaniesHasStatusWhereHasConditionsRelation;
  QueryApplicantCompaniesOrderByOrderByClause: QueryApplicantCompaniesOrderByOrderByClause;
  QueryApplicantCompaniesWhereWhereConditions: QueryApplicantCompaniesWhereWhereConditions;
  QueryApplicantCompaniesWhereWhereConditionsRelation: QueryApplicantCompaniesWhereWhereConditionsRelation;
  QueryApplicantCompanyBusinessTypeOrderByOrderByClause: QueryApplicantCompanyBusinessTypeOrderByOrderByClause;
  QueryApplicantCompanyBusinessTypeWhereWhereConditions: QueryApplicantCompanyBusinessTypeWhereWhereConditions;
  QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation: QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation;
  QueryApplicantCompanyLabelsAvailableOrderByOrderByClause: QueryApplicantCompanyLabelsAvailableOrderByOrderByClause;
  QueryApplicantCompanyLabelsOrderByOrderByClause: QueryApplicantCompanyLabelsOrderByOrderByClause;
  QueryApplicantCompanyLabelsWhereWhereConditions: QueryApplicantCompanyLabelsWhereWhereConditions;
  QueryApplicantCompanyLabelsWhereWhereConditionsRelation: QueryApplicantCompanyLabelsWhereWhereConditionsRelation;
  QueryApplicantCompanyNotesOrderByOrderByClause: QueryApplicantCompanyNotesOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions: QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions;
  QueryApplicantCompanyRiskLevelHistoryFilterStaticInput: QueryApplicantCompanyRiskLevelHistoryFilterStaticInput;
  QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause: QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions;
  QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantDocumentTagsFilterFilterConditions: QueryApplicantDocumentTagsFilterFilterConditions;
  QueryApplicantDocumentTagsFilterStaticInput: QueryApplicantDocumentTagsFilterStaticInput;
  QueryApplicantDocumentTagsOrderByOrderByClause: QueryApplicantDocumentTagsOrderByOrderByClause;
  QueryApplicantDocumentsFilterFilterConditions: QueryApplicantDocumentsFilterFilterConditions;
  QueryApplicantDocumentsFilterStaticInput: QueryApplicantDocumentsFilterStaticInput;
  QueryApplicantDocumentsOrderByOrderByClause: QueryApplicantDocumentsOrderByOrderByClause;
  QueryApplicantIndividualCompanyPositionsFilterFilterConditions: QueryApplicantIndividualCompanyPositionsFilterFilterConditions;
  QueryApplicantIndividualCompanyPositionsFilterStaticInput: QueryApplicantIndividualCompanyPositionsFilterStaticInput;
  QueryApplicantIndividualCompanyPositionsOrderByOrderByClause: QueryApplicantIndividualCompanyPositionsOrderByOrderByClause;
  QueryApplicantIndividualCompanyRelationsFilterFilterConditions: QueryApplicantIndividualCompanyRelationsFilterFilterConditions;
  QueryApplicantIndividualCompanyRelationsFilterStaticInput: QueryApplicantIndividualCompanyRelationsFilterStaticInput;
  QueryApplicantIndividualCompanyRelationsOrderByOrderByClause: QueryApplicantIndividualCompanyRelationsOrderByOrderByClause;
  QueryApplicantIndividualLabelsAvailableOrderByOrderByClause: QueryApplicantIndividualLabelsAvailableOrderByOrderByClause;
  QueryApplicantIndividualLabelsOrderByOrderByClause: QueryApplicantIndividualLabelsOrderByOrderByClause;
  QueryApplicantIndividualLabelsWhereWhereConditions: QueryApplicantIndividualLabelsWhereWhereConditions;
  QueryApplicantIndividualLabelsWhereWhereConditionsRelation: QueryApplicantIndividualLabelsWhereWhereConditionsRelation;
  QueryApplicantIndividualModulesFilterStatic: QueryApplicantIndividualModulesFilterStatic;
  QueryApplicantIndividualNotesOrderByOrderByClause: QueryApplicantIndividualNotesOrderByOrderByClause;
  QueryApplicantIndividualsFilterFilterConditions: QueryApplicantIndividualsFilterFilterConditions;
  QueryApplicantIndividualsFilterStaticInput: QueryApplicantIndividualsFilterStaticInput;
  QueryApplicantIndividualsOrderByOrderByClause: QueryApplicantIndividualsOrderByOrderByClause;
  QueryApplicantKycLevelsOrderByOrderByClause: QueryApplicantKycLevelsOrderByOrderByClause;
  QueryApplicantKycLevelsWhereWhereConditions: QueryApplicantKycLevelsWhereWhereConditions;
  QueryApplicantKycLevelsWhereWhereConditionsRelation: QueryApplicantKycLevelsWhereWhereConditionsRelation;
  QueryApplicantModulesOrderByOrderByClause: QueryApplicantModulesOrderByOrderByClause;
  QueryApplicantModulesWhereWhereConditions: QueryApplicantModulesWhereWhereConditions;
  QueryApplicantModulesWhereWhereConditionsRelation: QueryApplicantModulesWhereWhereConditionsRelation;
  QueryApplicantRiskLevelHistoryOrderByOrderByClause: QueryApplicantRiskLevelHistoryOrderByOrderByClause;
  QueryApplicantRiskLevelHistoryWhereWhereConditions: QueryApplicantRiskLevelHistoryWhereWhereConditions;
  QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation: QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation;
  QueryApplicantRiskLevelsOrderByOrderByClause: QueryApplicantRiskLevelsOrderByOrderByClause;
  QueryApplicantRiskLevelsWhereWhereConditions: QueryApplicantRiskLevelsWhereWhereConditions;
  QueryApplicantRiskLevelsWhereWhereConditionsRelation: QueryApplicantRiskLevelsWhereWhereConditionsRelation;
  QueryApplicantStateReasonsOrderByOrderByClause: QueryApplicantStateReasonsOrderByOrderByClause;
  QueryApplicantStateReasonsWhereWhereConditions: QueryApplicantStateReasonsWhereWhereConditions;
  QueryApplicantStateReasonsWhereWhereConditionsRelation: QueryApplicantStateReasonsWhereWhereConditionsRelation;
  QueryApplicantStatesOrderByOrderByClause: QueryApplicantStatesOrderByOrderByClause;
  QueryApplicantStatesWhereWhereConditions: QueryApplicantStatesWhereWhereConditions;
  QueryApplicantStatesWhereWhereConditionsRelation: QueryApplicantStatesWhereWhereConditionsRelation;
  QueryApplicantStatusesOrderByOrderByClause: QueryApplicantStatusesOrderByOrderByClause;
  QueryApplicantStatusesWhereWhereConditions: QueryApplicantStatusesWhereWhereConditions;
  QueryApplicantStatusesWhereWhereConditionsRelation: QueryApplicantStatusesWhereWhereConditionsRelation;
  QueryAuthenticationLogsStatic: QueryAuthenticationLogsStatic;
  QueryBankCorrespondentsFilterFilterConditions: QueryBankCorrespondentsFilterFilterConditions;
  QueryBankCorrespondentsFilterStaticInput: QueryBankCorrespondentsFilterStaticInput;
  QueryBankCorrespondentsOrderByOrderByClause: QueryBankCorrespondentsOrderByOrderByClause;
  QueryBusinessActivitiesFilterFilterConditions: QueryBusinessActivitiesFilterFilterConditions;
  QueryBusinessActivitiesFilterStaticInput: QueryBusinessActivitiesFilterStaticInput;
  QueryBusinessActivitiesOrderByOrderByClause: QueryBusinessActivitiesOrderByOrderByClause;
  QueryClientCondition: QueryClientCondition;
  QueryCommissionPriceListsFilterFilterConditions: QueryCommissionPriceListsFilterFilterConditions;
  QueryCommissionPriceListsFilterStaticInput: QueryCommissionPriceListsFilterStaticInput;
  QueryCommissionPriceListsOrderByOrderByClause: QueryCommissionPriceListsOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesOrderByOrderByClause: QueryCommissionTemplateLimitActionTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditions: QueryCommissionTemplateLimitActionTypesWhereWhereConditions;
  QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitPeriodsOrderByOrderByClause: QueryCommissionTemplateLimitPeriodsOrderByOrderByClause;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditions: QueryCommissionTemplateLimitPeriodsWhereWhereConditions;
  QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation: QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause: QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions;
  QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation: QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitTypesOrderByOrderByClause: QueryCommissionTemplateLimitTypesOrderByOrderByClause;
  QueryCommissionTemplateLimitTypesWhereWhereConditions: QueryCommissionTemplateLimitTypesWhereWhereConditions;
  QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation: QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation;
  QueryCommissionTemplateLimitsFilterStatic: QueryCommissionTemplateLimitsFilterStatic;
  QueryCommissionTemplatesFilterFilterConditions: QueryCommissionTemplatesFilterFilterConditions;
  QueryCommissionTemplatesFilterStaticInput: QueryCommissionTemplatesFilterStaticInput;
  QueryCommissionTemplatesOrderByOrderByClause: QueryCommissionTemplatesOrderByOrderByClause;
  QueryCompaniesFilterFilterConditions: QueryCompaniesFilterFilterConditions;
  QueryCompaniesFilterStaticInput: QueryCompaniesFilterStaticInput;
  QueryCompaniesOrderByOrderByClause: QueryCompaniesOrderByOrderByClause;
  QueryDepartmentPositionsFilterFilterConditions: QueryDepartmentPositionsFilterFilterConditions;
  QueryDepartmentPositionsFilterStaticInput: QueryDepartmentPositionsFilterStaticInput;
  QueryDepartmentPositionsOrderByOrderByClause: QueryDepartmentPositionsOrderByOrderByClause;
  QueryDepartmentsFilterFilterConditions: QueryDepartmentsFilterFilterConditions;
  QueryDepartmentsFilterStaticInput: QueryDepartmentsFilterStaticInput;
  QueryDepartmentsOrderByOrderByClause: QueryDepartmentsOrderByOrderByClause;
  QueryEmailNotificationsFilterFilterConditions: QueryEmailNotificationsFilterFilterConditions;
  QueryEmailNotificationsFilterStaticInput: QueryEmailNotificationsFilterStaticInput;
  QueryEmailNotificationsOrderByOrderByClause: QueryEmailNotificationsOrderByOrderByClause;
  QueryEmailSmtpsOrderByOrderByClause: QueryEmailSmtpsOrderByOrderByClause;
  QueryEmailTemplatesFilterFilterConditions: QueryEmailTemplatesFilterFilterConditions;
  QueryEmailTemplatesFilterStaticInput: QueryEmailTemplatesFilterStaticInput;
  QueryEmailTemplatesOrderByOrderByClause: QueryEmailTemplatesOrderByOrderByClause;
  QueryFeeTypesFilterFilterConditions: QueryFeeTypesFilterFilterConditions;
  QueryFeeTypesFilterStaticInput: QueryFeeTypesFilterStaticInput;
  QueryFilesFilterFilterConditions: QueryFilesFilterFilterConditions;
  QueryFilesFilterStaticInput: QueryFilesFilterStaticInput;
  QueryFilesOrderByOrderByClause: QueryFilesOrderByOrderByClause;
  QueryGetMatchedUsersFilterFilterConditions: QueryGetMatchedUsersFilterFilterConditions;
  QueryGetMatchedUsersFilterStaticInput: QueryGetMatchedUsersFilterStaticInput;
  QueryGrantedBankingAccessFilterFilterConditions: QueryGrantedBankingAccessFilterFilterConditions;
  QueryGrantedBankingAccessFilterStaticInput: QueryGrantedBankingAccessFilterStaticInput;
  QueryGrantedBankingAccessOrderByOrderByClause: QueryGrantedBankingAccessOrderByOrderByClause;
  QueryGroupListFilterFilterConditions: QueryGroupListFilterFilterConditions;
  QueryGroupListFilterStaticInput: QueryGroupListFilterStaticInput;
  QueryGroupListOrderByOrderByClause: QueryGroupListOrderByOrderByClause;
  QueryGroupTypesFilterFilterConditions: QueryGroupTypesFilterFilterConditions;
  QueryGroupTypesFilterStaticInput: QueryGroupTypesFilterStaticInput;
  QueryGroupsFilterFilterConditions: QueryGroupsFilterFilterConditions;
  QueryGroupsFilterStaticInput: QueryGroupsFilterStaticInput;
  QueryGroupsOrderByOrderByClause: QueryGroupsOrderByOrderByClause;
  QueryKycTimelinesOrderByOrderByClause: QueryKycTimelinesOrderByOrderByClause;
  QueryMemberAccessLimitationsFilterFilterConditions: QueryMemberAccessLimitationsFilterFilterConditions;
  QueryMemberAccessLimitationsFilterStaticInput: QueryMemberAccessLimitationsFilterStaticInput;
  QueryMemberAccessLimitationsOrderByOrderByClause: QueryMemberAccessLimitationsOrderByOrderByClause;
  QueryMembersFilterFilterConditions: QueryMembersFilterFilterConditions;
  QueryMembersFilterStaticInput: QueryMembersFilterStaticInput;
  QueryMembersOrderByOrderByClause: QueryMembersOrderByOrderByClause;
  QueryModulesOrderByOrderByClause: QueryModulesOrderByOrderByClause;
  QueryModulesWhereWhereConditions: QueryModulesWhereWhereConditions;
  QueryModulesWhereWhereConditionsRelation: QueryModulesWhereWhereConditionsRelation;
  QueryModulesWithKycOrderByOrderByClause: QueryModulesWithKycOrderByOrderByClause;
  QueryModulesWithKycWhereWhereConditions: QueryModulesWithKycWhereWhereConditions;
  QueryModulesWithKycWhereWhereConditionsRelation: QueryModulesWithKycWhereWhereConditionsRelation;
  QueryOperationTypesFilterFilterConditions: QueryOperationTypesFilterFilterConditions;
  QueryOperationTypesFilterStaticInput: QueryOperationTypesFilterStaticInput;
  QueryOwnersOrderByOrderByClause: QueryOwnersOrderByOrderByClause;
  QueryPaymentBankCondition: QueryPaymentBankCondition;
  QueryPaymentBanksFilterFilterConditions: QueryPaymentBanksFilterFilterConditions;
  QueryPaymentBanksFilterStaticInput: QueryPaymentBanksFilterStaticInput;
  QueryPaymentBanksOrderByOrderByClause: QueryPaymentBanksOrderByOrderByClause;
  QueryPaymentProviderIbansFilterFilterConditions: QueryPaymentProviderIbansFilterFilterConditions;
  QueryPaymentProviderIbansFilterStaticInput: QueryPaymentProviderIbansFilterStaticInput;
  QueryPaymentProviderIbansOrderByOrderByClause: QueryPaymentProviderIbansOrderByOrderByClause;
  QueryPaymentProvidersFilterFilterConditions: QueryPaymentProvidersFilterFilterConditions;
  QueryPaymentProvidersFilterStaticInput: QueryPaymentProvidersFilterStaticInput;
  QueryPaymentProvidersOrderByOrderByClause: QueryPaymentProvidersOrderByOrderByClause;
  QueryPaymentStatusesFilterFilterConditions: QueryPaymentStatusesFilterFilterConditions;
  QueryPaymentStatusesFilterStaticInput: QueryPaymentStatusesFilterStaticInput;
  QueryPaymentSystemsFilterFilterConditions: QueryPaymentSystemsFilterFilterConditions;
  QueryPaymentSystemsFilterStaticInput: QueryPaymentSystemsFilterStaticInput;
  QueryPaymentSystemsOrderByOrderByClause: QueryPaymentSystemsOrderByOrderByClause;
  QueryPaymentsFilterFilterConditions: QueryPaymentsFilterFilterConditions;
  QueryPaymentsFilterStaticInput: QueryPaymentsFilterStaticInput;
  QueryPaymentsOrderByOrderByClause: QueryPaymentsOrderByOrderByClause;
  QueryPermissionsWhereWhereConditions: QueryPermissionsWhereWhereConditions;
  QueryPermissionsWhereWhereConditionsRelation: QueryPermissionsWhereWhereConditionsRelation;
  QueryPriceListFeesFilterFilterConditions: QueryPriceListFeesFilterFilterConditions;
  QueryPriceListFeesFilterStaticInput: QueryPriceListFeesFilterStaticInput;
  QueryProjectsFilterFilterConditions: QueryProjectsFilterFilterConditions;
  QueryProjectsFilterStaticInput: QueryProjectsFilterStaticInput;
  QueryRegionsFilterFilterConditions: QueryRegionsFilterFilterConditions;
  QueryRegionsFilterStaticInput: QueryRegionsFilterStaticInput;
  QueryRequisitesFilterFilterConditions: QueryRequisitesFilterFilterConditions;
  QueryRequisitesFilterStaticInput: QueryRequisitesFilterStaticInput;
  QueryRolesFilterFilterConditions: QueryRolesFilterFilterConditions;
  QueryRolesFilterStaticInput: QueryRolesFilterStaticInput;
  QueryRolesOrderByOrderByClause: QueryRolesOrderByOrderByClause;
  QueryTicketsFilterFilterConditions: QueryTicketsFilterFilterConditions;
  QueryTicketsFilterStaticInput: QueryTicketsFilterStaticInput;
  QueryTicketsOrderByCompany: QueryTicketsOrderByCompany;
  QueryTicketsOrderByDepartment: QueryTicketsOrderByDepartment;
  QueryTicketsOrderByRelationOrderByClause: QueryTicketsOrderByRelationOrderByClause;
  QueryTransferIncomingsFilterFilterConditions: QueryTransferIncomingsFilterFilterConditions;
  QueryTransferIncomingsFilterStaticInput: QueryTransferIncomingsFilterStaticInput;
  QueryTransferOutgoingsFilterFilterConditions: QueryTransferOutgoingsFilterFilterConditions;
  QueryTransferOutgoingsFilterStaticInput: QueryTransferOutgoingsFilterStaticInput;
  QueryUsersFilterFilterConditions: QueryUsersFilterFilterConditions;
  QueryUsersFilterStaticInput: QueryUsersFilterStaticInput;
  QueryUsersOrderByOrderByClause: QueryUsersOrderByOrderByClause;
  RawFile: RawFile;
  Region: Region;
  RegionPaginator: RegionPaginator;
  Requisite: Requisite;
  RespondentFee: RespondentFee;
  Role: Role;
  RolePaginator: RolePaginator;
  Sender: Sender;
  SimplePaginatorInfo: SimplePaginatorInfo;
  State: State;
  StateReason: StateReason;
  StatusType: StatusType;
  String: Scalars['String']['output'];
  StringInteger: Scalars['StringInteger']['output'];
  Ticket: Ticket;
  TicketComments: TicketComments;
  TicketPaginator: TicketPaginator;
  TicketStatus: TicketStatus;
  TransferIncoming: Omit<TransferIncoming, 'recipient'> & { recipient?: Maybe<ResolversParentTypes['Client']> };
  TransferIncomingHistory: TransferIncomingHistory;
  TransferIncomingHistoryPaginator: TransferIncomingHistoryPaginator;
  TransferIncomingPaginator: TransferIncomingPaginator;
  TransferIncomingStatistic: TransferIncomingStatistic;
  TransferOutgoing: Omit<TransferOutgoing, 'requested_by' | 'sender'> & { requested_by?: Maybe<ResolversParentTypes['Clientable']>, sender?: Maybe<ResolversParentTypes['Client']> };
  TransferOutgoingHistory: TransferOutgoingHistory;
  TransferOutgoingHistoryPaginator: TransferOutgoingHistoryPaginator;
  TransferOutgoingPaginator: TransferOutgoingPaginator;
  TransferOutgoingStatistic: TransferOutgoingStatistic;
  TwoFactorAuthSettings: TwoFactorAuthSettings;
  TwoFactorAuthSettingsPaginator: TwoFactorAuthSettingsPaginator;
  TwoFactorAuthToken: TwoFactorAuthToken;
  TypeOfIndustry: TypeOfIndustry;
  TypeOfTransfer: TypeOfTransfer;
  Users: Users;
  UsersPaginator: UsersPaginator;
  WhereConditions: WhereConditions;
  WhereConditionsRelation: WhereConditionsRelation;
  dashboardAccountsStatistic: DashboardAccountsStatistic;
  dashboardTicketsStatistic: DashboardTicketsStatistic;
  dashboardTransfersStatistic: DashboardTransfersStatistic;
  dashboardUsersStatistic: DashboardUsersStatistic;
  priceList: PriceList;
  userAuthResponse: UserAuthResponse;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  account_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_state?: Resolver<Maybe<ResolversTypes['AccountState']>, ParentType, ContextType>;
  account_type?: Resolver<Maybe<ResolversTypes['AccountType']>, ParentType, ContextType>;
  activated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  client_accounts?: Resolver<Array<ResolversTypes['ClientAccountsDetails']>, ParentType, ContextType>;
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  iban_provider?: Resolver<Maybe<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last_charge_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  max_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  min_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  payment_bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountClient'] = ResolversParentTypes['AccountClient']> = {
  client?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountGenerateIbanResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountGenerateIbanResponse'] = ResolversParentTypes['AccountGenerateIbanResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountLimitResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountLimit'] = ResolversParentTypes['AccountLimit']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  account_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  commission_template_limit_action_type?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitActionType']>, ParentType, ContextType>;
  commission_template_limit_action_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_limit_period?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitPeriod']>, ParentType, ContextType>;
  commission_template_limit_period_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_limit_transfer_direction?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitTransferDirection']>, ParentType, ContextType>;
  commission_template_limit_transfer_direction_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_limit_type?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitType']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  currency_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountLimitPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountLimitPaginator'] = ResolversParentTypes['AccountLimitPaginator']> = {
  data?: Resolver<Array<ResolversTypes['AccountLimit']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPaginator'] = ResolversParentTypes['AccountPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountReachedLimitResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountReachedLimit'] = ResolversParentTypes['AccountReachedLimit']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  account_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  client_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  client_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  limit_currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  limit_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  limit_value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transfer_direction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountReachedLimitPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountReachedLimitPaginator'] = ResolversParentTypes['AccountReachedLimitPaginator']> = {
  data?: Resolver<Array<ResolversTypes['AccountReachedLimit']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountState'] = ResolversParentTypes['AccountState']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountStatementResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountStatement'] = ResolversParentTypes['AccountStatement']> = {
  account_currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closing_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  closing_balance_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  credit_turnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date_from?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  debit_turnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opening_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opening_balance_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountStatementTransaction']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountStatementTransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountStatementTransaction'] = ResolversParentTypes['AccountStatementTransaction']> = {
  account_balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_recipient?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveSessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveSession'] = ResolversParentTypes['ActiveSession']> = {
  browser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  browser_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trusted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveSessionMutatorResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveSessionMutatorResponse'] = ResolversParentTypes['ActiveSessionMutatorResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveSessionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveSessions'] = ResolversParentTypes['ActiveSessions']> = {
  data?: Resolver<Maybe<Array<ResolversTypes['ActiveSession']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityLog'] = ResolversParentTypes['ActivityLog']> = {
  changes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  member?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityLogs'] = ResolversParentTypes['ActivityLogs']> = {
  data?: Resolver<Maybe<Array<ResolversTypes['ActivityLog']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantAccount'] = ResolversParentTypes['ApplicantAccount']> = {
  account_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  current_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_show?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantBankingAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantBankingAccess'] = ResolversParentTypes['ApplicantBankingAccess']> = {
  applicant_company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  applicant_individual?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  contact_administrator?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  create_payments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  daily_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  grant_access?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  monthly_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  operation_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  sign_payments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  used_daily_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  used_monthly_limit?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantBankingAccessesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantBankingAccesses'] = ResolversParentTypes['ApplicantBankingAccesses']> = {
  data?: Resolver<Maybe<Array<ResolversTypes['ApplicantBankingAccess']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompany'] = ResolversParentTypes['ApplicantCompany']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicant_state?: Resolver<Maybe<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  basic_info_additional_field?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  business_type?: Resolver<Maybe<ResolversTypes['ApplicantCompanyBusinessType']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  company_info_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  company_position?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType>;
  company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  contact_phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contacts_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  incorporate_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  kyc_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantCompanyLabel']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  license_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  modules?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantCompanyModules']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantCompanyNotes']>>>, ParentType, ContextType>;
  office_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  owner_position?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType>;
  owner_relation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  profile_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  reg_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reg_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  tax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyBusinessTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyBusinessType'] = ResolversParentTypes['ApplicantCompanyBusinessType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyBusinessTypePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyBusinessTypePaginator'] = ResolversParentTypes['ApplicantCompanyBusinessTypePaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantCompanyBusinessType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyLabelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyLabel'] = ResolversParentTypes['ApplicantCompanyLabel']> = {
  hex_color_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyLabelPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyLabelPaginator'] = ResolversParentTypes['ApplicantCompanyLabelPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantCompanyLabel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyModulesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyModules'] = ResolversParentTypes['ApplicantCompanyModules']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyNotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyNotes'] = ResolversParentTypes['ApplicantCompanyNotes']> = {
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyNotesPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyNotesPaginator'] = ResolversParentTypes['ApplicantCompanyNotesPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantCompanyNotes']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyPaginator'] = ResolversParentTypes['ApplicantCompanyPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyRiskLevelHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyRiskLevelHistory'] = ResolversParentTypes['ApplicantCompanyRiskLevelHistory']> = {
  applicant_company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantCompanyRiskLevelHistoryPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantCompanyRiskLevelHistoryPaginator'] = ResolversParentTypes['ApplicantCompanyRiskLevelHistoryPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantCompanyRiskLevelHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDetailsRequisitesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDetailsRequisites'] = ResolversParentTypes['ApplicantDetailsRequisites']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iban?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swift_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDevice'] = ResolversParentTypes['ApplicantDevice']> = {
  browser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expired_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trusted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocument'] = ResolversParentTypes['ApplicantDocument']> = {
  added_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicant_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_type?: Resolver<ResolversTypes['ApplicantType'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  document_state?: Resolver<Maybe<ResolversTypes['DocumentState']>, ParentType, ContextType>;
  document_state_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  document_type?: Resolver<Maybe<ResolversTypes['DocumentType']>, ParentType, ContextType>;
  document_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internal_notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantDocumentInternalNote']>>>, ParentType, ContextType>;
  reject_details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantDocumentTag']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentInternalNoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentInternalNote'] = ResolversParentTypes['ApplicantDocumentInternalNote']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentInternalNotePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentInternalNotePaginator'] = ResolversParentTypes['ApplicantDocumentInternalNotePaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantDocumentInternalNote']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentPaginator'] = ResolversParentTypes['ApplicantDocumentPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantDocument']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentRejectDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentRejectDetail'] = ResolversParentTypes['ApplicantDocumentRejectDetail']> = {
  applicant_document?: Resolver<ResolversTypes['ApplicantDocument'], ParentType, ContextType>;
  applicant_document_tag?: Resolver<Maybe<Array<ResolversTypes['ApplicantDocumentTag']>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentTag'] = ResolversParentTypes['ApplicantDocumentTag']> = {
  category?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTagCategory']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentTagCategory'] = ResolversParentTypes['ApplicantDocumentTagCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagCategoryPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentTagCategoryPaginator'] = ResolversParentTypes['ApplicantDocumentTagCategoryPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantDocumentTagCategory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantDocumentTagPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantDocumentTagPaginator'] = ResolversParentTypes['ApplicantDocumentTagPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantDocumentTag']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividual'] = ResolversParentTypes['ApplicantIndividual']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  applicant_companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantCompany']>>>, ParentType, ContextType>;
  applicant_state?: Resolver<Maybe<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  banking_access?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantBankingAccess']>>>, ParentType, ContextType>;
  birth_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birth_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birth_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  birth_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizenship_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  contacts_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  kyc_level?: Resolver<Maybe<ResolversTypes['ApplicantKycLevel']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividualLabel']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_screened_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividualModules']>>>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividualNotes']>>>, ParentType, ContextType>;
  personal_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_verification?: Resolver<Maybe<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  profile_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  two_factor_auth?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualCompany'] = ResolversParentTypes['ApplicantIndividualCompany']> = {
  applicant_company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  applicant_company_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_individual_company_position_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_individual_company_relation_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  percentage_owned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  position_in_company?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType>;
  relation_to_company?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualCompanyPosition'] = ResolversParentTypes['ApplicantIndividualCompanyPosition']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyPositionPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualCompanyPositionPaginator'] = ResolversParentTypes['ApplicantIndividualCompanyPositionPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyRelationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualCompanyRelation'] = ResolversParentTypes['ApplicantIndividualCompanyRelation']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualCompanyRelationPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualCompanyRelationPaginator'] = ResolversParentTypes['ApplicantIndividualCompanyRelationPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualLabelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualLabel'] = ResolversParentTypes['ApplicantIndividualLabel']> = {
  hex_color_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualLabelPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualLabelPaginator'] = ResolversParentTypes['ApplicantIndividualLabelPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantIndividualLabel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualModulesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualModules'] = ResolversParentTypes['ApplicantIndividualModules']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualNotesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualNotes'] = ResolversParentTypes['ApplicantIndividualNotes']> = {
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualNotesPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualNotesPaginator'] = ResolversParentTypes['ApplicantIndividualNotesPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantIndividualNotes']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantIndividualPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantIndividualPaginator'] = ResolversParentTypes['ApplicantIndividualPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantKycLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantKycLevel'] = ResolversParentTypes['ApplicantKycLevel']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantKycLevelPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantKycLevelPaginator'] = ResolversParentTypes['ApplicantKycLevelPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantKycLevel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantLinkedCompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantLinkedCompany'] = ResolversParentTypes['ApplicantLinkedCompany']> = {
  company?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType>;
  company_position?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType>;
  company_relation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType>;
  percentage_owned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantModulesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantModules'] = ResolversParentTypes['ApplicantModules']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantModulesPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantModulesPaginator'] = ResolversParentTypes['ApplicantModulesPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantModules']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantProfile'] = ResolversParentTypes['ApplicantProfile']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicant_state?: Resolver<Maybe<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  birth_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birth_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birth_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  birth_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizenship_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantCompany']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  contacts_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  is_verification_phone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividualLabel']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividualModules']>>>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividualNotes']>>>, ParentType, ContextType>;
  notify_device_email?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  personal_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  profile_additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  two_factor_auth?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRequisitesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantRequisites'] = ResolversParentTypes['ApplicantRequisites']> = {
  account_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantProfile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantRiskLevel'] = ResolversParentTypes['ApplicantRiskLevel']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantRiskLevelHistory'] = ResolversParentTypes['ApplicantRiskLevelHistory']> = {
  applicant?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  risk_level?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelHistoryPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantRiskLevelHistoryPaginator'] = ResolversParentTypes['ApplicantRiskLevelHistoryPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantRiskLevelHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantRiskLevelPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantRiskLevelPaginator'] = ResolversParentTypes['ApplicantRiskLevelPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantSettingsProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantSettingsProfile'] = ResolversParentTypes['ApplicantSettingsProfile']> = {
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_confirm_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantState'] = ResolversParentTypes['ApplicantState']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStatePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantStatePaginator'] = ResolversParentTypes['ApplicantStatePaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantState']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStateReasonResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantStateReason'] = ResolversParentTypes['ApplicantStateReason']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStateReasonPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantStateReasonPaginator'] = ResolversParentTypes['ApplicantStateReasonPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantStatus'] = ResolversParentTypes['ApplicantStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantStatusPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantStatusPaginator'] = ResolversParentTypes['ApplicantStatusPaginator']> = {
  data?: Resolver<Array<ResolversTypes['ApplicantStatus']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicantVerificationStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicantVerificationStatus'] = ResolversParentTypes['ApplicantVerificationStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticationLog'] = ResolversParentTypes['AuthenticationLog']> = {
  browser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  browser_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  client_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expired_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  member?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationLogsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticationLogs'] = ResolversParentTypes['AuthenticationLogs']> = {
  data?: Resolver<Maybe<Array<ResolversTypes['AuthenticationLog']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankCorrespondentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankCorrespondent'] = ResolversParentTypes['BankCorrespondent']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currencies']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankCorrespondentPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankCorrespondentPaginator'] = ResolversParentTypes['BankCorrespondentPaginator']> = {
  data?: Resolver<Array<ResolversTypes['BankCorrespondent']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusinessActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['BusinessActivity'] = ResolversParentTypes['BusinessActivity']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusinessActivityPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BusinessActivityPaginator'] = ResolversParentTypes['BusinessActivityPaginator']> = {
  data?: Resolver<Array<ResolversTypes['BusinessActivity']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  __resolveType: TypeResolveFn<'ApplicantCompany' | 'ApplicantIndividual', ParentType, ContextType>;
};

export type ClientAccountsDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientAccountsDetails'] = ResolversParentTypes['ClientAccountsDetails']> = {
  available_balance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currencies'], ParentType, ContextType>;
  current_balance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  min_limit_balance?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  reserved_balance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientIpAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientIpAddress'] = ResolversParentTypes['ClientIpAddress']> = {
  client_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  client_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clientable'] = ResolversParentTypes['Clientable']> = {
  __resolveType: TypeResolveFn<'ApplicantCompany' | 'ApplicantIndividual' | 'Members', ParentType, ContextType>;
};

export type CommissionPriceListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionPriceList'] = ResolversParentTypes['CommissionPriceList']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<Array<Maybe<ResolversTypes['PriceListFee']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividual']>>>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionPriceListPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionPriceListPaginator'] = ResolversParentTypes['CommissionPriceListPaginator']> = {
  data?: Resolver<Array<ResolversTypes['CommissionPriceList']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplate'] = ResolversParentTypes['CommissionTemplate']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  business_activity?: Resolver<Maybe<Array<Maybe<ResolversTypes['BusinessActivity']>>>, ParentType, ContextType>;
  commission_template_limits?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommissionTemplateLimit']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currencies']>>>, ParentType, ContextType>;
  currency_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicantIndividual']>>>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimit'] = ResolversParentTypes['CommissionTemplateLimit']> = {
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  commission_template?: Resolver<ResolversTypes['CommissionTemplate'], ParentType, ContextType>;
  commission_template_limit_action_type?: Resolver<ResolversTypes['CommissionTemplateLimitActionType'], ParentType, ContextType>;
  commission_template_limit_period?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitPeriod']>, ParentType, ContextType>;
  commission_template_limit_transfer_direction?: Resolver<ResolversTypes['CommissionTemplateLimitTransferDirection'], ParentType, ContextType>;
  commission_template_limit_type?: Resolver<ResolversTypes['CommissionTemplateLimitType'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currencies'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_system?: Resolver<ResolversTypes['PaymentSystem'], ParentType, ContextType>;
  period_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitActionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitActionType'] = ResolversParentTypes['CommissionTemplateLimitActionType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitActionTypePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitActionTypePaginator'] = ResolversParentTypes['CommissionTemplateLimitActionTypePaginator']> = {
  data?: Resolver<Array<ResolversTypes['CommissionTemplateLimitActionType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitPaginator'] = ResolversParentTypes['CommissionTemplateLimitPaginator']> = {
  data?: Resolver<Array<ResolversTypes['CommissionTemplateLimit']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitPeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitPeriod'] = ResolversParentTypes['CommissionTemplateLimitPeriod']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitPeriodPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitPeriodPaginator'] = ResolversParentTypes['CommissionTemplateLimitPeriodPaginator']> = {
  data?: Resolver<Array<ResolversTypes['CommissionTemplateLimitPeriod']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTransferDirectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitTransferDirection'] = ResolversParentTypes['CommissionTemplateLimitTransferDirection']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTransferDirectionPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitTransferDirectionPaginator'] = ResolversParentTypes['CommissionTemplateLimitTransferDirectionPaginator']> = {
  data?: Resolver<Array<ResolversTypes['CommissionTemplateLimitTransferDirection']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitType'] = ResolversParentTypes['CommissionTemplateLimitType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplateLimitTypePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplateLimitTypePaginator'] = ResolversParentTypes['CommissionTemplateLimitTypePaginator']> = {
  data?: Resolver<Array<ResolversTypes['CommissionTemplateLimitType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommissionTemplatePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommissionTemplatePaginator'] = ResolversParentTypes['CommissionTemplatePaginator']> = {
  data?: Resolver<Array<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  additional_fields_basic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_info?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backoffice_forgot_password_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backoffice_login_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backoffice_support_email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  backoffice_support_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_modules?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyModule']>>>, ParentType, ContextType>;
  company_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  departments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EMAIL'], ParentType, ContextType>;
  employees?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exp_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  incorporate_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  license_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  member_verify_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['Members']>>>, ParentType, ContextType>;
  members_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<Maybe<ResolversTypes['DepartmentPosition']>>>, ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  projects_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reg_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reg_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  state_reason?: Resolver<Maybe<ResolversTypes['StateReason']>, ParentType, ContextType>;
  tax_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_of_industry?: Resolver<Maybe<ResolversTypes['TypeOfIndustry']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vv_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyModule'] = ResolversParentTypes['CompanyModule']> = {
  iban_providers?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyModuleIbanProvider']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  payment_providers?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyModulePaymentProvider']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModuleIbanProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyModuleIbanProvider'] = ResolversParentTypes['CompanyModuleIbanProvider']> = {
  company_module_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payment_provider_iban?: Resolver<ResolversTypes['PaymentProviderIban'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModuleIbanProviderPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyModuleIbanProviderPassword'] = ResolversParentTypes['CompanyModuleIbanProviderPassword']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModulePaymentProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyModulePaymentProvider'] = ResolversParentTypes['CompanyModulePaymentProvider']> = {
  company_module_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  payment_provider?: Resolver<ResolversTypes['PaymentProvider'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyModulePaymentProviderPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyModulePaymentProviderPassword'] = ResolversParentTypes['CompanyModulePaymentProviderPassword']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyPaginator'] = ResolversParentTypes['CompanyPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  iso?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountryPaginator'] = ResolversParentTypes['CountryPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currencies'] = ResolversParentTypes['Currencies']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minor_unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrenciesPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrenciesPaginator'] = ResolversParentTypes['CurrenciesPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Currencies']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateEndScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateEnd'], any> {
  name: 'DateEnd';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateTimeUtcScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeUtc'], any> {
  name: 'DateTimeUtc';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<Maybe<ResolversTypes['DepartmentPosition']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['DepartmentPaginator'] = ResolversParentTypes['DepartmentPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Department']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DepartmentPosition'] = ResolversParentTypes['DepartmentPosition']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  department?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentPositionPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['DepartmentPositionPaginator'] = ResolversParentTypes['DepartmentPositionPaginator']> = {
  data?: Resolver<Array<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentState'] = ResolversParentTypes['DocumentState']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentType'] = ResolversParentTypes['DocumentType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EMAIL'], any> {
  name: 'EMAIL';
}

export type EmailNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailNotification'] = ResolversParentTypes['EmailNotification']> = {
  clientable?: Resolver<Maybe<ResolversTypes['Clientable']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  group_role?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  recipient_type?: Resolver<Maybe<ResolversTypes['RecipientType']>, ParentType, ContextType>;
  templates?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmailTemplate']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotifyType']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailNotificationPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailNotificationPaginator'] = ResolversParentTypes['EmailNotificationPaginator']> = {
  data?: Resolver<Array<ResolversTypes['EmailNotification']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailSmtpResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailSmtp'] = ResolversParentTypes['EmailSmtp']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  from_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_sending_mail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  replay_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  security?: Resolver<Maybe<ResolversTypes['Securities']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplate'] = ResolversParentTypes['EmailTemplate']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service_type?: Resolver<ResolversTypes['ServiceType'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ClientType'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  use_layout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateLayoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplateLayout'] = ResolversParentTypes['EmailTemplateLayout']> = {
  company_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  footer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateOnCompanyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplateOnCompanyResponse'] = ResolversParentTypes['EmailTemplateOnCompanyResponse']> = {
  data?: Resolver<Array<ResolversTypes['EmailTemplate']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  employees_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fee'] = ResolversParentTypes['Fee']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  fee_amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  fee_pp?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  price_list_fee?: Resolver<Maybe<ResolversTypes['PriceListFee']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  transfer_outgoing?: Resolver<Maybe<ResolversTypes['TransferOutgoing']>, ParentType, ContextType>;
  transfer_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeeItem'] = ResolversParentTypes['FeeItem']> = {
  amount_from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount_to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeModeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeeMode'] = ResolversParentTypes['FeeMode']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeePeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeePeriod'] = ResolversParentTypes['FeePeriod']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeeType'] = ResolversParentTypes['FeeType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Files'] = ResolversParentTypes['Files']> = {
  author_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  entity_type?: Resolver<ResolversTypes['FileEntityTypeEnum'], ParentType, ContextType>;
  file_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mime_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storage_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storage_path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilesPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilesPaginator'] = ResolversParentTypes['FilesPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Files']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupRole'] = ResolversParentTypes['GroupRole']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  group_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  module_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providers?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupRoleProvider']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRolePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupRolePaginator'] = ResolversParentTypes['GroupRolePaginator']> = {
  data?: Resolver<Array<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupRoleProvider'] = ResolversParentTypes['GroupRoleProvider']> = {
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  group_role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupRoleView'] = ResolversParentTypes['GroupRoleView']> = {
  commission_template_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commission_template_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  group_type_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  module_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_provider_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  payment_provider_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupRoleViewPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupRoleViewPaginator'] = ResolversParentTypes['GroupRoleViewPaginator']> = {
  data?: Resolver<Array<ResolversTypes['GroupRoleView']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupType'] = ResolversParentTypes['GroupType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['GroupsEntities'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupTypePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupTypePaginator'] = ResolversParentTypes['GroupTypePaginator']> = {
  data?: Resolver<Array<ResolversTypes['GroupType']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Groups'] = ResolversParentTypes['Groups']> = {
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupRole']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['GroupsEntities'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KycTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['KycTimeline'] = ResolversParentTypes['KycTimeline']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  action_new_value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  action_old_value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  action_type?: Resolver<ResolversTypes['KycTimelineActionType'], ParentType, ContextType>;
  applicant?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  applicant_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicant_type?: Resolver<ResolversTypes['ApplicantType'], ParentType, ContextType>;
  browser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  os?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KycTimelinesResolvers<ContextType = any, ParentType extends ResolversParentTypes['KycTimelines'] = ResolversParentTypes['KycTimelines']> = {
  data?: Resolver<Maybe<Array<ResolversTypes['KycTimeline']>>, ParentType, ContextType>;
  paginatorInfo?: Resolver<Maybe<ResolversTypes['PaginatorInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Languages'] = ResolversParentTypes['Languages']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  iso?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguagesPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguagesPaginator'] = ResolversParentTypes['LanguagesPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Languages']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberAccessLimitationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberAccessLimitation'] = ResolversParentTypes['MemberAccessLimitation']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  group_roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupRole']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  see_own_applicants?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberAccessLimitationPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberAccessLimitationPaginator'] = ResolversParentTypes['MemberAccessLimitationPaginator']> = {
  data?: Resolver<Array<ResolversTypes['MemberAccessLimitation']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberProfile'] = ResolversParentTypes['MemberProfile']> = {
  access_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberAccessLimitation']>>>, ParentType, ContextType>;
  additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_info_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_show_owner_applicants?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_sign_transaction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_login_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  two_factor_auth_setting_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  two_factor_auth_settings?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberStatus'] = ResolversParentTypes['MemberStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Members'] = ResolversParentTypes['Members']> = {
  access_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberAccessLimitation']>>>, ParentType, ContextType>;
  additional_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_info_fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  backup_codes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  email_verification?: Resolver<Maybe<ResolversTypes['EmailVerification']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google2fa_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip_addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientIpAddress']>>>, ParentType, ContextType>;
  is_show_owner_applicants?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_sign_transaction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  job_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType>;
  last_login_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  member_status?: Resolver<Maybe<ResolversTypes['MemberStatus']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  security_pin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  two_factor_auth_setting_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  two_factor_auth_settings?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembersPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembersPaginator'] = ResolversParentTypes['MembersPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Members']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MixedScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Mixed'], any> {
  name: 'Mixed';
}

export type ModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Module'] = ResolversParentTypes['Module']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCompanyModule?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationAddCompanyModuleArgs, 'company_id'>>;
  attachApplicantCompanyLabel?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationAttachApplicantCompanyLabelArgs, 'applicant_company_id'>>;
  attachApplicantDocumentTag?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType, RequireFields<MutationAttachApplicantDocumentTagArgs, 'applicant_document_id' | 'applicant_document_tag_id'>>;
  attachApplicantIndividualLabel?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationAttachApplicantIndividualLabelArgs, 'applicant_individual_id'>>;
  cancelTransferOutgoingFee?: Resolver<Maybe<ResolversTypes['TransferOutgoing']>, ParentType, ContextType, RequireFields<MutationCancelTransferOutgoingFeeArgs, 'id'>>;
  createAccount?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'input'>>;
  createAccountLimit?: Resolver<Maybe<ResolversTypes['AccountLimit']>, ParentType, ContextType, RequireFields<MutationCreateAccountLimitArgs, 'account_id' | 'amount' | 'commission_template_limit_action_type_id' | 'commission_template_limit_period_id' | 'commission_template_limit_transfer_direction_id' | 'commission_template_limit_type_id'>>;
  createApplicant?: Resolver<Maybe<ResolversTypes['ApplicantSettingsProfile']>, ParentType, ContextType, RequireFields<MutationCreateApplicantArgs, 'client_type' | 'email' | 'first_name' | 'last_name' | 'password' | 'password_confirmation' | 'phone'>>;
  createApplicantBankingAccess?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccess']>, ParentType, ContextType, RequireFields<MutationCreateApplicantBankingAccessArgs, 'applicant_company_id' | 'applicant_individual_id' | 'contact_administrator' | 'daily_limit' | 'monthly_limit' | 'operation_limit' | 'role_id'>>;
  createApplicantCompany?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationCreateApplicantCompanyArgs, 'company_id' | 'email' | 'name' | 'project_id'>>;
  createApplicantCompanyBusinessType?: Resolver<Maybe<ResolversTypes['ApplicantCompanyBusinessType']>, ParentType, ContextType, RequireFields<MutationCreateApplicantCompanyBusinessTypeArgs, 'name'>>;
  createApplicantCompanyLabel?: Resolver<Maybe<ResolversTypes['ApplicantCompanyLabel']>, ParentType, ContextType, RequireFields<MutationCreateApplicantCompanyLabelArgs, 'hex_color_code' | 'name'>>;
  createApplicantCompanyModule?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationCreateApplicantCompanyModuleArgs, 'applicant_company_id'>>;
  createApplicantCompanyNote?: Resolver<Maybe<ResolversTypes['ApplicantCompanyNotes']>, ParentType, ContextType, RequireFields<MutationCreateApplicantCompanyNoteArgs, 'applicant_company_id' | 'member_id' | 'note'>>;
  createApplicantCompanyRiskLevelHistory?: Resolver<Maybe<ResolversTypes['ApplicantCompanyRiskLevelHistory']>, ParentType, ContextType, RequireFields<MutationCreateApplicantCompanyRiskLevelHistoryArgs, 'applicant_company_id' | 'comment' | 'risk_level_id'>>;
  createApplicantDocument?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType, RequireFields<MutationCreateApplicantDocumentArgs, 'applicant_id' | 'applicant_type' | 'company_id' | 'document_type_id' | 'file_id'>>;
  createApplicantDocumentInternalNote?: Resolver<Maybe<ResolversTypes['ApplicantDocumentInternalNote']>, ParentType, ContextType, RequireFields<MutationCreateApplicantDocumentInternalNoteArgs, 'applicant_document_id' | 'note'>>;
  createApplicantDocumentRejectDetail?: Resolver<Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>, ParentType, ContextType, RequireFields<MutationCreateApplicantDocumentRejectDetailArgs, 'applicant_document_id' | 'applicant_document_tag_id'>>;
  createApplicantDocumentTag?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTag']>, ParentType, ContextType, RequireFields<MutationCreateApplicantDocumentTagArgs, 'category_id' | 'name'>>;
  createApplicantDocumentTagCategory?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTagCategory']>, ParentType, ContextType, RequireFields<MutationCreateApplicantDocumentTagCategoryArgs, 'name'>>;
  createApplicantIndividual?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationCreateApplicantIndividualArgs, 'company_id' | 'email' | 'first_name' | 'last_name' | 'phone'>>;
  createApplicantIndividualCompany?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType, RequireFields<MutationCreateApplicantIndividualCompanyArgs, 'applicant_company_id' | 'applicant_id' | 'applicant_individual_company_position_id' | 'applicant_individual_company_relation_id'>>;
  createApplicantIndividualCompanyPosition?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType, RequireFields<MutationCreateApplicantIndividualCompanyPositionArgs, 'company_id' | 'name'>>;
  createApplicantIndividualCompanyRelation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType, RequireFields<MutationCreateApplicantIndividualCompanyRelationArgs, 'company_id' | 'name'>>;
  createApplicantIndividualLabel?: Resolver<Maybe<ResolversTypes['ApplicantIndividualLabel']>, ParentType, ContextType, RequireFields<MutationCreateApplicantIndividualLabelArgs, 'hex_color_code' | 'name'>>;
  createApplicantIndividualModule?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationCreateApplicantIndividualModuleArgs, 'applicant_individual_id'>>;
  createApplicantIndividualNote?: Resolver<Maybe<ResolversTypes['ApplicantIndividualNotes']>, ParentType, ContextType, RequireFields<MutationCreateApplicantIndividualNoteArgs, 'applicant_individual_id' | 'member_id' | 'note'>>;
  createApplicantModule?: Resolver<Maybe<ResolversTypes['ApplicantModules']>, ParentType, ContextType, RequireFields<MutationCreateApplicantModuleArgs, 'name'>>;
  createApplicantRiskLevelHistory?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevelHistory']>, ParentType, ContextType, RequireFields<MutationCreateApplicantRiskLevelHistoryArgs, 'applicant_id' | 'comment' | 'risk_level_id'>>;
  createApplicantStateReason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType, RequireFields<MutationCreateApplicantStateReasonArgs, 'name'>>;
  createBankCorrespondent?: Resolver<Maybe<ResolversTypes['BankCorrespondent']>, ParentType, ContextType, RequireFields<MutationCreateBankCorrespondentArgs, 'address' | 'bank_account' | 'bank_code' | 'currency_id' | 'is_active' | 'name' | 'payment_system_id' | 'region_id'>>;
  createBusinessActivity?: Resolver<Maybe<ResolversTypes['BusinessActivity']>, ParentType, ContextType, RequireFields<MutationCreateBusinessActivityArgs, 'name'>>;
  createCommissionPriceList?: Resolver<Maybe<ResolversTypes['CommissionPriceList']>, ParentType, ContextType, RequireFields<MutationCreateCommissionPriceListArgs, 'commission_template_id' | 'company_id' | 'name' | 'payment_system_id' | 'provider_id' | 'region_id'>>;
  createCommissionTemplate?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType, RequireFields<MutationCreateCommissionTemplateArgs, 'input'>>;
  createCommissionTemplateLimit?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimit']>, ParentType, ContextType, RequireFields<MutationCreateCommissionTemplateLimitArgs, 'input'>>;
  createCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'country_id' | 'email' | 'name' | 'url'>>;
  createCompanyModuleIbanProvider?: Resolver<Maybe<ResolversTypes['CompanyModuleIbanProvider']>, ParentType, ContextType, RequireFields<MutationCreateCompanyModuleIbanProviderArgs, 'input'>>;
  createCompanyModulePaymentProvider?: Resolver<Maybe<ResolversTypes['CompanyModulePaymentProvider']>, ParentType, ContextType, RequireFields<MutationCreateCompanyModulePaymentProviderArgs, 'input'>>;
  createDepartment?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<MutationCreateDepartmentArgs, 'company_id' | 'name'>>;
  createDepartmentPosition?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType, RequireFields<MutationCreateDepartmentPositionArgs, 'company_id' | 'name'>>;
  createDocumentType?: Resolver<Maybe<ResolversTypes['DocumentType']>, ParentType, ContextType, RequireFields<MutationCreateDocumentTypeArgs, 'name'>>;
  createEmailNotification?: Resolver<Maybe<ResolversTypes['EmailNotification']>, ParentType, ContextType, RequireFields<MutationCreateEmailNotificationArgs, 'company_id' | 'group_role_id' | 'group_type_id' | 'templates'>>;
  createEmailSmtp?: Resolver<Maybe<ResolversTypes['EmailSmtp']>, ParentType, ContextType, RequireFields<MutationCreateEmailSmtpArgs, 'company_id' | 'host_name' | 'name' | 'password' | 'port' | 'username'>>;
  createEmailTemplate?: Resolver<Maybe<ResolversTypes['EmailTemplateOnCompanyResponse']>, ParentType, ContextType, RequireFields<MutationCreateEmailTemplateArgs, 'company_id' | 'content' | 'name' | 'service_type' | 'subject' | 'type' | 'use_layout'>>;
  createEmailTemplateLayout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType, RequireFields<MutationCreateEmailTemplateLayoutArgs, 'company_id' | 'footer' | 'header'>>;
  createGroupSettings?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType, RequireFields<MutationCreateGroupSettingsArgs, 'group_type_id' | 'name'>>;
  createMember?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationCreateMemberArgs, 'company_id' | 'email' | 'first_name' | 'group_id' | 'last_name' | 'two_factor_auth_setting_id'>>;
  createMemberAccessLimitation?: Resolver<Maybe<ResolversTypes['MemberAccessLimitation']>, ParentType, ContextType, RequireFields<MutationCreateMemberAccessLimitationArgs, 'input'>>;
  createModule?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType, RequireFields<MutationCreateModuleArgs, 'name'>>;
  createPayment?: Resolver<Maybe<ResolversTypes['Payments']>, ParentType, ContextType, RequireFields<MutationCreatePaymentArgs, 'account_id' | 'amount' | 'beneficiary_address' | 'beneficiary_city' | 'beneficiary_country_id' | 'beneficiary_name' | 'beneficiary_state' | 'beneficiary_zip' | 'company_id' | 'currency_id' | 'fee_type_id' | 'operation_type_id' | 'payment_provider_id' | 'price_list_fees_id' | 'recipient_account' | 'recipient_bank_address' | 'recipient_bank_country_id' | 'recipient_bank_name' | 'recipient_bank_swift' | 'respondent_fees_id' | 'urgency_id'>>;
  createPaymentBank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType, RequireFields<MutationCreatePaymentBankArgs, 'input'>>;
  createPaymentProvider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType, RequireFields<MutationCreatePaymentProviderArgs, 'input'>>;
  createPaymentProviderIban?: Resolver<Maybe<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType, RequireFields<MutationCreatePaymentProviderIbanArgs, 'input'>>;
  createPaymentSystem?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType, RequireFields<MutationCreatePaymentSystemArgs, 'input'>>;
  createPriceListFees?: Resolver<Maybe<ResolversTypes['PriceListFee']>, ParentType, ContextType, Partial<MutationCreatePriceListFeesArgs>>;
  createProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'input'>>;
  createRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationCreateRegionArgs, 'input'>>;
  createRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'name'>>;
  createTicket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<MutationCreateTicketArgs, 'client_id' | 'member_id' | 'message' | 'title'>>;
  createTicketComment?: Resolver<Maybe<ResolversTypes['TicketComments']>, ParentType, ContextType, RequireFields<MutationCreateTicketCommentArgs, 'client_id' | 'message' | 'ticket_id'>>;
  createTransferOutgoing?: Resolver<Maybe<ResolversTypes['TransferOutgoing']>, ParentType, ContextType, RequireFields<MutationCreateTransferOutgoingArgs, 'account_id' | 'amount' | 'company_id' | 'currency_id' | 'group_id' | 'group_type_id' | 'payment_provider_id' | 'payment_system_id' | 'price_list_fee_id' | 'price_list_id' | 'project_id' | 'recipient_bank_country_id' | 'requested_by_id'>>;
  createTransferOutgoingFee?: Resolver<Maybe<ResolversTypes['TransferOutgoing']>, ParentType, ContextType, RequireFields<MutationCreateTransferOutgoingFeeArgs, 'account_id' | 'amount' | 'company_id' | 'currency_id' | 'group_id' | 'group_type_id' | 'operation_type_id' | 'payment_provider_id' | 'payment_system_id' | 'price_list_fee_id' | 'price_list_id' | 'project_id' | 'recipient_bank_country_id' | 'requested_by_id'>>;
  deleteAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationDeleteAccountArgs, 'id'>>;
  deleteAccountLimit?: Resolver<Maybe<ResolversTypes['AccountLimit']>, ParentType, ContextType, RequireFields<MutationDeleteAccountLimitArgs, 'id'>>;
  deleteApplicantBankingAccess?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccess']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantBankingAccessArgs, 'id'>>;
  deleteApplicantBankingMember?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccess']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantBankingMemberArgs, 'id'>>;
  deleteApplicantCompany?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantCompanyArgs, 'id'>>;
  deleteApplicantCompanyLabel?: Resolver<Maybe<ResolversTypes['ApplicantCompanyLabel']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantCompanyLabelArgs, 'id'>>;
  deleteApplicantCompanyModule?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantCompanyModuleArgs, 'applicant_company_id'>>;
  deleteApplicantCompanyNote?: Resolver<Maybe<ResolversTypes['ApplicantCompanyNotes']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantCompanyNoteArgs, 'id'>>;
  deleteApplicantCompanyRiskLevelHistory?: Resolver<Maybe<ResolversTypes['ApplicantCompanyRiskLevelHistory']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantCompanyRiskLevelHistoryArgs, 'id'>>;
  deleteApplicantDevice?: Resolver<Maybe<ResolversTypes['ApplicantDevice']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantDeviceArgs, 'id'>>;
  deleteApplicantDocument?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantDocumentArgs, 'id'>>;
  deleteApplicantDocumentInternalNote?: Resolver<Maybe<ResolversTypes['ApplicantDocumentInternalNote']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantDocumentInternalNoteArgs, 'id'>>;
  deleteApplicantDocumentRejectDetail?: Resolver<Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantDocumentRejectDetailArgs, 'id'>>;
  deleteApplicantDocumentTag?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTag']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantDocumentTagArgs, 'id'>>;
  deleteApplicantDocumentTagCategory?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTagCategory']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantDocumentTagCategoryArgs, 'id'>>;
  deleteApplicantIndividual?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantIndividualArgs, 'id'>>;
  deleteApplicantIndividualCompany?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantIndividualCompanyArgs, 'applicant_company_id' | 'applicant_id'>>;
  deleteApplicantIndividualCompanyPosition?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantIndividualCompanyPositionArgs, 'id'>>;
  deleteApplicantIndividualCompanyRelation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantIndividualCompanyRelationArgs, 'id'>>;
  deleteApplicantIndividualLabel?: Resolver<Maybe<ResolversTypes['ApplicantIndividualLabel']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantIndividualLabelArgs, 'id'>>;
  deleteApplicantIndividualModule?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantIndividualModuleArgs, 'applicant_individual_id'>>;
  deleteApplicantIndividualNote?: Resolver<Maybe<ResolversTypes['ApplicantIndividualNotes']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantIndividualNoteArgs, 'id'>>;
  deleteApplicantRiskLevelHistory?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevelHistory']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantRiskLevelHistoryArgs, 'id'>>;
  deleteApplicantStateReason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType, RequireFields<MutationDeleteApplicantStateReasonArgs, 'id'>>;
  deleteBankCorrespondent?: Resolver<Maybe<ResolversTypes['BankCorrespondent']>, ParentType, ContextType, RequireFields<MutationDeleteBankCorrespondentArgs, 'id'>>;
  deleteCommissionPriceList?: Resolver<Maybe<ResolversTypes['CommissionPriceList']>, ParentType, ContextType, RequireFields<MutationDeleteCommissionPriceListArgs, 'id'>>;
  deleteCommissionTemplate?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType, RequireFields<MutationDeleteCommissionTemplateArgs, 'id'>>;
  deleteCommissionTemplateLimit?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimit']>, ParentType, ContextType, RequireFields<MutationDeleteCommissionTemplateLimitArgs, 'id'>>;
  deleteCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationDeleteCompanyArgs, 'id'>>;
  deleteCompanyModule?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationDeleteCompanyModuleArgs, 'company_id'>>;
  deleteCompanyModuleIbanProvider?: Resolver<Maybe<ResolversTypes['CompanyModuleIbanProvider']>, ParentType, ContextType, RequireFields<MutationDeleteCompanyModuleIbanProviderArgs, 'id'>>;
  deleteCompanyModulePaymentProvider?: Resolver<Maybe<ResolversTypes['CompanyModulePaymentProvider']>, ParentType, ContextType, RequireFields<MutationDeleteCompanyModulePaymentProviderArgs, 'id'>>;
  deleteDepartment?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<MutationDeleteDepartmentArgs, 'id'>>;
  deleteDepartmentPosition?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType, RequireFields<MutationDeleteDepartmentPositionArgs, 'id'>>;
  deleteDocumentType?: Resolver<Maybe<ResolversTypes['DocumentType']>, ParentType, ContextType, RequireFields<MutationDeleteDocumentTypeArgs, 'id'>>;
  deleteEmailNotification?: Resolver<Maybe<ResolversTypes['EmailNotification']>, ParentType, ContextType, RequireFields<MutationDeleteEmailNotificationArgs, 'id'>>;
  deleteEmailSmtp?: Resolver<Array<ResolversTypes['EmailSmtp']>, ParentType, ContextType, RequireFields<MutationDeleteEmailSmtpArgs, 'id'>>;
  deleteEmailTemplate?: Resolver<Maybe<ResolversTypes['EmailTemplate']>, ParentType, ContextType, RequireFields<MutationDeleteEmailTemplateArgs, 'id'>>;
  deleteEmailTemplateLayout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType, RequireFields<MutationDeleteEmailTemplateLayoutArgs, 'id'>>;
  deleteFile?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType, RequireFields<MutationDeleteFileArgs, 'id'>>;
  deleteGroup?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'id'>>;
  deleteMember?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationDeleteMemberArgs, 'id'>>;
  deleteMemberAccessLimitation?: Resolver<Maybe<ResolversTypes['MemberAccessLimitation']>, ParentType, ContextType, RequireFields<MutationDeleteMemberAccessLimitationArgs, 'id'>>;
  deletePayment?: Resolver<Maybe<ResolversTypes['Payments']>, ParentType, ContextType, RequireFields<MutationDeletePaymentArgs, 'id'>>;
  deletePaymentBank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType, RequireFields<MutationDeletePaymentBankArgs, 'id'>>;
  deletePaymentProvider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType, RequireFields<MutationDeletePaymentProviderArgs, 'id'>>;
  deletePaymentProviderIban?: Resolver<Maybe<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType, RequireFields<MutationDeletePaymentProviderIbanArgs, 'id'>>;
  deletePaymentSystem?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType, RequireFields<MutationDeletePaymentSystemArgs, 'id'>>;
  deletePriceListFees?: Resolver<Maybe<ResolversTypes['PriceListFee']>, ParentType, ContextType, RequireFields<MutationDeletePriceListFeesArgs, 'id'>>;
  deleteProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'id'>>;
  deleteRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationDeleteRegionArgs, 'id'>>;
  deleteRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'id'>>;
  deleteTagApplicantDocumentRejectDetail?: Resolver<Maybe<ResolversTypes['ApplicantDocumentRejectDetail']>, ParentType, ContextType, RequireFields<MutationDeleteTagApplicantDocumentRejectDetailArgs, 'id'>>;
  detachApplicantCompanyLabel?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationDetachApplicantCompanyLabelArgs, 'applicant_company_id'>>;
  detachApplicantDocumentTag?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType, RequireFields<MutationDetachApplicantDocumentTagArgs, 'applicant_document_id' | 'applicant_document_tag_id'>>;
  detachApplicantIndividualLabel?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationDetachApplicantIndividualLabelArgs, 'applicant_individual_id'>>;
  generateIban?: Resolver<ResolversTypes['AccountGenerateIbanResponse'], ParentType, ContextType, RequireFields<MutationGenerateIbanArgs, 'id'>>;
  grantApplicantBankingAccess?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccess']>, ParentType, ContextType, RequireFields<MutationGrantApplicantBankingAccessArgs, 'id'>>;
  resetMemberPassword?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationResetMemberPasswordArgs, 'id'>>;
  sendConfirmChangeEmail?: Resolver<Maybe<ResolversTypes['StatusType']>, ParentType, ContextType, RequireFields<MutationSendConfirmChangeEmailArgs, 'email'>>;
  sendEmail?: Resolver<Maybe<ResolversTypes['StatusType']>, ParentType, ContextType, RequireFields<MutationSendEmailArgs, 'email' | 'host_name' | 'password' | 'port' | 'username'>>;
  sendEmailRegistation?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationSendEmailRegistationArgs, 'applicant_id'>>;
  sendEmailResetPassword?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationSendEmailResetPasswordArgs, 'applicant_id'>>;
  sendEmailVerification?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationSendEmailVerificationArgs, 'applicant_id'>>;
  sendEmailVerificationApplicantCompany?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationSendEmailVerificationApplicantCompanyArgs, 'applicant_company_id'>>;
  sendEmailWithTemplate?: Resolver<Maybe<ResolversTypes['StatusType']>, ParentType, ContextType, RequireFields<MutationSendEmailWithTemplateArgs, 'company_id' | 'email' | 'subject'>>;
  sendMemberEmailVerification?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationSendMemberEmailVerificationArgs, 'id'>>;
  sendPhoneVerification?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationSendPhoneVerificationArgs, 'applicant_id'>>;
  sendPhoneVerificationApplicantCompany?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationSendPhoneVerificationApplicantCompanyArgs, 'applicant_company_id'>>;
  setApplicantIndividualPassword?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationSetApplicantIndividualPasswordArgs, 'id' | 'password' | 'password_confirmation'>>;
  setApplicantSecurityPin?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationSetApplicantSecurityPinArgs, 'id'>>;
  setApplicantSettingsPassword?: Resolver<Maybe<ResolversTypes['TwoFactorAuthToken']>, ParentType, ContextType, RequireFields<MutationSetApplicantSettingsPasswordArgs, 'current_password' | 'password' | 'password_confirmation'>>;
  setApplicantSettingsPasswordWithOtp?: Resolver<Maybe<ResolversTypes['ApplicantSettingsProfile']>, ParentType, ContextType, RequireFields<MutationSetApplicantSettingsPasswordWithOtpArgs, 'auth_token' | 'code' | 'current_password' | 'password' | 'password_confirmation'>>;
  setMemberActive?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationSetMemberActiveArgs, 'id'>>;
  setMemberGroup?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType, RequireFields<MutationSetMemberGroupArgs, 'group_type_id' | 'role_id'>>;
  setMemberInactive?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationSetMemberInactiveArgs, 'id'>>;
  setMemberPassword?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationSetMemberPasswordArgs, 'id' | 'password' | 'password_confirmation'>>;
  setMemberSecurityPin?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationSetMemberSecurityPinArgs, 'id'>>;
  setMemberSuspended?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationSetMemberSuspendedArgs, 'id'>>;
  updateAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationUpdateAccountArgs, 'account_name' | 'account_state_id' | 'id' | 'is_primary'>>;
  updateAccountLimit?: Resolver<Maybe<ResolversTypes['AccountLimit']>, ParentType, ContextType, RequireFields<MutationUpdateAccountLimitArgs, 'id'>>;
  updateActiveSession?: Resolver<ResolversTypes['ActiveSessionMutatorResponse'], ParentType, ContextType, RequireFields<MutationUpdateActiveSessionArgs, 'id' | 'trusted'>>;
  updateApplicantAccount?: Resolver<ResolversTypes['ApplicantAccount'], ParentType, ContextType, RequireFields<MutationUpdateApplicantAccountArgs, 'id' | 'is_show'>>;
  updateApplicantBankingAccess?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccess']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantBankingAccessArgs, 'id'>>;
  updateApplicantCompany?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantCompanyArgs, 'id'>>;
  updateApplicantCompanyBusinessType?: Resolver<Maybe<ResolversTypes['ApplicantCompanyBusinessType']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantCompanyBusinessTypeArgs, 'id' | 'name'>>;
  updateApplicantCompanyLabel?: Resolver<Maybe<ResolversTypes['ApplicantCompanyLabel']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantCompanyLabelArgs, 'id' | 'name'>>;
  updateApplicantCompanyModule?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantCompanyModuleArgs, 'applicant_company_id'>>;
  updateApplicantCompanyVerificationStatus?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantCompanyVerificationStatusArgs, 'applicant_status_id' | 'id'>>;
  updateApplicantDevice?: Resolver<ResolversTypes['TwoFactorAuthToken'], ParentType, ContextType, RequireFields<MutationUpdateApplicantDeviceArgs, 'id' | 'trusted'>>;
  updateApplicantDeviceWithOtp?: Resolver<ResolversTypes['ApplicantDevice'], ParentType, ContextType, RequireFields<MutationUpdateApplicantDeviceWithOtpArgs, 'auth_token' | 'code' | 'id' | 'trusted'>>;
  updateApplicantDocument?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantDocumentArgs, 'id'>>;
  updateApplicantDocumentTag?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTag']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantDocumentTagArgs, 'category_id' | 'id' | 'name'>>;
  updateApplicantDocumentTagCategory?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTagCategory']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantDocumentTagCategoryArgs, 'id' | 'name'>>;
  updateApplicantIndividual?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantIndividualArgs, 'id'>>;
  updateApplicantIndividualCompany?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantIndividualCompanyArgs, 'applicant_company_id' | 'applicant_id'>>;
  updateApplicantIndividualCompanyPosition?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantIndividualCompanyPositionArgs, 'id' | 'name'>>;
  updateApplicantIndividualCompanyRelation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantIndividualCompanyRelationArgs, 'id' | 'name'>>;
  updateApplicantIndividualLabel?: Resolver<Maybe<ResolversTypes['ApplicantIndividualLabel']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantIndividualLabelArgs, 'id' | 'name'>>;
  updateApplicantIndividualModule?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantIndividualModuleArgs, 'applicant_individual_id'>>;
  updateApplicantIndividualVerificationStatus?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantIndividualVerificationStatusArgs, 'applicant_status_id' | 'id'>>;
  updateApplicantProfile?: Resolver<Maybe<ResolversTypes['ApplicantProfile']>, ParentType, ContextType, Partial<MutationUpdateApplicantProfileArgs>>;
  updateApplicantStateReason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType, RequireFields<MutationUpdateApplicantStateReasonArgs, 'id' | 'name'>>;
  updateBankCorrespondent?: Resolver<Maybe<ResolversTypes['BankCorrespondent']>, ParentType, ContextType, RequireFields<MutationUpdateBankCorrespondentArgs, 'address' | 'bank_account' | 'bank_code' | 'currency_id' | 'id' | 'is_active' | 'name' | 'payment_system_id' | 'region_id'>>;
  updateBusinessActivity?: Resolver<Maybe<ResolversTypes['BusinessActivity']>, ParentType, ContextType, RequireFields<MutationUpdateBusinessActivityArgs, 'id' | 'name'>>;
  updateCommissionPriceList?: Resolver<Maybe<ResolversTypes['CommissionPriceList']>, ParentType, ContextType, RequireFields<MutationUpdateCommissionPriceListArgs, 'id'>>;
  updateCommissionTemplate?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType, RequireFields<MutationUpdateCommissionTemplateArgs, 'id' | 'input'>>;
  updateCommissionTemplateLimit?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimit']>, ParentType, ContextType, RequireFields<MutationUpdateCommissionTemplateLimitArgs, 'id' | 'input'>>;
  updateCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationUpdateCompanyArgs, 'id'>>;
  updateCompanyModule?: Resolver<Maybe<ResolversTypes['CompanyModule']>, ParentType, ContextType, RequireFields<MutationUpdateCompanyModuleArgs, 'id' | 'is_active'>>;
  updateCompanyModuleIbanProvider?: Resolver<Maybe<ResolversTypes['CompanyModuleIbanProvider']>, ParentType, ContextType, RequireFields<MutationUpdateCompanyModuleIbanProviderArgs, 'id' | 'is_active'>>;
  updateCompanyModulePaymentProvider?: Resolver<Maybe<ResolversTypes['CompanyModulePaymentProvider']>, ParentType, ContextType, RequireFields<MutationUpdateCompanyModulePaymentProviderArgs, 'id' | 'is_active'>>;
  updateDepartment?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<MutationUpdateDepartmentArgs, 'id'>>;
  updateEmailNotification?: Resolver<Maybe<ResolversTypes['EmailNotification']>, ParentType, ContextType, RequireFields<MutationUpdateEmailNotificationArgs, 'group_role_id' | 'group_type_id' | 'id'>>;
  updateEmailSmtp?: Resolver<Maybe<ResolversTypes['EmailSmtp']>, ParentType, ContextType, RequireFields<MutationUpdateEmailSmtpArgs, 'id'>>;
  updateEmailTemplate?: Resolver<Maybe<ResolversTypes['EmailTemplateOnCompanyResponse']>, ParentType, ContextType, RequireFields<MutationUpdateEmailTemplateArgs, 'id'>>;
  updateEmailTemplateLayout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType, RequireFields<MutationUpdateEmailTemplateLayoutArgs, 'company_id' | 'id'>>;
  updateGroupSettings?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType, RequireFields<MutationUpdateGroupSettingsArgs, 'group_type_id' | 'id'>>;
  updateMember?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, RequireFields<MutationUpdateMemberArgs, 'id'>>;
  updateMemberAccessLimitation?: Resolver<Maybe<ResolversTypes['MemberAccessLimitation']>, ParentType, ContextType, RequireFields<MutationUpdateMemberAccessLimitationArgs, 'id' | 'input'>>;
  updateMemberProfile?: Resolver<Maybe<ResolversTypes['MemberProfile']>, ParentType, ContextType, Partial<MutationUpdateMemberProfileArgs>>;
  updatePayment?: Resolver<Maybe<ResolversTypes['Payments']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentArgs, 'id' | 'status_id'>>;
  updatePaymentBank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentBankArgs, 'id' | 'input'>>;
  updatePaymentProvider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentProviderArgs, 'id' | 'input'>>;
  updatePaymentProviderIban?: Resolver<Maybe<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentProviderIbanArgs, 'id' | 'input'>>;
  updatePaymentSystem?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentSystemArgs, 'id' | 'input'>>;
  updatePriceListFees?: Resolver<Maybe<ResolversTypes['PriceListFee']>, ParentType, ContextType, RequireFields<MutationUpdatePriceListFeesArgs, 'id'>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'id' | 'input'>>;
  updateProjectApiSetting?: Resolver<Array<ResolversTypes['ProjectApiSetting']>, ParentType, ContextType, RequireFields<MutationUpdateProjectApiSettingArgs, 'input' | 'project_id'>>;
  updateRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationUpdateRegionArgs, 'id' | 'input'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'id' | 'name'>>;
  updateTicket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<MutationUpdateTicketArgs, 'id'>>;
  updateTransferOutgoing?: Resolver<Maybe<ResolversTypes['TransferOutgoing']>, ParentType, ContextType, RequireFields<MutationUpdateTransferOutgoingArgs, 'id' | 'status_id'>>;
  updateTransferOutgoingFee?: Resolver<Maybe<ResolversTypes['TransferOutgoing']>, ParentType, ContextType, RequireFields<MutationUpdateTransferOutgoingFeeArgs, 'amount' | 'id'>>;
};

export type OperationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OperationType'] = ResolversParentTypes['OperationType']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatorInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatorInfo'] = ResolversParentTypes['PaginatorInfo']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasMorePages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentBankResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentBank'] = ResolversParentTypes['PaymentBank']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_correspondent?: Resolver<Maybe<ResolversTypes['BankCorrespondent']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payment_system_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentBankPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentBankPaginator'] = ResolversParentTypes['PaymentBankPaginator']> = {
  data?: Resolver<Array<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentProvider'] = ResolversParentTypes['PaymentProvider']> = {
  commission_price_list?: Resolver<Maybe<ResolversTypes['CommissionPriceList']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_systems?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentSystem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentProviderHistory'] = ResolversParentTypes['PaymentProviderHistory']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_provider_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  provider_response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  transfer_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transfer_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderIbanResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentProviderIban'] = ResolversParentTypes['PaymentProviderIban']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderIbanPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentProviderIbanPaginator'] = ResolversParentTypes['PaymentProviderIbanPaginator']> = {
  data?: Resolver<Array<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentProviderPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentProviderPaginator'] = ResolversParentTypes['PaymentProviderPaginator']> = {
  data?: Resolver<Array<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentStatus'] = ResolversParentTypes['PaymentStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSystemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentSystem'] = ResolversParentTypes['PaymentSystem']> = {
  bank_correspondent?: Resolver<Maybe<ResolversTypes['BankCorrespondent']>, ParentType, ContextType>;
  banks?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentBank']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currencies']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operations?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationType']>>>, ParentType, ContextType>;
  providers?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSystemPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentSystemPaginator'] = ResolversParentTypes['PaymentSystemPaginator']> = {
  data?: Resolver<Array<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentUrgencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentUrgency'] = ResolversParentTypes['PaymentUrgency']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payments'] = ResolversParentTypes['Payments']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  amount_real?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  beneficiary_additional_data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  beneficiary_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  beneficiary_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  beneficiary_zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  fee_type?: Resolver<Maybe<ResolversTypes['FeeType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  payment_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_urgency?: Resolver<Maybe<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  price_list_fees?: Resolver<Maybe<ResolversTypes['PriceListFee']>, ParentType, ContextType>;
  received_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  recipient_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_bank_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_bank_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  recipient_bank_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_bank_swift?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  respondent_fee?: Resolver<Maybe<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  status_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentsPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentsPaginator'] = ResolversParentTypes['PaymentsPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Payments']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionAuth'] = ResolversParentTypes['PermissionAuth']> = {
  PERMISSION_ACCOUNT_DETAILS?: Resolver<Array<ResolversTypes['PERMISSION_ACCOUNT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_DASHBOARD?: Resolver<Array<ResolversTypes['PERMISSION_DASHBOARD']>, ParentType, ContextType>;
  PERMISSION_MAKE_PAYMENTS?: Resolver<Array<ResolversTypes['PERMISSION_MAKE_PAYMENTS']>, ParentType, ContextType>;
  PERMISSION_MY_NET_WORTH?: Resolver<Array<ResolversTypes['PERMISSION_MY_NET_WORTH']>, ParentType, ContextType>;
  PERMISSION_MY_TEMPLATES?: Resolver<Array<ResolversTypes['PERMISSION_MY_TEMPLATES']>, ParentType, ContextType>;
  PERMISSION_PAYMENT_DETAILS?: Resolver<Array<ResolversTypes['PERMISSION_PAYMENT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_PAYMENT_LIST?: Resolver<Array<ResolversTypes['PERMISSION_PAYMENT_LIST']>, ParentType, ContextType>;
  PERMISSION_REQUISITES?: Resolver<Array<ResolversTypes['PERMISSION_REQUISITES']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_ACCOUNT?: Resolver<Array<ResolversTypes['PERMISSION_SETTINGS_ACCOUNT']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_CONTACT_DETAILS?: Resolver<Array<ResolversTypes['PERMISSION_SETTINGS_CONTACT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS?: Resolver<Array<ResolversTypes['PERMISSION_SETTINGS_LOG_IN_DETAILS']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_SECURITY_LEVEL?: Resolver<Array<ResolversTypes['PERMISSION_SETTINGS_SECURITY_LEVEL']>, ParentType, ContextType>;
  PERMISSION_STATEMENTS?: Resolver<Array<ResolversTypes['PERMISSION_STATEMENTS']>, ParentType, ContextType>;
  PERMISSION_TICKETS?: Resolver<Array<ResolversTypes['PERMISSION_TICKETS']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionCategory'] = ResolversParentTypes['PermissionCategory']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionList?: Resolver<Maybe<Array<Maybe<ResolversTypes['PermissionList']>>>, ParentType, ContextType, Partial<PermissionCategoryPermissionListArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionCategoryRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionCategoryRole'] = ResolversParentTypes['PermissionCategoryRole']> = {
  is_all_companies?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  permission_category_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionList'] = ResolversParentTypes['PermissionList']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permissions']>>>, ParentType, ContextType>;
  separator?: Resolver<Maybe<ResolversTypes['PermissionSeparatorType']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PermissionListType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionType'] = ResolversParentTypes['PermissionType']> = {
  PERMISSION_ACCOUNT_DETAILS?: Resolver<Maybe<ResolversTypes['PERMISSION_ACCOUNT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_DASHBOARD?: Resolver<Maybe<ResolversTypes['PERMISSION_DASHBOARD']>, ParentType, ContextType>;
  PERMISSION_MAKE_PAYMENTS?: Resolver<Maybe<ResolversTypes['PERMISSION_MAKE_PAYMENTS']>, ParentType, ContextType>;
  PERMISSION_MY_NET_WORTH?: Resolver<Maybe<ResolversTypes['PERMISSION_MY_NET_WORTH']>, ParentType, ContextType>;
  PERMISSION_MY_TEMPLATES?: Resolver<Maybe<ResolversTypes['PERMISSION_MY_TEMPLATES']>, ParentType, ContextType>;
  PERMISSION_PAYMENT_DETAILS?: Resolver<Maybe<ResolversTypes['PERMISSION_PAYMENT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_PAYMENT_LIST?: Resolver<Maybe<ResolversTypes['PERMISSION_PAYMENT_LIST']>, ParentType, ContextType>;
  PERMISSION_REQUISITES?: Resolver<Maybe<ResolversTypes['PERMISSION_REQUISITES']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_ACCOUNT?: Resolver<Maybe<ResolversTypes['PERMISSION_SETTINGS_ACCOUNT']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_CONTACT_DETAILS?: Resolver<Maybe<ResolversTypes['PERMISSION_SETTINGS_CONTACT_DETAILS']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS?: Resolver<Maybe<ResolversTypes['PERMISSION_SETTINGS_LOG_IN_DETAILS']>, ParentType, ContextType>;
  PERMISSION_SETTINGS_SECURITY_LEVEL?: Resolver<Maybe<ResolversTypes['PERMISSION_SETTINGS_SECURITY_LEVEL']>, ParentType, ContextType>;
  PERMISSION_STATEMENTS?: Resolver<Maybe<ResolversTypes['PERMISSION_STATEMENTS']>, ParentType, ContextType>;
  PERMISSION_TICKETS?: Resolver<Maybe<ResolversTypes['PERMISSION_TICKETS']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permissions'] = ResolversParentTypes['Permissions']> = {
  all?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guard_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceListFeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceListFee'] = ResolversParentTypes['PriceListFee']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee_ranges?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fee_type?: Resolver<Maybe<ResolversTypes['FeeType']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<Array<Maybe<ResolversTypes['PriceListFeeCurrency']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['FeePeriod']>, ParentType, ContextType>;
  price_list_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  scheduled?: Resolver<Maybe<ResolversTypes['PriceListFeeScheduled']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceListFeeCurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceListFeeCurrency'] = ResolversParentTypes['PriceListFeeCurrency']> = {
  currency_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fee?: Resolver<Maybe<Array<Maybe<ResolversTypes['FeeItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price_list_fee_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceListFeeScheduledResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceListFeeScheduled'] = ResolversParentTypes['PriceListFeeScheduled']> = {
  end_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  end_date_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  recurrent_interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starting_date?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  starting_date_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  additional_fields_basic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  additional_fields_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  client_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forgot_password_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  login_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project_api_settings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProjectApiSetting']>>>, ParentType, ContextType>;
  project_settings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProjectSettings']>>>, ParentType, ContextType>;
  sms_sender_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  support_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTimeUtc'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectApiSettingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectApiSetting'] = ResolversParentTypes['ProjectApiSetting']> = {
  api_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['ProviderType']>, ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectApiSettingPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectApiSettingPassword'] = ResolversParentTypes['ProjectApiSettingPassword']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPaginator'] = ResolversParentTypes['ProjectPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectSettings'] = ResolversParentTypes['ProjectSettings']> = {
  applicant_type?: Resolver<ResolversTypes['ApplicantType'], ParentType, ContextType>;
  commission_template?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType>;
  group_role?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  iban_provider?: Resolver<Maybe<ResolversTypes['PaymentProviderIban']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderType'] = ResolversParentTypes['ProviderType']> = {
  __resolveType: TypeResolveFn<'PaymentProvider' | 'PaymentProviderIban', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  accountLimit?: Resolver<Maybe<ResolversTypes['AccountLimit']>, ParentType, ContextType, Partial<QueryAccountLimitArgs>>;
  accountLimits?: Resolver<Maybe<ResolversTypes['AccountLimitPaginator']>, ParentType, ContextType, RequireFields<QueryAccountLimitsArgs, 'first'>>;
  accountList?: Resolver<Maybe<ResolversTypes['AccountPaginator']>, ParentType, ContextType, RequireFields<QueryAccountListArgs, 'first'>>;
  accountReachedLimit?: Resolver<Maybe<ResolversTypes['AccountReachedLimit']>, ParentType, ContextType, Partial<QueryAccountReachedLimitArgs>>;
  accountReachedLimits?: Resolver<Maybe<ResolversTypes['AccountReachedLimitPaginator']>, ParentType, ContextType, RequireFields<QueryAccountReachedLimitsArgs, 'first'>>;
  accountStatement?: Resolver<Maybe<ResolversTypes['AccountStatement']>, ParentType, ContextType, RequireFields<QueryAccountStatementArgs, 'account_id'>>;
  accountStates?: Resolver<Array<ResolversTypes['AccountState']>, ParentType, ContextType, Partial<QueryAccountStatesArgs>>;
  activeSessions?: Resolver<Maybe<ResolversTypes['ActiveSessions']>, ParentType, ContextType, RequireFields<QueryActiveSessionsArgs, 'count' | 'page'>>;
  activityLogs?: Resolver<Maybe<ResolversTypes['ActivityLogs']>, ParentType, ContextType, RequireFields<QueryActivityLogsArgs, 'count' | 'page'>>;
  applicantAccounts?: Resolver<Maybe<Array<ResolversTypes['ApplicantAccount']>>, ParentType, ContextType, Partial<QueryApplicantAccountsArgs>>;
  applicantBankingAccess?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccess']>, ParentType, ContextType, Partial<QueryApplicantBankingAccessArgs>>;
  applicantBankingAccesses?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccesses']>, ParentType, ContextType, RequireFields<QueryApplicantBankingAccessesArgs, 'applicant_company_id' | 'first' | 'page'>>;
  applicantCompanies?: Resolver<Maybe<ResolversTypes['ApplicantCompanyPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantCompaniesArgs, 'first'>>;
  applicantCompany?: Resolver<Maybe<ResolversTypes['ApplicantCompany']>, ParentType, ContextType, Partial<QueryApplicantCompanyArgs>>;
  applicantCompanyBusinessType?: Resolver<Maybe<ResolversTypes['ApplicantCompanyBusinessTypePaginator']>, ParentType, ContextType, RequireFields<QueryApplicantCompanyBusinessTypeArgs, 'first'>>;
  applicantCompanyLabel?: Resolver<Maybe<ResolversTypes['ApplicantCompanyLabel']>, ParentType, ContextType, Partial<QueryApplicantCompanyLabelArgs>>;
  applicantCompanyLabels?: Resolver<Array<ResolversTypes['ApplicantCompanyLabel']>, ParentType, ContextType, Partial<QueryApplicantCompanyLabelsArgs>>;
  applicantCompanyLabelsAvailable?: Resolver<Maybe<ResolversTypes['ApplicantCompanyLabelPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantCompanyLabelsAvailableArgs, 'first'>>;
  applicantCompanyModules?: Resolver<Array<ResolversTypes['ApplicantCompanyModules']>, ParentType, ContextType, RequireFields<QueryApplicantCompanyModulesArgs, 'applicant_company_id'>>;
  applicantCompanyNote?: Resolver<Maybe<ResolversTypes['ApplicantCompanyNotes']>, ParentType, ContextType, Partial<QueryApplicantCompanyNoteArgs>>;
  applicantCompanyNotes?: Resolver<Maybe<ResolversTypes['ApplicantCompanyNotesPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantCompanyNotesArgs, 'first'>>;
  applicantCompanyRiskLevelHistory?: Resolver<Maybe<ResolversTypes['ApplicantCompanyRiskLevelHistoryPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantCompanyRiskLevelHistoryArgs, 'applicant_company_id' | 'first'>>;
  applicantDevices?: Resolver<Maybe<Array<ResolversTypes['ApplicantDevice']>>, ParentType, ContextType>;
  applicantDocument?: Resolver<Maybe<ResolversTypes['ApplicantDocument']>, ParentType, ContextType, RequireFields<QueryApplicantDocumentArgs, 'id'>>;
  applicantDocumentInternalNotes?: Resolver<Maybe<ResolversTypes['ApplicantDocumentInternalNotePaginator']>, ParentType, ContextType, RequireFields<QueryApplicantDocumentInternalNotesArgs, 'applicant_document_id' | 'first'>>;
  applicantDocumentTagCategories?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTagCategoryPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantDocumentTagCategoriesArgs, 'first'>>;
  applicantDocumentTags?: Resolver<Maybe<ResolversTypes['ApplicantDocumentTagPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantDocumentTagsArgs, 'first'>>;
  applicantDocuments?: Resolver<Maybe<ResolversTypes['ApplicantDocumentPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantDocumentsArgs, 'applicant_type' | 'first'>>;
  applicantIndividual?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, Partial<QueryApplicantIndividualArgs>>;
  applicantIndividualCompanyPosition?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPosition']>, ParentType, ContextType, Partial<QueryApplicantIndividualCompanyPositionArgs>>;
  applicantIndividualCompanyPositions?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyPositionPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantIndividualCompanyPositionsArgs, 'first'>>;
  applicantIndividualCompanyRelation?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelation']>, ParentType, ContextType, Partial<QueryApplicantIndividualCompanyRelationArgs>>;
  applicantIndividualCompanyRelations?: Resolver<Maybe<ResolversTypes['ApplicantIndividualCompanyRelationPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantIndividualCompanyRelationsArgs, 'first'>>;
  applicantIndividualLabel?: Resolver<Maybe<ResolversTypes['ApplicantIndividualLabel']>, ParentType, ContextType, Partial<QueryApplicantIndividualLabelArgs>>;
  applicantIndividualLabels?: Resolver<Array<ResolversTypes['ApplicantIndividualLabel']>, ParentType, ContextType, Partial<QueryApplicantIndividualLabelsArgs>>;
  applicantIndividualLabelsAvailable?: Resolver<Maybe<ResolversTypes['ApplicantIndividualLabelPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantIndividualLabelsAvailableArgs, 'first'>>;
  applicantIndividualModules?: Resolver<Array<ResolversTypes['ApplicantIndividualModules']>, ParentType, ContextType, RequireFields<QueryApplicantIndividualModulesArgs, 'applicant_individual_id'>>;
  applicantIndividualNote?: Resolver<Maybe<ResolversTypes['ApplicantIndividualNotes']>, ParentType, ContextType, Partial<QueryApplicantIndividualNoteArgs>>;
  applicantIndividualNotes?: Resolver<Maybe<ResolversTypes['ApplicantIndividualNotesPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantIndividualNotesArgs, 'first'>>;
  applicantIndividuals?: Resolver<Maybe<ResolversTypes['ApplicantIndividualPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantIndividualsArgs, 'first'>>;
  applicantKycLevel?: Resolver<Maybe<ResolversTypes['ApplicantKycLevel']>, ParentType, ContextType, Partial<QueryApplicantKycLevelArgs>>;
  applicantKycLevels?: Resolver<Maybe<ResolversTypes['ApplicantKycLevelPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantKycLevelsArgs, 'first'>>;
  applicantLinkedCompanies?: Resolver<Array<ResolversTypes['ApplicantLinkedCompany']>, ParentType, ContextType, RequireFields<QueryApplicantLinkedCompaniesArgs, 'applicant_individual_id'>>;
  applicantProfile?: Resolver<Maybe<ResolversTypes['ApplicantProfile']>, ParentType, ContextType>;
  applicantRequisite?: Resolver<Maybe<ResolversTypes['ApplicantDetailsRequisites']>, ParentType, ContextType, Partial<QueryApplicantRequisiteArgs>>;
  applicantRequisites?: Resolver<Array<ResolversTypes['ApplicantRequisites']>, ParentType, ContextType>;
  applicantRiskLevel?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevel']>, ParentType, ContextType, Partial<QueryApplicantRiskLevelArgs>>;
  applicantRiskLevelHistory?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevelHistoryPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantRiskLevelHistoryArgs, 'applicant_id' | 'first'>>;
  applicantRiskLevels?: Resolver<Maybe<ResolversTypes['ApplicantRiskLevelPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantRiskLevelsArgs, 'first'>>;
  applicantState?: Resolver<Maybe<ResolversTypes['ApplicantState']>, ParentType, ContextType, Partial<QueryApplicantStateArgs>>;
  applicantStateReason?: Resolver<Maybe<ResolversTypes['ApplicantStateReason']>, ParentType, ContextType, Partial<QueryApplicantStateReasonArgs>>;
  applicantStateReasons?: Resolver<Maybe<ResolversTypes['ApplicantStateReasonPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantStateReasonsArgs, 'first'>>;
  applicantStates?: Resolver<Maybe<ResolversTypes['ApplicantStatePaginator']>, ParentType, ContextType, RequireFields<QueryApplicantStatesArgs, 'first'>>;
  applicantStatus?: Resolver<Maybe<ResolversTypes['ApplicantStatus']>, ParentType, ContextType, Partial<QueryApplicantStatusArgs>>;
  applicantStatuses?: Resolver<Maybe<ResolversTypes['ApplicantStatusPaginator']>, ParentType, ContextType, RequireFields<QueryApplicantStatusesArgs, 'first'>>;
  applicantVerificationStatuses?: Resolver<Array<ResolversTypes['ApplicantVerificationStatus']>, ParentType, ContextType>;
  applicant_module?: Resolver<Maybe<ResolversTypes['ApplicantModules']>, ParentType, ContextType, Partial<QueryApplicant_ModuleArgs>>;
  applicant_modules?: Resolver<Maybe<ResolversTypes['ApplicantModulesPaginator']>, ParentType, ContextType, RequireFields<QueryApplicant_ModulesArgs, 'first'>>;
  authenticationLogs?: Resolver<Maybe<ResolversTypes['AuthenticationLogs']>, ParentType, ContextType, RequireFields<QueryAuthenticationLogsArgs, 'first' | 'page'>>;
  authenticationMemberLogs?: Resolver<Maybe<ResolversTypes['AuthenticationLogs']>, ParentType, ContextType, RequireFields<QueryAuthenticationMemberLogsArgs, 'first' | 'member_id' | 'page'>>;
  bankCorrespondent?: Resolver<ResolversTypes['BankCorrespondent'], ParentType, ContextType, RequireFields<QueryBankCorrespondentArgs, 'id'>>;
  bankCorrespondents?: Resolver<Maybe<ResolversTypes['BankCorrespondentPaginator']>, ParentType, ContextType, RequireFields<QueryBankCorrespondentsArgs, 'first'>>;
  businessActivities?: Resolver<Maybe<ResolversTypes['BusinessActivityPaginator']>, ParentType, ContextType, RequireFields<QueryBusinessActivitiesArgs, 'first'>>;
  businessActivity?: Resolver<Maybe<ResolversTypes['BusinessActivity']>, ParentType, ContextType, Partial<QueryBusinessActivityArgs>>;
  clientList?: Resolver<Array<ResolversTypes['AccountClient']>, ParentType, ContextType, Partial<QueryClientListArgs>>;
  commissionPriceList?: Resolver<Maybe<ResolversTypes['CommissionPriceList']>, ParentType, ContextType, Partial<QueryCommissionPriceListArgs>>;
  commissionPriceLists?: Resolver<Maybe<ResolversTypes['CommissionPriceListPaginator']>, ParentType, ContextType, RequireFields<QueryCommissionPriceListsArgs, 'first'>>;
  commissionTemplate?: Resolver<Maybe<ResolversTypes['CommissionTemplate']>, ParentType, ContextType, Partial<QueryCommissionTemplateArgs>>;
  commissionTemplateLimit?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimit']>, ParentType, ContextType, Partial<QueryCommissionTemplateLimitArgs>>;
  commissionTemplateLimitActionType?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitActionType']>, ParentType, ContextType, Partial<QueryCommissionTemplateLimitActionTypeArgs>>;
  commissionTemplateLimitActionTypes?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitActionTypePaginator']>, ParentType, ContextType, RequireFields<QueryCommissionTemplateLimitActionTypesArgs, 'first'>>;
  commissionTemplateLimitPeriod?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitPeriod']>, ParentType, ContextType, Partial<QueryCommissionTemplateLimitPeriodArgs>>;
  commissionTemplateLimitPeriods?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitPeriodPaginator']>, ParentType, ContextType, RequireFields<QueryCommissionTemplateLimitPeriodsArgs, 'first'>>;
  commissionTemplateLimitTransferDirection?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitTransferDirection']>, ParentType, ContextType, Partial<QueryCommissionTemplateLimitTransferDirectionArgs>>;
  commissionTemplateLimitTransferDirections?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitTransferDirectionPaginator']>, ParentType, ContextType, RequireFields<QueryCommissionTemplateLimitTransferDirectionsArgs, 'first'>>;
  commissionTemplateLimitType?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitType']>, ParentType, ContextType, Partial<QueryCommissionTemplateLimitTypeArgs>>;
  commissionTemplateLimitTypes?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitTypePaginator']>, ParentType, ContextType, RequireFields<QueryCommissionTemplateLimitTypesArgs, 'first'>>;
  commissionTemplateLimits?: Resolver<Maybe<ResolversTypes['CommissionTemplateLimitPaginator']>, ParentType, ContextType, RequireFields<QueryCommissionTemplateLimitsArgs, 'first'>>;
  commissionTemplates?: Resolver<Maybe<ResolversTypes['CommissionTemplatePaginator']>, ParentType, ContextType, RequireFields<QueryCommissionTemplatesArgs, 'first'>>;
  companies?: Resolver<Maybe<ResolversTypes['CompanyPaginator']>, ParentType, ContextType, RequireFields<QueryCompaniesArgs, 'first'>>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, Partial<QueryCompanyArgs>>;
  companyModuleIbanProviderPassword?: Resolver<Maybe<ResolversTypes['CompanyModuleIbanProviderPassword']>, ParentType, ContextType, RequireFields<QueryCompanyModuleIbanProviderPasswordArgs, 'id'>>;
  companyModuleProviderPassword?: Resolver<Maybe<ResolversTypes['CompanyModulePaymentProviderPassword']>, ParentType, ContextType, RequireFields<QueryCompanyModuleProviderPasswordArgs, 'id'>>;
  companyModules?: Resolver<Array<ResolversTypes['CompanyModule']>, ParentType, ContextType, RequireFields<QueryCompanyModulesArgs, 'company_id'>>;
  countries?: Resolver<Maybe<ResolversTypes['CountryPaginator']>, ParentType, ContextType, RequireFields<QueryCountriesArgs, 'first'>>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, Partial<QueryCountryArgs>>;
  currencies?: Resolver<Maybe<ResolversTypes['CurrenciesPaginator']>, ParentType, ContextType, RequireFields<QueryCurrenciesArgs, 'first'>>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType, Partial<QueryCurrencyArgs>>;
  dashboardAccountsStatistic?: Resolver<Maybe<Array<Maybe<ResolversTypes['dashboardAccountsStatistic']>>>, ParentType, ContextType, Partial<QueryDashboardAccountsStatisticArgs>>;
  dashboardTicketsStatistic?: Resolver<Maybe<Array<Maybe<ResolversTypes['dashboardTicketsStatistic']>>>, ParentType, ContextType, Partial<QueryDashboardTicketsStatisticArgs>>;
  dashboardTransfersStatistic?: Resolver<Maybe<Array<Maybe<ResolversTypes['dashboardTransfersStatistic']>>>, ParentType, ContextType, Partial<QueryDashboardTransfersStatisticArgs>>;
  dashboardUsersStatistic?: Resolver<Maybe<Array<Maybe<ResolversTypes['dashboardUsersStatistic']>>>, ParentType, ContextType, Partial<QueryDashboardUsersStatisticArgs>>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, Partial<QueryDepartmentArgs>>;
  departmentPosition?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType, Partial<QueryDepartmentPositionArgs>>;
  departmentPositions?: Resolver<Maybe<ResolversTypes['DepartmentPositionPaginator']>, ParentType, ContextType, RequireFields<QueryDepartmentPositionsArgs, 'first'>>;
  departments?: Resolver<Maybe<ResolversTypes['DepartmentPaginator']>, ParentType, ContextType, RequireFields<QueryDepartmentsArgs, 'first'>>;
  documentStates?: Resolver<Array<ResolversTypes['DocumentState']>, ParentType, ContextType>;
  documentTypes?: Resolver<Array<ResolversTypes['DocumentType']>, ParentType, ContextType>;
  downloadAccountStatementCsv?: Resolver<Maybe<ResolversTypes['RawFile']>, ParentType, ContextType, RequireFields<QueryDownloadAccountStatementCsvArgs, 'account_id'>>;
  downloadAccountStatementPdf?: Resolver<Maybe<ResolversTypes['RawFile']>, ParentType, ContextType, RequireFields<QueryDownloadAccountStatementPdfArgs, 'account_id'>>;
  downloadAccountStatementXls?: Resolver<Maybe<ResolversTypes['RawFile']>, ParentType, ContextType, RequireFields<QueryDownloadAccountStatementXlsArgs, 'account_id'>>;
  downloadApplicantRequisiteDetails?: Resolver<Maybe<ResolversTypes['RawFile']>, ParentType, ContextType, Partial<QueryDownloadApplicantRequisiteDetailsArgs>>;
  downloadRequisiteDetails?: Resolver<Maybe<ResolversTypes['RawFile']>, ParentType, ContextType, Partial<QueryDownloadRequisiteDetailsArgs>>;
  emailNotification?: Resolver<Maybe<ResolversTypes['EmailNotification']>, ParentType, ContextType, RequireFields<QueryEmailNotificationArgs, 'company_id' | 'group_role_id' | 'group_type_id'>>;
  emailNotifications?: Resolver<Maybe<ResolversTypes['EmailNotificationPaginator']>, ParentType, ContextType, RequireFields<QueryEmailNotificationsArgs, 'first'>>;
  emailSmtp?: Resolver<Maybe<ResolversTypes['EmailSmtp']>, ParentType, ContextType, RequireFields<QueryEmailSmtpArgs, 'id'>>;
  emailSmtps?: Resolver<Array<ResolversTypes['EmailSmtp']>, ParentType, ContextType, RequireFields<QueryEmailSmtpsArgs, 'company_id'>>;
  emailTemplate?: Resolver<Maybe<ResolversTypes['EmailTemplate']>, ParentType, ContextType, Partial<QueryEmailTemplateArgs>>;
  emailTemplateLayout?: Resolver<Maybe<ResolversTypes['EmailTemplateLayout']>, ParentType, ContextType, Partial<QueryEmailTemplateLayoutArgs>>;
  emailTemplates?: Resolver<Array<ResolversTypes['EmailTemplate']>, ParentType, ContextType, Partial<QueryEmailTemplatesArgs>>;
  employees?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType>;
  feeDetails?: Resolver<ResolversTypes['Fee'], ParentType, ContextType, RequireFields<QueryFeeDetailsArgs, 'id'>>;
  feeModes?: Resolver<Array<ResolversTypes['FeeMode']>, ParentType, ContextType>;
  feePeriods?: Resolver<Array<ResolversTypes['FeePeriod']>, ParentType, ContextType>;
  feeTypes?: Resolver<Array<ResolversTypes['FeeType']>, ParentType, ContextType, Partial<QueryFeeTypesArgs>>;
  file?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType, Partial<QueryFileArgs>>;
  files?: Resolver<Maybe<ResolversTypes['FilesPaginator']>, ParentType, ContextType, RequireFields<QueryFilesArgs, 'first'>>;
  getMatchedApplicantIndividuals?: Resolver<Array<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType, RequireFields<QueryGetMatchedApplicantIndividualsArgs, 'applicant_company_id'>>;
  getMatchedUsers?: Resolver<Array<ResolversTypes['ApplicantIndividualCompany']>, ParentType, ContextType, RequireFields<QueryGetMatchedUsersArgs, 'applicant_company_id'>>;
  getPaymentUrgencys?: Resolver<Array<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  getTicketComments?: Resolver<Array<ResolversTypes['TicketComments']>, ParentType, ContextType>;
  grantedBankingAccess?: Resolver<Maybe<ResolversTypes['ApplicantBankingAccesses']>, ParentType, ContextType, RequireFields<QueryGrantedBankingAccessArgs, 'applicant_company_id' | 'applicant_individual_id' | 'first' | 'page'>>;
  groupList?: Resolver<Maybe<ResolversTypes['GroupRoleViewPaginator']>, ParentType, ContextType, RequireFields<QueryGroupListArgs, 'first'>>;
  groupTypeList?: Resolver<Maybe<ResolversTypes['GroupTypePaginator']>, ParentType, ContextType, RequireFields<QueryGroupTypeListArgs, 'first'>>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType, Partial<QueryGroup_TypeArgs>>;
  group_types?: Resolver<Array<ResolversTypes['GroupType']>, ParentType, ContextType, Partial<QueryGroup_TypesArgs>>;
  groups?: Resolver<Maybe<ResolversTypes['GroupRolePaginator']>, ParentType, ContextType, RequireFields<QueryGroupsArgs, 'first'>>;
  kycTimeline?: Resolver<Maybe<ResolversTypes['KycTimeline']>, ParentType, ContextType, RequireFields<QueryKycTimelineArgs, 'id'>>;
  kycTimelines?: Resolver<Maybe<ResolversTypes['KycTimelines']>, ParentType, ContextType, RequireFields<QueryKycTimelinesArgs, 'applicant_id' | 'applicant_type' | 'company_id' | 'first' | 'page'>>;
  language?: Resolver<Maybe<ResolversTypes['Languages']>, ParentType, ContextType, Partial<QueryLanguageArgs>>;
  languages?: Resolver<Maybe<ResolversTypes['LanguagesPaginator']>, ParentType, ContextType, RequireFields<QueryLanguagesArgs, 'first'>>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType, Partial<QueryMemberArgs>>;
  memberAccessLimitation?: Resolver<Maybe<ResolversTypes['MemberAccessLimitation']>, ParentType, ContextType, Partial<QueryMemberAccessLimitationArgs>>;
  memberAccessLimitations?: Resolver<Maybe<ResolversTypes['MemberAccessLimitationPaginator']>, ParentType, ContextType, RequireFields<QueryMemberAccessLimitationsArgs, 'first' | 'member_id'>>;
  memberProfile?: Resolver<Maybe<ResolversTypes['MemberProfile']>, ParentType, ContextType>;
  memberStatuses?: Resolver<Array<ResolversTypes['MemberStatus']>, ParentType, ContextType>;
  members?: Resolver<Maybe<ResolversTypes['MembersPaginator']>, ParentType, ContextType, RequireFields<QueryMembersArgs, 'first'>>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType, Partial<QueryModuleArgs>>;
  modules?: Resolver<Array<ResolversTypes['Module']>, ParentType, ContextType, Partial<QueryModulesArgs>>;
  modulesWithKyc?: Resolver<Maybe<Array<ResolversTypes['Module']>>, ParentType, ContextType, Partial<QueryModulesWithKycArgs>>;
  operationTypes?: Resolver<Array<ResolversTypes['OperationType']>, ParentType, ContextType, Partial<QueryOperationTypesArgs>>;
  owners?: Resolver<Array<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType, Partial<QueryOwnersArgs>>;
  payment?: Resolver<Maybe<ResolversTypes['Payments']>, ParentType, ContextType, Partial<QueryPaymentArgs>>;
  paymentBank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType, Partial<QueryPaymentBankArgs>>;
  paymentBanks?: Resolver<Maybe<ResolversTypes['PaymentBankPaginator']>, ParentType, ContextType, RequireFields<QueryPaymentBanksArgs, 'first'>>;
  paymentProvider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType, Partial<QueryPaymentProviderArgs>>;
  paymentProviderIban?: Resolver<ResolversTypes['PaymentProviderIban'], ParentType, ContextType, RequireFields<QueryPaymentProviderIbanArgs, 'id'>>;
  paymentProviderIbans?: Resolver<Maybe<ResolversTypes['PaymentProviderIbanPaginator']>, ParentType, ContextType, RequireFields<QueryPaymentProviderIbansArgs, 'first'>>;
  paymentProviders?: Resolver<Maybe<ResolversTypes['PaymentProviderPaginator']>, ParentType, ContextType, RequireFields<QueryPaymentProvidersArgs, 'first'>>;
  paymentStatuses?: Resolver<Array<ResolversTypes['PaymentStatus']>, ParentType, ContextType, Partial<QueryPaymentStatusesArgs>>;
  paymentSystem?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType, Partial<QueryPaymentSystemArgs>>;
  paymentSystems?: Resolver<Maybe<ResolversTypes['PaymentSystemPaginator']>, ParentType, ContextType, RequireFields<QueryPaymentSystemsArgs, 'first'>>;
  paymentSystemsList?: Resolver<Array<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payments?: Resolver<Maybe<ResolversTypes['PaymentsPaginator']>, ParentType, ContextType, RequireFields<QueryPaymentsArgs, 'first'>>;
  permission?: Resolver<Maybe<ResolversTypes['Permissions']>, ParentType, ContextType, Partial<QueryPermissionArgs>>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PermissionCategory']>>>, ParentType, ContextType, Partial<QueryPermissionsArgs>>;
  permissions_tree?: Resolver<Maybe<ResolversTypes['Permissions']>, ParentType, ContextType>;
  priceListFees?: Resolver<Array<ResolversTypes['PriceListFee']>, ParentType, ContextType, Partial<QueryPriceListFeesArgs>>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, Partial<QueryProjectArgs>>;
  projectApiSettingPassword?: Resolver<Maybe<ResolversTypes['ProjectApiSettingPassword']>, ParentType, ContextType, RequireFields<QueryProjectApiSettingPasswordArgs, 'id'>>;
  projectApiSettings?: Resolver<Array<ResolversTypes['ProjectApiSetting']>, ParentType, ContextType, RequireFields<QueryProjectApiSettingsArgs, 'project_id'>>;
  projects?: Resolver<Maybe<ResolversTypes['ProjectPaginator']>, ParentType, ContextType, RequireFields<QueryProjectsArgs, 'first'>>;
  region?: Resolver<ResolversTypes['Region'], ParentType, ContextType, RequireFields<QueryRegionArgs, 'id'>>;
  regions?: Resolver<Maybe<ResolversTypes['RegionPaginator']>, ParentType, ContextType, RequireFields<QueryRegionsArgs, 'first'>>;
  requisite?: Resolver<Maybe<ResolversTypes['Requisite']>, ParentType, ContextType, Partial<QueryRequisiteArgs>>;
  requisites?: Resolver<Array<ResolversTypes['Requisite']>, ParentType, ContextType, Partial<QueryRequisitesArgs>>;
  respondentFees?: Resolver<Array<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, Partial<QueryRoleArgs>>;
  roles?: Resolver<Maybe<ResolversTypes['RolePaginator']>, ParentType, ContextType, RequireFields<QueryRolesArgs, 'first'>>;
  sendApplicantRequisiteDetails?: Resolver<Maybe<ResolversTypes['StatusType']>, ParentType, ContextType, RequireFields<QuerySendApplicantRequisiteDetailsArgs, 'account_id' | 'email'>>;
  sendRequisiteDetails?: Resolver<Maybe<ResolversTypes['StatusType']>, ParentType, ContextType, RequireFields<QuerySendRequisiteDetailsArgs, 'account_id' | 'email'>>;
  senders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sender']>>>, ParentType, ContextType>;
  stateReasons?: Resolver<Array<ResolversTypes['StateReason']>, ParentType, ContextType>;
  states?: Resolver<Array<ResolversTypes['State']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, Partial<QueryTicketArgs>>;
  ticketComment?: Resolver<Maybe<ResolversTypes['TicketComments']>, ParentType, ContextType, Partial<QueryTicketCommentArgs>>;
  tickets?: Resolver<Maybe<ResolversTypes['TicketPaginator']>, ParentType, ContextType, RequireFields<QueryTicketsArgs, 'first'>>;
  transferIncoming?: Resolver<ResolversTypes['TransferIncoming'], ParentType, ContextType, RequireFields<QueryTransferIncomingArgs, 'id'>>;
  transferIncomingHistory?: Resolver<Maybe<ResolversTypes['TransferIncomingHistoryPaginator']>, ParentType, ContextType, RequireFields<QueryTransferIncomingHistoryArgs, 'first' | 'transfer_id'>>;
  transferIncomings?: Resolver<Maybe<ResolversTypes['TransferIncomingPaginator']>, ParentType, ContextType, RequireFields<QueryTransferIncomingsArgs, 'first'>>;
  transferIncomingsStatistic?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransferIncomingStatistic']>>>, ParentType, ContextType, Partial<QueryTransferIncomingsStatisticArgs>>;
  transferOutgoing?: Resolver<ResolversTypes['TransferOutgoing'], ParentType, ContextType, RequireFields<QueryTransferOutgoingArgs, 'id'>>;
  transferOutgoingHistory?: Resolver<Maybe<ResolversTypes['TransferOutgoingHistoryPaginator']>, ParentType, ContextType, RequireFields<QueryTransferOutgoingHistoryArgs, 'first' | 'transfer_id'>>;
  transferOutgoings?: Resolver<Maybe<ResolversTypes['TransferOutgoingPaginator']>, ParentType, ContextType, RequireFields<QueryTransferOutgoingsArgs, 'first'>>;
  transferOutgoingsStatistic?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransferOutgoingStatistic']>>>, ParentType, ContextType, Partial<QueryTransferOutgoingsStatisticArgs>>;
  twoFactorAuth?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType, Partial<QueryTwoFactorAuthArgs>>;
  twoFactorsAuth?: Resolver<Maybe<ResolversTypes['TwoFactorAuthSettingsPaginator']>, ParentType, ContextType, RequireFields<QueryTwoFactorsAuthArgs, 'first'>>;
  typeOfIndustries?: Resolver<Array<ResolversTypes['TypeOfIndustry']>, ParentType, ContextType>;
  userAuthData?: Resolver<ResolversTypes['userAuthResponse'], ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['UsersPaginator']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'first'>>;
};

export type RawFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['RawFile'] = ResolversParentTypes['RawFile']> = {
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegionPaginator'] = ResolversParentTypes['RegionPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Region']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequisiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Requisite'] = ResolversParentTypes['Requisite']> = {
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RespondentFeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RespondentFee'] = ResolversParentTypes['RespondentFee']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group_type?: Resolver<Maybe<ResolversTypes['GroupType']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupRole']>>>, ParentType, ContextType>;
  groups_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_all_companies?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permission_category_all_member?: Resolver<Maybe<Array<Maybe<ResolversTypes['PermissionCategory']>>>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permissions']>>>, ParentType, ContextType>;
  permissions_tree?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolePaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['RolePaginator'] = ResolversParentTypes['RolePaginator']> = {
  data?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sender'] = ResolversParentTypes['Sender']> = {
  sender_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimplePaginatorInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimplePaginatorInfo'] = ResolversParentTypes['SimplePaginatorInfo']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasMorePages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StateReasonResolvers<ContextType = any, ParentType extends ResolversParentTypes['StateReason'] = ResolversParentTypes['StateReason']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface StringIntegerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['StringInteger'], any> {
  name: 'StringInteger';
}

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = {
  client?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['TicketComments']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  file_object?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Members']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['DepartmentPosition']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TicketStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketCommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketComments'] = ResolversParentTypes['TicketComments']> = {
  client?: Resolver<Maybe<ResolversTypes['ApplicantIndividual']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  file_object?: Resolver<Maybe<ResolversTypes['Files']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketPaginator'] = ResolversParentTypes['TicketPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Ticket']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketStatus'] = ResolversParentTypes['TicketStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferIncoming'] = ResolversParentTypes['TransferIncoming']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  amount_debt?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  bank_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Fee']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fee']>>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['Files']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  payment_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_provider_history?: Resolver<Maybe<ResolversTypes['PaymentProviderHistory']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payment_urgency?: Resolver<Maybe<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  respondent_fee?: Resolver<Maybe<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  sender_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_bank_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_bank_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  sender_bank_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_bank_swift?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  sender_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender_zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  system_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transfer_type?: Resolver<Maybe<ResolversTypes['TypeOfTransfer']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferIncomingHistory'] = ResolversParentTypes['TransferIncomingHistory']> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingHistoryPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferIncomingHistoryPaginator'] = ResolversParentTypes['TransferIncomingHistoryPaginator']> = {
  data?: Resolver<Array<ResolversTypes['TransferIncomingHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferIncomingPaginator'] = ResolversParentTypes['TransferIncomingPaginator']> = {
  data?: Resolver<Array<ResolversTypes['TransferIncoming']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferIncomingStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferIncomingStatistic'] = ResolversParentTypes['TransferIncomingStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferOutgoing'] = ResolversParentTypes['TransferOutgoing']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  amount_debt?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  bank_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currencies']>, ParentType, ContextType>;
  execution_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Fee']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fee']>>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['Files']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_bank?: Resolver<Maybe<ResolversTypes['PaymentBank']>, ParentType, ContextType>;
  payment_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_operation_type?: Resolver<Maybe<ResolversTypes['OperationType']>, ParentType, ContextType>;
  payment_provider?: Resolver<Maybe<ResolversTypes['PaymentProvider']>, ParentType, ContextType>;
  payment_provider_history?: Resolver<Maybe<ResolversTypes['PaymentProviderHistory']>, ParentType, ContextType>;
  payment_system?: Resolver<Maybe<ResolversTypes['PaymentSystem']>, ParentType, ContextType>;
  payment_urgency?: Resolver<Maybe<ResolversTypes['PaymentUrgency']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_bank_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_bank_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  recipient_bank_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_bank_swift?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipient_city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  recipient_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipient_zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requested_by?: Resolver<Maybe<ResolversTypes['Clientable']>, ParentType, ContextType>;
  respondent_fee?: Resolver<Maybe<ResolversTypes['RespondentFee']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  system_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transfer_type?: Resolver<Maybe<ResolversTypes['TypeOfTransfer']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  user_type?: Resolver<Maybe<ResolversTypes['UserType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferOutgoingHistory'] = ResolversParentTypes['TransferOutgoingHistory']> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTimeUtc']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingHistoryPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferOutgoingHistoryPaginator'] = ResolversParentTypes['TransferOutgoingHistoryPaginator']> = {
  data?: Resolver<Array<ResolversTypes['TransferOutgoingHistory']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferOutgoingPaginator'] = ResolversParentTypes['TransferOutgoingPaginator']> = {
  data?: Resolver<Array<ResolversTypes['TransferOutgoing']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferOutgoingStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferOutgoingStatistic'] = ResolversParentTypes['TransferOutgoingStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwoFactorAuthSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwoFactorAuthSettings'] = ResolversParentTypes['TwoFactorAuthSettings']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwoFactorAuthSettingsPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwoFactorAuthSettingsPaginator'] = ResolversParentTypes['TwoFactorAuthSettingsPaginator']> = {
  data?: Resolver<Array<ResolversTypes['TwoFactorAuthSettings']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwoFactorAuthTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwoFactorAuthToken'] = ResolversParentTypes['TwoFactorAuthToken']> = {
  auth_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  two_factor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfIndustryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypeOfIndustry'] = ResolversParentTypes['TypeOfIndustry']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfTransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypeOfTransfer'] = ResolversParentTypes['TypeOfTransfer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EMAIL']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['GroupRole']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPaginatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPaginator'] = ResolversParentTypes['UsersPaginator']> = {
  data?: Resolver<Array<ResolversTypes['Users']>, ParentType, ContextType>;
  paginatorInfo?: Resolver<ResolversTypes['PaginatorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardAccountsStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['dashboardAccountsStatistic'] = ResolversParentTypes['dashboardAccountsStatistic']> = {
  account_state_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account_state_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payment_provider_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payment_provider_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardTicketsStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['dashboardTicketsStatistic'] = ResolversParentTypes['dashboardTicketsStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardTransfersStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['dashboardTransfersStatistic'] = ResolversParentTypes['dashboardTransfersStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfer_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardUsersStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['dashboardUsersStatistic'] = ResolversParentTypes['dashboardUsersStatistic']> = {
  applicant_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['userAuthResponse'] = ResolversParentTypes['userAuthResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['Users']>, ParentType, ContextType>;
  permissions?: Resolver<ResolversTypes['PermissionAuth'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountClient?: AccountClientResolvers<ContextType>;
  AccountGenerateIbanResponse?: AccountGenerateIbanResponseResolvers<ContextType>;
  AccountLimit?: AccountLimitResolvers<ContextType>;
  AccountLimitPaginator?: AccountLimitPaginatorResolvers<ContextType>;
  AccountPaginator?: AccountPaginatorResolvers<ContextType>;
  AccountReachedLimit?: AccountReachedLimitResolvers<ContextType>;
  AccountReachedLimitPaginator?: AccountReachedLimitPaginatorResolvers<ContextType>;
  AccountState?: AccountStateResolvers<ContextType>;
  AccountStatement?: AccountStatementResolvers<ContextType>;
  AccountStatementTransaction?: AccountStatementTransactionResolvers<ContextType>;
  ActiveSession?: ActiveSessionResolvers<ContextType>;
  ActiveSessionMutatorResponse?: ActiveSessionMutatorResponseResolvers<ContextType>;
  ActiveSessions?: ActiveSessionsResolvers<ContextType>;
  ActivityLog?: ActivityLogResolvers<ContextType>;
  ActivityLogs?: ActivityLogsResolvers<ContextType>;
  ApplicantAccount?: ApplicantAccountResolvers<ContextType>;
  ApplicantBankingAccess?: ApplicantBankingAccessResolvers<ContextType>;
  ApplicantBankingAccesses?: ApplicantBankingAccessesResolvers<ContextType>;
  ApplicantCompany?: ApplicantCompanyResolvers<ContextType>;
  ApplicantCompanyBusinessType?: ApplicantCompanyBusinessTypeResolvers<ContextType>;
  ApplicantCompanyBusinessTypePaginator?: ApplicantCompanyBusinessTypePaginatorResolvers<ContextType>;
  ApplicantCompanyLabel?: ApplicantCompanyLabelResolvers<ContextType>;
  ApplicantCompanyLabelPaginator?: ApplicantCompanyLabelPaginatorResolvers<ContextType>;
  ApplicantCompanyModules?: ApplicantCompanyModulesResolvers<ContextType>;
  ApplicantCompanyNotes?: ApplicantCompanyNotesResolvers<ContextType>;
  ApplicantCompanyNotesPaginator?: ApplicantCompanyNotesPaginatorResolvers<ContextType>;
  ApplicantCompanyPaginator?: ApplicantCompanyPaginatorResolvers<ContextType>;
  ApplicantCompanyRiskLevelHistory?: ApplicantCompanyRiskLevelHistoryResolvers<ContextType>;
  ApplicantCompanyRiskLevelHistoryPaginator?: ApplicantCompanyRiskLevelHistoryPaginatorResolvers<ContextType>;
  ApplicantDetailsRequisites?: ApplicantDetailsRequisitesResolvers<ContextType>;
  ApplicantDevice?: ApplicantDeviceResolvers<ContextType>;
  ApplicantDocument?: ApplicantDocumentResolvers<ContextType>;
  ApplicantDocumentInternalNote?: ApplicantDocumentInternalNoteResolvers<ContextType>;
  ApplicantDocumentInternalNotePaginator?: ApplicantDocumentInternalNotePaginatorResolvers<ContextType>;
  ApplicantDocumentPaginator?: ApplicantDocumentPaginatorResolvers<ContextType>;
  ApplicantDocumentRejectDetail?: ApplicantDocumentRejectDetailResolvers<ContextType>;
  ApplicantDocumentTag?: ApplicantDocumentTagResolvers<ContextType>;
  ApplicantDocumentTagCategory?: ApplicantDocumentTagCategoryResolvers<ContextType>;
  ApplicantDocumentTagCategoryPaginator?: ApplicantDocumentTagCategoryPaginatorResolvers<ContextType>;
  ApplicantDocumentTagPaginator?: ApplicantDocumentTagPaginatorResolvers<ContextType>;
  ApplicantIndividual?: ApplicantIndividualResolvers<ContextType>;
  ApplicantIndividualCompany?: ApplicantIndividualCompanyResolvers<ContextType>;
  ApplicantIndividualCompanyPosition?: ApplicantIndividualCompanyPositionResolvers<ContextType>;
  ApplicantIndividualCompanyPositionPaginator?: ApplicantIndividualCompanyPositionPaginatorResolvers<ContextType>;
  ApplicantIndividualCompanyRelation?: ApplicantIndividualCompanyRelationResolvers<ContextType>;
  ApplicantIndividualCompanyRelationPaginator?: ApplicantIndividualCompanyRelationPaginatorResolvers<ContextType>;
  ApplicantIndividualLabel?: ApplicantIndividualLabelResolvers<ContextType>;
  ApplicantIndividualLabelPaginator?: ApplicantIndividualLabelPaginatorResolvers<ContextType>;
  ApplicantIndividualModules?: ApplicantIndividualModulesResolvers<ContextType>;
  ApplicantIndividualNotes?: ApplicantIndividualNotesResolvers<ContextType>;
  ApplicantIndividualNotesPaginator?: ApplicantIndividualNotesPaginatorResolvers<ContextType>;
  ApplicantIndividualPaginator?: ApplicantIndividualPaginatorResolvers<ContextType>;
  ApplicantKycLevel?: ApplicantKycLevelResolvers<ContextType>;
  ApplicantKycLevelPaginator?: ApplicantKycLevelPaginatorResolvers<ContextType>;
  ApplicantLinkedCompany?: ApplicantLinkedCompanyResolvers<ContextType>;
  ApplicantModules?: ApplicantModulesResolvers<ContextType>;
  ApplicantModulesPaginator?: ApplicantModulesPaginatorResolvers<ContextType>;
  ApplicantProfile?: ApplicantProfileResolvers<ContextType>;
  ApplicantRequisites?: ApplicantRequisitesResolvers<ContextType>;
  ApplicantRiskLevel?: ApplicantRiskLevelResolvers<ContextType>;
  ApplicantRiskLevelHistory?: ApplicantRiskLevelHistoryResolvers<ContextType>;
  ApplicantRiskLevelHistoryPaginator?: ApplicantRiskLevelHistoryPaginatorResolvers<ContextType>;
  ApplicantRiskLevelPaginator?: ApplicantRiskLevelPaginatorResolvers<ContextType>;
  ApplicantSettingsProfile?: ApplicantSettingsProfileResolvers<ContextType>;
  ApplicantState?: ApplicantStateResolvers<ContextType>;
  ApplicantStatePaginator?: ApplicantStatePaginatorResolvers<ContextType>;
  ApplicantStateReason?: ApplicantStateReasonResolvers<ContextType>;
  ApplicantStateReasonPaginator?: ApplicantStateReasonPaginatorResolvers<ContextType>;
  ApplicantStatus?: ApplicantStatusResolvers<ContextType>;
  ApplicantStatusPaginator?: ApplicantStatusPaginatorResolvers<ContextType>;
  ApplicantVerificationStatus?: ApplicantVerificationStatusResolvers<ContextType>;
  AuthenticationLog?: AuthenticationLogResolvers<ContextType>;
  AuthenticationLogs?: AuthenticationLogsResolvers<ContextType>;
  BankCorrespondent?: BankCorrespondentResolvers<ContextType>;
  BankCorrespondentPaginator?: BankCorrespondentPaginatorResolvers<ContextType>;
  BusinessActivity?: BusinessActivityResolvers<ContextType>;
  BusinessActivityPaginator?: BusinessActivityPaginatorResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientAccountsDetails?: ClientAccountsDetailsResolvers<ContextType>;
  ClientIpAddress?: ClientIpAddressResolvers<ContextType>;
  Clientable?: ClientableResolvers<ContextType>;
  CommissionPriceList?: CommissionPriceListResolvers<ContextType>;
  CommissionPriceListPaginator?: CommissionPriceListPaginatorResolvers<ContextType>;
  CommissionTemplate?: CommissionTemplateResolvers<ContextType>;
  CommissionTemplateLimit?: CommissionTemplateLimitResolvers<ContextType>;
  CommissionTemplateLimitActionType?: CommissionTemplateLimitActionTypeResolvers<ContextType>;
  CommissionTemplateLimitActionTypePaginator?: CommissionTemplateLimitActionTypePaginatorResolvers<ContextType>;
  CommissionTemplateLimitPaginator?: CommissionTemplateLimitPaginatorResolvers<ContextType>;
  CommissionTemplateLimitPeriod?: CommissionTemplateLimitPeriodResolvers<ContextType>;
  CommissionTemplateLimitPeriodPaginator?: CommissionTemplateLimitPeriodPaginatorResolvers<ContextType>;
  CommissionTemplateLimitTransferDirection?: CommissionTemplateLimitTransferDirectionResolvers<ContextType>;
  CommissionTemplateLimitTransferDirectionPaginator?: CommissionTemplateLimitTransferDirectionPaginatorResolvers<ContextType>;
  CommissionTemplateLimitType?: CommissionTemplateLimitTypeResolvers<ContextType>;
  CommissionTemplateLimitTypePaginator?: CommissionTemplateLimitTypePaginatorResolvers<ContextType>;
  CommissionTemplatePaginator?: CommissionTemplatePaginatorResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyModule?: CompanyModuleResolvers<ContextType>;
  CompanyModuleIbanProvider?: CompanyModuleIbanProviderResolvers<ContextType>;
  CompanyModuleIbanProviderPassword?: CompanyModuleIbanProviderPasswordResolvers<ContextType>;
  CompanyModulePaymentProvider?: CompanyModulePaymentProviderResolvers<ContextType>;
  CompanyModulePaymentProviderPassword?: CompanyModulePaymentProviderPasswordResolvers<ContextType>;
  CompanyPaginator?: CompanyPaginatorResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CountryPaginator?: CountryPaginatorResolvers<ContextType>;
  Currencies?: CurrenciesResolvers<ContextType>;
  CurrenciesPaginator?: CurrenciesPaginatorResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateEnd?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DateTimeUtc?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  DepartmentPaginator?: DepartmentPaginatorResolvers<ContextType>;
  DepartmentPosition?: DepartmentPositionResolvers<ContextType>;
  DepartmentPositionPaginator?: DepartmentPositionPaginatorResolvers<ContextType>;
  DocumentState?: DocumentStateResolvers<ContextType>;
  DocumentType?: DocumentTypeResolvers<ContextType>;
  EMAIL?: GraphQLScalarType;
  EmailNotification?: EmailNotificationResolvers<ContextType>;
  EmailNotificationPaginator?: EmailNotificationPaginatorResolvers<ContextType>;
  EmailSmtp?: EmailSmtpResolvers<ContextType>;
  EmailTemplate?: EmailTemplateResolvers<ContextType>;
  EmailTemplateLayout?: EmailTemplateLayoutResolvers<ContextType>;
  EmailTemplateOnCompanyResponse?: EmailTemplateOnCompanyResponseResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  Fee?: FeeResolvers<ContextType>;
  FeeItem?: FeeItemResolvers<ContextType>;
  FeeMode?: FeeModeResolvers<ContextType>;
  FeePeriod?: FeePeriodResolvers<ContextType>;
  FeeType?: FeeTypeResolvers<ContextType>;
  Files?: FilesResolvers<ContextType>;
  FilesPaginator?: FilesPaginatorResolvers<ContextType>;
  GroupRole?: GroupRoleResolvers<ContextType>;
  GroupRolePaginator?: GroupRolePaginatorResolvers<ContextType>;
  GroupRoleProvider?: GroupRoleProviderResolvers<ContextType>;
  GroupRoleView?: GroupRoleViewResolvers<ContextType>;
  GroupRoleViewPaginator?: GroupRoleViewPaginatorResolvers<ContextType>;
  GroupType?: GroupTypeResolvers<ContextType>;
  GroupTypePaginator?: GroupTypePaginatorResolvers<ContextType>;
  Groups?: GroupsResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KycTimeline?: KycTimelineResolvers<ContextType>;
  KycTimelines?: KycTimelinesResolvers<ContextType>;
  Languages?: LanguagesResolvers<ContextType>;
  LanguagesPaginator?: LanguagesPaginatorResolvers<ContextType>;
  MemberAccessLimitation?: MemberAccessLimitationResolvers<ContextType>;
  MemberAccessLimitationPaginator?: MemberAccessLimitationPaginatorResolvers<ContextType>;
  MemberProfile?: MemberProfileResolvers<ContextType>;
  MemberStatus?: MemberStatusResolvers<ContextType>;
  Members?: MembersResolvers<ContextType>;
  MembersPaginator?: MembersPaginatorResolvers<ContextType>;
  Mixed?: GraphQLScalarType;
  Module?: ModuleResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OperationType?: OperationTypeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginatorInfo?: PaginatorInfoResolvers<ContextType>;
  PaymentBank?: PaymentBankResolvers<ContextType>;
  PaymentBankPaginator?: PaymentBankPaginatorResolvers<ContextType>;
  PaymentProvider?: PaymentProviderResolvers<ContextType>;
  PaymentProviderHistory?: PaymentProviderHistoryResolvers<ContextType>;
  PaymentProviderIban?: PaymentProviderIbanResolvers<ContextType>;
  PaymentProviderIbanPaginator?: PaymentProviderIbanPaginatorResolvers<ContextType>;
  PaymentProviderPaginator?: PaymentProviderPaginatorResolvers<ContextType>;
  PaymentStatus?: PaymentStatusResolvers<ContextType>;
  PaymentSystem?: PaymentSystemResolvers<ContextType>;
  PaymentSystemPaginator?: PaymentSystemPaginatorResolvers<ContextType>;
  PaymentUrgency?: PaymentUrgencyResolvers<ContextType>;
  Payments?: PaymentsResolvers<ContextType>;
  PaymentsPaginator?: PaymentsPaginatorResolvers<ContextType>;
  PermissionAuth?: PermissionAuthResolvers<ContextType>;
  PermissionCategory?: PermissionCategoryResolvers<ContextType>;
  PermissionCategoryRole?: PermissionCategoryRoleResolvers<ContextType>;
  PermissionList?: PermissionListResolvers<ContextType>;
  PermissionType?: PermissionTypeResolvers<ContextType>;
  Permissions?: PermissionsResolvers<ContextType>;
  PriceListFee?: PriceListFeeResolvers<ContextType>;
  PriceListFeeCurrency?: PriceListFeeCurrencyResolvers<ContextType>;
  PriceListFeeScheduled?: PriceListFeeScheduledResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectApiSetting?: ProjectApiSettingResolvers<ContextType>;
  ProjectApiSettingPassword?: ProjectApiSettingPasswordResolvers<ContextType>;
  ProjectPaginator?: ProjectPaginatorResolvers<ContextType>;
  ProjectSettings?: ProjectSettingsResolvers<ContextType>;
  ProviderType?: ProviderTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RawFile?: RawFileResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  RegionPaginator?: RegionPaginatorResolvers<ContextType>;
  Requisite?: RequisiteResolvers<ContextType>;
  RespondentFee?: RespondentFeeResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RolePaginator?: RolePaginatorResolvers<ContextType>;
  Sender?: SenderResolvers<ContextType>;
  SimplePaginatorInfo?: SimplePaginatorInfoResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
  StateReason?: StateReasonResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  StringInteger?: GraphQLScalarType;
  Ticket?: TicketResolvers<ContextType>;
  TicketComments?: TicketCommentsResolvers<ContextType>;
  TicketPaginator?: TicketPaginatorResolvers<ContextType>;
  TicketStatus?: TicketStatusResolvers<ContextType>;
  TransferIncoming?: TransferIncomingResolvers<ContextType>;
  TransferIncomingHistory?: TransferIncomingHistoryResolvers<ContextType>;
  TransferIncomingHistoryPaginator?: TransferIncomingHistoryPaginatorResolvers<ContextType>;
  TransferIncomingPaginator?: TransferIncomingPaginatorResolvers<ContextType>;
  TransferIncomingStatistic?: TransferIncomingStatisticResolvers<ContextType>;
  TransferOutgoing?: TransferOutgoingResolvers<ContextType>;
  TransferOutgoingHistory?: TransferOutgoingHistoryResolvers<ContextType>;
  TransferOutgoingHistoryPaginator?: TransferOutgoingHistoryPaginatorResolvers<ContextType>;
  TransferOutgoingPaginator?: TransferOutgoingPaginatorResolvers<ContextType>;
  TransferOutgoingStatistic?: TransferOutgoingStatisticResolvers<ContextType>;
  TwoFactorAuthSettings?: TwoFactorAuthSettingsResolvers<ContextType>;
  TwoFactorAuthSettingsPaginator?: TwoFactorAuthSettingsPaginatorResolvers<ContextType>;
  TwoFactorAuthToken?: TwoFactorAuthTokenResolvers<ContextType>;
  TypeOfIndustry?: TypeOfIndustryResolvers<ContextType>;
  TypeOfTransfer?: TypeOfTransferResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  UsersPaginator?: UsersPaginatorResolvers<ContextType>;
  dashboardAccountsStatistic?: DashboardAccountsStatisticResolvers<ContextType>;
  dashboardTicketsStatistic?: DashboardTicketsStatisticResolvers<ContextType>;
  dashboardTransfersStatistic?: DashboardTransfersStatisticResolvers<ContextType>;
  dashboardUsersStatistic?: DashboardUsersStatisticResolvers<ContextType>;
  userAuthResponse?: UserAuthResponseResolvers<ContextType>;
};

