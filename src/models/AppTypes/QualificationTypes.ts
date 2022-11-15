export type QualificationType = {
  id: number;
  title: string;
  required: boolean;
  template: string;
};

export interface IDataType {
  key: string;
  qualifiaction: string;
  requirements: string;
}
