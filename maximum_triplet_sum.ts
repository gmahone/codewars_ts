export function maxTriSum(nums: number[]): number  {
  return nums.filter((e,i,arr) => arr.indexOf(e) === i).sort((a,z) => z - a).splice(0,3).reduce((acc,c) => acc + c, 0);
}
