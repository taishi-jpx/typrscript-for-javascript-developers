export {};

// Record<K, T> ※２つの型引数を扱う
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_caes: number;
};

// Recordを使うと一個一個アノテーションしなくてよい
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_caes: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_caes: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_caes: 2 },
  Shiga: { kanji_name:'滋賀', confirmed_caes: 13}
};