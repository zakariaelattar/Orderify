/**
 * Converting a blob comming from database to string UTF-8
 * @param {*} blob 
 */

exports.convertBlobToString = (blob) => {
return blob.toString("utf-8");
}