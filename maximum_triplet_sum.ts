export function maxTriSum(nums: number[]): number  {
  return nums.sort((a,z) => z - a).splice(0,3).reduce((acc,c) => acc + c, 0);
}
