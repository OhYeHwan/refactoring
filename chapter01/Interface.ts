export interface Play {
  name: string;
  type: string;
}

export interface Iplays {
  hamlet: Play;
  "as-like": Play;
  othello: Play;
}

export interface Invoice {
  playID: string;
  audience: number;
  amount?: number;
  play?: Play;
  volumeCredits?: number;
}

export interface Iinvoices {
  customer: string;
  performances: Invoice[];
  totalAmount?: number;
  totalVolumeCredits?: number;
}
