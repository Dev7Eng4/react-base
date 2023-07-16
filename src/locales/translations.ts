import en from './en';

export const translations: typeof en = {} as any;

export const convertLanguageJsonToObject = (
  json: any,
  objToConvertTo = translations,
  current?: string,
) => {
  Object.keys(json).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof json[key] === 'object') {
      (objToConvertTo as any)[key] = {};
      convertLanguageJsonToObject(json[key], (objToConvertTo as any)[key], currentLookupKey);
    } else {
      (objToConvertTo as any)[key] = currentLookupKey;
    }
  });
};
