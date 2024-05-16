function isPalindrome (str: string): boolean {
  let right  = str.length - 1
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[right]) {
      return false
    }
    right--
  }
  return true
}
