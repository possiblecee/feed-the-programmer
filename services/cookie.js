import md5 from 'md5';

const parseCookie = (str) => {
  try {
    return { success: true, ...JSON.parse(str) };
  } catch(e) {
    return { success: false }
  }
}

export const validateCookie = (str) => {
  const {
    validator,
    id,
    value,
    success,
    ...rest,
  } = parseCookie(str);

  if (success) {

    const isValid = validator === md5(`POSSIBLE_${id}_${value}`);

    return {
      success: isValid,
      id,
      value,
      ...rest,
    };
  }
  return { success };
}
