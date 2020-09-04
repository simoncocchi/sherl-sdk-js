export interface IClaimResponse {
  /// ????
  id: 'string';
  personId: 'string';
  orderId: 'string';
  issueTitle: 'string';
  issueMessage: 'string';
  schedules: {
    allowedFromDate: 'Date';
    allowedUntilDate: 'Date';
  };
}

export interface IClaimParameter {
  personId: 'string';
  issueTitle: 'string';
  issueMessage: 'string';
  schedules: {
    allowedFromDate: 'Date';
    allowedUntilDate: 'Date';
  };
}

export interface IClaimReplyParameter {
  content: 'string';
}
