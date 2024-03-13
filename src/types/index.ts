export interface Hero {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  id: string;
}
type DetailScreenParams = {
  item: Hero;
};

export type RootStackParamList = {
  Detail: DetailScreenParams;
  Home: undefined;
};
