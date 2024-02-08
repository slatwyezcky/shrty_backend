export function checkURL(url) {
  if (!url) return false;
  const regexp = new RegExp(
    // prettier-ignore
    /((https:\/\/)|(http:\/\/))?(www\.)?([a-zA-Z0-9_]{1,}\.){1,2}[a-zA-Z]{1,}(\/[a-zA-Z0-9#$%&_?=]{1,})*(\.[a-zA-Z]{1,})?([a-zA-Z0-9#$%&_?=]{1,})*/
  );
  return regexp.test(url);
}

export function checkAlias(alias) {
  if (!alias) return true;
  const regexp = new RegExp(/[a-zA-Z0-9]*$/);
  return regexp.test(alias);
}
