/**
 * 
 * 此文件已废弃,
 * 因为官方不建议使用 $* 字符串 代替 运算符
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
    $and: Op.and,               // [Op.and]: [{a: 5}, {b: 6}]  (a = 5) AND (b = 6)
    $or: Op.or,                 // [Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
    $gt: Op.gt,                 // >
    $gte: Op.gte,               // >=
    $lt: Op.lt,                 // <
    $lte: Op.lte,               // <=
    $ne: Op.ne,                 // !=
    $eq: Op.eq,                 // =
    $is: Op.is,                 // IS
    $not: Op.not,               // IS NOT [value]
    $between: Op.between,       // [Op.between]: [6, 10,     // BETWEEN 6 AND 10
    $notBetween: Op.notBetween, // [Op.notBetween]: [11, 15, // NOT BETWEEN 11 AND 15
    $in: Op.in,                 // in [1,2]
    $notIn: Op.notIn,           // not in [1,2,3]
    $like: Op.like,             // [Op.like]: '%hat',         // LIKE '%hat'
    $notLike: Op.notLike,       // [Op.notLike]: '%hat'       // NOT LIKE '%hat'
    $startsWith: Op.startsWith,  // [Op.startsWith]: 'hat'     // LIKE 'hat%'
    $endsWith: Op.endsWith,     // [Op.endsWith]: 'hat'       // LIKE '%hat'
    $substring: Op.substring,   // [Op.substring]: 'hat'      // LIKE '%hat%'
    $all: Op.all,
    $values: Op.values,
    //   $regexp: Op.regexp,               // [Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
    //   $notRegexp: Op.notRegexp,         // [Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
    $col: Op.col,                     // [Op.col]: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example
    $adjacent: Op.adjacent,           // [Op.adjacent]: [1, 2]      // -|- [1, 2) (PG range is adjacent to operator)
    $strictLeft: Op.strictLeft,       // [Op.strictLeft]: [1, 2]    // << [1, 2) (PG range strictly left of operator)
    $strictRight: Op.strictRight,     // [Op.strictRight]: [1, 2]   // >> [1, 2) (PG range strictly right of operator)
    $noExtendRight: Op.noExtendRight, // [Op.noExtendRight]: [1, 2] // &< [1, 2) (PG range does not extend to the right of operator)
    $noExtendLeft: Op.noExtendLeft,   // [Op.noExtendLeft]: [1, 2]  // &> [1, 2) (PG range does not extend to the left of operator)
    $overlap: Op.overlap,             // [Op.overlap]: [1, 2]       // && [1, 2] (PG array overlap operator)
    $contains: Op.contains,           // [Op.contains]: [1, 2]      // @> [1, 2] (PG array contains operator)
    $contained: Op.contained,         // [Op.contained]: [1, 2]     // <@ [1, 2] (PG array contained by operator)
    //   $iLike: Op.iLike,                 // [Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
    //   $notILike: Op.notILike,           // [Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
    //   $iRegexp: Op.iRegexp,             // [Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
    //   $notIRegexp: Op.notIRegexp,       // [Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
    //   $any: Op.any,                     // [Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)
};
const operaType = [
    Op.and,
    Op.or,
    Op.gt,
    Op.gte,
    Op.lt,
    Op.lte,
    Op.ne,
    Op.eq,
    Op.is,
    Op.not,
    Op.between,
    Op.notBetween,
    Op.in,
    Op.notIn,
    Op.like,
    Op.notLike,
    Op.iLike,
    Op.notILike,
    Op.startsWith,
    Op.endsWith,
    Op.substring,
    Op.regexp,
    Op.notRegexp,
    Op.iRegexp,
    Op.notIRegexp,
    Op.overlap,
    Op.contains,
    Op.contained,
    Op.any,
    Op.col,
    Op.all,
    Op.values
]
module.exports = operaType;
