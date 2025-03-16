export interface ILoan {
    applicantID: number
    fullName: string
    applicationStatus: string
    panCard: string
    dateOfBirth: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    annualIncome: number
    employmentStatus: string
    creditScore: number
    assets: string
    dateApplied: string
    Loans: any[]
    customerId: number
  }

  export interface IApiResponse {
    message: string
    result: boolean
    data: any
  }

  export interface IApplicationList {
    applicantID: number
    dateApplied: string
    applicationStatus: string
    fullName: string
    email: string
    employmentStatus: string
    customerPhone: string
    panCard: string
  }

  export interface IAppUser {
    userId: number
    userName: string
    emailId: string
    fullName: string
    role: string
    createdDate: string
    password: string
    projectName: string
    refreshToken: any
    refreshTokenExpiryTime: any
  }