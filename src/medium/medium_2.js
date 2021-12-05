import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 */
export function avgMpg(mpg_data){
    let x;
    let y;
    let i;
    let hw=0;
    let city=0;
    for(i=0; i<mpg_data.length; i++){
        x = mpg_data[i].city_mpg;
        y = mpg_data[i].highway_mpg;
        hw = hw + y;
        city = city + x;
    }
    return{
        city: city/mpg_data.length,
        highway: hw/mpg_data.length,
       }
} 
 /**
 *  @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 */
export function allYearStats(mpg_data){
    let i;
    let j = [];
    for(i=0; i<mpg_data.length; i++){
        
        j.push(mpg_data[i].year);
    }
    return getStatistics(j);
}
/**
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export function ratioHybrids(mpg_data){
    let i;
    let j = [];
    for(i=0; i<mpg_data.length; i++){
        j.push(mpg_data[i].hybrid);
    }
    let t=0;
    let f=0;
    for(i=0; i<j.length; i++){
        if(j[i]==true){
            t++;
        } else{
            f++;
        }
    }
    return (t/(t+f));
}

export const allCarStats = {
    test: mpg_data[0].city_mpg,
    avgMpg: avgMpg(mpg_data),
    allYearStats: allYearStats(mpg_data),
    ratioHybrids: ratioHybrids(mpg_data),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

export function makerHybrids(mpg){

}

export function avgMpgByYearAndHybrid(){

}
export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};
