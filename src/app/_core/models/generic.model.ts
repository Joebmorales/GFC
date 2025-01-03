export interface IGenericList {
  image?: string;
  title: string;
  description: string;
}

export interface IOptionList {
  title: string;
  value: string;
}

export interface ICard {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
}

export interface IStat {
  startValue: number;
  endValue: number;
  prefix?: string;
  suffix?: string;
  title?: string;
  description?: string;
}
