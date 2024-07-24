export interface DataTablesResponse {
    success: boolean;
    users: IOwnerModel[];
    pageSize: number;
    currentPage: number;
    total: number;
  }

  export interface IDeleteReason {
    reason: string | null;
    remark: string | null;
  }  

  export interface IOwnerModel {
    deleteReason: IDeleteReason;
    _id: string;
    email: string;
    displayName: string;
    avatarUrl: string;
    active: boolean;
    suspended: boolean;
    suspendRequest: string | null;
    createdAt: string;
    updatedAt: string;
  }