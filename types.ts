
export enum Role {
  OwnerPartner = 'Inhaber:in / Partner:in',
  TaxAdvisorTeamLead = 'Steuerberater:in / Teamleiter:in',
  TaxClerk = 'Steuerfachangestellte:r',
  Other = 'Andere',
}

export enum EmployeeCount {
  Size1To4 = '1-4',
  Size5To9 = '5-9',
  Size10To24 = '10-24',
  Size25Plus = '25+',
}

export enum ClientCount {
    Count1To25 = '1-25',
    Count26To50 = '26-50',
    Count51To100 = '51-100',
    Count100Plus = '100+',
}

export interface FormData {
  firmName: string;
  role: Role | '';
  employeeCount: EmployeeCount | '';
  clientCount: ClientCount | '';
  email: string;
  phone?: string;
  challenge: string;
}
